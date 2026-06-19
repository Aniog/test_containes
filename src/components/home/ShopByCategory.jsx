import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/lib/useScrollAnimation';

const categories = [
  { id: 'earrings', name: 'Earrings', query: 'gold earrings dark background luxury' },
  { id: 'necklaces', name: 'Necklaces', query: 'gold necklace dark background luxury' },
  { id: 'huggies', name: 'Huggies', query: 'gold huggie earrings dark background luxury' },
];

export default function ShopByCategory() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section className="py-16 lg:py-24 bg-brand-sand/30" ref={ref}>
      <div className="section-padding">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-brand-gold mb-3">
            Browse
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl text-brand-charcoal">Shop by Category</h2>
          <div className="hairline-divider max-w-[60px] mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((cat, i) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className={`group relative aspect-[4/5] overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div
                className="absolute inset-0 bg-brand-sand transition-transform duration-700 group-hover:scale-105"
                data-strk-img-id={`cat-${cat.id}`}
                data-strk-img={cat.query}
                data-strk-img-ratio="4x5"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-brand-charcoal/30 group-hover:bg-brand-charcoal/50 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-end justify-center pb-10">
                <div className="text-center">
                  <h3 className="font-serif text-2xl lg:text-3xl text-brand-cream tracking-wide">{cat.name}</h3>
                  <span className="inline-block mt-2 text-xs tracking-[0.2em] uppercase text-brand-gold-light opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
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
