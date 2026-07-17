import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const bgGradients = {
  earrings: 'from-velmora-bronze/40 via-velmora-sand/30 to-velmora-bronze/40',
  necklaces: 'from-velmora-rose/30 via-velmora-sand/30 to-velmora-rose/30',
  huggies: 'from-velmora-gold/30 via-velmora-sand/30 to-velmora-gold/30',
};

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="container-wide section-padding">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-super uppercase text-velmora-gold mb-3">Shop By</p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-ink">Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.name}`}
              className="group relative aspect-[4/5] overflow-hidden bg-velmora-sand"
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${bgGradients[cat.id] || 'from-velmora-sand/50 to-velmora-sand/50'}`} />
              {/* Decorative circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-velmora-gold/10 group-hover:bg-velmora-gold/20 transition-all duration-500 group-hover:scale-110" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="font-serif text-2xl md:text-3xl text-velmora-ink tracking-wide mb-2 group-hover:text-velmora-gold-deep transition-colors">
                  {cat.name}
                </h3>
                <p className="font-sans text-xs tracking-wider uppercase text-velmora-taupe">
                  {cat.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}