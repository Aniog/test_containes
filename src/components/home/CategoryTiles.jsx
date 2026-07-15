import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const categories = [
  { id: 'earrings', name: 'Earrings', path: '/shop?category=earrings', desc: 'Drop earrings, huggies, and cuffs' },
  { id: 'necklaces', name: 'Necklaces', path: '/shop?category=necklaces', desc: 'Pendants, chains, and layered looks' },
  { id: 'sets', name: 'Huggies', path: '/shop?category=earrings', desc: 'Chunky dome and classic hoop styles' },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 md:mb-12">
          <p className="section-subtitle mb-3">Browse by Category</p>
          <h2 className="section-title">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.path}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-velvet-100"
            >
              <img
                data-strk-img-id={`cat-${cat.id}`}
                data-strk-img={`[cat-title-${cat.id}] [cat-desc-${cat.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <h3 id={`cat-title-${cat.id}`} className="font-serif text-2xl md:text-3xl text-white mb-2">
                    {cat.name}
                  </h3>
                  <p id={`cat-desc-${cat.id}`} className="text-sm text-white/70 mb-4 text-center">
                    {cat.desc}
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-gold-300 font-medium">
                    Shop Now <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Default label (visible when not hovered) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="font-serif text-xl md:text-2xl text-white drop-shadow-lg">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}