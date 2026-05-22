import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '10,000+', label: 'Species Documented' },
  { value: '0.001mm', label: 'Smallest Organism' },
  { value: '4 Billion', label: 'Years of Evolution' },
  { value: '99%', label: 'Life is Microscopic' },
];

const AboutSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="explore" ref={containerRef} className="py-24 px-6 md:px-12 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p id="about-label" className="text-sm font-medium tracking-widest uppercase text-[#00d4aa] mb-4">
              About MicroCosmos
            </p>
            <h2 id="about-title" className="text-4xl md:text-5xl font-bold text-[#e8f4f8] mb-6 leading-tight">
              A Universe Hidden in Plain Sight
            </h2>
            <p className="text-[#94b8c8] text-lg leading-relaxed mb-6">
              Beneath the surface of every drop of water, every grain of soil, and every breath of air lies an entire cosmos teeming with life. MicroCosmos is dedicated to revealing this invisible world through stunning imagery and scientific discovery.
            </p>
            <p className="text-[#94b8c8] text-lg leading-relaxed mb-10">
              From the intricate geometry of diatoms to the alien beauty of tardigrades, we bring the microscopic world into breathtaking focus.
            </p>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="border border-[#1a3a4a] rounded-2xl p-5 bg-[#0a1628]">
                  <div className="text-3xl font-black text-[#00d4aa] mb-1">{stat.value}</div>
                  <div className="text-sm text-[#5a7a8a] uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,212,170,0.15)] border border-[#1a3a4a]">
              <img
                alt="Microscopic life forms"
                className="w-full object-cover"
                data-strk-img-id="about-img-mc002"
                data-strk-img="[about-title] [about-label]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#0f1f35] border border-[#1a3a4a] rounded-2xl p-4 shadow-[0_0_30px_rgba(0,212,170,0.2)]">
              <div className="text-2xl font-black text-[#00d4aa]">4B+</div>
              <div className="text-xs text-[#5a7a8a] uppercase tracking-wider">Years of Life</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
