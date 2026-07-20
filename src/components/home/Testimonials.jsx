import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      text: "The quality is simply unmatched for the price. I haven't taken my Golden Sphere Huggies off since they arrived. They feel substantial but are so comfortable to sleep in.",
      author: "Eleanor T."
    },
    {
      id: 2,
      text: "I bought the Royal Heirloom Set for my sister's wedding day and the packaging alone was exquisite. The pieces have a beautiful vintage warmth to the gold.",
      author: "Sarah M."
    },
    {
      id: 3,
      text: "Customer service was brilliant. The Vivid Aura Jewels ear cuff is the perfect subtle edgy addition to my work wear. Truly quiet luxury.",
      author: "Chloe L."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
         <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Loved by You</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {reviews.map((review) => (
            <div key={review.id} className="flex flex-col items-center text-center">
              <div className="flex space-x-1 mb-6 text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="font-serif text-lg leading-relaxed mb-6 italic text-foreground/80 flex-grow">
                "{review.text}"
              </p>
              <p className="text-sm tracking-widest uppercase text-muted-foreground">
                — {review.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}