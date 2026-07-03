import { Link } from 'react-router-dom';
import { categories } from '../data/products';

export default function CategorySection() {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal mb-3">
            Shop by Category
          </h2>
          <p className="text-velmora-stone">Find your perfect piece</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden bg-velmora-ivory"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-velmora-charcoal/20 group-hover:bg-velmora-charcoal/40 transition-colors duration-300" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-serif text-3xl md:text-4xl text-velmora-cream mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-velmora-cream/80">
                    {category.count} Pieces
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}