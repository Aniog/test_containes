import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    slug: 'earrings',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    slug: 'necklaces',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    slug: 'huggies',
  },
];

export default function ShopByCategory() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[11px] tracking-[0.3em] uppercase text-velmora-gold font-medium mb-3">
            Browse
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-velmora-charcoal">
            Shop by Category
          </h2>
          <div className="w-16 h-[1px] bg-velmora-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((cat, i) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.slug}`}
              className="group relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden animate-fade-in"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div
                className="absolute inset-0"
                data-strk-bg-id={`category-${cat.id}-bg-9e4c2f`}
                data-strk-bg={`[category-${cat.id}-label] gold jewelry collection`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="800"
              >
                <div className="w-full h-full bg-gradient-to-b from-velmora-sand via-velmora-warm to-velmora-taupe/40" />
              </div>

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-velmora-charcoal/20 group-hover:bg-velmora-charcoal/40 transition-all duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex items-end justify-center pb-8 sm:pb-10">
                <div className="text-center">
                  <span
                    id={`category-${cat.id}-label`}
                    className="font-serif text-2xl sm:text-3xl text-white tracking-wide block mb-2"
                  >
                    {cat.name}
                  </span>
                  <span className="text-[11px] tracking-[0.2em] uppercase text-white/70 font-medium group-hover:text-velmora-gold-light transition-colors duration-300">
                    Shop Now
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
