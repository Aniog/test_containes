import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const facts = [
  {
    id: 'fact-01',
    imgId: 'fact-img-01-a1b2c3',
    titleId: 'fact-01-title',
    descId: 'fact-01-desc',
    title: 'Tardigrades',
    desc: 'These microscopic "water bears" can survive in outer space, extreme radiation, and temperatures from -272°C to 150°C.',
  },
  {
    id: 'fact-02',
    imgId: 'fact-img-02-d4e5f6',
    titleId: 'fact-02-title',
    descId: 'fact-02-desc',
    title: 'Diatoms',
    desc: 'Single-celled algae with intricate glass-like silica shells. They produce 20% of all oxygen on Earth.',
  },
  {
    id: 'fact-03',
    imgId: 'fact-img-03-g7h8i9',
    titleId: 'fact-03-title',
    descId: 'fact-03-desc',
    title: 'Mycelium Networks',
    desc: 'Fungal networks connect entire forests underground, transferring nutrients and chemical signals between trees.',
  },
  {
    id: 'fact-04',
    imgId: 'fact-img-04-j1k2l3',
    titleId: 'fact-04-title',
    descId: 'fact-04-desc',
    title: 'Prions',
    desc: 'Misfolded proteins just 10 nanometers across that can cause fatal neurological diseases by converting normal proteins.',
  },
  {
    id: 'fact-05',
    imgId: 'fact-img-05-m5n6o7',
    titleId: 'fact-05-title',
    descId: 'fact-05-desc',
    title: 'Radiolaria',
    desc: 'Ancient ocean protists with ornate mineral skeletons that inspired Art Nouveau architecture and design.',
  },
  {
    id: 'fact-06',
    imgId: 'fact-img-06-p8q9r0',
    titleId: 'fact-06-title',
    descId: 'fact-06-desc',
    title: 'Extremophiles',
    desc: 'Microbes thriving in boiling hot springs, acidic lakes, and deep-sea hydrothermal vents hint at life on other planets.',
  },
];

export default function AboutSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 px-6 md:px-12 lg:px-24 bg-[#050a0f]">
      <div className="max-w-7xl mx-auto">
        {/* Intro */}
        <div className="text-center mb-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#00d4ff] mb-3">
            About MicroCosmos
          </p>
          <h2 id="about-title" className="text-4xl md:text-5xl font-bold text-[#e8f4f8] mb-6">
            Revealing the Hidden Universe
          </h2>
          <p id="about-subtitle" className="text-[#8ab4c8] text-lg max-w-3xl mx-auto leading-relaxed">
            MicroCosmos is a science communication platform dedicated to making the microscopic world accessible, beautiful, and awe-inspiring. We collaborate with researchers, microscopists, and educators worldwide to bring you the most stunning imagery and discoveries from the frontier of small-scale science.
          </p>
        </div>

        {/* Fascinating Facts Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-[#e8f4f8] mb-8 text-center">
            Fascinating Microscopic Facts
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facts.map((fact) => (
              <div
                key={fact.id}
                className="group bg-[#0d1a26] rounded-2xl border border-[#1a3a50] overflow-hidden hover:border-[#00ffcc]/40 hover:shadow-[0_0_20px_rgba(0,255,204,0.08)] transition-all duration-300"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    alt={fact.title}
                    data-strk-img-id={fact.imgId}
                    data-strk-img={`[${fact.descId}] [${fact.titleId}] [about-subtitle] [about-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a26] via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <h4 id={fact.titleId} className="text-[#e8f4f8] font-semibold mb-2">
                    {fact.title}
                  </h4>
                  <p id={fact.descId} className="text-[#8ab4c8] text-sm leading-relaxed">
                    {fact.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '10,000+', label: 'Images Catalogued' },
            { value: '200+', label: 'Species Documented' },
            { value: '50+', label: 'Research Partners' },
            { value: '1M+', label: 'Monthly Visitors' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-[#0d1a26] rounded-2xl border border-[#1a3a50] p-6 text-center"
            >
              <p className="text-3xl font-black text-[#00d4ff] mb-1">{stat.value}</p>
              <p className="text-[#8ab4c8] text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
