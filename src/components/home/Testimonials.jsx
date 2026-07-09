import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah',
      initial: 'S',
      rating: 5,
      text: "I never take my Velmora huggies off. They've survived workouts, showers, and still look brand new. Truly demi-fine quality.",
      date: '2 weeks ago',
    },
    {
      id: 2,
      name: 'Emily',
      initial: 'E',
      rating: 5,
      text: "The most beautiful jewelry I've ever owned. The attention to detail is incredible, and the packaging made it feel so special.",
      date: '1 month ago',
    },
    {
      id: 3,
      name: 'Jessica',
      initial: 'J',
      rating: 5,
      text: "Finally, gold jewelry that doesn't irritate my skin. Velmora's hypoallergenic promise is real. I'm a customer for life.",
      date: '3 weeks ago',
    },
  ];

  return (
    <section className="py-20 bg-cream-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">Loved by You</h2>
          <div className="divider-hairline w-24 mx-auto my-6" />
          <p className="text-charcoal-600">Real reviews from real customers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-sm shadow-soft"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="star-filled fill-current"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-charcoal-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Customer */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cream-200 flex items-center justify-center">
                  <span className="text-sm font-medium text-charcoal-700">
                    {testimonial.initial}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-charcoal-900">{testimonial.name}</p>
                  <p className="text-xs text-charcoal-500">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
