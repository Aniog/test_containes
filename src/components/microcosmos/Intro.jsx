import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '10,000+', label: 'Species Documented' },
  { value: '0.001mm', label: 'Smallest Subject' },
  { value: '4000×', label: 'Max Magnification' },
  { value: '50+', label: 'Ecosystems Explored' },
];

const Intro = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="explore" ref={containerRef} className="bg-black py-20 md:py-32 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p id="intro-label" className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4">
              What is MicroCosmos
            </p>
            <h2 id="intro-title" className="text-4xl md:text-5xl font-black tracking-tighter text-white leading-tight mb-6">
              A Universe<br />Within a Universe
            </h2>
            <p className="text-neutral-300 text-lg leading-relaxed mb-6">
              MicroCosmos is a visual expedition into the microscopic realm — the teeming, vibrant, and often alien-looking world that exists all around us, invisible to the naked eye.
            </p>
            <p className="text-neutral-400 leading-relaxed mb-10">
              From the crystalline geometry of snowflakes to the iridescent wings of a butterfly's scales, from the branching networks of fungi to the spiraling architecture of diatoms — every surface, every drop of water, every grain of soil is home to an entire civilization.
            </p>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="border-l-2 border-neutral-700 pl-4">
                  <div className="text-2xl font-black text-white">{s.value}</div>
                  <div className="text-xs text-neutral-500 uppercase tracking-widest mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image stack */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-lg border border-neutral-800">
              <img
                alt="Microscopic organism"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                data-strk-img-id="intro-img-mc002"
                data-strk-img="[intro-title] [intro-label] microscopic organism close-up"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            {/* Floating accent image */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 overflow-hidden rounded-lg border border-neutral-700 shadow-2xl">
              <img
                alt="Microscopic detail"
                className="w-full h-full object-cover"
                data-strk-img-id="intro-img-mc003"
                data-strk-img="[intro-label] diatom microscope colorful"
                data-strk-img-ratio="1x1"
                data-strk-img-width="300"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
