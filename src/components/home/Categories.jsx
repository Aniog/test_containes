import { Link } from 'react-router-dom';
import { categories } from '@/data/products';
import FadeIn from '@/components/FadeIn';

export default function Categories() {
  return (
    <section className="py-16 md:py-24 bg-paper">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-10 md:mb-14">
            <h2 className="font-serif text-2xl md:text-3xl tracking-wide">Shop by Category</h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <FadeIn key={cat.id} delay={0.1}>
              <Link
                to="/shop"
                className="group relative aspect-[4/5] overflow-hidden rounded-sm block"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-serif text-lg md:text-xl tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {cat.name}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-white text-xs font-medium tracking-widest uppercase border-b border-white/60 pb-1">
                    {cat.name}
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
