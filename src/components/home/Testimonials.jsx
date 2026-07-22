import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Amelia R.",
    initial: "A",
    rating: 5,
    quote:
      "The weight, the finish, the packaging — Velmora is the first demi-fine brand that actually feels like a quiet luxury. I wear the huggies daily.",
    product: "Golden Sphere Huggies",
  },
  {
    name: "Noor S.",
    initial: "N",
    rating: 5,
    quote:
      "I bought the Vivid Aura for my sister's birthday. She hasn't taken it off. The gift box alone made me cry a little — the little ribbon detail.",
    product: "Vivid Aura Jewels",
  },
  {
    name: "Isla T.",
    initial: "I",
    rating: 5,
    quote:
      "I have sensitive ears and the hypoallergenic finish is the real deal. Six months in, no tarnish, no green. Worth every penny.",
    product: "Royal Heirloom Set",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-blush py-20 md:py-32">
      <div className="container-shell">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <span className="eyebrow">What They Say</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-3 text-ink">
            Treasured by you
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {REVIEWS.map((r) => (
            <article
              key={r.name}
              className="bg-ivory p-8 md:p-10 flex flex-col"
            >
              <div className="flex items-center gap-1 text-champagne">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-current"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <p className="mt-6 font-display text-2xl md:text-[26px] text-ink leading-snug flex-1">
                &ldquo;{r.quote}&rdquo;
              </p>
              <div className="mt-8 pt-6 border-t border-ink/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-champagne text-espresso flex items-center justify-center font-display text-lg">
                  {r.initial}
                </div>
                <div>
                  <p className="text-sm text-ink">{r.name}</p>
                  <p className="text-[10px] tracking-wider-3 uppercase text-mute mt-0.5">
                    On {r.product}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
