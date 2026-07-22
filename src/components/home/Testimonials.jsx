import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[#C8A45C] font-medium mb-3">
            Customer Love
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] font-light">
            What They Say
          </h2>
          <div className="w-12 h-px bg-[#C8A45C] mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 md:p-8 border border-[#E8E2D8]"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-[#C8A45C] text-[#C8A45C]"
                  />
                ))}
              </div>

              <p className="text-sm text-[#6B6B6B] leading-relaxed mb-6 font-serif italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <p className="text-xs tracking-[0.15em] uppercase text-[#1A1A1A] font-medium">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}