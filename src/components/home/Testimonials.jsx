import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl text-velmora-charcoal">
            What Our Customers Say
          </h2>
          <div className="w-16 h-px bg-velmora-gold mx-auto mt-4" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="text-center p-8 bg-velmora-ivory/50 animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? 'fill-velmora-gold text-velmora-gold'
                        : 'text-velmora-taupe/30'
                    }`}
                  />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-velmora-charcoal/80 italic leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <p className="font-serif text-sm tracking-wider text-velmora-charcoal">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}