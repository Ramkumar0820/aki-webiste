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
    <div className="bg-black py-6 border-y border-zinc-900 overflow-hidden select-none">
      {/* Container that hides the horizontal overflow */}
      <div className="flex w-max items-center">
        
        {/* Track 1: First moving group */}
        <div className="flex animate-marquee whitespace-nowrap gap-16 pr-16 items-center">
          {keywords.map((text, idx) => (
            <div key={`track1-${idx}`} className="flex items-center gap-16">
              <span className="text-xl md:text-2xl font-bold tracking-tight text-zinc-300 hover:text-white transition-colors duration-300 cursor-default">
                {text}
              </span>
              {/* Sleek diamond geometric divider between words */}
              <span className="w-2 h-2 rotate-45 bg-zinc-700 block" />
            </div>
          ))}
        </div>

        {/* Track 2: Exact duplicate track right behind it to make the loop seamless */}
        <div className="flex animate-marquee whitespace-nowrap gap-16 pr-16 items-center" aria-hidden="true">
          {keywords.map((text, idx) => (
            <div key={`track2-${idx}`} className="flex items-center gap-16">
              <span className="text-xl md:text-2xl font-bold tracking-tight text-zinc-300 hover:text-white transition-colors duration-300 cursor-default">
                {text}
              </span>
              <span className="w-2 h-2 rotate-45 bg-zinc-700 block" />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Brands;