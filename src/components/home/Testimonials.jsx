import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold mb-3">
            Love Letters
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl text-charcoal">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-surface p-8 lg:p-10 rounded shadow-card"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="currentColor"
                    className="text-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-lg text-charcoal leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <span className="font-serif text-lg text-gold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-sans text-sm font-medium text-charcoal">
                    {testimonial.name}
                  </p>
                  <p className="font-sans text-xs text-muted-gray">
                    {testimonial.product}
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
