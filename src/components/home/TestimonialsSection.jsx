import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#f5f0eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="velmora-heading text-3xl sm:text-4xl lg:text-5xl text-[#1a1a1a] text-center mb-12 lg:mb-16">
          What They Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 lg:p-10"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#c9a96e] text-[#c9a96e]" />
                ))}
              </div>
              <p className="velmora-heading text-lg text-[#1a1a1a] leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <p className="text-sm text-[#6b6560]">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
