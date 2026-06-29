import { Link } from 'react-router-dom';
import { categories } from '@/data/products';
import { cn } from '@/lib/utils';

const SVG_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export function CategoryTiles() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-velmora-stone uppercase tracking-[0.2em] text-sm mb-2">
            Explore
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-velmora-espresso">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-velmora-espresso"
            >
              <img
                alt=""
                data-strk-img-id={`category-${category.id}`}
                data-strk-img={`[category-title-${category.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src={SVG_PLACEHOLDER}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-velmora-espresso/20 group-hover:bg-velmora-espresso/10 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`category-title-${category.id}`}
                  className={cn(
                    'font-serif text-2xl md:text-3xl text-white tracking-[0.12em]',
                    'px-6 py-3 border border-white/40 backdrop-blur-sm',
                    'transition-all duration-300 group-hover:bg-white/10 group-hover:border-white'
                  )}
                >
                  {category.label}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
