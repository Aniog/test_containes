import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-cream p-8 md:p-10"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-gold-500 fill-gold-500"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-taupe font-sans leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Attribution */}
              <div>
                <p className="font-sans font-medium text-charcoal">
                  {testimonial.name}
                </p>
                <p className="text-sm text-taupe font-sans mt-1">
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
