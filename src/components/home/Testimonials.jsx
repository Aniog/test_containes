import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl text-velmora-charcoal mb-4">
            What Our Clients Say
          </h2>
          <div className="hairline max-w-16 mx-auto mb-4" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="text-center p-6 lg:p-8 bg-velmora-sand/20"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4 text-velmora-gold fill-velmora-gold" 
                  />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-velmora-charcoal/80 italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center justify-center gap-2">
                <span className="w-8 h-8 bg-velmora-gold text-white text-xs flex items-center justify-center rounded-full">
                  {testimonial.initials}
                </span>
                <span className="text-sm font-medium">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;