import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export function CategoryTiles() {
  return (
    <section className="bg-velmora-cream py-16 md:py-24">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <h2 className="mb-10 text-center font-serif text-3xl text-velmora-charcoal md:mb-14 md:text-4xl">
          Shop by Category
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-velmora-charcoal md:aspect-[3/4]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-velmora-taupe via-velmora-charcoal to-velmora-warm-gray transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-velmora-charcoal/30 transition-colors duration-300 group-hover:bg-velmora-charcoal/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="border border-white/40 bg-white/10 px-8 py-4 font-serif text-xl uppercase tracking-widest-xl text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-white/20">
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
