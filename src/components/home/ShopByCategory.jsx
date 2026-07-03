import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '../../data/products';

const ShopByCategory = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-3">Shop by Category</h2>
          <p className="text-slate max-w-md mx-auto">
            Find your perfect piece
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden rounded"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/20 to-transparent" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="font-serif text-white text-2xl md:text-3xl font-normal mb-2">
                  {category.name}
                </h3>
                <p className="text-white/70 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {category.description}
                </p>
                <div className="flex items-center gap-2 text-white text-xs uppercase tracking-wide">
                  <span>Shop Now</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
