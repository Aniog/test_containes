import React from 'react';
import { Star } from 'lucide-react';

export function Testimonials() {
  const reviews = [
    { text: "The quality is absolutely stunning. It has the weight and color of solid gold without the price tag.", name: "Sarah M." },
    { text: "I've worn my huggies every day for months—in the shower and working out—and they haven't tarnished a bit.", name: "Emily R." },
    { text: "Beautiful packaging and the piece itself exceeds expectations. A perfect gift to myself.", name: "Jessica T." }
  ];

  return (
    <section className="py-24 bg-background border-y border-border/40">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="sr-only">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-border">
          {reviews.map((r, i) => (
            <div key={i} className="flex flex-col items-center pt-8 md:pt-0 first:pt-0 md:px-8">
              <div className="flex gap-1 mb-6 text-primary">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="font-serif text-lg leading-relaxed text-foreground mb-6 italic">"{r.text}"</p>
              <p className="uppercase tracking-widest text-xs font-medium text-muted-foreground">— {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
