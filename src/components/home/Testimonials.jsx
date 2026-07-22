import { Star } from "lucide-react";

const REVIEWS = [
  {
    quote:
      "I wear the Golden Sphere huggies every single day. They feel more expensive than they are — friends always ask where they're from.",
    name: "Amelia R.",
    product: "Golden Sphere Huggies",
  },
  {
    quote:
      "The Flora Nectar is even more beautiful in person. I bought one for my sister too — it's now our thing.",
    name: "Sofia M.",
    product: "Majestic Flora Nectar",
  },
  {
    quote:
      "Quietly the nicest jewelry box I own. Everything feels considered, down to the suede pouch.",
    name: "Jade K.",
    product: "Royal Heirloom Set",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-0.5 text-gold" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-16">
        <div className="text-center">
          <p id="testimonials-eyebrow" className="eyebrow">
            Loved By
          </p>
          <h2
            id="testimonials-title"
            className="display-lg mt-4 text-ink"
          >
            What our community says
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:mt-20 md:grid-cols-3 md:gap-10">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="flex h-full flex-col border-t border-hairline pt-8"
            >
              <Stars />
              <blockquote className="mt-6 flex-1 font-serif text-[19px] italic leading-relaxed text-ink">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 font-sans text-[12px] tracking-[0.18em] uppercase text-taupe">
                — {r.name} · {r.product}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
