import StarRating from "@/components/ui/StarRating"

const TESTIMONIALS = [
  {
    quote:
      "The Golden Sphere Huggies haven't left my ears since they arrived. The gold is so warm and they're impossibly light.",
    name: "Sofia M.",
    location: "London",
  },
  {
    quote:
      "I bought the Royal Heirloom Set as a gift and the presentation alone made me look like a hero. The quality is stunning for the price.",
    name: "Amara K.",
    location: "New York",
  },
  {
    quote:
      "Majestic Flora Nectar is the necklace I reach for every morning. It layers beautifully and the crystals catch every bit of light.",
    name: "Elena R.",
    location: "Milan",
  },
]

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-8xl px-5 py-20 md:px-8 md:py-28">
      <div className="mb-12 text-center">
        <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold">
          Loved by Thousands
        </p>
        <h2 className="mt-3 font-serif text-4xl font-light text-ink md:text-5xl">
          Words from Our Wearers
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
        {TESTIMONIALS.map((t, i) => (
          <figure
            key={i}
            className="flex flex-col items-center border border-sand bg-cream px-8 py-10 text-center"
          >
            <StarRating value={5} size={16} />
            <blockquote className="mt-5 flex-1 font-serif text-lg italic leading-relaxed text-ink md:text-xl">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-6">
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-ink">
                {t.name}
              </p>
              <p className="mt-1 font-sans text-[11px] text-taupe">{t.location}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
