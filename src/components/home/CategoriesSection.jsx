import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'cat-1', imgId: 'cat-img-p7q8r9', titleId: 'cat-title-1', descId: 'cat-desc-1',
    title: 'Cellular', desc: 'The architecture of life at the cellular level', count: '48 images',
    ratio: '16x9', width: 800,
    thumbs: [
      { imgId: 'cat-th-1a', titleId: 'cat-th-t1a', descId: 'cat-th-d1a', title: 'Mitochondria', desc: 'Energy organelles in muscle cell' },
      { imgId: 'cat-th-1b', titleId: 'cat-th-t1b', descId: 'cat-th-d1b', title: 'Cell nucleus', desc: 'Nucleus with chromatin' },
      { imgId: 'cat-th-1c', titleId: 'cat-th-t1c', descId: 'cat-th-d1c', title: 'Cytoskeleton', desc: 'Actin filament network' },
    ],
  },
  {
    id: 'cat-2', imgId: 'cat-img-s1t2u3', titleId: 'cat-title-2', descId: 'cat-desc-2',
    title: 'Mineral', desc: 'Crystalline structures and geological formations', count: '36 images',
    ratio: '16x9', width: 800,
    thumbs: [
      { imgId: 'cat-th-2a', titleId: 'cat-th-t2a', descId: 'cat-th-d2a', title: 'Amethyst', desc: 'Purple quartz crystal cluster' },
      { imgId: 'cat-th-2b', titleId: 'cat-th-t2b', descId: 'cat-th-d2b', title: 'Pyrite', desc: 'Iron sulfide cubic crystals' },
      { imgId: 'cat-th-2c', titleId: 'cat-th-t2c', descId: 'cat-th-d2c', title: 'Malachite', desc: 'Copper carbonate banding' },
    ],
  },
  {
    id: 'cat-3', imgId: 'cat-img-v4w5x6', titleId: 'cat-title-3', descId: 'cat-desc-3',
    title: 'Botanical', desc: 'Plant tissues, spores, and pollen in extreme detail', count: '52 images',
    ratio: '16x9', width: 800,
    thumbs: [
      { imgId: 'cat-th-3a', titleId: 'cat-th-t3a', descId: 'cat-th-d3a', title: 'Leaf stomata', desc: 'Gas exchange pores on leaf surface' },
      { imgId: 'cat-th-3b', titleId: 'cat-th-t3b', descId: 'cat-th-d3b', title: 'Xylem vessels', desc: 'Water transport tubes in stem' },
      { imgId: 'cat-th-3c', titleId: 'cat-th-t3c', descId: 'cat-th-d3c', title: 'Seed coat', desc: 'Testa surface of a bean seed' },
    ],
  },
  {
    id: 'cat-4', imgId: 'cat-img-y7z8a9', titleId: 'cat-title-4', descId: 'cat-desc-4',
    title: 'Entomology', desc: 'Insect anatomy and compound eye structures', count: '29 images',
    ratio: '16x9', width: 800,
    thumbs: [
      { imgId: 'cat-th-4a', titleId: 'cat-th-t4a', descId: 'cat-th-d4a', title: 'Compound eye', desc: 'Dragonfly ommatidium array' },
      { imgId: 'cat-th-4b', titleId: 'cat-th-t4b', descId: 'cat-th-d4b', title: 'Wing venation', desc: 'Lacewing wing membrane' },
      { imgId: 'cat-th-4c', titleId: 'cat-th-t4c', descId: 'cat-th-d4c', title: 'Antenna', desc: 'Moth feathered antenna detail' },
    ],
  },
];

const CategoriesSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-black py-24 lg:py-32 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <p className="text-xs tracking-widest uppercase text-neutral-500 mb-4">Collections</p>
          <h2 id="cat-section-title" className="font-light tracking-[0.15em] uppercase text-white text-3xl lg:text-4xl">
            Explore by<br />Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className="group cursor-pointer">
              {/* Main category image */}
              <div className="relative overflow-hidden aspect-video mb-3">
                <img
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}] [cat-section-title]`}
                  data-strk-img-ratio={cat.ratio}
                  data-strk-img-width={cat.width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-xs tracking-widest uppercase text-neutral-400 mb-1">{cat.count}</p>
                  <p id={cat.titleId} className="font-light tracking-[0.15em] uppercase text-white text-xl mb-1">{cat.title}</p>
                  <p id={cat.descId} className="text-xs text-neutral-400 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">{cat.desc}</p>
                </div>
              </div>
              {/* Thumbnail strip */}
              <div className="grid grid-cols-3 gap-2">
                {cat.thumbs.map((th) => (
                  <div key={th.imgId} className="overflow-hidden aspect-video">
                    <img
                      alt={th.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      data-strk-img-id={th.imgId}
                      data-strk-img={`[${th.descId}] [${th.titleId}] [${cat.descId}] [${cat.titleId}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="300"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                    <p id={th.titleId} className="sr-only">{th.title}</p>
                    <p id={th.descId} className="sr-only">{th.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
