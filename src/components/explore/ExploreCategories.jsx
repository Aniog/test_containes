import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'bacteria',
    titleId: 'exp-bacteria-title',
    descId: 'exp-bacteria-desc',
    imgId: 'exp-bacteria-img-a1b2c3',
    title: 'Bacteria',
    desc: 'Single-celled prokaryotes that are the most abundant life forms on Earth. They inhabit every environment from deep-sea vents to the human gut.',
    facts: ['Smallest living organisms', 'Can survive extreme conditions', 'Essential for nutrient cycling'],
    color: 'border-red-500/30 hover:border-red-500/60',
    badge: 'text-red-400 bg-red-500/10 border-red-500/20',
    accent: 'text-red-400',
  },
  {
    id: 'fungi',
    titleId: 'exp-fungi-title',
    descId: 'exp-fungi-desc',
    imgId: 'exp-fungi-img-d4e5f6',
    title: 'Fungi & Molds',
    desc: 'Neither plant nor animal, fungi form their own kingdom. Their microscopic spores and hyphae weave through soil, wood, and living tissue.',
    facts: ['Largest organism is a fungus', 'Decompose organic matter', 'Source of antibiotics'],
    color: 'border-orange-500/30 hover:border-orange-500/60',
    badge: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
    accent: 'text-orange-400',
  },
  {
    id: 'insects',
    titleId: 'exp-insects-title',
    descId: 'exp-insects-desc',
    imgId: 'exp-insects-img-g7h8i9',
    title: 'Insects & Arthropods',
    desc: 'Under the microscope, insects reveal an alien world of compound eyes, sensory hairs, and intricate exoskeleton structures.',
    facts: ['Over 1 million known species', 'Compound eyes with thousands of lenses', 'Exoskeleton made of chitin'],
    color: 'border-yellow-500/30 hover:border-yellow-500/60',
    badge: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
    accent: 'text-yellow-400',
  },
  {
    id: 'crystals',
    titleId: 'exp-crystals-title',
    descId: 'exp-crystals-desc',
    imgId: 'exp-crystals-img-j1k2l3',
    title: 'Crystals & Minerals',
    desc: 'Polarized light microscopy transforms ordinary minerals into breathtaking kaleidoscopes of color, revealing their atomic lattice structures.',
    facts: ['Atoms arranged in repeating patterns', 'Polarized light reveals structure', 'Found in rocks, ice, and living cells'],
    color: 'border-blue-500/30 hover:border-blue-500/60',
    badge: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    accent: 'text-blue-400',
  },
  {
    id: 'cells',
    titleId: 'exp-cells-title',
    descId: 'exp-cells-desc',
    imgId: 'exp-cells-img-m4n5o6',
    title: 'Cells & Tissue',
    desc: 'Fluorescence microscopy illuminates the inner machinery of cells — mitochondria, nuclei, and cytoskeletons glow in vivid colors.',
    facts: ['Human body has 37 trillion cells', 'Each cell contains 2m of DNA', 'Cells communicate via chemical signals'],
    color: 'border-emerald-500/30 hover:border-emerald-500/60',
    badge: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    accent: 'text-emerald-400',
  },
  {
    id: 'plankton',
    titleId: 'exp-plankton-title',
    descId: 'exp-plankton-desc',
    imgId: 'exp-plankton-img-p7q8r9',
    title: 'Plankton & Algae',
    desc: 'Microscopic ocean drifters that produce half of Earth\'s oxygen. Diatoms, radiolarians, and copepods form the base of the marine food web.',
    facts: ['Produce 50% of Earth\'s oxygen', 'Diatoms have glass-like shells', 'Most abundant animals on Earth are copepods'],
    color: 'border-teal-500/30 hover:border-teal-500/60',
    badge: 'text-teal-400 bg-teal-500/10 border-teal-500/20',
    accent: 'text-teal-400',
  },
];

export default function ExploreCategories() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((cat) => (
          <article
            key={cat.id}
            className={`group bg-gray-900 border rounded-2xl overflow-hidden transition-all duration-300 ${cat.color}`}
          >
            <div className="relative overflow-hidden aspect-[16/9]">
              <img
                alt={cat.title}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full border ${cat.badge}`}>
                  {cat.title}
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 id={cat.titleId} className="text-2xl font-bold text-white mb-3">{cat.title}</h3>
              <p id={cat.descId} className="text-gray-400 leading-relaxed mb-5">{cat.desc}</p>
              <ul className="space-y-2">
                {cat.facts.map((fact, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${cat.accent.replace('text-', 'bg-')}`} />
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
