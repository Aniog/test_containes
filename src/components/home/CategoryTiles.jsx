import { Link } from 'react-router-dom';

const tiles = [
  { name: 'Earrings', href: '/shop?category=Earrings', gradient: 'from-gold/20 via-gold/10 to-sand/40' },
  { name: 'Necklaces', href: '/shop?category=Necklaces', gradient: 'from-rose/15 via-gold/10 to-sand/30' },
  { name: 'Huggies', href: '/shop?category=Huggies', gradient: 'from-gold/15 via-rose/5 to-sand/40' },
];

export default function CategoryTiles() {
  return (
    <section className="section-padding py-20 md:py-28">
      <div className="text-center mb-14">
        <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold mb-4">Curated For You</p>
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiles.map((tile) => (
          <Link
            key={tile.name}
            to={tile.href}
            className="group relative aspect-[4/5] overflow-hidden bg-sand/20"
          >
            <div className={`absolute inset-0 bg-gradient-to-b ${tile.gradient} transition-transform duration-700 group-hover:scale-105`} />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-2xl md:text-3xl text-charcoal tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-cream/80 px-8 py-3">
                {tile.name}
              </span>
            </div>
            {/* Default label */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="font-serif text-xl tracking-widest uppercase text-charcoal group-hover:opacity-0 transition-opacity duration-300">
                {tile.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
