import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const spotlightItems = [
  {
    id: 'spot-dna',
    title: 'DNA Double Helix',
    category: 'Molecular Biology',
    desc: 'The blueprint of life, visualized through X-ray crystallography and molecular modeling.',
    imgId: 'spot-img-dna-mn1op2',
    titleId: 'spot-dna-title',
    descId: 'spot-dna-desc',
  },
  {
    id: 'spot-virus',
    title: 'Bacteriophage',
    category: 'Virology',
    desc: 'A virus that infects bacteria, with a geometric protein shell and tail fibers for attachment.',
    imgId: 'spot-img-virus-qr3st4',
    titleId: 'spot-virus-title',
    descId: 'spot-virus-desc',
  },
  {
    id: 'spot-mitochondria',
    title: 'Mitochondria',
    category: 'Cell Biology',
    desc: 'The powerhouse of the cell, generating ATP through a complex series of chemical reactions.',
    imgId: 'spot-img-mito-uv5wx6',
    titleId: 'spot-mitochondria-title',
    descId: 'spot-mitochondria-desc',
  },
  {
    id: 'spot-spore',
    title: 'Fungal Spores',
    category: 'Mycology',
    desc: 'Reproductive units of fungi, displaying extraordinary diversity in shape and surface texture.',
    imgId: 'spot-img-spore-yz7ab8',
    titleId: 'spot-spore-title',
    descId: 'spot-spore-desc',
  },
  {
    id: 'spot-red-blood',
    title: 'Red Blood Cells',
    category: 'Hematology',
    desc: 'Biconcave discs of hemoglobin, carrying oxygen through the bloodstream to every cell in the body.',
    imgId: 'spot-img-rbc-cd9ef0',
    titleId: 'spot-red-blood-title',
    descId: 'spot-red-blood-desc',
  },
  {
    id: 'spot-quartz',
    title: 'Quartz Crystal',
    category: 'Mineralogy',
    desc: 'Silicon dioxide in its crystalline form, revealing perfect hexagonal symmetry under polarized light.',
    imgId: 'spot-img-quartz-gh1ij2',
    titleId: 'spot-quartz-title',
    descId: 'spot-quartz-desc',
  },
];

const SpotlightSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-[#050a0f]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#00d4ff] mb-3">
            Featured Specimens
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#e8f4f8] mb-4">
            Spotlight Collection
          </h2>
          <p className="text-[#7fb3c8] max-w-xl mx-auto leading-relaxed">
            Iconic microscopic subjects that have shaped our understanding of biology, chemistry, and the natural world.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {spotlightItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#0f2030] border border-[#1a3a4a] rounded-2xl overflow-hidden group hover:border-[#00d4ff]/40 hover:shadow-[0_0_24px_rgba(0,212,255,0.15)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2030] via-transparent to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="bg-[#050a0f]/70 backdrop-blur-sm text-[#00d4ff] text-xs font-semibold px-2 py-0.5 rounded-full border border-[#00d4ff]/30">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 id={item.titleId} className="text-lg font-semibold text-[#e8f4f8] mb-2">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-[#7fb3c8] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpotlightSection;
