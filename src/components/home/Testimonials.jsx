import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: "t1",
    quote:
      "I wear my Vivid Aura cuff every single day. It still looks brand new after six months. Quiet luxury that actually lasts.",
    name: "Sophia M.",
    initial: "S",
    product: "Vivid Aura Jewels",
  },
  {
    id: "t2",
    quote:
      "Bought the Royal Heirloom Set for my sister's birthday. The packaging alone made me cry. The jewelry is even better in person.",
    name: "Camille R.",
    initial: "C",
    product: "Royal Heirloom Set",
  },
  {
    id: "t3",
    quote:
      "Finally — demi-fine that feels actually fine. The Golden Sphere Huggies are weighty, real, and gorgeous. Obsessed.",
    name: "Naomi T.",
    initial: "N",
    product: "Golden Sphere Huggies",
  },
];

function StarRow() {
  return (
    <div className="flex items-center gap-0.5 text-gold">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="w-3.5 h-3.5"
          strokeWidth={1.4}
          fill="currentColor"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-cream-200 py-20 lg:py-28">
      <div className="max-w-editorial mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <span className="eyebrow-gold">Loved by</span>
          <h2 className="font-serif text-ink mt-3 text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.05]">
            What our customers say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {reviews.map((r) => (
            <article
              key={r.id}
              className="bg-cream-50 p-7 lg:p-9 flex flex-col"
            >
              <Quote
                className="w-7 h-7 text-gold mb-4"
                strokeWidth={1.4}
              />
              <p className="font-serif italic text-ink text-[18px] leading-relaxed flex-1">
                "{r.quote}"
              </p>
              <div className="mt-6">
                <StarRow />
                <p className="mt-3 text-[13px] tracking-wide text-ink">
                  {r.name[0]}. {r.name.split(" ").slice(1).join(" ")}
                </p>
                <p className="text-[12px] text-muted mt-0.5">
                  on the {r.product}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
