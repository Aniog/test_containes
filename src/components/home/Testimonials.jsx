import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A]">What Our Clients Say</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="text-center p-8 bg-[#FFFEF9] border border-[#E5E0D8] animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill={i < testimonial.rating ? "#C9A962" : "none"}
                    stroke={i < testimonial.rating ? "#C9A962" : "#A8A29E"}
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-[#6B6B6B] italic leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-8 bg-[#C9A962] rounded-full flex items-center justify-center text-white text-xs font-medium">
                  {testimonial.initials}
                </div>
                <span className="text-sm font-medium text-[#1A1A1A]">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}