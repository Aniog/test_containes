import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    text: "The Majestic Flora necklace is even more beautiful in person. I get compliments every time I wear it.",
    product: "Majestic Flora Nectar"
  },
  {
    id: 2,
    name: "Elena R.",
    text: "Obsessed with these huggies! They are the perfect weight, comfortable to sleep in, and never tarnish.",
    product: "Golden Sphere Huggies"
  },
  {
    id: 3,
    name: "Chloe T.",
    text: "Purchased the Heirloom set for a friend and ended up buying one for myself. Luxury quality without the markup.",
    product: "Royal Heirloom Set"
  }
];

export default function HomeTestimonials() {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-3xl text-center mb-16" id="testimonials-title">Beloved by You</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review) => (
            <div key={review.id} className="flex flex-col items-center text-center">
              <div className="flex gap-1 mb-6 text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="font-serif text-lg leading-relaxed mb-6 italic text-foreground/90">
                "{review.text}"
              </p>
              <div className="mt-auto">
                <p className="text-sm font-medium tracking-wide uppercase">{review.name}</p>
                <p className="text-xs text-muted-foreground mt-1 tracking-widest uppercase">{review.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}