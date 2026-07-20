import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Studs, drops & filigree',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80'
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Chains, pendants & layers',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80'
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Dome & hoop earrings',
    image: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80'
  }
];

export default function CategorySection() {
  return (
    <section className="py-20 md:py-28 bg-[var(--velmora-ivory)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-sm tracking-widest uppercase text-[var(--velmora-taupe)] mb-3 block">
            Curated Collections
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--velmora-charcoal)]">
            Shop by Category
          </h2>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/collections?category=${category.id}`}
              className="group relative aspect-[4/5] rounded-lg overflow-hidden"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity group-hover:opacity-80" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">
                  {category.name}
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  {category.description}
                </p>
                <span className="inline-flex items-center gap-2 text-white text-sm tracking-wider uppercase opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Shop Now
                  <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
