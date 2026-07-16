import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'bacteria',
    titleId: 'cat-bacteria-title',
    descId: 'cat-bacteria-desc',
    imgId: 'cat-img-bacteria-mc010',
    title: 'Bacteria & Microbes',
    desc: 'Single-celled prokaryotes that colonize every environment on Earth, from deep-sea vents to the human gut.',
    tag: 'Microbiology',
    color: 'text-emerald-400',
    border: 'hover:border-emerald-400/50',
  },
  {
    id: 'crystals',
    titleId: 'cat-crystals-title',
    descId: 'cat-crystals-desc',
    imgId: 'cat-img-crystals-mc011',
    title: 'Crystal Structures',
    desc: 'Minerals and salts forming geometric perfection at the atomic scale — nature\'s own architecture.',
    tag: 'Crystallography',
    color: 'text-violet-400',
    border: 'hover:border-violet-400/50',
  },
  {
    id: 'cells',
    titleId: 'cat-cells-title',
    descId: 'cat-cells-desc',
    imgId: 'cat-img-cells-mc012',
    title: 'Living Cells',
    desc: 'The fundamental units of life — eukaryotic cells with nuclei, mitochondria, and intricate membrane systems.',
    tag: 'Cell Biology',
    color: 'text-cyan-400',
    border: 'hover:border-cyan-400/50',
  },
  {
    id: 'pollen',
    titleId: 'cat-pollen-title',
    descId: 'cat-pollen-desc',
    imgId: 'cat-img-pollen-mc013',
    title: 'Pollen & Spores',
    desc: 'Microscopic vessels of reproduction — each grain a unique sculptural form evolved over millions of years.',
    tag: 'Botany',
    color: 'text-amber-400',
    border: 'hover:border-amber-400/50',
  },
  {
    id: 'insects',
    titleId: 'cat-insects-title',
    descId: 'cat-insects-desc',
    imgId: 'cat-img-insects-mc014',
    title: 'Insect Anatomy',
    desc: 'Compound eyes, sensory hairs, and wing scales reveal the extraordinary engineering of arthropods.',
    tag: 'Entomology',
    color: 'text-rose-400',
    border: 'hover:border-rose-400/50',
  },
  {
    id: 'plankton',
    titleId: 'cat-plankton-title',
    descId: 'cat-plankton-desc',
    imgId: 'cat-img-plankton-mc015',
    title: 'Plankton & Algae',
    desc: 'Microscopic ocean drifters that produce half of Earth\'s oxygen and form the base of marine food webs.',
    tag: 'Marine Biology',
    color: 'text-sky-400',
    border: 'hover:border-sky-400/50',
  },
];

const CategoriesSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-cyan-400 mb-3 font-medium">
            Fields of Study
          </p>
          <h2
            id="cat-section-title"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Worlds Within Worlds
          </h2>
          <p id="cat-section-desc" className="text-slate-400 max-w-xl mx-auto">
            Six domains of microscopic life and matter, each with its own
            astonishing visual language and scientific depth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`group bg-[#0d1428] border border-slate-700/50 rounded-2xl overflow-hidden ${cat.border} transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]`}
            >
              <div className="aspect-[3x2] overflow-hidden">
                <img
                  alt={cat.title}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}] [cat-section-desc] [cat-section-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className={`text-xs uppercase tracking-widest font-medium ${cat.color} mb-2 block`}>
                  {cat.tag}
                </span>
                <h3
                  id={cat.titleId}
                  className="text-lg font-semibold text-white mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {cat.title}
                </h3>
                <p id={cat.descId} className="text-sm text-slate-400 leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
