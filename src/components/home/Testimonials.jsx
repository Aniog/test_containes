import Stars from "@/components/ui/Stars";

const reviews = [
  {
    name: "Isabelle M.",
    rating: 5,
    quote:
      "I bought the Vivid Aura cuff and the Golden Sphere huggies — both feel like little pieces of calm I can carry with me. The packaging made me cry.",
  },
  {
    name: "Noor A.",
    rating: 5,
    quote:
      "I've worn the Majestic Flora pendant nearly every day for six months. No tarnish, no green ears, no regrets. Quiet luxury done right.",
  },
  {
    name: "Sofia R.",
    rating: 5,
    quote:
      "Bought the Royal Heirloom Set for my sister's birthday. The keepsake box is now her favorite object. I may have ordered myself one too.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-cream">
      <div className="container-editorial py-20 md:py-28">
        <div className="mb-10 md:mb-14 text-center">
          <p className="eyebrow mb-4">From our community</p>
          <h2 className="display-2 text-balance">A thousand thank-yous</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="bg-ivory border border-hairline p-8 md:p-10 flex flex-col"
            >
              <Stars value={r.rating} />
              <blockquote className="mt-6 font-serif text-[19px] md:text-xl italic leading-[1.55] text-ink">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-auto pt-8 text-[11px] uppercase tracking-widest-2 text-ink-muted">
                — {r.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
