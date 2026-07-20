import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      text: "The quality is unmatched for the price point. I wear my Golden Sphere Huggies every single day.",
      author: "Sarah M.",
      product: "Golden Sphere Huggies"
    },
    {
      id: 2,
      text: "Absolutely stunning. It adds the perfect touch of quiet luxury to my work wardrobe.",
      author: "Elena R.",
      product: "Vivid Aura Jewels"
    },
    {
      id: 3,
      text: "Beautifully packaged and even more gorgeous in person. I'm officially obsessed with Velmora.",
      author: "Chloe T.",
      product: "Majestic Flora Nectar"
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-heading text-3xl md:text-4xl text-center tracking-wide uppercase mb-16">Words from our Community</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="flex flex-col items-center text-center">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="font-heading text-xl md:text-2xl leading-relaxed italic text-foreground/90 mb-6">"{review.text}"</p>
              <div className="mt-auto">
                <p className="text-sm font-medium tracking-wide uppercase">{review.author}</p>
                <p className="text-xs text-muted-foreground mt-1">{review.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}