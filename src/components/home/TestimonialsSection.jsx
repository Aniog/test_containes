import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-[#1a1714]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#c9a96e] mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light text-[#fdfaf6]">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-[#c9a96e] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="bg-[#2c2825] p-8 md:p-10 relative"
            >
              {/* Quote mark */}
              <span className="font-serif text-6xl text-[#c9a96e]/20 leading-none absolute top-4 left-6 select-none">
                "
              </span>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} className="text-[#c9a96e] fill-[#c9a96e]" />
                ))}
              </div>

              {/* Review text */}
              <p className="font-serif text-base md:text-lg italic text-[#e8d5b0] leading-relaxed mb-6">
                "{review.text}"
              </p>

              {/* Divider */}
              <div className="w-8 h-px bg-[#c9a96e] mb-4" />

              {/* Customer info */}
              <div>
                <p className="font-sans text-xs tracking-[0.12em] uppercase text-[#c9a96e] font-semibold">
                  {review.name}
                </p>
                <p className="font-sans text-xs text-[#7a6f66] mt-0.5">
                  Verified Purchase · {review.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
