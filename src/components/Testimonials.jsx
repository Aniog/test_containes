import { Star } from 'lucide-react';
import { testimonials } from '../data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: 'var(--color-velmora-cream-dark)' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wider mb-4">What Our Clients Say</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-velmora-cream p-8 rounded-lg shadow-soft"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4" 
                    fill={i < testimonial.rating ? 'var(--color-velmora-gold)' : 'none'}
                    style={{ color: 'var(--color-velmora-gold)' }}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-velmora-text-muted leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-serif"
                  style={{ backgroundColor: 'var(--color-velmora-gold)' }}
                >
                  {testimonial.initials}
                </div>
                <span className="text-sm tracking-wider">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}