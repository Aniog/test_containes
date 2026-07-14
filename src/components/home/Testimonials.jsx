import { testimonials } from '../../data/products';
import StarRating from '../shared/StarRating';

export default function Testimonials() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#C4A962] mb-4 block">
            Reviews
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1C1917]">
            Loved by Our Community
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="bg-[#FAFAF8] rounded-lg p-6 md:p-8"
            >
              {/* Stars */}
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Quote */}
              <blockquote className="text-[#57534E] leading-relaxed mb-6">
                "{testimonial.text}"
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C4A962]/20 flex items-center justify-center">
                  <span className="font-serif text-sm text-[#C4A962]">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <span className="text-sm font-medium text-[#1C1917]">
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
