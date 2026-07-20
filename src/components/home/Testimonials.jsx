import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      text: "The quality is absolutely stunning. I've been wearing my Majestic Flora necklace every day and it still looks brand new. Constantly getting compliments on it.",
      name: "Sarah M.",
      product: "Majestic Flora Nectar"
    },
    {
      id: 2,
      text: "Finally found huggies that don't irritate my sensitive ears. The Golden Sphere design is so chic and comfortable enough to sleep in. Highly recommend!",
      name: "Elena R.",
      product: "Golden Sphere Huggies"
    },
    {
      id: 3,
      text: "Purchased the Royal Heirloom Set for my wedding day and it was perfection. The packaging felt so luxurious, and the jewelry looks incredibly high-end.",
      name: "Jessica T.",
      product: "Royal Heirloom Set"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-2xl font-serif tracking-widest uppercase mb-16">Loved By You</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {reviews.map((review) => (
            <div key={review.id} className="flex flex-col items-center">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <blockquote className="flex-1 font-serif text-lg leading-relaxed text-foreground/90 mb-8 italic">
                "{review.text}"
              </blockquote>
              
              <div className="mt-auto">
                <p className="font-medium tracking-wider uppercase text-sm mb-1">{review.name}</p>
                <p className="text-muted text-xs uppercase tracking-widest">{review.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
