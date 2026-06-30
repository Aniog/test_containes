import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Earrings',
    image:
      'https://images.unsplash.com/photo-1617038224558-28ad3fb558a7?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Necklaces',
    image:
      'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Huggies',
    image:
      'https://images.unsplash.com/photo-1630019852942-f89202989a51?auto=format&fit=crop&w=800&q=80',
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-velmora-stone mb-3">
            Explore
          </p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to="/shop"
              className="relative aspect-[4/5] overflow-hidden group"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-velmora-base/30 group-hover:bg-velmora-base/20 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-2xl md:text-3xl text-white tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {cat.name}
                </span>
              </div>
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <span className="text-xs uppercase tracking-[0.3em] text-white/80 bg-velmora-base/40 px-4 py-2 backdrop-blur-sm">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
