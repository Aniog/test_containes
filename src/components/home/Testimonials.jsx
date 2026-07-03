import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal mb-3">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-velmora-light-gray p-8 text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? 'fill-velmora-gold text-velmora-gold'
                        : 'text-velmora-border'
                    }`}
                    strokeWidth={1}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-velmora-warm-gray leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 bg-velmora-gold rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-velmora-charcoal">
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
};

export default Testimonials;