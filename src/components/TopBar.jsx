// src/components/TopBar.jsx
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const messages = [
  "Order above ₹1,999 — Free delivery",
  "Dedicated 24/7 customer support",
  "Secure payments · Easy 30-day returns",
  "Fast order processing — ships within 24 hours",
  "Save more: Up to 30% off on bulk purchases",
];

const TopBar = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const cycle = 3000; // ms per message

  useEffect(() => {
    if (paused) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, cycle);

    return () => clearInterval(id);
  }, [paused]);

  const variants = {
    initial: { y: -18, opacity: 0, filter: "blur(4px)", scale: 0.98 },
    animate: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 0.55,
        ease: [0.22, 0.8, 0.26, 0.9],
      },
    },
    exit: {
      y: 18,
      opacity: 0,
      filter: "blur(4px)",
      scale: 0.98,
      transition: {
        duration: 0.45,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
  };

  return (
    <div className="w-full bg-[#052A6A] text-white text-sm shadow-sm">
      <div className="relative w-full h-10 md:h-12 overflow-hidden">
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="whitespace-nowrap text-xs sm:text-sm md:text-base lg:text-lg text-center px-6 font-medium tracking-wide drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]"
            >
              {messages[index]}
            </motion.span>
          </AnimatePresence>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-70" />
      </div>
    </div>
  );
};

export default TopBar;
