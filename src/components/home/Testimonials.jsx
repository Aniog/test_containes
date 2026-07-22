import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-20 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="font-serif text-4xl md:text-5xl text-velmora-charcoal">What Our Clients Say</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-velmora-sand p-8 text-center animate-slide-up opacity-0"
              style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }}
            >
              {/* Avatar */}
              <div className="w-14 h-14 bg-velmora-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-serif text-xl text-velmora-gold">
                  {testimonial.initials}
                </span>
              </div>

              {/* Stars */}
              <div className="flex justify-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    fill={i < testimonial.rating ? "#C9A962" : "none"} 
                    stroke="#C9A962" 
                  />
                ))}
              </div>

              {/* Text */}
              <p className="font-sans text-sm text-velmora-charcoal/80 italic leading-relaxed mb-4">
                "{testimonial.text}"
              </p>

              {/* Name */}
              <p className="font-sans text-sm text-velmora-charcoal font-medium">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}