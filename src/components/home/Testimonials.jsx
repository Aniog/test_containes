import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-charcoal)]">
            What Our Clients Say
          </h2>
          <div className="w-16 h-px bg-[var(--color-gold)] mx-auto mt-4" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="text-center p-8 bg-[var(--color-sand)]"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
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
              <p className="text-[var(--color-charcoal)]/80 italic leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 bg-[var(--color-gold)] rounded-full flex items-center justify-center text-white font-serif">
                  {testimonial.initials}
                </div>
                <span className="text-sm font-medium">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}