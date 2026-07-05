import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-charcoal text-warmWhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block font-sans text-xs tracking-extra-wide uppercase text-gold-400 mb-3">
            What Our Customers Say
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-warmWhite">
            Loved by Thousands
          </h2>
          <div className="w-16 h-px bg-gold-400 mx-auto mt-4" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-charcoal/50 border border-warmWhite/10 rounded-lg p-6 md:p-8"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-gold-400 fill-gold-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-lg md:text-xl text-warmWhite/90 italic leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center">
                  <span className="font-serif text-gold-400 text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-sans text-sm text-warmWhite font-medium">
                    {testimonial.name}
                  </p>
                  <p className="font-sans text-xs text-warmWhite/50">
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
}
