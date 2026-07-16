import { testimonials } from '@/data/products';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="section-padding bg-[#faf8f5]">
      <div className="container-padding">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="serif-heading text-3xl md:text-4xl text-[#1a1a1a] mb-3">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 md:p-8 border border-[#e8e4df]"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-[#6b6560] leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <p className="text-xs tracking-wider uppercase text-[#1a1a1a]">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
