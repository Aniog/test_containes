import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Sophia L.",
      text: "The quality of the Golden Sphere Huggies is incredible. They have a weight to them that feels so premium. My new everyday favorite.",
      rating: 5
    },
    {
      name: "Emma W.",
      text: "I bought the Royal Heirloom Set for my sister's birthday and she hasn't taken it off. The packaging was just as beautiful as the jewelry.",
      rating: 5
    },
    {
      name: "Isabella R.",
      text: "Finally, demi-fine jewelry that doesn't irritate my sensitive ears. The 18K gold plating is thick and hasn't tarnished after months of wear.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif">Community Whispers</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-6">
              <div className="flex space-x-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-base font-serif italic text-stone-700 leading-relaxed">
                "{review.text}"
              </p>
              <span className="text-xs uppercase tracking-ultra-wide font-medium text-stone-400">
                — {review.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
