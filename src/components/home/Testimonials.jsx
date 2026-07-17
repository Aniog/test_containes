import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-section-mobile md:py-section bg-velmora-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-section text-velmora-text-primary mb-3">
            What Our Clients Say
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-velmora-bg-secondary p-6 md:p-8"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? 'fill-velmora-accent text-velmora-accent'
                        : 'text-velmora-border'
                    }`}
                  />
                ))}
              </div>
              {/* Text */}
              <p className="text-velmora-text-secondary leading-relaxed mb-4">
                "{testimonial.text}"
              </p>
              {/* Author */}
              <p className="font-medium text-velmora-text-primary">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}