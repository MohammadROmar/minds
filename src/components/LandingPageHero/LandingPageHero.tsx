import { motion } from "framer-motion";

import LazyHashImage from "../LazyHashImage.tsx";
import LandingPageContent from "../LandingPageText/LandingPageText.tsx";

import heroImg from "../../assets/images/hero.png";
import starsImg from "../../assets/images/stars.png";
import { animation, transition } from "../../data/animation.ts";

import "./LandingPageHero.css";

export default function LandingPageHero() {
  return (
    <section className="landing-page__hero">
      <LandingPageContent />

      <motion.img
        {...animation}
        transition={{ ...transition, delay: 0.4 }}
        src={heroImg}
        className="landing-page__hero-image"
      />

      <div className="landing-page__stars-image-wrapper">
        <LazyHashImage
          src={starsImg}
          hash="L20,blyGtTohkEkDjuaxV=V?WAax"
          className="landing-page__stars-image"
        />
      </div>
    </section>
  );
}
