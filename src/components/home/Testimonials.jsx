import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs tracking-widest text-velmora-taupe uppercase">What They Say</span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-velmora-charcoal">Loved by Many</h2>
          <div className="w-16 h-px bg-velmora-gold mx-auto mt-6" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="text-center p-8 bg-velmora-sand/10"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    fill={i < testimonial.rating ? '#C9A962' : 'none'}
                    stroke={i < testimonial.rating ? '#C9A962' : '#A69F94'}
                    strokeWidth={1.5}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-lg text-velmora-charcoal italic leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-velmora-gold/20 flex items-center justify-center">
                  <span className="text-sm font-medium text-velmora-gold">
                    {testimonial.initials}
                  </span>
                </div>
                <span className="text-sm text-velmora-charcoal/70">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}