import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      text: "The quality is unmatched for the price point. The Vivid Aura ear cuff hasn't left my ear since I bought it.",
      author: "Sarah L."
    },
    {
      id: 2,
      text: "Quiet luxury perfectly captured. I bought the Royal Heirloom set for my sister and ended up getting one for myself.",
      author: "Elena M."
    },
    {
      id: 3,
      text: "Finally, demi-fine jewelry that doesn't tarnish and feels substantial. The Golden Sphere Huggies are my new everyday staple.",
      author: "Jessica T."
    }
  ];

  return (
    <section className="py-24 bg-velmora-bg">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divider-cols">
          {reviews.map((review) => (
            <div key={review.id} className="px-6 flex flex-col items-center">
              <div className="flex gap-1 mb-6 text-velmora-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="font-serif text-lg italic text-velmora-text leading-relaxed mb-6">
                "{review.text}"
              </p>
              <p className="text-sm tracking-widest uppercase text-velmora-text/60">
                — {review.author}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Custom CSS for dividers (could also use Tailwind divide-x but this gives better control for responsive) */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 768px) {
          .divider-cols > div:not(:last-child) {
            border-right: 1px solid rgba(232, 229, 225, 1); /* velmora-border */
          }
        }
      `}} />
    </section>
  );
}