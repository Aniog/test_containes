import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const AboutSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="bg-black py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <div>
            <p id="about-label" className="text-xs tracking-widest uppercase text-neutral-500 mb-6">About</p>
            <h2 id="about-title" className="font-light tracking-[0.15em] uppercase text-white text-3xl lg:text-5xl leading-tight mb-8">
              A World<br />Beyond Sight
            </h2>
            <p id="about-body" className="font-light text-neutral-400 leading-relaxed text-base lg:text-lg mb-6">
              Microuniverse is a photographic journey into the hidden dimensions of our world — the microscopic, the cellular, the crystalline. Through extreme close-up and macro photography, we reveal the extraordinary beauty that exists at scales invisible to the naked eye.
            </p>
            <p id="about-body2" className="font-light text-neutral-600 leading-relaxed text-sm mb-10">
              Every surface, every organism, every material holds a universe within. We are here to show you what lies beneath.
            </p>
            {/* Small inline image strip */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'about-strip-1', imgId: 'about-strip-img-aa1bb2', titleId: 'about-strip-t1', descId: 'about-strip-d1', title: 'Cell membrane', desc: 'Lipid bilayer cross-section' },
                { id: 'about-strip-2', imgId: 'about-strip-img-cc3dd4', titleId: 'about-strip-t2', descId: 'about-strip-d2', title: 'Mineral vein', desc: 'Quartz vein in granite' },
                { id: 'about-strip-3', imgId: 'about-strip-img-ee5ff6', titleId: 'about-strip-t3', descId: 'about-strip-d3', title: 'Spore cluster', desc: 'Fern spore release' },
              ].map((item) => (
                <div key={item.id} className="overflow-hidden aspect-square">
                  <img
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    data-strk-img-id={item.imgId}
                    data-strk-img={`[${item.descId}] [${item.titleId}] [about-body] [about-title]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <p id={item.titleId} className="sr-only">{item.title}</p>
                  <p id={item.descId} className="sr-only">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Images — tall main + stacked side */}
          <div className="grid grid-cols-2 gap-3 h-[520px] lg:h-[640px]">
            {/* Tall left image */}
            <div className="relative overflow-hidden row-span-2">
              <img
                alt="Microscopic world"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                data-strk-img-id="about-img-d4e5f6"
                data-strk-img="[about-body] [about-title]"
                data-strk-img-ratio="2x3"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 border border-neutral-800 pointer-events-none" />
            </div>
            {/* Top-right image */}
            <div className="relative overflow-hidden">
              <img
                alt="Crystal structure"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                data-strk-img-id="about-img-g7h8i9"
                data-strk-img="[about-body2] [about-title]"
                data-strk-img-ratio="1x1"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 border border-neutral-800 pointer-events-none" />
            </div>
            {/* Bottom-right image */}
            <div className="relative overflow-hidden">
              <img
                alt="Cellular detail"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                data-strk-img-id="about-img-j1k2l3"
                data-strk-img="[about-body] [about-label]"
                data-strk-img-ratio="1x1"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 border border-neutral-800 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
