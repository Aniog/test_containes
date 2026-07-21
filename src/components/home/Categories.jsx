import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

export default function Categories() {
  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2]">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Shop by Category</h2>
          <p className="text-[#6B6560] max-w-md mx-auto">
            Discover our curated collections, each designed with intention and crafted with care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="relative group overflow-hidden aspect-[3/4]"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-serif text-2xl md:text-3xl tracking-widest uppercase border border-white/50 px-8 py-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
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