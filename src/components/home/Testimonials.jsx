import StarRating from "@/components/product/StarRating";

const reviews = [
  { name: "Maya R.", copy: "The huggies feel substantial without being heavy. They look far more expensive than they are." },
  { name: "Claire T.", copy: "I bought the necklace as a birthday gift and kept thinking about ordering one for myself." },
  { name: "Nina S.", copy: "Beautiful packaging, soft gold tone, and no irritation after a full day of wear." },
];

export default function Testimonials() {
  return (
    <section className="bg-velmora-ivory py-16 text-velmora-espresso md:py-24">
      <div className="velmora-container">
        <div className="mb-10 text-center">
          <p className="section-kicker">Kind words</p>
          <h2 className="serif-heading mt-3 text-5xl md:text-7xl">Loved in real life</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="rounded-[2rem] border border-velmora-linen bg-velmora-ivory p-7 shadow-sm text-velmora-espresso">
              <StarRating rating="5.0" reviews="" compact />
              <p className="mt-5 font-serifDisplay text-2xl leading-8 text-velmora-espresso">
                “{review.copy}”
              </p>
              <p className="mt-6 text-xs font-bold uppercase tracking-nav text-velmora-bronze">
                {review.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
