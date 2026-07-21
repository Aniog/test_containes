import { Star, Quote } from 'lucide-react';
import { testimonials } from '../../data/products';

const TestimonialsSection = () => {
  const renderStars = (count) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < count
              ? 'fill-[var(--champagne-gold)] text-[var(--champagne-gold)]'
              : 'text-[var(--light-warm-gray)]'
          }`}
        />
      ))}
    </div>
  );

  return (
    <section className="py-20 md:py-28 bg-[var(--warm-stone)]">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p
            className="text-sm tracking-[0.2em] text-[var(--champagne-gold)] mb-3"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            LOVE FROM OUR COMMUNITY
          </p>
          <h2
            className="text-3xl md:text-4xl text-[var(--deep-espresso)]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[var(--ivory-cream)] p-6 md:p-8 rounded-lg relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-[var(--light-warm-gray)]" />

              {/* Stars */}
              {renderStars(testimonial.rating)}

              {/* Review Text */}
              <p
                className="text-[var(--charcoal)] leading-relaxed mt-4 mb-6"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[var(--champagne-gold)] rounded-full flex items-center justify-center text-[var(--ivory-cream)] font-medium">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-[var(--deep-espresso)]">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-[var(--soft-gray)]">
                    on {testimonial.product}
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

export default TestimonialsSection;
