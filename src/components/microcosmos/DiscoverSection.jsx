import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const discoveries = [
  {
    id: 'disc-virus',
    imgId: 'disc-img-virus-a1b2c3',
    titleId: 'disc-title-virus',
    descId: 'disc-desc-virus',
    title: 'Virus Architecture',
    desc: 'Bacteriophage virus structure under electron microscopy',
    year: '1940s',
    category: 'Virology',
    catColor: 'text-red-400 bg-red-400/10 border-red-400/20',
  },
  {
    id: 'disc-dna',
    imgId: 'disc-img-dna-d4e5f6',
    titleId: 'disc-title-dna',
    descId: 'disc-desc-dna',
    title: 'DNA Double Helix',
    desc: 'X-ray crystallography revealing the structure of DNA',
    year: '1953',
    category: 'Genetics',
    catColor: 'text-cosmos-cyan bg-cosmos-cyan/10 border-cosmos-cyan/20',
  },
  {
    id: 'disc-mitosis',
    imgId: 'disc-img-mitosis-g7h8i9',
    titleId: 'disc-title-mitosis',
    descId: 'disc-desc-mitosis',
    title: 'Cell Division',
    desc: 'Fluorescent microscopy of a cell undergoing mitosis',
    year: 'Ongoing',
    category: 'Cell Biology',
    catColor: 'text-cosmos-emerald bg-cosmos-emerald/10 border-cosmos-emerald/20',
  },
  {
    id: 'disc-protein',
    imgId: 'disc-img-protein-j1k2l3',
    titleId: 'disc-title-protein',
    descId: 'disc-desc-protein',
    title: 'Protein Folding',
    desc: 'Cryo-EM reconstruction of a complex protein structure',
    year: '2020s',
    category: 'Biochemistry',
    catColor: 'text-cosmos-violet bg-cosmos-violet/10 border-cosmos-violet/20',
  },
  {
    id: 'disc-nano',
    imgId: 'disc-img-nano-m4n5o6',
    titleId: 'disc-title-nano',
    descId: 'disc-desc-nano',
    title: 'Nanomaterials',
    desc: 'Carbon nanotubes and graphene at atomic resolution',
    year: '1990s',
    category: 'Nanotechnology',
    catColor: 'text-cosmos-amber bg-cosmos-amber/10 border-cosmos-amber/20',
  },
  {
    id: 'disc-synapse',
    imgId: 'disc-img-synapse-p7q8r9',
    titleId: 'disc-title-synapse',
    descId: 'disc-desc-synapse',
    title: 'Neural Synapse',
    desc: 'Super-resolution imaging of synaptic vesicle release',
    year: '2000s',
    category: 'Neuroscience',
    catColor: 'text-pink-400 bg-pink-400/10 border-pink-400/20',
  },
];

export default function DiscoverSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="discover" ref={containerRef} className="bg-cosmos-deep py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-cosmos-cyan text-xs font-semibold uppercase tracking-widest">
            Landmark Discoveries
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-3 mb-4">
            Moments That Changed Science
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From the first glimpse of a cell to atomic-resolution protein maps,
            microscopy has driven the greatest breakthroughs in human history.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {discoveries.map((disc) => (
            <div
              key={disc.id}
              className="group bg-cosmos-card border border-white/5 rounded-2xl overflow-hidden hover:border-cosmos-cyan/30 hover:shadow-xl hover:shadow-cosmos-cyan/5 transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  alt={disc.title}
                  data-strk-img-id={disc.imgId}
                  data-strk-img={`[${disc.descId}] [${disc.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-semibold border rounded-full px-2.5 py-1 ${disc.catColor}`}>
                    {disc.category}
                  </span>
                  <span className="text-slate-500 text-xs font-mono">{disc.year}</span>
                </div>
                <h3 id={disc.titleId} className="text-white font-bold text-lg mb-1.5">
                  {disc.title}
                </h3>
                <p id={disc.descId} className="text-slate-400 text-sm leading-relaxed">
                  {disc.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
