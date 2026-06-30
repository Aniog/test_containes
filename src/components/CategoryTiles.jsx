import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-serif text-2xl md:text-4xl text-text-primary">
            Shop by Category
          </h2>
          <p className="mt-2 text-sm text-warm-gray">Find your perfect piece</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm bg-warm-dark"
            >
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-gold-accent/0 group-hover:bg-gold-accent/10 transition-colors duration-500" />

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex items-center gap-2">
                  <h3 className="font-serif text-xl md:text-2xl text-white">{category.name}</h3>
                  <ArrowUpRight className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0" />
                </div>
                <p className="text-sm text-white/60 mt-1">{category.count} pieces</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}