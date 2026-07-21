import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-[#1A1918] text-[#FAF9F7]">
      <div className="container-app">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title text-[#FAF9F7]">What Our Clients Say</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#FAF9F7]/5 p-8 border border-[#FAF9F7]/10"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? 'fill-[#C9A962] text-[#C9A962]'
                        : 'text-[#FAF9F7]/20'
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#FAF9F7]/80 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#C9A962] rounded-full flex items-center justify-center text-[#1A1918] font-semibold text-sm">
                  {testimonial.initials}
                </div>
                <span className="text-sm font-medium text-[#FAF9F7]">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}