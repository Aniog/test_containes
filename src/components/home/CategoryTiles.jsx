import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    description: 'Ear cuffs, studs, and drops',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    description: 'Chains, pendants, and layers',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
    description: 'Classic and modern hoops',
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-xs uppercase tracking-ultra-wide text-taupe mb-3">
            Shop by Category
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
            Find Your Perfect Piece
          </h2>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/collection?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden stagger-item"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                <h3 className="font-serif text-2xl lg:text-3xl text-cream mb-2">
                  {category.name}
                </h3>
                <p className="text-cream/70 text-sm mb-4">
                  {category.description}
                </p>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-cream/80 group-hover:text-cream transition-colors">
                  Shop Now
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
