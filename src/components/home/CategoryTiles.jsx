import { Link } from 'react-router-dom';

const tiles = [
  {
    id: 'earrings',
    name: 'Earrings',
    slug: 'earrings',
    tone: 'from-espresso-100 via-espresso-50 to-gold-600',
    accent: 'bg-gold/20',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    slug: 'necklaces',
    tone: 'from-espresso-200 via-gold-600 to-espresso-100',
    accent: 'bg-gold/30',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    slug: 'huggies',
    tone: 'from-gold-600 via-espresso-100 to-espresso-50',
    accent: 'bg-gold/25',
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl lg:text-4xl tracking-widest uppercase text-espresso">
            Shop by Category
          </h2>
          <div className="mt-4 mx-auto w-12 h-px bg-gold" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiles.map((tile) => (
            <Link
              key={tile.id}
              to={`/shop?category=${tile.slug}`}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tile.tone}`}>
                <div className={`absolute inset-0 ${tile.accent}`} />
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <span className="text-cream/50 text-8xl font-serif">✦</span>
                </div>
              </div>
              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center transform transition-all duration-500 group-hover:scale-105">
                  <span className="font-serif text-2xl lg:text-3xl tracking-widest uppercase text-cream">
                    {tile.name}
                  </span>
                  <div className="mt-3 mx-auto w-8 h-px bg-gold transition-all duration-500 group-hover:w-16" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
