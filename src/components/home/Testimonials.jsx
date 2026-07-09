import { Star } from 'lucide-react';
import { useScrollReveal } from '@/lib/useScrollReveal';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="section-padding py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="font-sans text-[11px] uppercase tracking-mega-wide text-brand-gold mb-3">
            Loved by Thousands
          </p>
          <h2 className="font-serif text-heading-2 text-brand-charcoal">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.id}
              className={`bg-brand-light-gray p-8 text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className={j < testimonial.rating ? 'fill-brand-gold text-brand-gold' : 'text-brand-mid-gray'}
                  />
                ))}
              </div>

              <p className="font-sans text-sm text-brand-warm-gray leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <div>
                <p className="font-sans text-sm font-medium text-brand-charcoal">
                  {testimonial.name}
                </p>
                <p className="font-sans text-[10px] uppercase tracking-ultra-wide text-brand-warm-gray mt-1">
                  {testimonial.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
