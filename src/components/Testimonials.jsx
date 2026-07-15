import { Star } from 'lucide-react';

export default function Testimonials({ testimonials }) {
  return (
    <section className="py-20 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-velmora-soft-black mb-4 tracking-wide">
            Loved by Our Customers
          </h2>
          <div className="w-24 h-px bg-velmora-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 space-y-4 hover:shadow-soft transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-velmora-gold text-velmora-gold"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="font-sans text-base text-velmora-charcoal leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Customer */}
              <div className="flex items-center space-x-3 pt-4 border-t border-velmora-taupe/30">
                <div className="w-10 h-10 rounded-full bg-velmora-gold/20 flex items-center justify-center">
                  <span className="font-serif text-velmora-gold font-medium">
                    {testimonial.initial}
                  </span>
                </div>
                <span className="font-sans text-sm text-velmora-warm-gray">
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
