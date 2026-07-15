import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-sans font-semibold tracking-ultra-wide text-champagne uppercase mb-3">
            What They Say
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-obsidian">
            Loved by Thousands
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-velvet-50 rounded-lg p-6 md:p-8 relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Mark */}
              <div className="absolute top-4 right-6 font-serif text-6xl text-velvet-200 leading-none select-none">
                "
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? 'fill-champagne text-champagne'
                        : 'fill-velvet-200 text-velvet-200'
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-velvet-700 font-sans leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-champagne/20 rounded-full flex items-center justify-center">
                  <span className="font-serif text-sm font-semibold text-champagne-dark">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-sans font-medium text-sm text-obsidian">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-velvet-500">
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
