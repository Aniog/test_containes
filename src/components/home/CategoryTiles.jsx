import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-deep-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="section-subheading">CURATED FOR YOU</p>
          <h2 className="section-heading mt-2">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop/${cat.id}`}
              className="group relative overflow-hidden rounded-sm aspect-[4/5] bg-cream-200 block"
            >
              <img
                data-strk-img-id={`cat-${cat.id}`}
                data-strk-img={`[cat-name-${cat.id}] fine gold jewelry editorial`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-950/70 via-deep-950/10 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3
                  className="font-serif text-2xl md:text-3xl text-white font-medium"
                  id={`cat-name-${cat.id}`}
                >
                  {cat.name}
                </h3>
                <div className="flex items-center gap-2 text-cream-200/80 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
