import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'cat-1',
    imgId: 'cat-img-p7q8r9',
    titleId: 'cat-title-1',
    descId: 'cat-desc-1',
    title: 'Cellular',
    desc: 'The architecture of life at the cellular level',
    count: '48 images',
    ratio: '16x9',
    width: 800,
  },
  {
    id: 'cat-2',
    imgId: 'cat-img-s1t2u3',
    titleId: 'cat-title-2',
    descId: 'cat-desc-2',
    title: 'Mineral',
    desc: 'Crystalline structures and geological formations',
    count: '36 images',
    ratio: '16x9',
    width: 800,
  },
  {
    id: 'cat-3',
    imgId: 'cat-img-v4w5x6',
    titleId: 'cat-title-3',
    descId: 'cat-desc-3',
    title: 'Botanical',
    desc: 'Plant tissues, spores, and pollen in extreme detail',
    count: '52 images',
    ratio: '16x9',
    width: 800,
  },
  {
    id: 'cat-4',
    imgId: 'cat-img-y7z8a9',
    titleId: 'cat-title-4',
    descId: 'cat-desc-4',
    title: 'Entomology',
    desc: 'Insect anatomy and compound eye structures',
    count: '29 images',
    ratio: '16x9',
    width: 800,
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
            <div key={cat.id} className="group relative overflow-hidden cursor-pointer">
              <div className="relative overflow-hidden aspect-video">
                <img
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}] [cat-section-title]`}
                  data-strk-img-ratio={cat.ratio}
                  data-strk-img-width={cat.width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs tracking-widest uppercase text-neutral-400 mb-1">{cat.count}</p>
                  <p id={cat.titleId} className="font-light tracking-[0.15em] uppercase text-white text-xl mb-1">{cat.title}</p>
                  <p id={cat.descId} className="text-xs text-neutral-400 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">{cat.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
