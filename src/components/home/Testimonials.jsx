import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-[#F5F2ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="serif-heading text-4xl md:text-5xl mb-4">What Our Customers Say</h2>
          <div className="w-16 h-px bg-[#B8860B] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-sm shadow-sm"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4A853] text-[#D4A853]" />
                ))}
              </div>
              <p className="text-[#1A1A1A] leading-relaxed mb-6 font-light italic">
                "{testimonial.text}"
              </p>
              <p className="text-sm text-[#6B6560]">
                — {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
