import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

const categoryImages = {
  earrings: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop&q=80',
  necklaces: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop&q=80',
  huggies: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&h=800&fit=crop&q=80',
};

export default function CategoryTiles() {
  return (
    <section className="section bg-[var(--color-ivory)]">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)] mb-3">
            Curated Collections
          </p>
          <h2 className="heading-2 text-[var(--color-charcoal)]">Shop by Category</h2>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] rounded-lg overflow-hidden"
            >
              {/* Background Image */}
              <img
                src={categoryImages[category.id]}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-[var(--color-charcoal)]/30 group-hover:bg-[var(--color-charcoal)]/50 transition-colors duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                <h3 className="font-serif text-3xl md:text-4xl tracking-wide mb-2 transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">
                  {category.name}
                </h3>
                <p className="text-sm text-white/80 tracking-wide transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300 delay-75">
                  {category.description}
                </p>

                {/* Arrow */}
                <div className="mt-6 w-8 h-8 rounded-full border border-white/50 flex items-center justify-center transform opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-y-0 translate-y-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
