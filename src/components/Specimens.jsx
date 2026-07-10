import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const specimens = [
  {
    id: 'sp1',
    imgId: 'specimen-img-mc015',
    titleId: 'specimen-sp1-title',
    descId: 'specimen-sp1-desc',
    title: 'Tardigrade',
    subtitle: 'Water Bear',
    desc: 'The most resilient animal on Earth. Tardigrades survive in the vacuum of space, extreme radiation, and temperatures from -272°C to 150°C. Their microscopic bodies contain all the complexity of larger animals.',
    facts: ['0.1–1.5 mm long', 'Survives in space', '500M years old lineage'],
  },
  {
    id: 'sp2',
    imgId: 'specimen-img-mc016',
    titleId: 'specimen-sp2-title',
    descId: 'specimen-sp2-desc',
    title: 'Radiolarian',
    subtitle: 'Ocean Jewel',
    desc: 'Single-celled marine organisms that construct intricate mineral skeletons of breathtaking geometric complexity. Their silica shells, formed over millions of years, inspired Art Nouveau architecture.',
    facts: ['Single-celled organism', 'Silica skeleton', 'Found in all oceans'],
  },
  {
    id: 'sp3',
    imgId: 'specimen-img-mc017',
    titleId: 'specimen-sp3-title',
    descId: 'specimen-sp3-desc',
    title: 'Vorticella',
    subtitle: 'Bell Animalcule',
    desc: 'A stalked ciliate protozoan that resembles a tiny bell flower. It attaches to surfaces and uses its cilia to create water currents that draw food particles into its mouth.',
    facts: ['Ciliate protozoan', 'Retractable stalk', 'Freshwater habitat'],
  },
];

const Specimens = () => {
  const containerRef = useRef(null);
  const [active, setActive] = useState(specimens[0].id);

  const current = specimens.find((s) => s.id === active);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [active]);

  return (
    <section id="specimens" className="bg-[#050d1a] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#00d4c8]">
            Featured Specimens
          </span>
          <h2 id="specimens-title" className="text-4xl md:text-5xl font-bold text-[#f0f6ff] mt-3 mb-5">
            Extraordinary Microlife
          </h2>
          <p className="text-[#8ba3c7] text-lg max-w-xl mx-auto">
            Meet the remarkable organisms that inhabit the microscopic realm — each one a marvel of evolution.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {specimens.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all ${
                active === s.id
                  ? 'bg-[#00d4c8] text-[#050d1a]'
                  : 'border border-[#1a3050] text-[#8ba3c7] hover:border-[#00d4c8]/50 hover:text-[#00d4c8]'
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* Featured card */}
        <div ref={containerRef} className="grid md:grid-cols-2 gap-8 items-center bg-[#0f1f38] border border-[#1a3050] rounded-3xl overflow-hidden">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              alt={current.title}
              data-strk-img-id={current.imgId}
              data-strk-img={`[${current.descId}] [${current.titleId}] [specimens-title]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0f1f38]/30" />
          </div>

          {/* Info */}
          <div className="p-8 md:p-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00d4c8]">
              {current.subtitle}
            </span>
            <h3 id={current.titleId} className="text-3xl font-black text-[#f0f6ff] mt-2 mb-4">
              {current.title}
            </h3>
            <p id={current.descId} className="text-[#8ba3c7] leading-relaxed mb-6">
              {current.desc}
            </p>
            <div className="space-y-2">
              {current.facts.map((fact) => (
                <div key={fact} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00d4c8] flex-shrink-0" />
                  <span className="text-sm text-[#8ba3c7]">{fact}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specimens;
