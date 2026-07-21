import { Star, Quote } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="section-padding bg-charcoal-800">
      <div className="container-wide">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-[0.35em] uppercase text-gold-400 mb-4">
            What they say
          </p>
          <h2 className="font-serif text-heading-xl md:text-display text-cream-50">
            Loved by Thousands
          </h2>
          <div className="w-16 h-[1px] bg-gold-500 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="text-center p-8 border border-charcoal-600 hover:border-gold-600/50 transition-colors duration-500"
            >
              <Quote size={32} className="text-gold-500 mx-auto mb-6 opacity-60" />
              
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < testimonial.rating ? 'fill-gold-500 text-gold-500' : 'text-charcoal-500'}
                  />
                ))}
              </div>

              <p className="font-sans text-cream-200 text-sm leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              <div>
                <p className="font-serif text-lg text-cream-100">
                  {testimonial.name}
                </p>
                <p className="font-sans text-xs text-cream-400 mt-1">
                  {testimonial.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
