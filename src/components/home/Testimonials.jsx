import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: 'Sarah M.',
      product: 'Amber Lace Earrings',
      text: "These look incredibly high-end. I've worn them every day for a month and the gold tone is still perfect. The vintage texture is stunning.",
    },
    {
      id: 2,
      name: 'Elena R.',
      product: 'Golden Sphere Huggies',
      text: "Exactly the chunky huggies I've been looking for. They have a brilliant shine and don't irritate my sensitive ears at all.",
    },
    {
      id: 3,
      name: 'Chloe T.',
      product: 'Majestic Flora Nectar',
      text: "The perfect statement piece. It elevates simple outfits instantly. Beautiful packaging too, making it feel very premium.",
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-serif mb-16">Loved by You</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review) => (
            <div key={review.id} className="flex flex-col items-center">
              <div className="flex gap-1 mb-6 text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="font-serif text-xl italic leading-relaxed mb-6">"{review.text}"</p>
              <div className="text-sm uppercase tracking-widest font-medium">
                <span className="text-foreground">{review.name}</span>
                <span className="mx-2 text-muted-foreground">|</span>
                <span className="text-muted">{review.product}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;