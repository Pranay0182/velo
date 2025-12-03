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
    initial: { y: 10, opacity: 0, filter: "blur(2px)" },
    animate: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    exit: {
      y: -10,
      opacity: 0,
      filter: "blur(2px)",
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  };

  return (
    <div className="w-full bg-black text-white text-sm shadow-sm relative z-50">
      <div className="relative w-full h-10 md:h-11 overflow-hidden flex items-center justify-center">
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
              className="whitespace-nowrap text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.2em] font-semibold text-center px-4 text-gray-200"
            >
              {messages[index]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Stylish bottom gradient line */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-30" />
      </div>
    </div>
  );
};

export default TopBar;
