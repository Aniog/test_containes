import { Link } from 'react-router-dom';

const tiles = [
  { label: 'Earrings', href: '/shop?category=Earrings', image: 'gold-earrings-lifestyle-warm' },
  { label: 'Necklaces', href: '/shop?category=Necklaces', image: 'gold-necklaces-lifestyle-warm' },
  { label: 'Huggies', href: '/shop?category=Huggies', image: 'gold-huggies-lifestyle-warm' },
];

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title">Shop by Category</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {tiles.map((tile) => (
            <Link
              key={tile.label}
              to={tile.href}
              className="group relative aspect-[4/5] bg-warm-200 overflow-hidden"
            >
              <div className="w-full h-full bg-warm-300 transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-charcoal-900/20 group-hover:bg-charcoal-900/40 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-3xl md:text-4xl text-cream-50 tracking-[0.1em] transition-transform duration-500 group-hover:scale-105">
                  {tile.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}