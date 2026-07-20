import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="text-center p-8 bg-velmora-white border border-velmora-border"
            >
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < testimonial.rating ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-border'}
                  />
                ))}
              </div>
              <p className="text-velmora-warm-gray italic mb-4">"{testimonial.text}"</p>
              <p className="text-sm font-medium">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}