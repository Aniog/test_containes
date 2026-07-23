import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="section-padding bg-[#FAF8F5]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[#9B9590] mb-3">What They Say</p>
          <h2 className="serif-heading text-3xl md:text-4xl font-light">Loved by Thousands</h2>
          <div className="w-12 h-px bg-[#B8956A] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="text-center p-6 md:p-8 border border-[#E8E4DF] hover:shadow-lg transition-shadow duration-500"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-[#C9A96E] fill-[#C9A96E]" />
                ))}
              </div>

              {/* Quote */}
              <p className="serif-heading text-lg md:text-xl italic text-[#1A1A1A] leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <p className="text-sm tracking-wider uppercase text-[#6B6560]">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
