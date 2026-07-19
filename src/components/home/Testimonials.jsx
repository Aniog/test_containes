import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Amelia R.",
    initial: "A",
    product: "Majestic Flora Nectar",
    body: "I've worn this necklace every day for six months. The plating hasn't budged and the pearls catch the light like nothing else I own. It's become part of me.",
  },
  {
    name: "Noor K.",
    initial: "N",
    product: "Golden Sphere Huggies",
    body: "The weight, the finish, the click — everything feels considered. I bought them as a gift for my sister, then quietly ordered myself a pair.",
  },
  {
    name: "Marielle D.",
    initial: "M",
    product: "Royal Heirloom Set",
    body: "Packaging alone made me tear up. The set is exactly the everyday elegance I was hunting for — I've already given two as wedding gifts.",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-0.5 text-gold" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-gold" strokeWidth={0} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-cream">
      <div className="container-page py-16 sm:py-20 lg:py-28">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="eyebrow">From the Community</p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-[1.05] text-ink">
            Letters from our wearers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {REVIEWS.map((r) => (
            <article
              key={r.name}
              className="bg-bone border border-line p-7 sm:p-8 flex flex-col h-full"
            >
              <Stars />
              <p className="mt-5 text-ink/80 text-[15px] leading-relaxed flex-1">
                "{r.body}"
              </p>
              <div className="mt-7 pt-5 border-t border-line flex items-center justify-between">
                <div>
                  <p className="product-name text-ink">{r.name}</p>
                  <p className="mt-1 text-xs text-taupe">
                    On the {r.product}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="w-9 h-9 inline-flex items-center justify-center bg-ink text-bone font-serif text-base"
                >
                  {r.initial}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
