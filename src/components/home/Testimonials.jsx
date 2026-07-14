import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs tracking-ultra uppercase text-velmora-taupe">Testimonials</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3 text-velmora-charcoal">What Our Clients Say</h2>
          <div className="w-16 h-px bg-velmora-gold mx-auto mt-6" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 bg-velmora-sand/20 border border-velmora-sand/50"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? 'fill-velmora-gold text-velmora-gold'
                        : 'text-velmora-taupe'
                    }`}
                  />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-velmora-charcoal/80 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-velmora-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-velmora-gold">
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