import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-semibold text-[#FBF9F6] tracking-wide mb-4">
            What Our Clients Say
          </h2>
          <p className="text-[#A8A29E] text-sm tracking-wide max-w-md mx-auto">
            Real stories from women who wear Velmora every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#2A2A2A] p-8 md:p-10 text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#B8860B] text-[#B8860B]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#FBF9F6] text-sm leading-relaxed mb-6 italic font-['Cormorant_Garamond'] text-lg">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#B8860B] flex items-center justify-center">
                  <span className="text-white text-sm font-medium">
                    {testimonial.initial}
                  </span>
                </div>
                <span className="text-[#A8A29E] text-sm font-medium tracking-wide">
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
