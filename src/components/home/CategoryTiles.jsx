import { Link } from 'react-router-dom';

const tiles = [
  {
    name: 'Earrings',
    link: '/shop?category=earrings',
    gradient: 'from-velmora-gold/30 to-velmora-charcoal/20',
  },
  {
    name: 'Necklaces',
    link: '/shop?category=necklaces',
    gradient: 'from-velmora-gold/20 to-velmora-charcoal/30',
  },
  {
    name: 'Huggies',
    link: '/shop?category=huggies',
    gradient: 'from-velmora-gold/25 to-velmora-charcoal/15',
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-14 md:mb-16">
          <p className="caption mb-3">Explore</p>
          <h2 className="heading-lg text-velmora-charcoal">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {tiles.map((tile) => (
            <Link
              key={tile.name}
              to={tile.link}
              className="group relative aspect-[4/5] md:aspect-[3/4] bg-velmora-sand overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tile.gradient}`} />
              <div className="absolute inset-0 bg-velmora-charcoal/0 group-hover:bg-velmora-charcoal/20 transition-colors duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-2xl md:text-3xl text-white/90 tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                  {tile.name}
                </span>
              </div>

              {/* Always-visible label on mobile */}
              <div className="absolute bottom-5 left-5 md:hidden">
                <span className="font-serif text-xl text-white tracking-wider uppercase">
                  {tile.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
