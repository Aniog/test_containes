import StarRating from "@/components/StarRating";

const reviews = [
  {
    name: "Sarah M.",
    text: "The quality exceeded my expectations. I have sensitive ears and these are the first earrings I can wear all day without any irritation.",
    rating: 5,
  },
  {
    name: "Jessica L.",
    text: "Bought the Royal Heirloom Set as a birthday gift for my sister. She absolutely loved it — the packaging felt so premium.",
    rating: 5,
  },
  {
    name: "Amanda K.",
    text: "I wear my Golden Sphere Huggies literally every day. They go with everything and still look brand new after 6 months.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent mb-3">Reviews</p>
          <h2 className="serif text-3xl md:text-4xl font-light">Loved by Our Community</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-cream p-6 md:p-8 rounded-sm border border-divider">
              <StarRating rating={r.rating} size={14} />
              <p className="mt-4 text-sm leading-relaxed text-charcoal-light">&ldquo;{r.text}&rdquo;</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-warm-gray">{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
