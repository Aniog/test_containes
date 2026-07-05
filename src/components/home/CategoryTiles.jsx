import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const cats = [
  { name: 'Earrings', slug: 'earrings', id: 'cat-earrings', desc: 'gold drop earrings jewelry' },
  { name: 'Necklaces', slug: 'necklaces', id: 'cat-necklaces', desc: 'gold chain necklace jewelry' },
  { name: 'Huggies', slug: 'huggies', id: 'cat-huggies', desc: 'gold huggie hoop earrings jewelry' },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-muted" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal text-center mb-12">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {cats.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.slug}`}
              className="group relative aspect-[4/5] overflow-hidden bg-dark-surface"
            >
              <span id={`${cat.id}-desc`} className="sr-only">{cat.desc}</span>
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={`${cat.id}-tile-bg-8d2f`}
                data-strk-bg={`[${cat.id}-desc] [${cat.id}-label]`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="600"
                style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-end p-6">
                <h3
                  id={`${cat.id}-label`}
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
