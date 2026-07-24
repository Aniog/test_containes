import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl text-[#1A1815] mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            What Our Customers Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="text-center p-8 bg-[#FAF9F7] border border-[#E8E4DE]"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? 'fill-[#C9A962] text-[#C9A962]'
                        : 'fill-[#E8E4DE] text-[#E8E4DE]'
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#6B6560] leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <p
                className="text-sm tracking-[0.1em] uppercase text-[#1A1815]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}