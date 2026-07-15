import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-[#0D0D0D]">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-[#F5F5F0] tracking-wide">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 bg-[#1A1A1A] border border-[#333333]"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? 'fill-[#C9A962] text-[#C9A962]'
                        : 'text-[#333333]'
                    }`}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-[#A8A8A0] leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#242424] flex items-center justify-center">
                  <span className="text-sm text-[#C9A962] font-medium">
                    {testimonial.initials}
                  </span>
                </div>
                <span className="text-sm text-[#F5F5F0]">
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
