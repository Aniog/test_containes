import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-night/50 border-y border-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-gold font-sans font-light mb-3">
            What Our Customers Say
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-champagne">
            Loved & Trusted
          </h2>
          <div className="w-16 h-px bg-gold/40 mx-auto mt-5" />
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-espresso/50 border border-divider p-6 lg:p-8 relative group hover:border-gold/20 transition-all duration-500"
            >
              {/* Quote icon */}
              <Quote size={24} className="text-gold/20 mb-4" />

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={12} className="text-gold fill-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-champagne/70 font-sans font-light leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-velvet border border-divider rounded-full flex items-center justify-center">
                  <span className="text-gold text-sm font-serif">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-champagne font-sans font-medium">
                    {testimonial.name}
                  </p>
                  <p className="text-[10px] text-muted tracking-wider uppercase">
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
