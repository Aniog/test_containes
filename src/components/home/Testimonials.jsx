import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-velmora-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-velmora-charcoal tracking-wide">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-velmora-pearl p-6 sm:p-8 rounded-sm hairline-bottom hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-velmora-gold text-velmora-gold" />
                ))}
              </div>
              <p className="font-serif text-base sm:text-lg text-velmora-ink italic leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-velmora-gold/20 flex items-center justify-center">
                  <span className="font-serif text-sm font-semibold text-velmora-gold">
                    {testimonial.initial}
                  </span>
                </div>
                <span className="text-sm font-medium text-velmora-charcoal">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
