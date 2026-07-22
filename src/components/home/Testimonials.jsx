import React from 'react';
import { Star } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Elena M.',
      text: 'The quality is absolutely stunning. I wear my Golden Sphere Huggies every single day and they still look like new.',
      stars: 5
    },
    {
      name: 'Sarah K.',
      text: 'Finally, jewelry that doesn’t irritate my sensitive skin! The 18K plating is thick and the designs are so timeless.',
      stars: 5
    },
    {
      name: 'Jessica L.',
      text: 'Beautifully packaged and the delivery was so fast. The Royal Heirloom Set made the perfect gift for my sister.',
      stars: 5
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <SectionHeader 
          title="What Our Community Says" 
          subtitle="Customer Reviews"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review, index) => (
            <div key={index} className="text-center group">
              <div className="flex justify-center mb-6 space-x-1">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-black text-black" />
                ))}
              </div>
              <p className="text-lg font-serif italic mb-8 leading-relaxed text-neutral-600 group-hover:text-black transition-colors duration-300">
                "{review.text}"
              </p>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-black border-t border-neutral-100 pt-6 inline-block">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
