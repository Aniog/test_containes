import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    imgId: 'cat-earrings-img-e4f1a2',
    query: 'gold earrings jewelry elegant close up',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    imgId: 'cat-necklaces-img-b7c3d4',
    query: 'gold necklace jewelry elegant pendant',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    imgId: 'cat-huggies-img-f9a2b5',
    query: 'gold huggie hoop earrings jewelry close up',
  },
];

export default function Categories() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-text mb-3">
            Shop by Category
          </h2>
          <p className="text-text-secondary text-sm max-w-md mx-auto">
            Find the perfect piece for every occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/collection?cat=${cat.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] rounded-lg overflow-hidden"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={cat.query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-500" />
              {/* Label */}
              <div className="absolute inset-0 flex items-end p-6">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl text-white uppercase tracking-wider mb-1">
                    {cat.name}
                  </h3>
                  <span className="text-white/70 text-xs uppercase tracking-wider font-sans group-hover:text-white transition-colors duration-300">
                    Explore &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
