import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ui/ScrollReveal';

const categories = [
  {
    name: 'Earrings',
    description: 'Studs, drops & huggies',
    href: '/shop?category=Earrings',
    bg: 'from-rose to-warm-white',
  },
  {
    name: 'Necklaces',
    description: 'Pendants & chains',
    href: '/shop?category=Necklaces',
    bg: 'from-warm-white to-rose',
  },
  {
    name: 'Huggies',
    description: 'Your everyday essential',
    href: '/shop?category=Huggies',
    bg: 'from-rose/70 to-rose',
  },
];

export default function CategoryTiles() {
  return (
    <section className="section-padding py-20 md:py-28">
      <ScrollReveal>
        <div className="text-center mb-14">
          <p className="text-[11px] tracking-[0.2em] uppercase text-taupe mb-4">Explore</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso tracking-wider">
            Shop by Category
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((cat, idx) => (
          <Link
            key={cat.name}
            to={cat.href}
            className={`group relative aspect-[4/3] overflow-hidden ${idx === 0 ? 'animate-stagger-1' : idx === 1 ? 'animate-stagger-3' : 'animate-stagger-5'}`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${cat.bg}`} />
            <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/10 transition-colors duration-500" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gold-pale/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                <span className="text-gold text-xl">✦</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-espresso tracking-wider mb-1">
                {cat.name}
              </h3>
              <p className="text-xs text-taupe tracking-[0.1em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-1 group-hover:translate-y-0">
                {cat.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}