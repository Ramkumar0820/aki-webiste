import React from "react";

const trophyHighlights = [
  {
    title: "Corporate Excellence Awards",
    description: "Sleek glass, crystal, and modern acrylic structures designed for company milestones, elite galas, and executive recognition.",
  },
  {
    title: "Championship & Sports Trophies",
    description: "Heavy-duty, premium-tier cups and custom medals engineered to honor victory and withstand the test of time.",
  },
  {
    title: "Bespoke Custom Engraving",
    description: "State-of-the-art diamond tip and laser engraving that turns high-quality raw materials into legendary custom honors.",
  },
];

const supportingServices = [
  {
    title: "Studio Victory Photography",
    description: "Capturing the exact raw emotion of success, podium moments, team photos, and executive portraits in unmatched detail.",
  },
  {
    title: "Premium Presentation Frames",
    description: "Handcrafted shadow boxes and custom gift frames to beautifully house your certificates, winning jerseys, and award memories.",
  },
];

const AboutUs = () => {
  return (
    <div className="bg-black text-zinc-100 min-h-screen font-sans selection:bg-zinc-800">
      
      {/* 1. Hero Introduction - Bold Trophy Focus */}
      <section className="max-w-frame mx-auto px-6 pt-24 pb-16 md:pt-36 md:pb-24 text-center">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-500 block mb-4 font-semibold">
          Master Award Artisans
        </span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.15]">
          Crafting the physical symbols of achievement and victory.
        </h1>
        <p className="mt-8 text-base md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          We are premier designers of high-end trophies, corporate awards, and recognition pieces. Built on the foundation of honoring success, we combine master metalwork and engraving with top-tier studio photography and custom framing to immortalize your greatest milestones.
        </p>
      </section>

      <hr className="border-zinc-900 max-w-frame mx-auto" />

      {/* 2. Core Business: The Trophy Craft */}
      <section className="max-w-frame mx-auto px-6 py-20 md:py-28">
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-2">
            Our Main Focus
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Premium Trophies & Awards
          </h2>
          <p className="text-zinc-400 text-sm mt-2 max-w-xl">
            From regional athletic tournaments to global corporate recognition, we construct the awards people are proud to hold high.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trophyHighlights.map((trophy, i) => (
            <div 
              key={i} 
              className="p-8 rounded-xl bg-zinc-950 border border-zinc-900 hover:border-amber-500/30 transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center text-xs font-mono font-bold mb-6">
                0{i + 1}
              </div>
              <h3 className="text-lg font-semibold text-zinc-200 mb-2">
                {trophy.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {trophy.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Supporting Services Layout Split */}
      <section className="bg-zinc-950 border-y border-zinc-900 py-20 md:py-28">
        <div className="max-w-frame mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center">
            
            <div className="lg:col-span-1">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-4">
                Complete Presentation
              </span>
              <h2 className="text-3xl font-bold text-white tracking-tight">
                Beyond the Trophy.
              </h2>
              <p className="mt-4 text-zinc-400 text-sm leading-relaxed">
                True recognition doesn&apos;t end at the podium. We offer the missing puzzle pieces to perfectly catalog and display your history of success under one roof.
              </p>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {supportingServices.map((service, index) => (
                <div 
                  key={index} 
                  className="p-8 rounded-xl bg-black border border-zinc-900 hover:border-zinc-800 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-zinc-200 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 4. Heavy-Hitting Call-To-Action */}
      <section className="max-w-frame mx-auto px-6 py-20 md:py-32 text-center">
        <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-8 md:p-16 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Commission Your Custom Awards
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Planning an upcoming corporate gala, athletic championship, or a meaningful gift frame combo? Speak directly with our lead design craftsmen.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="/contact" 
              className="w-full sm:w-auto bg-amber-500 text-black font-semibold text-sm px-6 py-3 rounded-lg hover:bg-amber-400 transition-colors duration-200 text-center"
            >
              Order Custom Trophies
            </a>
            {/* <a 
              href="/catalog" 
              className="w-full sm:w-auto bg-transparent text-white border border-zinc-800 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-200 text-center"
            >
              View Award Catalog
            </a> */}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;