import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-velmora-charcoal">
            What Our Clients Say
          </h2>
          <div className="hairline max-w-16 mx-auto mt-4" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="text-center p-6 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
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
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-8 bg-velmora-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium text-velmora-gold">
                    {testimonial.initials}
                  </span>
                </div>
                <span className="text-sm font-medium text-velmora-charcoal">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}