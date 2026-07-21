import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-[#1A1A1A] text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="text-center">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < testimonial.rating ? 'fill-[#C9A962] text-[#C9A962]' : 'text-[#6B6560]'}`}
                  />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-[#E5E0D8] italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <p className="text-sm">
                <span className="text-[#C9A962]">{testimonial.initials}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}