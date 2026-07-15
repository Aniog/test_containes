import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-text mb-3">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-velmora-border-thin mx-auto mt-6" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="bg-velmora-surface p-6 md:p-8 border border-velmora-border"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-velmora-accent text-velmora-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-velmora-secondary text-base leading-relaxed mb-6 italic font-serif">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-velmora-accent-light flex items-center justify-center">
                  <span className="text-velmora-accent font-serif text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-velmora-text text-sm font-medium">{testimonial.name}</p>
                  <p className="text-velmora-muted text-xs">Verified Purchase</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
