import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Ear cuffs, huggies & drops',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Pendants & chains',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Gold dome favorites',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
  },
];

export default function CategoryTiles() {
  return (
    <section className="section-spacing bg-ivory">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">
            Curated Collections
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-espresso">
            Shop by Category
          </h2>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden bg-espresso"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/30 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <h3 className="font-serif text-2xl md:text-3xl text-ivory mb-2 transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-300">
                  {category.name}
                </h3>
                <p className="text-sm text-champagne/80 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                  {category.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                  <span className="text-sm font-medium tracking-wider uppercase">
                    Shop Now
                  </span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
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
