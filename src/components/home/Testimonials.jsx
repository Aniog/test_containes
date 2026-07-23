import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

const Testimonials = () => {
  return (
    <section className="section bg-[var(--color-primary)]">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p 
            className="text-sm tracking-[0.3em] uppercase text-[var(--color-gold)] mb-4"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Love Letters
          </p>
          <h2 style={{ fontFamily: 'var(--font-serif)' }}>What Our Customers Say</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[var(--color-cream)] p-8 relative"
            >
              {/* Quote Mark */}
              <div 
                className="absolute top-6 right-6 text-6xl text-[var(--color-gold)]/20 leading-none"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="var(--color-gold)"
                    stroke="var(--color-gold)"
                  />
                ))}
              </div>

              {/* Quote */}
              <p 
                className="text-[var(--color-text-secondary)] mb-6 italic leading-relaxed relative z-10"
                style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem' }}
              >
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-gold)] flex items-center justify-center text-white font-medium">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p 
                    className="font-medium text-[var(--color-charcoal)]"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-[var(--color-text-secondary)]">
                    Verified Purchase
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
