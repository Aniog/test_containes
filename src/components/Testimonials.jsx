import { Star } from 'lucide-react';
import { testimonials } from '../data/products';

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl font-light mb-4 tracking-wide">
          Loved by Our Community
        </h2>
        <div className="w-24 h-px bg-velmora-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-8 text-center space-y-4 hover:shadow-lg transition-shadow duration-300"
          >
            {/* Stars */}
            <div className="flex justify-center space-x-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-velmora-gold text-velmora-gold" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-700 italic leading-relaxed">
              "{testimonial.text}"
            </p>

            {/* Customer Info */}
            <div className="flex items-center justify-center space-x-3 pt-4">
              <div className="w-10 h-10 rounded-full bg-velmora-warm flex items-center justify-center">
                <span className="text-velmora-charcoal font-semibold">
                  {testimonial.initial}
                </span>
              </div>
              <span className="font-semibold text-sm tracking-wider uppercase">
                {testimonial.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}