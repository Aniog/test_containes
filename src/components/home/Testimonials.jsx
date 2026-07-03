import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="section bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="label-uppercase text-xs tracking-[0.2em] mb-3" style={{ color: 'var(--color-gold)' }}>
            Reviews
          </p>
          <h2 className="heading-2" style={{ color: 'var(--color-text)' }}>
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#FAF8F5] p-8 relative"
            >
              {/* Quote Mark */}
              <div 
                className="absolute top-6 right-6 text-6xl leading-none opacity-10"
                style={{ fontFamily: 'Georgia, serif', color: 'var(--color-gold)' }}
              >
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4"
                    fill="#C9A962"
                    stroke="#C9A962"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-[#6B6560] leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium"
                  style={{ backgroundColor: 'var(--color-gold)', color: 'white' }}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-[#2D2926]">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-[#9A9590]">
                    Verified Purchase
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
