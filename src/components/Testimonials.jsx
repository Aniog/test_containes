import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    { 
      id: 1, 
      name: 'Sarah', 
      initial: 'S',
      rating: 5, 
      text: 'Absolutely in love with my Vivid Aura ear cuff. The quality is incredible for the price point. I haven\'t taken it off since it arrived!',
      date: '2 weeks ago'
    },
    { 
      id: 2, 
      name: 'Emily', 
      initial: 'E',
      rating: 5, 
      text: 'Purchased the Royal Heirloom Set as a gift for my sister. The packaging was beautiful and she hasn\'t stopped wearing it. Truly demi-fine quality.',
      date: '1 month ago'
    },
    { 
      id: 3, 
      name: 'Aishwarya', 
      initial: 'A',
      rating: 5, 
      text: 'Finally, jewelry that doesn\'t irritate my sensitive ears! The hypoallergenic claim is real. The Golden Sphere Huggies are my new everyday staple.',
      date: '3 weeks ago'
    },
  ];

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#fdf9f3' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            className="font-serif text-charcoal mb-3"
            style={{ fontSize: 'clamp(1.875rem, 4vw, 2.5rem)' }}
          >
            Loved by Our Community
          </h2>
          <div className="hairline w-16 mx-auto my-4" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              {/* Stars */}
              <div className="star-rating mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              {/* Text */}
              <p 
                className="text-charcoal-600 mb-6 leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', lineHeight: 1.8 }}
              >
                "{testimonial.text}"
              </p>

              {/* Customer */}
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-full bg-cream-200 flex items-center justify-center"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.125rem' }}
                >
                  {testimonial.initial}
                </div>
                <div>
                  <p className="font-medium text-charcoal text-sm">{testimonial.name}</p>
                  <p className="text-charcoal-400 text-xs">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
