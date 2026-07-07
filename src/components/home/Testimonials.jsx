import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';
import { useScrollReveal } from '@/hooks/useScrollReveal';

function TestimonialCard({ testimonial, delay }) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`bg-white p-8 animate-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} className="fill-gold text-gold" />
        ))}
      </div>
      {/* Quote */}
      <p className="font-serif text-lg font-light text-charcoal leading-relaxed mb-6 italic">
        "{testimonial.text}"
      </p>
      {/* Author */}
      <div>
        <p className="font-sans text-sm font-semibold text-charcoal">
          {testimonial.name}
        </p>
        <p className="font-sans text-xs text-warmGray-500 mt-0.5">
          on {testimonial.product}
        </p>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-ivory">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="font-sans text-xs font-medium uppercase tracking-extra-wide text-gold mb-3">
            Kind Words
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl font-light text-charcoal">
            What Our Community Says
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
