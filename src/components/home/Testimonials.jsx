import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: 'Sarah M.',
      product: 'Vivid Aura Jewels',
      text: 'These have become my absolute favorite everyday pieces. The gold tone is so warm and perfect, and they haven\'t tarnished at all even though I shower with them.'
    },
    {
      id: 2,
      name: 'Elena K.',
      product: 'Golden Sphere Huggies',
      text: 'Exactly the "quiet luxury" feeling I was looking for. The weight is substantial but they are comfortable all day. I get compliments whenever I wear them.'
    },
    {
      id: 3,
      name: 'Jessica T.',
      product: 'Royal Heirloom Set',
      text: 'Bought this set as a gift to myself. The packaging was beautiful, and the jewelry itself feels much more expensive than it is. Definitely coming back for more.'
    }
  ];

  return (
    <section className="py-24 bg-background border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Loved by You</h2>
          <div className="w-12 h-[1px] bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review) => (
            <div key={review.id} className="flex flex-col items-center text-center p-8 bg-secondary/30 rounded-[2px] transition-all hover:-translate-y-1 hover:shadow-sm">
              <div className="flex gap-1 mb-6 text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-foreground/90 italic mb-6 leading-relaxed flex-grow">
                "{review.text}"
              </p>
              <div className="mt-auto">
                <p className="font-medium tracking-wide uppercase text-sm">{review.name}</p>
                <p className="text-muted-foreground text-xs mt-1">Purchased {review.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
