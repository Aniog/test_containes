import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  { name: 'Earrings', slug: 'earrings', imgId: 'cat-earrings-d4e5f6' },
  { name: 'Necklaces', slug: 'necklaces', imgId: 'cat-necklaces-g7h8i9' },
  { name: 'Huggies', slug: 'huggies', imgId: 'cat-huggies-j1k2l3' },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-espresso">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/shop?category=${cat.slug}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-dark"
            >
              <div
                className="absolute inset-0 group-hover:scale-105 transition-transform duration-500"
                data-strk-bg-id={cat.imgId}
                data-strk-bg={`[cat-${cat.slug}-label]`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="600"
                style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`cat-${cat.slug}-label`}
                  className="font-serif text-2xl md:text-3xl text-white"
                >
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
