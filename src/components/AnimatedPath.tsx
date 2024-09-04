import { motion, SVGMotionProps, type Variants } from "framer-motion";

import Color from "../models/color";

type AnimatedPathProps = {
  strokeColor: Color;
  strokeWidth?: number;
} & SVGMotionProps<SVGPathElement>;

export default function AnimatedPath({
  strokeColor,
  strokeWidth = 1,
  ...props
}: AnimatedPathProps) {
  const color = `rgba(${strokeColor.r}, ${strokeColor.g}, ${strokeColor.b},`;

  const variants: Variants = {
    hidden: {
      pathLength: 0,
      fill: `${color} 0)`,
    },
    visible: {
      pathLength: 1,
      fill: `${color} 1)`,
    },
  };

  return (
    <motion.path
      variants={variants}
      initial="hidden"
      animate="visible"
      stroke={`${color} 1)`}
      strokeWidth={strokeWidth}
      transition={{
        repeat: Infinity,
        repeatDelay: 0.5,
        repeatType: "mirror",
        duration: 2,
        ease: "easeInOut",
      }}
      {...props}
    />
  );
}
