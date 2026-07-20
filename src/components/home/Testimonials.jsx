import { Star } from 'lucide-react';

const testimonials = [
  {
    text: "The quality is unreal for the price. I wear my Sphere Huggies every single day — they still look brand new after six months.",
    name: "Sarah M.",
    rating: 5,
  },
  {
    text: "Bought the Royal Heirloom Set as a gift for my sister. She cried. The packaging alone is worth it. Absolutely stunning.",
    name: "Jessica L.",
    rating: 5,
  },
  {
    text: "Finally found jewelry that doesn't irritate my sensitive ears. The gold plating is thick and luxurious. I'm obsessed.",
    name: "Amara K.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal text-center mb-12">
          What They're Saying
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center px-4">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-charcoal/80 leading-relaxed mb-4 italic font-serif text-lg">
                "{t.text}"
              </p>
              <p className="text-xs uppercase tracking-widest text-muted-fg font-sans">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
