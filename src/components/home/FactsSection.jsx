import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const facts = [
  {
    id: 'fact-ocean',
    imgId: 'fact-img-mc017',
    number: '50%',
    label: 'of Earth\'s oxygen',
    desc: 'is produced by microscopic phytoplankton in the ocean — not trees.',
    accent: 'text-cyan-400',
    borderColor: 'border-cyan-500/30',
  },
  {
    id: 'fact-gut',
    imgId: 'fact-img-mc018',
    number: '1.5 kg',
    label: 'of microbes',
    desc: 'live inside the average human gut, outnumbering human cells.',
    accent: 'text-teal-400',
    borderColor: 'border-teal-500/30',
  },
  {
    id: 'fact-soil',
    imgId: 'fact-img-mc019',
    number: '1 billion',
    label: 'bacteria per teaspoon',
    desc: 'of healthy soil — the foundation of all terrestrial food chains.',
    accent: 'text-amber-400',
    borderColor: 'border-amber-500/30',
  },
  {
    id: 'fact-tardigrade',
    imgId: 'fact-img-mc020',
    number: '−272°C',
    label: 'tardigrade survival',
    desc: 'Tardigrades can survive near absolute zero, boiling water, and the vacuum of space.',
    accent: 'text-purple-400',
    borderColor: 'border-purple-500/30',
  },
];

export default function FactsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-[#0a1628] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p id="facts-label" className="text-cyan-400 text-sm font-semibold tracking-[0.25em] uppercase mb-3">
            Mind-Bending Numbers
          </p>
          <h2 id="facts-title" className="text-3xl md:text-4xl font-bold text-[#e2f4ff] mb-4">
            Fascinating Microbial Facts
          </h2>
          <p className="text-[#94b8d0] max-w-xl mx-auto text-base leading-relaxed">
            The microcosmos operates at scales and speeds that defy human intuition. Here are some numbers that put it all in perspective.
          </p>
        </div>

        {/* Facts grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact) => (
            <div
              key={fact.id}
              className={`bg-[#0d1f3c] border ${fact.borderColor} rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(0,200,255,0.06)] hover:shadow-[0_0_30px_rgba(0,200,255,0.15)] transition-all duration-300 group`}
            >
              {/* Image */}
              <div className="overflow-hidden h-44">
                <img
                  id={fact.id}
                  alt={fact.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={fact.imgId}
                  data-strk-img={`[${fact.id}] [facts-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              {/* Content */}
              <div className="p-5">
                <p className={`text-3xl font-extrabold mb-1 ${fact.accent}`}>{fact.number}</p>
                <p className="text-[#e2f4ff] text-sm font-semibold mb-2">{fact.label}</p>
                <p className="text-[#94b8d0] text-sm leading-relaxed">{fact.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
