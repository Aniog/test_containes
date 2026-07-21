import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="section bg-[#1a1a1a] text-[#faf8f5]">
      <div className="container">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">What Our Customers Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="text-center p-6 border border-[#faf8f5]/10"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? 'fill-[#c9a962] text-[#c9a962]'
                        : 'text-[#faf8f5]/20'
                    }`}
                  />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-[#faf8f5]/80 italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <p className="font-serif text-sm tracking-wider">
                {testimonial.initials}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
