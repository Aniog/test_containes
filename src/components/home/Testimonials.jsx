import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "I've received so many compliments on my Vivid Aura ear cuff. The quality is incredible for the price — it looks like real gold.",
    name: 'Sarah M.',
    rating: 5,
  },
  {
    id: 2,
    text: "Bought the Royal Heirloom Set as a gift for my sister. The packaging was beautiful and she absolutely loved it. Will definitely order again.",
    name: 'Jessica L.',
    rating: 5,
  },
  {
    id: 3,
    text: "Finally found jewelry that doesn't irritate my sensitive ears. The huggies are so comfortable I forget I'm wearing them. Obsessed!",
    name: 'Amara K.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-cream p-8 border border-border-warm">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-gold" />
                ))}
              </div>
              <p className="text-sm text-charcoal leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <p className="text-xs text-muted-fg font-medium tracking-wide uppercase">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
