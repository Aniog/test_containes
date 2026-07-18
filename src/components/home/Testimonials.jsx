import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-28">
      <div className="text-center mb-14 md:mb-18">
        <p className="section-subtitle mb-3">Kind Words</p>
        <h2 className="section-title">What Our Customers Say</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
        {testimonials.map((t) => (
          <div key={t.id} className="text-center">
            {/* Stars */}
            <div className="flex items-center justify-center gap-0.5 mb-5">
              {[...Array(t.rating)].map((_, i) => (
                <Star
                  key={i}
                  size={15}
                  fill="#C4952E"
                  stroke="#C4952E"
                />
              ))}
            </div>

            {/* Quote */}
            <p className="text-[15px] leading-relaxed text-[#55514C] italic mb-5">
              "{t.text}"
            </p>

            {/* Name */}
            <p className="text-xs tracking-[0.1em] uppercase font-medium text-[#252320]">
              {t.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
