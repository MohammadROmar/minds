import { motion } from "framer-motion";

import heroImg from "../../assets/images/hero.png";

import "./LandingPageHero.css";

const transition = { type: "just", duration: 0.5 };
const animation = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition,
};

export default function LandingPageHero() {
  return (
    <section className="landing-page__hero">
      <div className="landing-page__hero-text-wrapper">
        <motion.h1
          {...animation}
          style={{ x: "-0.5rem" }}
          className="landing-page__hero-title"
        >
          MINDS
        </motion.h1>
        <motion.p
          {...animation}
          transition={{ ...transition, delay: 0.2 }}
          className="landing-page__hero-purpose"
        >
          Software Solutions{" </>"}
        </motion.p>
        <motion.p
          {...animation}
          transition={{ ...transition, delay: 0.4 }}
          className="landing-page__hero-details"
        >
          Beleving in the power of technology to effectively spread your
          business message with intelligent software solutions
        </motion.p>
        <motion.button
          {...animation}
          style={{ position: "relative" }}
          transition={{ ...transition, delay: 0.6 }}
          className="landing-page__hero-action"
        >
          Get Started
        </motion.button>
      </div>

      <motion.img
        {...animation}
        transition={{ ...transition, delay: 0.4 }}
        src={heroImg}
        alt="Vector image of brain"
        className="landing-page__hero-image"
      />
    </section>
  );
}
