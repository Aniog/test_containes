import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-20 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl text-velmora-charcoal">What Our Clients Say</h2>
          <div className="w-16 h-px bg-velmora-gold mx-auto mt-4" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-velmora-creamDark p-8 text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? 'text-velmora-gold fill-velmora-gold'
                        : 'text-velmora-gray-light'
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-velmora-charcoal/70 italic leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 bg-velmora-gold rounded-full flex items-center justify-center">
                  <span className="text-white font-sans text-sm">
                    {testimonial.initials}
                  </span>
                </div>
                <span className="font-sans text-sm text-velmora-charcoal">
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