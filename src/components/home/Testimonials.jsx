import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="section-padding bg-[#1A1814] text-[#FAF8F6]">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">What Our Clients Say</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < testimonial.rating ? 'text-[#C9A962] fill-[#C9A962]' : 'text-[#FAF8F6]/20'}`} 
                  />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-lg italic text-[#FAF8F6]/80 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-8 bg-[#C9A962] rounded-full flex items-center justify-center text-[#1A1814] text-sm font-medium">
                  {testimonial.initials}
                </div>
                <span className="text-sm tracking-wider">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}