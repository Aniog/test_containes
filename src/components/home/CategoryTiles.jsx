import { categories } from '@/data/products';
import { Link } from 'react-router-dom';

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 bg-surface-alt">
      <div className="max-w-container mx-auto px-6 md:px-12">
        <h2 className="font-serif text-3xl md:text-4xl text-text-primary font-normal text-center mb-10 md:mb-14">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="relative aspect-[4/5] overflow-hidden group cursor-pointer border border-hairline"
            >
              <img
                data-strk-img-id={`cat-${cat.id}`}
                data-strk-img={`[cat-name-${cat.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`cat-name-${cat.id}`}
                  className="font-serif text-2xl md:text-3xl text-white tracking-widest uppercase font-normal"
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
