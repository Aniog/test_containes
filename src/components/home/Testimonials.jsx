import React from "react";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const reviews = [
    {
      name: "Sophia L.",
      text: "The quality is outstanding. I've been wearing my huggies for months—even in the shower—and they still look brand new. Truly premium demi-fine.",
      stars: 5,
    },
    {
      name: "Emma R.",
      text: "The perfect gift! I bought the heirloom set for my sister and the packaging was so elegant. She hasn't taken it off since.",
      stars: 5,
    },
    {
      name: "Isabella M.",
      text: "I love the weight of the pieces. They feel expensive but are accessible. Velmora has become my go-to for all my jewelry needs.",
      stars: 5,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-6 px-4">
              <div className="flex gap-1">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-serif italic text-xl md:text-2xl leading-relaxed">
                "{review.text}"
              </p>
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-muted-foreground whitespace-nowrap">
                  — {review.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
