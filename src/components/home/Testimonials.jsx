import { RatingStars } from "@/components/ui/RatingStars"

const REVIEWS = [
  {
    name: "Amelia R.",
    body:
      "I bought the Majestic Flora for myself after a long year. It arrived in the most beautiful box — the piece itself is even more lovely in person. I haven't taken it off.",
  },
  {
    name: "Sienna K.",
    body:
      "The Golden Sphere Huggies are the everyday earring I never knew I needed. They have real weight to them, the gold is warm, and they look intentional with everything.",
  },
  {
    name: "Marielle C.",
    body:
      "Gifted the Royal Heirloom Set to my sister — she opened it and actually gasped. The packaging alone is a keepsake. The jewelry is exquisite. Already ordering for myself.",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-editorial mx-auto px-6 md:px-10 lg:px-14">
        <div className="text-center mb-12 md:mb-16">
          <span className="eyebrow text-gold-300">Loved By</span>
          <h2 className="editorial-heading text-4xl md:text-5xl mt-3 max-w-2xl mx-auto">
            Three women, three different reasons to wear it
          </h2>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {REVIEWS.map((r) => (
            <li
              key={r.name}
              className="flex flex-col gap-5 p-8 bg-bone-50 border border-line hover:border-gold-100 transition-colors duration-500"
            >
              <RatingStars value={5} />
              <p className="font-serif text-xl md:text-2xl text-cocoa leading-snug">
                "{r.body}"
              </p>
              <span className="eyebrow text-cocoa-50 mt-auto">
                — {r.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
