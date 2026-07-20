import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  { id: 'earrings', name: 'Earrings', imgId: 'cat-earrings' },
  { id: 'necklaces', name: 'Necklaces', imgId: 'cat-necklaces' },
  { id: 'hoop-earrings', name: 'Hoop Earrings', imgId: 'cat-hoop-earrings' },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding py-16 lg:py-20">
      {/* Hidden text elements for background image queries */}
      <span id="category-tiles" className="sr-only">Shop by Category</span>
      {categories.map(cat => (
        <span key={cat.imgId} id={`${cat.imgId}-label`} className="sr-only">
          {cat.name}
        </span>
      ))}

      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Browse By</p>
        <h2 className="serif-heading text-3xl lg:text-4xl">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        {categories.map(cat => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.id}`}
            className="group relative aspect-[4/5] rounded-sm overflow-hidden bg-secondary"
          >
            <div
              data-strk-bg-id={cat.imgId}
              data-strk-bg={`[${cat.imgId}-label] [category-tiles]`}
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/40 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h3 className="product-name text-2xl lg:text-3xl text-primary-foreground mb-3 tracking-[0.2em]">
                  {cat.name}
                </h3>
                <span className="inline-block text-xs tracking-widest uppercase text-primary-foreground/80 border-b border-primary-foreground/40 pb-1 group-hover:border-accent group-hover:text-accent transition-colors duration-300">
                  Explore
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
