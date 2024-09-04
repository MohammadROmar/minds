import {
  useRef,
  useEffect,
  ElementType,
  type ReactNode,
  ComponentPropsWithoutRef,
} from "react";
import { motion, useInView, useAnimation } from "framer-motion";

type RevealProps<T extends ElementType> = {
  renderAs: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function Reveal<T extends ElementType>({
  renderAs,
  children,
  ...props
}: RevealProps<T>) {
  const MotionComponent = motion(renderAs);

  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, { once: true, margin: "-25%" });
  const animationController = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationController.start("visible");
    }
  }, [isInView]);

  return (
    <MotionComponent
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: "2rem" },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={animationController}
      transition={{ duration: 1 }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
