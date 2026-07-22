import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-[0.15em] uppercase text-[#C9A96E] mb-3 font-sans">Browse by</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#F5F0EB] font-serif">Shop by Category</h2>
          <div className="w-12 h-[1px] bg-[#C9A96E] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-[#1A1A1A]"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#0F0F0F]/40 group-hover:bg-[#0F0F0F]/20 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl md:text-2xl text-[#F5F0EB] font-serif tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
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