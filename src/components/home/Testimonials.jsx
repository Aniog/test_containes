import StarRating from "@/components/ui/StarRating"

const testimonials = [
  {
    name: "Elena R.",
    text: "The Golden Sphere Huggies haven't left my ears in months. They feel weightless and look far more expensive than they were.",
    rating: 5,
  },
  {
    name: "Maya T.",
    text: "Bought the Royal Heirloom Set as a gift — the packaging alone made her cry. The quality is genuinely beautiful.",
    rating: 5,
  },
  {
    name: "Sofia L.",
    text: "I was nervous about gold plate, but my Majestic Flora necklace still looks brand new after a year of daily wear.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      <div className="flex flex-col items-center text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold">
          Loved By Thousands
        </p>
        <h2 className="mt-3 font-serif text-4xl text-espresso md:text-5xl">
          Words From Our Community
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col border border-hairline bg-white p-8"
          >
            <StarRating value={t.rating} size={15} />
            <blockquote className="mt-5 flex-1 font-serif text-xl italic leading-relaxed text-espresso">
              “{t.text}”
            </blockquote>
            <figcaption className="mt-6 text-[11px] font-medium uppercase tracking-[0.18em] text-stone">
              {t.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
