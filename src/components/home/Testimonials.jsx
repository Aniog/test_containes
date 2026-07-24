import { Star } from "lucide-react";

export function Testimonials() {
  const reviews = [
    {
      id: 1,
      text: "The Vivid Aura cuff is exactly what I was looking for. It feels substantial and looks incredibly high-end. I get compliments every time I wear it.",
      name: "Sarah M.",
    },
    {
      id: 2,
      text: "Beautiful packaging and stunning jewelry. The Golden Sphere Huggies haven't left my ears since I got them. No irritation, just perfect everyday elegance.",
      name: "Elena T.",
    },
    {
      id: 3,
      text: "I bought the Heirloom Set as a gift for myself after a promotion. The quality exceeds pieces I have that cost triple the price. A forever customer.",
      name: "Michelle K.",
    }
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 id="testimonials-title" className="font-serif text-4xl mb-4 text-foreground">A Word From You</h2>
          <div className="flex justify-center gap-1 text-primary">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="currentColor" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {reviews.map((review) => (
            <div key={review.id} className="text-center">
              <p className="font-serif text-xl italic text-foreground mb-6 leading-relaxed">
                "{review.text}"
              </p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-sans">
                — {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
