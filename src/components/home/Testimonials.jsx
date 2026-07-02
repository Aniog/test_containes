import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Elena M.',
      text: 'The Golden Sphere Huggies are the perfect weight. They feel substantial and look much more expensive than they are.',
      stars: 5,
    },
    {
      name: 'Sarah K.',
      text: 'I haven’t taken off my Flora Nectar necklace since it arrived. The crystal colors are so vibrant yet elegant.',
      stars: 5,
    },
    {
      name: 'Maya R.',
      text: 'Beautifully packaged and the shipping was incredibly fast. A truly premium experience from start to finish.',
      stars: 5,
    },
  ];

  return (
    <section className="py-24 bg-velmora-bg border-y border-black/5">
      <div className="container mx-auto px-4 md:px-8 text-center max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {reviews.map((item, idx) => (
            <div key={idx} className="space-y-6">
              <div className="flex justify-center space-x-1">
                {[...Array(item.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
                ))}
              </div>
              <p className="font-serif text-xl italic leading-relaxed text-velmora-charcoal">
                "{item.text}"
              </p>
              <div className="flex flex-col items-center space-y-2">
                <span className="w-8 h-[1px] bg-velmora-gold" />
                <span className="text-[10px] uppercase tracking-ultra-wide font-medium">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
