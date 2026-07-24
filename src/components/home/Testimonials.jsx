import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2C2824] mb-3">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="text-center p-8 bg-[#FDFCFA] border border-[#F0EBE3] opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.15 * (index + 1)}s` }}
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="#C9A962"
                    stroke="#C9A962"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-lg text-[#2C2824] mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C9A962] flex items-center justify-center">
                  <span className="font-serif text-sm text-[#1A1714]">
                    {testimonial.initials}
                  </span>
                </div>
                <span className="font-sans text-sm text-[#6B635A]">
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