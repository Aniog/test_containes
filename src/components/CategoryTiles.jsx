import { Link } from 'react-router-dom';
import { categories } from '../data/products';

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wider mb-4">Shop by Category</h2>
          <p className="text-velmora-text-muted max-w-md mx-auto">
            Explore our curated collections, each designed with intention and crafted with care.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg"
            >
              {/* Background Image */}
              <img 
                src={category.image} 
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
              
              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-3xl md:text-4xl tracking-widest text-white uppercase transform transition-transform duration-300 group-hover:scale-110">
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