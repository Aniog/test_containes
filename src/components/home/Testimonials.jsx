import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-[#d4af37] text-xs tracking-[0.3em] uppercase">
            Love Letters
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-white mt-3">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-[#d4af37] mx-auto mt-6" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#2a2a2a] p-8 text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-[#d4af37] text-[#d4af37]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/80 text-sm leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div>
                <p className="text-white font-medium text-sm">
                  {testimonial.name}
                </p>
                <p className="text-white/40 text-xs mt-1">
                  on {testimonial.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
