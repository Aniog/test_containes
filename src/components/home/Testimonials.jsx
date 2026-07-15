import { testimonials } from '@/data/products';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal text-center mb-16">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="text-center">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-lg md:text-xl text-charcoal italic leading-relaxed mb-6">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <p className="text-xs tracking-widest uppercase text-taupe">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
