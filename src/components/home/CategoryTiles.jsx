import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categoryTiles = [
  {
    id: 'earrings',
    name: 'Earrings',
    imageId: 'cat-earrings-a1b2c3',
    query: '[cat-earrings-title]',
    path: '/shop?category=earrings',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    imageId: 'cat-necklaces-d4e5f6',
    query: '[cat-necklaces-title]',
    path: '/shop?category=necklaces',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    imageId: 'cat-huggies-g7h8i9',
    query: '[cat-huggies-title]',
    path: '/shop?category=huggies',
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="section-padding bg-stone-50" ref={containerRef}>
      <div className="container-wide">
        <div className="text-center mb-12">
          <p className="text-amber-700 text-sm tracking-[0.3em] uppercase mb-3">Browse</p>
          <h2 className="serif-heading text-4xl md:text-5xl text-stone-900">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categoryTiles.map((cat) => (
            <Link
              key={cat.id}
              to={cat.path}
              className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={cat.imageId}
                data-strk-bg={cat.query}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/photo-${
                    cat.id === 'earrings' ? '1535632066659-747a7880063f' :
                    cat.id === 'necklaces' ? '1599643899867-0709b5685c3f' :
                    '1630018089058-5f085f54669e'
                  }?w=800&q=80)`,
                }}
              />
              <div className="absolute inset-0 bg-stone-900/30 group-hover:bg-stone-900/50 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3
                    id={`cat-${cat.id}-title`}
                    className="product-name text-2xl md:text-3xl text-stone-50 tracking-[0.2em] group-hover:tracking-[0.3em] transition-all duration-500"
                  >
                    {cat.name}
                  </h3>
                  <div className="mt-4 w-12 h-px bg-stone-50 mx-auto group-hover:w-20 transition-all duration-500" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
