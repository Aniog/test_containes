import { Star, Quote } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="section-padding section-padding-y bg-cream-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-mega-wide uppercase text-gold-500 mb-3">
            Loved By Thousands
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal-900">
            What Our Customers Say
          </h2>
          <div className="w-16 h-px bg-gold-400 mx-auto mt-6" />
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-cream-100 p-8 md:p-10 relative group hover:shadow-lg transition-shadow duration-500"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-gold-300 mb-6" strokeWidth={1} />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating ? 'fill-gold-400 text-gold-400' : 'text-charcoal-200'
                    }`}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="font-sans text-sm text-charcoal-700 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-charcoal-200/50 pt-4">
                <p className="font-serif text-base text-charcoal-900 tracking-wide">
                  {testimonial.name}
                </p>
                <p className="font-sans text-xs text-charcoal-400 mt-0.5">
                  Purchased: {testimonial.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
