import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: "Sarah", initial: "M", text: "The quality is beyond what I expected. The Golden Sphere Huggies have become my daily signature." },
    { name: "Jessica", initial: "K", text: "Beautifully packaged and even more stunning in person. Perfect for gifting myself or others." },
    { name: "Elena", initial: "R", text: "The weight and shine of the gold is perfect. Doesn't irritate my sensitive skin at all." },
  ];

  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl font-serif mb-16">The Velmora Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review, i) => (
            <div key={i} className="space-y-6 px-4">
              <div className="flex justify-center gap-1 text-primary">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-lg font-serif italic text-muted-foreground leading-relaxed">
                "{review.text}"
              </p>
              <p className="text-[10px] uppercase tracking-widest font-semibold">
                — {review.name} {review.initial}.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
