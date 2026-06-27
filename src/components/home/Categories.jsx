import { Link } from 'react-router-dom';

const categories = [
  {
    slug: 'earrings',
    label: 'Earrings',
    gradient: 'from-amber-900/80 to-stone-900',
  },
  {
    slug: 'necklaces',
    label: 'Necklaces',
    gradient: 'from-rose-900/60 to-stone-900',
  },
  {
    slug: 'huggies',
    label: 'Huggies',
    gradient: 'from-yellow-900/60 to-stone-900',
  },
];

export default function Categories() {
  return (
    <section className="py-16 sm:py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl text-dark-900 text-center mb-12 sm:mb-16">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/shop?category=${cat.slug}`}
              className="group relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${cat.gradient} transition-transform duration-700 group-hover:scale-105`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-gold-300/30 text-4xl sm:text-5xl italic tracking-wide">
                    {cat.label}
                  </span>
                </div>
              </div>
              {/* Label overlay */}
              <div className="absolute inset-0 flex items-end justify-center pb-8 sm:pb-10">
                <div className="text-center">
                  <h3 className="font-serif text-xl sm:text-2xl text-white tracking-wide mb-1">
                    {cat.label}
                  </h3>
                  <span className="text-xs text-gold-300 tracking-[0.2em] uppercase font-sans group-hover:tracking-[0.3em] transition-all duration-300">
                    Explore
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
