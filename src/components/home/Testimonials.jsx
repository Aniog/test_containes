import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah',
      initial: 'S',
      rating: 5,
      text: "I've purchased three pieces from Velmora and each one exceeds my expectations. The quality is incredible for the price point, and I get compliments every time I wear them.",
      date: '2 weeks ago'
    },
    {
      id: 2,
      name: 'Emily',
      initial: 'E',
      rating: 5,
      text: "The perfect gift for myself and my bridesmaids. Elegant, timeless, and the packaging made it feel so luxurious. Will definitely be ordering again!",
      date: '1 month ago'
    },
    {
      id: 3,
      name: 'Jessica',
      initial: 'J',
      rating: 5,
      text: "As someone with sensitive skin, I'm so happy to have found Velmora. No reactions, beautiful designs, and the gold plating has held up beautifully after months of wear.",
      date: '3 weeks ago'
    }
  ];

  return (
    <section className="py-20 bg-[#F5F3F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-['Cormorant_Garamond'] text-4xl font-light mb-4 tracking-wide">
            Loved by Our Community
          </h2>
          <div className="w-24 h-0.5 bg-[#C9A96E] mx-auto mb-6" />
          <p className="text-[#8A8580]">Real reviews from real customers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 relative hover:shadow-lg transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <Quote size={32} className="text-[#C9A96E] opacity-20 mb-4" />
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#C9A96E] text-[#C9A96E]" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-[#2C2C2C] leading-relaxed mb-6 font-light italic">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C9A96E] bg-opacity-20 flex items-center justify-center">
                  <span className="text-[#C9A96E] font-medium">{testimonial.initial}</span>
                </div>
                <div>
                  <p className="font-medium text-sm">{testimonial.name}</p>
                  <p className="text-xs text-gray-400">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
