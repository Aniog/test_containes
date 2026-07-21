import { Star, Quote } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="bg-cream-200/50 section-padding section-padding-y">
      <div className="text-center mb-12">
        <p className="font-sans text-xs tracking-mega-wide uppercase text-gold-500 mb-3">
          Love Letters
        </p>
        <h2 className="section-title">What Our Customers Say</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-cream-50 p-6 md:p-8 shadow-soft text-center"
          >
            <Quote className="w-6 h-6 text-gold-400/40 mx-auto mb-4" />

            {/* Stars */}
            <div className="flex items-center justify-center gap-1 mb-4">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
              ))}
            </div>

            <p className="text-ink-500 leading-relaxed text-sm mb-6">
              "{testimonial.text}"
            </p>

            <div className="border-t border-ink-100/40 pt-4">
              <p className="font-serif text-base font-medium text-ink-700">
                {testimonial.name}
              </p>
              <p className="text-xs text-ink-300 mt-0.5">
                on {testimonial.product}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
