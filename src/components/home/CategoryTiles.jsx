import { Link } from 'react-router-dom';

const tiles = [
  {
    id: 'earrings',
    name: 'Earrings',
    query: 'Earrings',
    gradient: 'from-velmora-accent/10 via-velmora-accent-light/20 to-velmora-surface',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    query: 'Necklaces',
    gradient: 'from-velmora-accent-light/10 via-velmora-muted/30 to-velmora-surface',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    query: 'Huggies',
    gradient: 'from-velmora-accent/5 via-velmora-accent-light/40 to-velmora-surface',
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28 bg-velmora-base">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-14 md:mb-20">
          <p className="font-sans text-[10px] tracking-widest uppercase text-velmora-subtle mb-4">
            Curated Collections
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-velmora-dark tracking-wide">
            Shop by Category
          </h2>
          <div className="w-10 h-[1px] bg-velmora-accent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {tiles.map((tile) => (
            <Link
              key={tile.id}
              to={`/shop?category=${tile.query}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tile.gradient}`}>
                {/* Decorative circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full bg-gradient-to-br from-velmora-accent/5 to-transparent opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700" />
              </div>

              {/* Gold line frame */}
              <div className="absolute inset-4 md:inset-6 border border-velmora-border/50 group-hover:border-velmora-accent/30 transition-colors duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-sans text-[10px] tracking-widest uppercase text-velmora-subtle mb-3">
                    Explore
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl tracking-wider text-velmora-dark group-hover:text-velmora-accent-deep transition-colors duration-300">
                    {tile.name}
                  </h3>
                  <div className="w-6 h-[1px] bg-velmora-accent mx-auto mt-4 opacity-0 group-hover:opacity-100 group-hover:w-10 transition-all duration-400" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
