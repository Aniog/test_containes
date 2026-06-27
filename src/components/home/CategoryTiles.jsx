import { Link } from 'react-router-dom';

const categories = [
  { name: 'Earrings', slug: 'earrings', count: '24 pieces' },
  { name: 'Necklaces', slug: 'necklaces', count: '18 pieces' },
  { name: 'Huggies', slug: 'huggies', count: '12 pieces' },
];

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-velmora-gold mb-2">
            Browse
          </p>
          <h2 className="font-serif text-[28px] md:text-[38px] font-light text-velmora-charcoal">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/shop?category=${cat.slug}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] bg-velmora-charcoal rounded-sm overflow-hidden"
            >
              {/* Image placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full border border-velmora-gold/30 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                  <div className="w-3 h-3 bg-velmora-gold rounded-full" />
                </div>
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-400" />
              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <h3 className="font-serif text-[22px] md:text-[26px] font-medium tracking-[0.08em] uppercase text-white mb-1">
                  {cat.name}
                </h3>
                <p className="font-sans text-[11px] text-white/60 tracking-wider opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                  {cat.count}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}