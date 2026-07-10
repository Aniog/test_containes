import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ecosystems = [
  { id: 'eco1', imgId: 'eco-img-mc024', titleId: 'eco-eco1-title', descId: 'eco-eco1-desc', title: 'Ocean Microbiome', desc: 'Phytoplankton and marine microorganisms that produce half of Earth\'s oxygen', icon: '🌊' },
  { id: 'eco2', imgId: 'eco-img-mc025', titleId: 'eco-eco2-title', descId: 'eco-eco2-desc', title: 'Soil Ecosystem', desc: 'A teaspoon of healthy soil contains more microbes than people on Earth', icon: '🌱' },
  { id: 'eco3', imgId: 'eco-img-mc026', titleId: 'eco-eco3-title', descId: 'eco-eco3-desc', title: 'Human Microbiome', desc: 'Trillions of microorganisms living in and on the human body in symbiosis', icon: '🧬' },
  { id: 'eco4', imgId: 'eco-img-mc027', titleId: 'eco-eco4-title', descId: 'eco-eco4-desc', title: 'Extreme Environments', desc: 'Extremophiles thriving in volcanic vents, acid lakes, and frozen tundra', icon: '🌋' },
];

const Ecosystems = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="ecosystems" ref={containerRef} className="bg-[#050d1a] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#00d4c8]">
            Micro Ecosystems
          </span>
          <h2 id="eco-section-title" className="text-4xl md:text-5xl font-bold text-[#f0f6ff] mt-3 mb-5">
            Worlds Within Worlds
          </h2>
          <p className="text-[#8ba3c7] text-lg max-w-xl mx-auto">
            Microscopic life forms the foundation of every ecosystem on Earth — from the deepest ocean to the human gut.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ecosystems.map((eco) => (
            <div
              key={eco.id}
              className="group bg-[#0f1f38] border border-[#1a3050] rounded-2xl overflow-hidden hover:border-[#00d4c8]/40 hover:shadow-[0_0_25px_rgba(0,212,200,0.08)] transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  alt={eco.title}
                  data-strk-img-id={eco.imgId}
                  data-strk-img={`[${eco.descId}] [${eco.titleId}] [eco-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f38] to-transparent" />
                <span className="absolute top-4 left-4 text-2xl">{eco.icon}</span>
              </div>
              <div className="p-5">
                <h3 id={eco.titleId} className="text-base font-bold text-[#f0f6ff] mb-2">
                  {eco.title}
                </h3>
                <p id={eco.descId} className="text-sm text-[#8ba3c7] leading-relaxed">
                  {eco.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Full-width banner */}
        <div className="mt-16 relative rounded-3xl overflow-hidden border border-[#1a3050]">
          <div
            className="absolute inset-0"
            data-strk-bg-id="eco-banner-bg-mc028"
            data-strk-bg="[eco-banner-desc] [eco-banner-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1400"
            style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050d1a]/90 via-[#050d1a]/60 to-transparent" />
          <div className="relative z-10 py-16 px-10 md:px-16 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00d4c8]">
              Did You Know?
            </span>
            <h3 id="eco-banner-title" className="text-3xl md:text-4xl font-black text-[#f0f6ff] mt-3 mb-4">
              Microbes Rule the Earth
            </h3>
            <p id="eco-banner-desc" className="text-[#8ba3c7] text-lg leading-relaxed">
              Microorganisms make up 70% of Earth's total biomass. Without them, all complex life would collapse within decades. They cycle nutrients, fix nitrogen, and drive the chemistry of our atmosphere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystems;
