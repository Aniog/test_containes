import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  { name: 'Earrings', slug: 'Earrings', query: 'gold earrings jewelry editorial', ratio: '4x3', width: 800 },
  { name: 'Necklaces', slug: 'Necklaces', query: 'gold necklace jewelry editorial', ratio: '4x3', width: 800 },
  { name: 'Huggies', slug: 'Earrings', query: 'gold huggie earrings closeup', ratio: '4x3', width: 800 },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 border-t border-cream-400/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4 font-medium">Shop By</p>
          <h2 className="serif-heading text-3xl md:text-4xl text-cream-100">Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <Link
              key={cat.name}
              to={cat.name === 'Huggies' ? `/shop?category=${cat.slug}&subcategory=Huggies` : `/shop?category=${cat.slug}`}
              className="group relative aspect-[4/3] overflow-hidden bg-espresso-700"
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={`cat-tile-${i}-bg`}
                data-strk-bg={`[cat-name-${i}] ${cat.query}`}
                data-strk-bg-ratio={cat.ratio}
                data-strk-bg-width={cat.width}
              >
                <div className="w-full h-full bg-espresso-700" />
              </div>
              <div className="absolute inset-0 bg-espresso/40 group-hover:bg-espresso/50 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-end p-6 md:p-8">
                <span
                  id={`cat-name-${i}`}
                  className="serif-heading text-2xl md:text-3xl text-cream-100 tracking-[0.06em]"
                >
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
