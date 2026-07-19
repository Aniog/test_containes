import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const categoryTiles = [
  { id: 'earrings', name: 'Earrings', query: 'gold earrings jewelry' },
  { id: 'necklaces', name: 'Necklaces', query: 'gold necklace pendant jewelry' },
  { id: 'huggies', name: 'Huggies', query: 'gold huggie hoop earrings' },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-background">
      <div className="container-padding">
        <h2 className="serif-heading text-3xl md:text-4xl text-center mb-12">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categoryTiles.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-muted"
            >
              <div
                data-strk-bg-id={`category-${cat.id}-bg`}
                data-strk-bg={`[category-${cat.id}-title] [category-section-title]`}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
                className="w-full h-full transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/40 transition-colors duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3
                  id={`category-${cat.id}-title`}
                  className="serif-heading text-3xl md:text-4xl mb-4 tracking-wider"
                >
                  {cat.name}
                </h3>
                <div className="flex items-center gap-2 text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
