import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-brand-charcoal mb-3">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="text-center px-4">
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              {/* Quote */}
              <p className="text-sm text-brand-muted leading-relaxed mb-4 italic">
                "{testimonial.text}"
              </p>
              {/* Author */}
              <p className="text-xs uppercase tracking-wider text-brand-charcoal font-medium">
                {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
