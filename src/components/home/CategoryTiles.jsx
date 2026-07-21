import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
    description: 'Ear cuffs, studs, and drops'
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    description: 'Chains, pendants, and sets'
  },
  {
    id: 'huggies',
    name: 'Huggies',
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80',
    description: 'Classic and modern hoops'
  }
];

const CategoryTiles = () => {
  return (
    <section className="section bg-[var(--color-bg-primary)]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--color-gold)] mb-3 block">
            Curated Collections
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)]">
            Shop by Category
          </h2>
        </div>
        
        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/collection?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden bg-[var(--color-surface)]"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
                <h3 className="font-serif text-2xl md:text-3xl text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-gold)] transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {category.description}
                </p>
                <span className="mt-4 text-xs tracking-widest uppercase text-[var(--color-gold)] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
