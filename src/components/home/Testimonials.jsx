const reviews = [
  {
    name: "Amelia R.",
    location: "Verified buyer · New York",
    rating: 5,
    quote:
      "I bought the Vivid Aura ear cuff as a gift for my sister and ended up keeping it for myself. The plating is so warm, and the crystal catches the light like a tiny jewel. Already planning my next order.",
    product: "Vivid Aura Jewels",
  },
  {
    name: "Priya M.",
    location: "Verified buyer · London",
    rating: 5,
    quote:
      "The Royal Heirloom Set is the most thoughtful gift I've ever given. The packaging alone made my mum cry (in a good way). The necklace is delicate but feels substantial — exactly what I hoped for.",
    product: "Royal Heirloom Set",
  },
  {
    name: "Sara L.",
    location: "Verified buyer · Los Angeles",
    rating: 5,
    quote:
      "I've worn the Golden Sphere Huggies every day for four months — through gym, showers, the lot. Still perfectly polished. They feel expensive, without the price tag I'd expect.",
    product: "Golden Sphere Huggies",
  },
];

function Stars({ count = 5, size = 14 }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="#A07A4A"
          stroke="#A07A4A"
          strokeWidth="1.5"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
        <p className="eyebrow mb-3">Loved by 12,000+</p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] leading-[1.05]">
          What our community says.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {reviews.map((r) => (
          <figure
            key={r.name}
            className="flex flex-col bg-ivory border border-hairline p-7 md:p-8"
          >
            <Stars count={r.rating} />
            <blockquote className="mt-5 font-serif text-[20px] md:text-[22px] leading-snug text-ink">
              “{r.quote}”
            </blockquote>
            <figcaption className="mt-7 pt-5 border-t border-hairline flex items-center justify-between">
              <div>
                <p className="product-name">{r.name}</p>
                <p className="text-[11px] text-muted mt-0.5">{r.location}</p>
              </div>
              <p className="text-[11px] uppercase tracking-widest2 text-muted max-w-[100px] text-right leading-snug">
                {r.product}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
