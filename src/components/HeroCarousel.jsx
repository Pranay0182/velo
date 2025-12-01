import React from 'react'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { heroSlides } from "../assets/assets";

const HeroCarousel = () => {
  const slides = heroSlides;
  const [current, setCurrent] = useState(0);

  if (!slides || slides.length === 0) return null;

  const total = slides.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  // Auto-play
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [total]);

  const active = slides[current];

  return (
    <section className="w-full">
      <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden rounded-2xl bg-gray-900">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-center bg-cover transition-opacity duration-700 ease-in-out"
          style={{ backgroundImage: `url(${active.image})` }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center px-6 md:px-16">
          <div className="max-w-xl text-white space-y-4">
            {active.badge && (
              <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-gray-200">
                {active.badge}
              </p>
            )}

            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              {active.title}
            </h1>

            {active.subtitle && (
              <p className="text-sm md:text-lg text-gray-200">
                {active.subtitle}
              </p>
            )}

            <div className="flex items-center gap-3 pt-2">
              {active.ctaLink && (
                <Link
                  to={active.ctaLink}
                  className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm md:text-base font-medium bg-white text-gray-900 hover:bg-gray-100 transition"
                >
                  {active.ctaText || "Shop Now"}
                </Link>
              )}

              <button
                type="button"
                onClick={nextSlide}
                className="text-xs md:text-sm text-gray-200 underline underline-offset-4 hover:text-white"
              >
                Next →
              </button>
            </div>
          </div>
        </div>

        {/* Prev / Next arrows */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 backdrop-blur px-3 py-2 text-white text-lg hover:bg-black/60"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 backdrop-blur px-3 py-2 text-white text-lg hover:bg-black/60"
        >
          ›
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setCurrent(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === current ? "w-6 bg-white" : "w-2.5 bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
