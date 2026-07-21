import React from 'react';
import { Star } from 'lucide-react';

const REVIEWS = [
  { name: 'ELENA R.', text: 'The Golden Sphere Huggies are my new daily staple. They have that perfect weight and shine.' },
  { name: 'SOFIA M.', text: 'I bought the Royal Heirloom Set for my sister, and the packaging was just as beautiful as the jewelry.' },
  { name: 'JULIANNE K.', text: 'Beautifully crafted. You can really feel the quality compared to other accessible brands.' },
];

const Testimonials = () => {
  return (
    <section className="py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {REVIEWS.map((review, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3 h-3 fill-accent text-accent" />
                ))}
              </div>
              <p className="font-serif text-lg md:text-xl italic leading-relaxed text-muted-foreground mb-8 relative">
                <span className="text-4xl text-accent/20 absolute -top-4 -left-6 font-serif">"</span>
                {review.text}
                <span className="text-4xl text-accent/20 absolute -bottom-10 -right-6 font-serif">"</span>
              </p>
              <h4 className="font-sans text-[10px] uppercase tracking-[0.4em] font-bold text-primary">{review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
