import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/products';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Testimonials = () => {
  const sectionRef = useScrollReveal(0.1);

  return (
    <section ref={sectionRef} className="reveal py-20 md:py-28 bg-surface-secondary/50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-mega-wide text-gold mb-3">Testimonials</p>
          <h2 className="heading-serif text-3xl md:text-5xl text-brand-50">What Our Customers Say</h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-surface-card border border-gold/8 p-8 flex flex-col"
            >
              <Quote size={24} className="text-gold/30 mb-4" />
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    className={i < t.rating ? 'text-gold fill-gold' : 'text-brand-700'}
                  />
                ))}
              </div>
              <p className="text-brand-200 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <p className="text-brand-100 text-sm font-medium">{t.name}</p>
                <p className="text-brand-600 text-xs mt-0.5">Purchased: {t.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
