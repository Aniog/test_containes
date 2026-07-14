import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    initial: 'S',
    rating: 5,
    text: "I never take my Velmora huggies off. They're comfortable, beautiful, and the gold hasn't faded one bit after 6 months of daily wear.",
    date: '2 weeks ago'
  },
  {
    id: 2,
    name: 'Jessica K.',
    initial: 'J',
    rating: 5,
    text: "Bought the Royal Heirloom Set as a gift to myself. The packaging was so luxe, and the pieces are even more beautiful in person.",
    date: '1 month ago'
  },
  {
    id: 3,
    name: 'Emily R.',
    initial: 'E',
    rating: 5,
    text: "Finally, affordable gold jewelry that doesn't irritate my sensitive ears. Velmora's quality is unmatched at this price point.",
    date: '3 weeks ago'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-velmora-cream">
      <div className="container-velmora">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-light mb-4"
            style={{ fontFamily: 'Cormorant Garamond', serif: true }}
          >
            Loved by Our Community
          </h2>
          <div className="hairline w-24 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              {/* Stars */}
              <div className="flex gap-1 mb-6 text-velmora-gold">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Text */}
              <p className="text-velmora-charcoal leading-relaxed mb-8 italic">
                "{testimonial.text}"
              </p>

              {/* Customer */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-velmora-gold/20 flex items-center justify-center text-velmora-gold font-medium">
                  {testimonial.initial}
                </div>
                <div>
                  <p className="font-medium text-velmora-black">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-velmora-charcoal">
                    {testimonial.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}