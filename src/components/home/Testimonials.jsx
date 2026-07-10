import { Star, Quote } from 'lucide-react';
import { testimonials } from '../../data/products';

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-velmora-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs tracking-widest uppercase text-velmora-accent mb-4 block">
            What They're Saying
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-text-primary">
            Loved by Thousands
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-velmora-bg-secondary p-8 md:p-10 relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-velmora-accent/20" />
              
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? 'fill-velmora-accent text-velmora-accent'
                        : 'text-velmora-border-dark'
                    }`}
                  />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-velmora-text-secondary leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-velmora-accent/20 flex items-center justify-center">
                  <span className="font-serif text-velmora-accent">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-velmora-text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-velmora-text-muted">
                    Verified Buyer
                  </p>
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
