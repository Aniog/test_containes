import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'cat-mc001',
    labelId: 'cat-label-mc001',
    title: 'Bacteria',
    desc: 'Single-celled prokaryotes found in every environment on Earth.',
    imgDesc: 'bacteria rod shaped colorful microscope',
    count: '10,000+ species',
    color: 'from-teal-900/80',
  },
  {
    id: 'cat-mc002',
    labelId: 'cat-label-mc002',
    title: 'Fungi & Mold',
    desc: 'Spore-producing organisms including molds, yeasts, and mushrooms.',
    imgDesc: 'fungi mold spores microscope colorful',
    count: '144,000+ species',
    color: 'from-cyan-900/80',
  },
  {
    id: 'cat-mc003',
    labelId: 'cat-label-mc003',
    title: 'Protozoa',
    desc: 'Single-celled eukaryotes that move and feed like animals.',
    imgDesc: 'protozoa amoeba cilia microscope water',
    count: '50,000+ species',
    color: 'from-emerald-900/80',
  },
  {
    id: 'cat-mc004',
    labelId: 'cat-label-mc004',
    title: 'Algae',
    desc: 'Photosynthetic microorganisms that produce half of Earth\'s oxygen.',
    imgDesc: 'algae diatom green microscope photosynthesis',
    count: '72,500+ species',
    color: 'from-teal-900/80',
  },
  {
    id: 'cat-mc005',
    labelId: 'cat-label-mc005',
    title: 'Viruses',
    desc: 'Submicroscopic agents that replicate only inside living cells.',
    imgDesc: 'virus particle electron microscope colorful',
    count: '6,000+ described',
    color: 'from-cyan-900/80',
  },
  {
    id: 'cat-mc006',
    labelId: 'cat-label-mc006',
    title: 'Archaea',
    desc: 'Ancient single-celled organisms thriving in extreme environments.',
    imgDesc: 'archaea extremophile hot spring microscope',
    count: '1,300+ species',
    color: 'from-emerald-900/80',
  },
];

export default function CategoriesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="categories" ref={containerRef} className="py-24 px-4 md:px-8 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-teal-900/50 text-teal-300 rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest mb-4 border border-teal-700/40">
            Taxonomy
          </span>
          <h2 id="cat-title" className="text-4xl md:text-5xl font-black text-white mb-4">
            Life <span className="text-teal-400">Categories</span>
          </h2>
          <p id="cat-subtitle" className="text-slate-400 text-lg max-w-xl mx-auto">
            Explore the major groups of microscopic life that inhabit our world.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group relative rounded-2xl overflow-hidden border border-teal-900/40 hover:border-teal-500/50 transition-all duration-300 cursor-pointer shadow-[0_0_20px_rgba(45,212,191,0.05)] hover:shadow-[0_0_30px_rgba(45,212,191,0.15)]"
            >
              {/* Background image */}
              <div className="h-52 relative overflow-hidden">
                <img
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-strk-img-id={cat.id}
                  data-strk-img={`[${cat.labelId}] [cat-subtitle] [cat-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <span id={cat.labelId} className="hidden">{cat.imgDesc}</span>
                <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} to-transparent`} />
              </div>

              {/* Card content */}
              <div className="bg-[#0f1f35] p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-white font-bold text-lg">{cat.title}</h3>
                  <span className="text-xs text-teal-400 bg-teal-900/50 px-2 py-0.5 rounded-full border border-teal-700/40 whitespace-nowrap ml-2">
                    {cat.count}
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
