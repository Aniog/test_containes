import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-30 bg-primary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-h2 text-secondary">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="bg-card p-8 text-center shadow-subtle"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating ? 'fill-accent text-accent' : 'text-divider'
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-body text-secondary-text italic mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <p className="text-caption uppercase tracking-widest text-secondary">
                {testimonial.initials}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}