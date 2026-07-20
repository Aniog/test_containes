import { testimonials } from '@/data/products';
import { Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-velmora-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="section-subtitle">Real reviews from real jewelry lovers</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-velmora-cream p-8 text-center"
            >
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-velmora-gold fill-velmora-gold" />
                ))}
              </div>
              <p className="font-serif text-lg italic text-velmora-black leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <p className="font-sans text-xs tracking-widest uppercase text-velmora-gray-dark">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
