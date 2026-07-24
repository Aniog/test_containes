import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-velmora-gold text-xs uppercase tracking-widest">Testimonials</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3">What Our Clients Say</h2>
          <div className="hairline max-w-24 mx-auto mt-6" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-velmora-sand/20 p-8 text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill="#C9A962" 
                    stroke="#C9A962" 
                    className={i < testimonial.rating ? 'text-velmora-gold' : 'text-velmora-taupe/30'}
                  />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-velmora-charcoal/80 italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <p className="text-sm font-medium text-velmora-charcoal">
                {testimonial.initials}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}