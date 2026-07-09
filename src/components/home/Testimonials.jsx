import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "I've received more compliments on my Vivid Aura ear cuff than any other piece I own. The quality is incredible for the price.",
    name: 'Sarah M.',
    rating: 5,
  },
  {
    id: 2,
    text: "Bought the Royal Heirloom Set as a gift for my sister. She cried. The packaging alone is worth it — so luxurious.",
    name: 'Rachel K.',
    rating: 5,
  },
  {
    id: 3,
    text: "Finally, gold jewelry that doesn't turn my skin green. I wear my Golden Sphere Huggies every single day. Obsessed.",
    name: 'Priya L.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
            What They're Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center px-4">
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent" fill="currentColor" />
                ))}
              </div>
              <p className="text-muted-fg leading-relaxed text-sm italic">
                "{t.text}"
              </p>
              <p className="mt-4 text-xs uppercase tracking-widest font-medium text-charcoal">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
