import React from "react";
import { shopGridCards } from "../assets/assets";

export default function ShopGrid() {
  const largeCard = shopGridCards.find((card) => card.type === "large");
  const smallCards = shopGridCards
    .filter((card) => card.type === "small")
    .slice(0, 4);

  if (!largeCard) return null;

  return (
    // 🔥 FULL-BLEED SECTION (ignores parent container width)
    <section
      className="
        relative w-screen left-1/2 right-1/2
        ml-[-50vw] mr-[-50vw]
        pt-12 pb-2 bg-white
      "
    >
      {/* inner padding: very small gap from window edges */}
      <div className="w-full px-3 sm:px-4 lg:px-6">

        {/* Header with Horizontal Lines */}
        <div className="flex items-center justify-between mb-8">
          <div className="h-[2px] bg-gray-800 flex-grow"></div>
          <h2 className="mx-6 text-2xl sm:text-3xl font-bold tracking-widest text-gray-900 uppercase">
            SHOP
          </h2>
          <div className="h-[2px] bg-gray-800 flex-grow"></div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">

          {/* ⭐ LARGE CARD */}
          <div
            className="
              relative overflow-hidden rounded-xl p-8
              flex flex-col justify-center
              sm:col-span-2 lg:col-span-2 lg:row-span-2
              bg-gradient-to-b from-[#f7fee7] to-white
              shadow-sm min-h-72 sm:min-h-[22rem]
            "
          >
            <div className="relative z-20 p-4 sm:p-6 lg:p-10">
              <h3 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-900 leading-[1.1] mb-4">
                {largeCard.title}
              </h3>
              <p className="text-gray-600 text-base sm:text-lg max-w-md font-medium leading-relaxed mb-8">
                {largeCard.subtitle}
              </p>
              <button className="bg-[#1a1a1a] text-white px-8 py-3 rounded-md text-sm font-bold tracking-wide hover:bg-black transition transform active:scale-95">
                SHOP NOW
              </button>
            </div>

            <img
              src={largeCard.image}
              alt={largeCard.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* ⭐ SMALL CARDS */}
          {smallCards.map((card, index) => {
            // Index 0 (Drones) & 3 (Sensors) -> Blue
            // Index 1 (Printers) & 2 (Wireless) -> Gray
            const isBlue = index === 0 || index === 3;
            const bgClass = isBlue ? "bg-[#dbeafe]" : "bg-[#e5e7eb]"; // slightly darker gray for contrast

            return (
              <SmallCard
                key={card.id}
                title={card.title}
                subtitle={card.subtitle}
                img={card.image}
                bgClass={bgClass}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SmallCard({ title, subtitle, img, bgClass }) {
  return (
    <div
      className={`
        ${bgClass}
        relative group overflow-hidden rounded-xl
        p-6 min-h-56 sm:min-h-64
        flex flex-col
        cursor-pointer
        transition-all duration-300 hover:shadow-md
      `}
    >
      <div className="relative z-20">
        <h4 className="text-2xl font-bold text-gray-900 mb-1">
          {title}
        </h4>
        <p className="text-lg font-medium text-gray-600">
          {subtitle}
        </p>
      </div>

      <img
        src={img}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        alt={title}
      />
    </div>
  );
}
