import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const categoryTiles = [
  { id: 'cat-earrings', name: 'Earrings', slug: 'earrings', query: 'gold earrings collection flatlay' },
  { id: 'cat-necklaces', name: 'Necklaces', slug: 'necklaces', query: 'gold necklaces collection display' },
  { id: 'cat-huggies', name: 'Huggies', slug: 'huggies', query: 'gold huggie earrings collection' },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-[#FAF9F7]">
      <div className="container-velmora">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#6B6560] mb-3">Explore</p>
          <h2 className="section-title">Shop by Category</h2>
          <div className="w-12 h-px bg-[#C9A96E] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categoryTiles.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.slug}`}
              className="group relative aspect-[4/5] bg-[#E8E4DF] overflow-hidden"
            >
              <div
                data-strk-bg-id={cat.id}
                data-strk-bg={cat.query}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-[#FAF9F7]">
                <h3 className="font-serif text-3xl md:text-4xl mb-3 tracking-wider">{cat.name}</h3>
                <span className="text-xs tracking-[0.2em] uppercase flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Shop Now <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
