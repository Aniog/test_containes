import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      text: "I haven't taken these huggies off since I got them. The quality is incredible for the price point, and they never irritate my sensitive ears.",
      name: "Sarah M."
    },
    {
      id: 2,
      text: "The packaging is so beautiful, making it the perfect gift. I purchased the Royal Heirloom Set for my sister and she was blown away by the detail.",
      name: "Emily T."
    },
    {
      id: 3,
      text: "Absolutely stunning pieces that make me feel put together even in sweatpants. The Amber Lace Earrings get me compliments every time I wear them.",
      name: "Jessica R."
    }
  ];

  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-center font-serif text-3xl md:text-4xl mb-16">What They're Saying</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-6xl mx-auto">
          {reviews.map((review) => (
            <div key={review.id} className="flex flex-col items-center">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-serif italic text-lg text-foreground/80 mb-6 leading-relaxed flex-grow">
                "{review.text}"
              </p>
              <p className="uppercase tracking-widest text-xs font-medium text-muted-foreground">
                — {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
