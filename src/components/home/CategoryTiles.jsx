import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

export default function CategoryTiles() {
  return (
    <section className="section-padding py-16 md:py-24">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-velmora-ink">
          Shop by Category
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.id}`}
            className="group relative aspect-[3/4] bg-velmora-sand/30 overflow-hidden"
          >
            <div className="absolute inset-0 bg-velmora-sand/50 flex items-center justify-center">
              <span className="text-velmora-stone/40 text-xs tracking-wider">
                {cat.name.toUpperCase()}
              </span>
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-velmora-ink/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <span className="text-white font-serif text-xl md:text-2xl tracking-wider">
                {cat.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}