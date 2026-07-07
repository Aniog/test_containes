import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: 'Elena M.', text: 'The quality of the Sphere Huggies exceeded my expectations. They have become my everyday staple.', stars: 5 },
    { name: 'Sarah J.', text: 'Searching for the perfect gift was easy. The Royal Heirloom Set is stunning and the packaging is beautiful.', stars: 5 },
    { name: 'Olivia K.', text: 'Velmora captures that quiet luxury feel perfectly. I get compliments on my Aura cuff every time I wear it.', stars: 5 }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-serif mb-16 underline decoration-accent/30 decoration-8 underline-offset-[12px]">Words from you</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review, idx) => (
            <div key={idx} className="space-y-6">
              <div className="flex justify-center space-x-1">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                ))}
              </div>
              <p className="font-serif italic text-lg leading-relaxed font-light">"{review.text}"</p>
              <p className="font-sans text-[10px] uppercase tracking-widest text-muted-foreground">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
