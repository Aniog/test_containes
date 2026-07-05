import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Earrings',
    slug: 'Earrings',
    gradient: 'from-amber-100/60 via-gold-light/20 to-bronze/15',
    accent: 'border-gold/30',
  },
  {
    name: 'Necklaces',
    slug: 'Necklaces',
    gradient: 'from-stone-100/60 via-sand/30 to-mocha/15',
    accent: 'border-bronze/25',
  },
  {
    name: 'Huggies',
    slug: 'Huggies',
    gradient: 'from-cream/80 via-sand/40 to-gold-light/20',
    accent: 'border-gold-light/30',
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-taupe mb-3">Shop by Category</p>
          <h2 className="font-serif text-3xl lg:text-4xl text-oxford">Find Your Piece</h2>
          <div className="mt-4 w-[60px] h-[1px] bg-gold/40 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/shop/${cat.slug}`}
              className="group relative aspect-[4/5] rounded-sm overflow-hidden"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient}`} />

              {/* Subtle pattern */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-2 border-mocha/10 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-bronze/15 group-hover:scale-125 transition-transform duration-700" />
              </div>

              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className={`inline-block px-6 py-3 border ${cat.accent} text-oxford font-serif text-xl lg:text-2xl tracking-wider group-hover:bg-cream/80 transition-colors duration-300`}>
                    {cat.name}
                  </span>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gold group-hover:w-12 transition-all duration-500" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
