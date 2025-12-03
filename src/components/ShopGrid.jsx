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
        py-12 bg-white
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
              relative overflow-hidden rounded-2xl p-8
              flex flex-col justify-center
              sm:col-span-2 lg:col-span-2 lg:row-span-2
              bg-gradient-to-br from-green-50 to-green-100
              shadow-lg min-h-80 sm:min-h-96
            "
          >
            <div className="relative z-20 p-4 sm:p-8 lg:p-12">
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-6">
                {largeCard.title}
              </h3>
              <p className="text-gray-700 text-lg sm:text-xl max-w-md font-medium leading-relaxed mb-8">
                {largeCard.subtitle}
              </p>
              <button className="bg-black text-white px-8 py-3 rounded-full text-sm font-bold tracking-wide hover:bg-gray-800 transition transform active:scale-95">
                BROWSE NOW
              </button>
            </div>

            <img
              src={largeCard.image}
              alt={largeCard.title}
              className="absolute right-6 bottom-0 w-[45%] md:w-[48%] object-contain translate-y-5 drop-shadow-xl"
            />
          </div>

          {/* ⭐ SMALL CARDS */}
          {smallCards.map((card, index) => {
            const isBlue = index === 0 || index === 3;
            const bgClass = isBlue ? "bg-[#dbeafe]" : "bg-[#f3f4f6]";

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
        relative group overflow-hidden rounded-2xl
        p-4 min-h-64 sm:min-h-72
        flex flex-col justify-between
        cursor-pointer
        transition-all duration-300 hover:shadow-lg
      `}
    >
      <div className="relative z-20">
        <h4 className="text-2xl font-bold text-gray-900 mb-1">
          {title}
        </h4>
        <p className="text-sm font-medium text-gray-600">
          {subtitle}
        </p>
      </div>

      <img
        src={img}
        className="w-28 h-28 object-contain ml-auto translate-y-3"
        alt={title}
      />
    </div>
  );
}
