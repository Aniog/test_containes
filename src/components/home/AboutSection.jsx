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
            <p className="font-light text-neutral-600 leading-relaxed text-sm">
              Every surface, every organism, every material holds a universe within. We are here to show you what lies beneath.
            </p>
          </div>

          {/* Image */}
          <div className="relative overflow-hidden aspect-[4/3] lg:aspect-[3/4]">
            <img
              alt="Microscopic world"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              data-strk-img-id="about-img-d4e5f6"
              data-strk-img="[about-body] [about-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 border border-neutral-800 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
