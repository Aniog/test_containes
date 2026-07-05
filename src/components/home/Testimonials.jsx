import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-velmora-charcoal mb-4">
            What They Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="text-center p-8 bg-velmora-sand/50 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-velmora-gold fill-velmora-gold"
                  />
                ))}
              </div>
              <p className="text-velmora-charcoal italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <p className="text-velmora-gold font-medium text-sm uppercase tracking-wider">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}