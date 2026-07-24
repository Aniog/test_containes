import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sarah M.',
    review: "I have sensitive skin and usually can't wear fashion jewelry. These huggies have been in my ears for weeks with zero irritation. The quality feels way above the price point.",
    product: 'Golden Sphere Huggies'
  },
  {
    id: 2,
    name: 'Elena R.',
    review: "The Vivid Aura cuff is exactly what I was looking for to complete my ear stack without getting another piercing. It stays put all day and looks incredibly real.",
    product: 'Vivid Aura Jewels'
  },
  {
    id: 3,
    name: 'Jessica T.',
    review: "Received the Royal Heirloom set as a gift and I'm obsessed. The craftsmanship on the pendant is stunning. It has that heavy, expensive feel you want in demi-fine jewelry.",
    product: 'Royal Heirloom Set'
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-border">
      <h2 className="font-heading text-4xl text-center mb-16">WORDS FROM OUR COMMUNITY</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {reviews.map((review) => (
          <div key={review.id} className="flex flex-col items-center">
            <div className="flex text-accent mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="font-heading text-xl mb-6 flex-grow">"{review.review}"</p>
            <div className="mt-auto">
              <p className="font-sans text-sm tracking-widest uppercase font-medium">{review.name}</p>
              <p className="font-sans text-xs text-muted-foreground mt-1">Verified Buyer · {review.product}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
