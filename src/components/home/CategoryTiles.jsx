import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2]">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-sans font-medium tracking-[0.2em] text-[#C9A66B] uppercase mb-3">
            Shop by Category
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#3D3833]">
            Find Your Perfect Piece
          </h2>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(category => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-[#F5F1EB]"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-[#2A2520]/30 group-hover:bg-[#2A2520]/50 transition-colors duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-2 transform transition-transform duration-300 group-hover:-translate-y-2">
                  {category.name}
                </h3>
                <p className="text-sm text-white/80 opacity-0 transform transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4">
                  {category.description}
                </p>
              </div>

              {/* Hover Arrow */}
              <div className="absolute bottom-6 right-6 w-10 h-10 border border-white/40 flex items-center justify-center opacity-0 transform transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
