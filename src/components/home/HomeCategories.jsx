import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  { id: 'earrings', title: 'Earrings', path: '/shop?category=Earrings', imgId: 'category-earrings-img', query: 'gold drop earrings lifestyle', titleId: 'category-title-earrings' },
  { id: 'necklaces', title: 'Necklaces', path: '/shop?category=Necklaces', imgId: 'category-necklaces-img', query: 'gold pendant necklace lifestyle', titleId: 'category-title-necklaces' },
  { id: 'huggies', title: 'Huggies', path: '/shop?category=Huggies', imgId: 'category-huggies-img', query: 'gold huggie hoop earrings lifestyle', titleId: 'category-title-huggies' },
];

export default function HomeCategories() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-12 bg-background" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link 
              key={cat.id} 
              to={cat.path}
              className="relative aspect-square md:aspect-[4/5] overflow-hidden group rounded-sm block"
            >
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img={cat.query}
                data-strk-img-id={cat.imgId}
                data-strk-img-ratio="4x5"
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-12">
                <h3 
                  id={cat.titleId}
                  className="text-white font-serif text-3xl mb-4 drop-shadow-sm"
                >
                  {cat.title}
                </h3>
                <span className="text-white text-xs uppercase tracking-widest border-b border-transparent group-hover:border-white pb-1 transition-colors duration-300">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}