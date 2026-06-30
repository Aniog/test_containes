import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-gold-500 text-xs uppercase tracking-mega-wide font-medium mb-3">
            Love letters
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-charcoal-950">
            What Our Customers Say
          </h2>
          <div className="divider-hairline w-16 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-cream-100 p-6 md:p-8 border border-brand-100/50"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-gold-400 text-gold-400"
                  />
                ))}
              </div>
              <p className="text-charcoal-700 text-sm leading-relaxed mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-200 flex items-center justify-center text-charcoal-700 text-xs font-medium">
                  {testimonial.name.charAt(0)}
                </div>
                <span className="text-charcoal-900 text-sm font-medium">
                  {testimonial.name}
                </span>
                <span className="text-gold-500 text-xs flex items-center gap-1">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Verified Buyer
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
