import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="section-padding bg-cream-100">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm tracking-extra-wide uppercase text-gold mb-3">
            Love Letters
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal">
            What Our Community Says
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-8 md:p-10 shadow-soft"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className="w-4 h-4 text-gold fill-gold"
                    strokeWidth={0}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-lg text-charcoal leading-relaxed mb-6">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-ivory flex items-center justify-center">
                  <span className="text-sm font-medium text-charcoal">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <span className="text-sm text-charcoal font-medium">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicator */}
        <div className="text-center mt-10">
          <p className="text-xs text-warm-gray tracking-wide">
            Rated 4.9/5 based on 2,847 reviews
          </p>
        </div>
      </div>
    </section>
  );
}
