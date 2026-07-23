import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-gold text-sm tracking-ultra-wide uppercase mb-3">Reviews</p>
          <h2 className="section-title">What Our Customers Say</h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-cream p-8 rounded-sm"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-charcoal/80 leading-relaxed mb-6 italic font-serif text-lg">
                "{testimonial.text}"
              </p>

              {/* Customer info */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="font-medium text-charcoal">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-charcoal">{testimonial.name}</p>
                  <p className="text-sm text-taupe">
                    Verified Purchase • {testimonial.product}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicator */}
        <div className="text-center mt-12">
          <p className="text-sm text-taupe">
            Rated 4.9/5 based on <span className="font-medium text-charcoal">2,847</span> reviews
          </p>
        </div>
      </div>
    </section>
  );
}
