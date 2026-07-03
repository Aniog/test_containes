import { Star } from 'lucide-react';
import { testimonials } from '../data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal mb-3">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-velmora-ivory p-8 md:p-10 text-center"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? 'fill-velmora-gold text-velmora-gold'
                        : 'text-velmora-mist'
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-velmora-graphite leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <p className="font-sans text-sm font-medium text-velmora-charcoal">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}