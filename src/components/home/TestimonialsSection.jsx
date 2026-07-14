import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah',
      initial: 'S',
      rating: 5,
      text: "Absolutely love my Vivid Aura ear cuff! The quality is outstanding and it's so comfortable to wear all day.",
      date: '2 weeks ago'
    },
    {
      id: 2,
      name: 'Emily',
      initial: 'E',
      rating: 5,
      text: "The Majestic Flora necklace is even more beautiful in person. I've received so many compliments!",
      date: '1 month ago'
    },
    {
      id: 3,
      name: 'Maria',
      initial: 'M',
      rating: 5,
      text: "Finally found hypoallergenic jewelry that doesn't irritate my skin. Velmora is now my go-to brand.",
      date: '3 weeks ago'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">
            What Our Customers Say
          </h2>
          <div className="w-16 h-0.5 bg-velmora-gold mx-auto" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-velmora-warm-white p-8 md:p-10 text-center hover:shadow-lg transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-velmora-dark-gray leading-relaxed mb-8 italic">
                "{testimonial.text}"
              </p>

              {/* Customer */}
              <div className="flex items-center justify-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-velmora-gold/20 flex items-center justify-center">
                  <span className="font-serif text-velmora-gold font-medium">
                    {testimonial.initial}
                  </span>
                </div>
                <div className="text-left">
                  <p className="font-medium text-sm">{testimonial.name}</p>
                  <p className="text-xs text-velmora-medium-gray">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
