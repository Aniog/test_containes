import { Star } from 'lucide-react';

export function Testimonials() {
  const reviews = [
    {
      id: 1,
      text: "The quality is outstanding for the price point. The Amber Lace Earrings feel substantial but aren't heavy at all. I wear them constantly.",
      name: "Emma S.",
      product: "Amber Lace Earrings"
    },
    {
      id: 2,
      text: "I've showered, slept, and worked out in my Golden Sphere Huggies and they haven't tarnished a bit. Finally, everyday jewelry that actually lasts.",
      name: "Olivia C.",
      product: "Golden Sphere Huggies"
    },
    {
      id: 3,
      text: "The packaging was beautiful and the Vivid Aura ear cuff adds the perfect elevated touch to my stack without needing another piercing.",
      name: "Sophia M.",
      product: "Vivid Aura Jewels"
    }
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-serif font-light tracking-wide text-center mb-16">
          Words from our Community
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="text-center flex flex-col space-y-6">
              <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="font-light italic text-foreground tracking-wide leading-relaxed flex-grow">
                "{review.text}"
              </p>
              
              <div>
                <p className="font-serif tracking-widest uppercase text-sm mb-1">{review.name}</p>
                <p className="text-xs text-muted-foreground">{review.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}