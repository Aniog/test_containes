import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

export default function CategoryTiles() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-velmora-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-velmora-charcoal tracking-wide">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-sm"
            >
              <img
                src={`https://placehold.co/600x750/ede6db/3d3530?text=${encodeURIComponent(category.name)}`}
                alt={category.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-black/60 via-velmora-black/20 to-transparent transition-opacity duration-300 group-hover:from-velmora-black/70" />
              <div className="absolute inset-0 flex flex-col items-center justify-end p-6 sm:p-8">
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-velmora-white tracking-wide mb-2">
                  {category.name}
                </h3>
                <p className="text-velmora-sand/90 text-xs sm:text-sm text-center max-w-[200px] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  {category.description}
                </p>
                <span className="mt-4 text-velmora-gold text-xs font-semibold tracking-editorial uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
