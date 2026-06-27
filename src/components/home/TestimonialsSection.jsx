import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      text: "I've never received so many compliments on a piece of jewelry. The quality is incredible for the price point. My Vivid Aura ear cuffs are my new everyday go-to.",
      initial: "S"
    },
    {
      id: 2,
      name: "Emily J.",
      rating: 5,
      text: "Bought the Royal Heirloom Set as a gift for myself (treat yo self!), and I couldn't be happier. The packaging alone made it feel so special.",
      initial: "E"
    },
    {
      id: 3,
      name: "Maria L.",
      rating: 5,
      text: "As someone with sensitive ears, I'm so picky about jewelry. Velmora's hypoallergenic promise is real — I can wear these all day with zero irritation.",
      initial: "M"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Loved by Our Community</h2>
          <div className="w-16 h-px bg-velmora-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-velmora-cream p-8 rounded-sm fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-velmora-gold mb-4" />
              
              {/* Star Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-velmora-text-light leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              
              {/* Customer Info */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-velmora-gold rounded-full flex items-center justify-center text-velmora-white font-medium">
                  {testimonial.initial}
                </div>
                <span className="font-medium text-sm">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
