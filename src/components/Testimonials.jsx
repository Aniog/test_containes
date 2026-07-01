import { Star } from 'lucide-react';
import { testimonials } from '../data/products';

export default function Testimonials() {
  return (
    <section className="py-section-mobile md:py-section bg-velmora-bg-primary">
      <div className="max-w-container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-text-primary mb-4">
            What Our Clients Say
          </h2>
          <div className="w-16 h-px bg-velmora-accent mx-auto" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-velmora-bg-secondary p-8 border border-velmora-border"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < testimonial.rating ? 'fill-velmora-accent text-velmora-accent' : 'text-velmora-border'}`}
                  />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-velmora-text-secondary leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <p className="font-serif text-velmora-text-primary tracking-wider">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}