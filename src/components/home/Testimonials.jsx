import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/products';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Testimonials() {
  const headerRef = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 bg-ivory-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="animate-on-scroll text-center mb-12">
          <p className="text-xs tracking-mega-wide uppercase text-gold-500 font-medium mb-3">Testimonials</p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-900 font-light">
            Loved by Thousands
          </h2>
          <div className="w-16 h-[1px] bg-gold-400 mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((review, i) => (
            <div
              key={i}
              className="bg-ivory-100 border border-charcoal-100/30 p-8 md:p-10 relative"
            >
              <Quote size={28} className="text-gold-200 mb-4" strokeWidth={1} />
              
              <div className="flex gap-0.5 mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} size={12} className="text-gold-400 fill-gold-400" />
                ))}
              </div>

              <p className="text-sm md:text-[15px] text-charcoal-600 leading-relaxed mb-6 italic">
                "{review.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-charcoal-200 rounded-full flex items-center justify-center">
                  <span className="font-serif text-sm text-charcoal-600 font-semibold">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-charcoal-800">{review.name}</p>
                  <p className="text-[11px] text-charcoal-400">Purchased: {review.product}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
