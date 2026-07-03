import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-3">What Our Customers Say</h2>
          <p className="text-slate max-w-md mx-auto">
            Join thousands of women who have made Velmora part of their everyday
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-cream rounded p-6 md:p-8 border border-sand"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gold-light flex items-center justify-center">
                  <span className="font-serif text-lg text-charcoal">
                    {testimonial.initial}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-charcoal">{testimonial.name}</p>
                  <div className="flex items-center gap-0.5 mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < testimonial.rating
                            ? 'text-gold fill-gold'
                            : 'text-sand'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-slate text-sm leading-relaxed mb-4">
                "{testimonial.text}"
              </p>
              
              <p className="text-xs text-stone">
                Verified Purchase · {testimonial.product}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
