import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: 'Elena R.',
      text: 'The Golden Sphere Huggies are my new everyday staple. The weight and shine feel so premium for the price.',
    },
    {
      id: 2,
      name: 'Sarah M.',
      text: 'Received the Royal Heirloom Set as a gift and I couldn’t be happier. The packaging alone is stunning.',
    },
    {
      id: 3,
      name: 'Jessica W.',
      text: 'Velmora hits that sweet spot of quiet luxury without breaking the bank. Beautiful Editorial designs.',
    }
  ];

  return (
    <section className="py-24 bg-background border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif italic mb-2">Voices of Velmora</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="flex flex-col items-center text-center">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="font-serif text-xl md:text-2xl mb-8 leading-snug text-foreground/90">
                "{review.text}"
              </blockquote>
              <cite className="title-uppercase not-italic text-[10px] text-muted-foreground tracking-[0.3em]">
                — {review.name}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
