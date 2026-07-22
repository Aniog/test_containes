import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-[0.15em] uppercase text-[#C9A96E] mb-3 font-sans">Real Reviews</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#F5F0EB] font-serif">Loved by Customers</h2>
          <div className="w-12 h-[1px] bg-[#C9A96E] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-6 md:p-8 bg-[#242424] rounded-sm">
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#C9A96E] text-[#C9A96E]" />
                ))}
              </div>
              <p className="text-sm text-[#A0988E] leading-relaxed mb-6">&ldquo;{testimonial.text}&rdquo;</p>
              <p className="text-xs tracking-widest uppercase text-[#F5F0EB] font-sans">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}