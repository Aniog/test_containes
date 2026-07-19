import { Star } from "lucide-react";

const REVIEWS = [
  {
    id: "r-1",
    quote:
      "The Golden Sphere Huggies are the only earrings I forget I'm wearing — until someone stops me to ask where they're from.",
    name: "Olivia M.",
  },
  {
    id: "r-2",
    quote:
      "Bought the Flora necklace for my sister's birthday. The box, the card, the piece — every detail felt considered.",
    name: "Hana K.",
  },
  {
    id: "r-3",
    quote:
      "I've owned demi-fine jewelry from a few places now. Velmora is the one that still looks new after a year of daily wear.",
    name: "Priya S.",
  },
];

export default function Testimonials() {
  return (
    <section
      aria-label="Reviews"
      className="bg-paper border-y border-stone"
    >
      <div className="container-7xl py-20 md:py-28">
        <div className="text-center mb-14">
          <p className="eyebrow text-muted">◆ Loved by 24,000+ Wearers</p>
          <h2
            id="section-testimonials-title"
            className="display-1 text-ink mt-3 text-4xl md:text-5xl"
          >
            What They Say
          </h2>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {REVIEWS.map((review) => (
            <li
              key={review.id}
              className="bg-ivory border border-stone p-8 md:p-10 flex flex-col"
            >
              <div className="flex items-center gap-1 text-gold">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    className="w-4 h-4"
                    strokeWidth={1}
                    fill="currentColor"
                  />
                ))}
              </div>
              <p className="font-serif text-xl md:text-2xl text-ink mt-6 leading-snug text-pretty">
                "{review.quote}"
              </p>
              <p className="mt-8 text-[11px] uppercase tracking-eyebrow text-muted">
                — {review.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
