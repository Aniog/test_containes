import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Sophia L.",
      text: "The quality is absolutely stunning. I've been wearing my huggies every day and they look just as good as the day I bought them.",
      stars: 5
    },
    {
      name: "Emma D.",
      text: "Bought the Flora necklace as a gift for myself and I couldn't be happier. It's such a beautiful statement piece.",
      stars: 5
    },
    {
      name: "Isabella K.",
      text: "Velmora has become my go-to for gifting. The packaging and the jewelry itself feel so much more expensive than they are.",
      stars: 5
    }
  ];

  return (
    <section className="py-24 bg-[#FAFAF9] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {reviews.map((review, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-6">
              <div className="flex gap-1">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="font-serif italic text-xl leading-relaxed">"{review.text}"</p>
              <span className="text-xs uppercase tracking-[0.2em] font-sans text-muted-foreground">— {review.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
