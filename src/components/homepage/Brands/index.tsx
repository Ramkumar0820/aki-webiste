import React from "react";

const keywords = [
  "Custom Trophies",
  "Photography",
  "Bespoke Gift Frames",
  "Corporate Awards",
  "Fine Art Prints",
  "Handcrafted Frames",
  "Event Photography",
  "Engraved Medals",
];

const Brands = () => {
  return (
    <div className="bg-black py-6 border-y border-zinc-900 overflow-hidden select-none mt-10">
      {/* Single animated track containing TWO copies — translateX(-50%) lands exactly at the duplicate */}
      <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap w-max items-center gap-16">
        
        {/* Copy 1 */}
        {keywords.map((text, idx) => (
          <div key={`a-${idx}`} className="flex items-center gap-16">
            <span className="text-xl md:text-2xl font-bold tracking-tight text-zinc-300 hover:text-white transition-colors duration-300 cursor-default">
              {text}
            </span>
            <span className="w-2 h-2 rotate-45 bg-[#6B6B3A] block shrink-0" />
          </div>
        ))}

        {/* Copy 2 — identical, makes the loop seamless */}
        {keywords.map((text, idx) => (
          <div key={`b-${idx}`} className="flex items-center gap-16" aria-hidden="true">
            <span className="text-xl md:text-2xl font-bold tracking-tight text-zinc-300 hover:text-white transition-colors duration-300 cursor-default">
              {text}
            </span>
            <span className="w-2 h-2 rotate-45 bg-[#6B6B3A] block shrink-0" />
          </div>
        ))}

      </div>
    </div>
  );
};

export default Brands;