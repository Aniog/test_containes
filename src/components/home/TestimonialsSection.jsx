import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-[#FAF9F7]">
      <div className="container-velmora">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#6B6560] mb-3">Kind Words</p>
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="w-12 h-px bg-[#C9A96E] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="text-center">
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-[#C9A96E]" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-lg md:text-xl leading-relaxed mb-6 text-[#1A1A1A] italic">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <p className="text-xs tracking-[0.2em] uppercase text-[#6B6560]">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
