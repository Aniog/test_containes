import React from 'react';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah',
      initial: 'S',
      rating: 5,
      text: "I've never received so many compliments on my jewelry. The quality is incredible for the price point. Velmora has become my go-to for both gifting and self-purchase.",
      date: '2 weeks ago',
    },
    {
      id: 2,
      name: 'Emily',
      initial: 'E',
      rating: 5,
      text: "The Golden Sphere Huggies are my everyday staples. They're comfortable enough to sleep in and elegant enough for dinner parties. Truly versatile pieces.",
      date: '1 month ago',
    },
    {
      id: 3,
      name: 'Jessica',
      initial: 'J',
      rating: 5,
      text: "As someone with sensitive skin, I'm so grateful to have found Velmora. Their hypoallergenic promise is real—I can wear these all day with zero irritation.",
      date: '3 weeks ago',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-velmora-ivory">
      <div className="container-velmora">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="font-serif text-4xl md:text-5xl mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Loved by Our Community
          </h2>
          <div className="hairline w-24 mx-auto mb-6" />
          <p className="text-velmora-stone text-lg">
            Real reviews from real customers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-velmora-cream p-8 md:p-10 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Stars */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-velmora-gold fill-velmora-gold"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-velmora-charcoal/80 leading-relaxed mb-8 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-velmora-gold/20 rounded-full flex items-center justify-center">
                  <span className="font-serif text-velmora-gold text-lg" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {testimonial.initial}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-velmora-charcoal">{testimonial.name}</p>
                  <p className="text-xs text-velmora-stone">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
