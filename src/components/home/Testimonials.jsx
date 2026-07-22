import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "The Golden Sphere Huggies haven't left my ears since they arrived. They look far more expensive than they are.",
    name: "Amelia R.",
  },
  {
    quote:
      "I bought the Royal Heirloom Set for my sister's birthday — the gift box alone made her cry. Stunning quality.",
    name: "Sofia M.",
  },
  {
    quote:
      "Finally, gold jewelry that doesn't irritate my skin. The craftsmanship feels truly heirloom-level.",
    name: "Priya K.",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
      <div className="mb-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-luxe text-gold">
          Kind Words
        </p>
        <h2 className="mt-3 font-serif text-3xl font-medium text-ink md:text-5xl">
          Loved by <span className="italic">Thousands</span>
        </h2>
      </div>

      <div className="grid gap-10 md:grid-cols-3 md:gap-8">
        {testimonials.map((t) => (
          <blockquote
            key={t.name}
            className="flex flex-col items-center border-t border-gold/30 pt-8 text-center"
          >
            <div className="flex gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold" strokeWidth={0} />
              ))}
            </div>
            <p className="mt-5 font-serif text-xl italic leading-relaxed text-espresso">
              “{t.quote}”
            </p>
            <footer className="mt-5 text-xs font-semibold uppercase tracking-luxe text-taupe">
              {t.name}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
