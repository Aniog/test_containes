import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[11px] tracking-[0.3em] uppercase text-velmora-gold font-medium mb-3">
            Love Letters
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-velmora-charcoal">
            What Our Customers Say
          </h2>
          <div className="w-16 h-[1px] bg-velmora-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-8 sm:p-10 border border-velmora-border/50 animate-fade-in-up"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <Quote size={24} className="text-velmora-gold/30 mb-4" />
              <p className="text-velmora-charcoal text-sm sm:text-[15px] leading-relaxed mb-6 font-light">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-0.5 mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={12} className="text-velmora-gold fill-velmora-gold" />
                ))}
              </div>
              <p className="text-sm font-medium text-velmora-charcoal">{t.name}</p>
              <p className="text-xs text-velmora-muted mt-0.5">Purchased: {t.product}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
