import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-brand-ivory">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-brand-gold text-[11px] tracking-[0.3em] uppercase font-sans mb-3">
            Loved by Thousands
          </p>
          <h2 className="font-serif text-3xl lg:text-5xl text-brand-charcoal font-light">
            What Our Customers Say
          </h2>
          <div className="w-16 h-px bg-brand-gold/40 mx-auto mt-5" />
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-brand-cream/60 border border-brand-cream-dark p-6 lg:p-8 relative"
            >
              <Quote size={24} className="text-brand-gold/20 mb-4" strokeWidth={1} />
              <p className="text-brand-charcoal/80 text-[14px] leading-[1.7] mb-6 italic">
                "{t.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-brand-charcoal font-medium font-sans">{t.name}</p>
                  <p className="text-[11px] text-brand-warm-gray font-sans mt-0.5">{t.product}</p>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={12} className="fill-brand-gold text-brand-gold" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
