import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'rods',
    title: 'Fishing Rods',
    desc: 'Spinning, casting, fly rods & more',
    count: '120+ items',
    titleId: 'cat-rods-title',
    descId: 'cat-rods-desc',
    imgId: 'cat-img-rods-d4e5f6',
  },
  {
    id: 'reels',
    title: 'Fishing Reels',
    desc: 'Baitcasting, spinning & fly reels',
    count: '85+ items',
    titleId: 'cat-reels-title',
    descId: 'cat-reels-desc',
    imgId: 'cat-img-reels-g7h8i9',
  },
  {
    id: 'lures',
    title: 'Lures & Baits',
    desc: 'Soft baits, hard lures, jigs & flies',
    count: '200+ items',
    titleId: 'cat-lures-title',
    descId: 'cat-lures-desc',
    imgId: 'cat-img-lures-j1k2l3',
  },
  {
    id: 'apparel',
    title: 'Fishing Apparel',
    desc: 'Hats, vests, waders & UV shirts',
    count: '95+ items',
    titleId: 'cat-apparel-title',
    descId: 'cat-apparel-desc',
    imgId: 'cat-img-apparel-m4n5o6',
  },
];

const Categories = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="categories" className="py-20 md:py-28 bg-white" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 text-sm font-bold uppercase tracking-widest">Shop by Category</span>
          <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mt-3 mb-4">
            Find Your Perfect Gear
          </h2>
          <p className="text-teal-700 max-w-xl mx-auto text-base leading-relaxed">
            Browse our curated selection across all major fishing equipment categories.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  alt={cat.title}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 bg-teal-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 via-teal-900/30 to-transparent" />
              </div>

              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-xs text-amber-400 font-semibold uppercase tracking-wide">{cat.count}</span>
                <h3 id={cat.titleId} className="text-white font-bold text-lg mt-1">{cat.title}</h3>
                <p id={cat.descId} className="text-teal-200 text-xs mt-1">{cat.desc}</p>
                <div className="flex items-center gap-1 mt-3 text-amber-400 text-xs font-semibold group-hover:gap-2 transition-all">
                  Shop Now <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
