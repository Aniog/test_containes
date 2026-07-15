import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      text: "Absolutely stunning piece. The quality is exceptional and it arrived beautifully packaged. I haven't taken it off since!",
      date: "January 2024"
    },
    {
      id: 2,
      name: "Emily R.",
      rating: 5,
      text: "I've received so many compliments on my Velmora necklace. The gold tone is rich and the craftsmanship is impeccable. Truly timeless elegance.",
      date: "February 2024"
    },
    {
      id: 3,
      name: "Jessica L.",
      rating: 5,
      text: "The perfect gift for myself. The attention to detail is remarkable. Velmora has become my go-to for meaningful, beautiful jewelry.",
      date: "March 2024"
    }
  ];

  return (
    <section className="py-20 lg:py-32 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 
          className="font-serif text-4xl lg:text-5xl mb-4"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
        >
          What Our Customers Say
        </h2>
        <div className="w-16 h-px bg-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card relative">
            {/* Quote Icon */}
            <Quote 
              size={32} 
              className="text-gold/20 mb-6" 
              strokeWidth={1}
            />

            {/* Stars */}
            <div className="flex space-x-1 mb-4 star-rating">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>

            {/* Text */}
            <p className="text-charcoal/80 leading-relaxed mb-6 italic">
              "{testimonial.text}"
            </p>

            {/* Author */}
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-sm">{testimonial.name}</p>
                <p className="text-xs text-charcoal/50 mt-1">{testimonial.date}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center">
                <span className="text-sm font-medium text-charcoal/60">
                  {testimonial.name.charAt(0)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
