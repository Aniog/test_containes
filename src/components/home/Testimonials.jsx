import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light">
            Loved by Thousands
          </h2>
          <p className="mt-3 text-warm-gray text-sm max-w-md mx-auto">
            Real reviews from real women who wear Velmora every day
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="p-8 bg-cream border border-border-light hover:shadow-[0_2px_20px_rgba(0,0,0,0.06)] transition-shadow duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-gold fill-gold"
                  />
                ))}
              </div>
              <p className="text-sm text-charcoal/80 leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <p className="mt-5 text-sm font-medium text-charcoal tracking-[0.05em]">
                — {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}