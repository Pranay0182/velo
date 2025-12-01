// src/components/Hero.jsx
import React from "react";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-6 md:py-10">
        <HeroCarousel />
      </div>
    </section>
  );
};

export default Hero;
