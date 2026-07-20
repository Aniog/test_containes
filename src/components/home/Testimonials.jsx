import { Star } from 'lucide-react';

export default function Testimonials({ testimonials }) {
  return (
    <section className="py-20 md:py-28 bg-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-ultra-wide text-gold-400 uppercase mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-cream-50">
            Loved by Our Community
          </h2>
          <div className="w-16 h-px bg-gold-500 mx-auto mt-6" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-charcoal-700 p-8 md:p-10"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className="w-4 h-4 text-gold-400 fill-gold-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-lg text-cream-100 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Attribution */}
              <div>
                <p className="font-sans text-sm text-cream-50 font-medium">
                  {testimonial.name}
                </p>
                <p className="font-sans text-xs text-charcoal-400 mt-1">
                  Verified Purchase
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
