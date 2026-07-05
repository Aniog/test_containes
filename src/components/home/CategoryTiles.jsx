import { Link } from 'react-router-dom';

const tiles = [
  { name: 'Earrings', slug: 'earrings', gradient: 'from-velmora-gold/30 via-velmora-cream to-velmora-sand/50' },
  { name: 'Necklaces', slug: 'necklaces', gradient: 'from-velmora-rose/20 via-velmora-cream to-velmora-sand/40' },
  { name: 'Huggies', slug: 'huggies', gradient: 'from-velmora-gold-dark/25 via-velmora-cream to-velmora-gold/20' },
];

export default function CategoryTiles() {
  return (
    <section className="py-20 lg:py-28 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-velmora-taupe mb-3">
            Curated Categories
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl text-velmora-espresso font-medium">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiles.map((tile) => (
            <Link
              key={tile.slug}
              to={`/shop?category=${tile.slug}`}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tile.gradient}`} />

              {/* Decorative circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-white/40 blur-sm transition-transform duration-500 group-hover:scale-125" />

              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-serif text-2xl lg:text-3xl text-velmora-espresso font-medium tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {tile.name}
                  </p>
                </div>
              </div>

              {/* Always-visible label on bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-velmora-espresso/60 to-transparent group-hover:from-transparent transition-all duration-300">
                <p className="font-serif text-xl text-white tracking-wider group-hover:opacity-0 transition-opacity duration-200">
                  {tile.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
