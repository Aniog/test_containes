import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2]">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-sans font-medium tracking-[0.2em] text-[#C9A66B] uppercase mb-3">
            What They Say
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#3D3833]">
            Loved by Our Community
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="bg-[#FFFDF9] p-8 border border-[#E8E2D9]"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? 'text-[#C9A66B] fill-[#C9A66B]'
                        : 'text-[#E8E2D9]'
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="font-serif text-lg text-[#3D3833] leading-relaxed mb-6">
                "{testimonial.review}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-[#F5F1EB] flex items-center justify-center">
                  <span className="font-serif text-[#3D3833]">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-sans text-sm font-medium text-[#3D3833]">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-[#9A8E82]">
                    Verified Buyer
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
