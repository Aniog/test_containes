import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-h2 text-charcoal mb-4">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-cream-dark p-8 text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < testimonial.rating ? 'text-gold fill-gold' : 'text-border'}`} 
                  />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-charcoal italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <p className="font-sans text-sm uppercase tracking-widest text-charcoal-light">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}