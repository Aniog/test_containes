import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal text-center mb-12">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="bg-cream p-6 md:p-8 rounded-sm border border-border"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-gold text-gold" />
                ))}
              </div>

              <p className="text-sm text-muted leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <p className="mt-4 text-xs font-medium text-charcoal uppercase tracking-wider">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
