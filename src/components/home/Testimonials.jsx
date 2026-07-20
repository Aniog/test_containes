import StarRating from "@/components/product/StarRating";

const REVIEWS = [
  {
    id: 1,
    name: "Amelia K.",
    rating: 5,
    text: "The huggies are everything — I haven't taken them off in three weeks. The weight feels substantial and the finish is gorgeous, not at all like the plated pieces I've tried before.",
  },
  {
    id: 2,
    name: "Priya S.",
    rating: 5,
    text: "I ordered the Flora necklace for my sister's birthday and ended up keeping it for a week before I could give it away. The packaging alone made it feel like a real heirloom.",
  },
  {
    id: 3,
    name: "Naomi R.",
    rating: 5,
    text: "Finally, demi-fine that doesn't look cheap. The ear cuff is delicate but holds up beautifully, and customer service helped me swap a tone in under an hour.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="container-velmora">
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <p className="eyebrow mb-3">Words from our wearers</p>
          <h2 className="display-serif text-4xl md:text-5xl text-espresso text-balance">
            Loved, daily.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {REVIEWS.map((r) => (
            <figure
              key={r.id}
              className="bg-card border border-hairline p-7 md:p-8 flex flex-col"
            >
              <StarRating value={r.rating} showCount={false} size={14} />
              <blockquote className="mt-5 font-serif text-lg md:text-xl text-espresso leading-relaxed text-pretty flex-1">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-hairline">
                <p className="text-[11px] uppercase tracking-[0.25em] text-muted">
                  — {r.name}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
