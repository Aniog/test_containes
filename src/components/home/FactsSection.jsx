import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const facts = [
  {
    id: 'fact-mc001',
    labelId: 'fact-label-mc001',
    stat: '37 Trillion',
    label: 'Microbes in your body',
    desc: 'Your body hosts more microbial cells than human cells — they outnumber you 1.3 to 1.',
    imgDesc: 'human microbiome gut bacteria illustration microscope',
    ratio: '4x3',
    width: 500,
  },
  {
    id: 'fact-mc002',
    labelId: 'fact-label-mc002',
    stat: '50%',
    label: 'Oxygen from microbes',
    desc: 'Half of all oxygen on Earth is produced by microscopic phytoplankton and cyanobacteria in the ocean.',
    imgDesc: 'phytoplankton ocean microscope oxygen photosynthesis',
    ratio: '4x3',
    width: 500,
  },
  {
    id: 'fact-mc003',
    labelId: 'fact-label-mc003',
    stat: '3.5 Billion',
    label: 'Years of microbial life',
    desc: 'Microbial life has existed on Earth for 3.5 billion years — long before plants, animals, or fungi.',
    imgDesc: 'ancient stromatolite fossil bacteria early earth',
    ratio: '4x3',
    width: 500,
  },
  {
    id: 'fact-mc004',
    labelId: 'fact-label-mc004',
    stat: '10^30',
    label: 'Microbes on Earth',
    desc: 'There are an estimated 10 nonillion microorganisms on Earth — more than all the stars in the observable universe.',
    imgDesc: 'bacteria colony petri dish microscope colorful',
    ratio: '4x3',
    width: 500,
  },
];

export default function FactsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="facts" ref={containerRef} className="py-24 px-4 md:px-8 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-teal-900/50 text-teal-300 rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest mb-4 border border-teal-700/40">
            Mind-Blowing Facts
          </span>
          <h2 id="facts-title" className="text-4xl md:text-5xl font-black text-white mb-4">
            Numbers That <span className="text-teal-400">Astound</span>
          </h2>
          <p id="facts-subtitle" className="text-slate-400 text-lg max-w-xl mx-auto">
            The microscopic world operates at scales that challenge our imagination.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {facts.map((fact) => (
            <div
              key={fact.id}
              className="group flex flex-col md:flex-row gap-0 rounded-2xl overflow-hidden border border-teal-900/40 hover:border-teal-500/50 transition-all duration-300 bg-[#0f1f35] shadow-[0_0_20px_rgba(45,212,191,0.05)] hover:shadow-[0_0_30px_rgba(45,212,191,0.15)]"
            >
              {/* Image */}
              <div className="md:w-44 h-44 md:h-auto flex-shrink-0 relative overflow-hidden">
                <img
                  alt={fact.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-strk-img-id={fact.id}
                  data-strk-img={`[${fact.labelId}] [facts-subtitle] [facts-title]`}
                  data-strk-img-ratio={fact.ratio}
                  data-strk-img-width={fact.width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <span id={fact.labelId} className="hidden">{fact.imgDesc}</span>
              </div>

              {/* Text */}
              <div className="p-6 flex flex-col justify-center">
                <div className="text-3xl font-black text-teal-400 mb-1">{fact.stat}</div>
                <div className="text-white font-semibold mb-2">{fact.label}</div>
                <p className="text-slate-400 text-sm leading-relaxed">{fact.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
