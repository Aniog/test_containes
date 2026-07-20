import React from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    {
      name: "Sophia L.",
      text: "The quality is outstanding. I haven't taken off my Golden Sphere Huggies since they arrived. Truly premium demi-fine jewelry.",
      rating: 5
    },
    {
      name: "Emma W.",
      text: "Beautifully packaged and even more stunning in person. The Majestic Flora Nectar is my new favorite statement piece.",
      rating: 5
    },
    {
      name: "Olivia M.",
      text: "Velmora has become my go-to for gifts and self-treats. The pieces are classic but with a modern editorial edge.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-serif mb-16 underline decoration-accent decoration-1 underline-offset-8">Loved by You</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((row, i) => (
            <div key={i} className="flex flex-col items-center space-y-4">
              <div className="flex space-x-1 text-accent mb-2">
                {[...Array(row.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-lg italic font-serif leading-relaxed text-primary/80 max-w-sm font-light uppercase tracking-[0.05em]">
                "{row.text}"
              </p>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent">
                {row.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
