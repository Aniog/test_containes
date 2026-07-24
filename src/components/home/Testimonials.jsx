import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="section-padding bg-ivory">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-overline text-gold mb-3">What They Say</p>
          <h2 className="heading-2 text-charcoal">Loved by Our Community</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-cream border border-sand rounded-md p-8 text-center"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-gold fill-gold"
                    strokeWidth={1.5}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-charcoal-light text-body leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div>
                <p className="font-serif text-charcoal uppercase tracking-[0.1em]">
                  {testimonial.name}
                </p>
                <p className="text-warm-gray text-caption mt-1">
                  on {testimonial.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
