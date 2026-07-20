import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-h2 text-charcoal mb-4">Shop by Category</h2>
          <p className="text-charcoal-light max-w-md mx-auto">
            Discover our curated collections, each designed with intention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden bg-cream-dark"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/40 transition-colors duration-300" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-3xl md:text-h2 text-cream opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {category.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}