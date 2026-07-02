import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const categoryTiles = [
  {
    id: 'earrings',
    label: 'Earrings',
    search: 'gold earrings jewelry collection warm editorial',
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    search: 'gold necklace pendant jewelry collection warm editorial',
  },
  {
    id: 'huggies',
    label: 'Huggies',
    search: 'gold huggie hoop earrings jewelry collection warm editorial',
  },
];

export default function ShopByCategory() {
  const headerRef = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 bg-ivory-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="animate-on-scroll text-center mb-12">
          <p className="text-xs tracking-mega-wide uppercase text-gold-500 font-medium mb-3">Explore</p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-900 font-light">
            Shop by Category
          </h2>
          <div className="w-16 h-[1px] bg-gold-400 mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categoryTiles.map((cat, i) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden aspect-[3/4] md:aspect-[4/5]"
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={`category-tile-${cat.id}-${i}`}
                data-strk-bg={cat.search}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-charcoal-900/30 group-hover:bg-charcoal-900/40 transition-colors duration-300" />

              <div className="absolute inset-0 flex items-end justify-center pb-10">
                <div className="text-center">
                  <h3 className="font-serif text-2xl md:text-3xl text-ivory-50 tracking-wide mb-2">
                    {cat.label}
                  </h3>
                  <span className="inline-block text-[10px] tracking-widest uppercase text-ivory-200 border-b border-ivory-300/40 pb-0.5 group-hover:border-gold-400/60 group-hover:text-gold-300 transition-colors duration-300">
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
