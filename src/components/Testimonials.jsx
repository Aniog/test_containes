import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah',
      initial: 'S',
      rating: 5,
      text: 'Absolutely love my Vivid Aura ear cuffs! The quality is incredible for the price point. I get compliments every time I wear them.',
      date: '2 weeks ago'
    },
    {
      id: 2,
      name: 'Emily',
      initial: 'E',
      rating: 5,
      text: 'Purchased the Royal Heirloom Set as a gift to myself and it was the best decision. The packaging is beautiful and the pieces are stunning.',
      date: '1 month ago'
    },
    {
      id: 3,
      name: 'Jessica',
      initial: 'J',
      rating: 5,
      text: 'Finally, jewelry that doesn\'t irritate my sensitive ears! The hypoallergenic claim is real. Will definitely be buying more.',
      date: '3 weeks ago'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl mb-4 text-foreground">
          Loved by Our Community
        </h2>
        <div className="divider w-20 mx-auto my-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-8 border border-border/30 hover:shadow-lg transition-shadow duration-300"
          >
            {/* Stars */}
            <div className="flex space-x-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={18} className="fill-accent text-accent" />
              ))}
            </div>

            {/* Text */}
            <p className="text-foreground/80 leading-relaxed mb-6 italic">
              "{testimonial.text}"
            </p>

            {/* Author */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-accent font-medium">{testimonial.initial}</span>
              </div>
              <div>
                <p className="font-medium text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted">{testimonial.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
