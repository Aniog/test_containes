import { Star } from "lucide-react"

const TESTIMONIALS = [
  {
    id: "t1",
    name: "Sofia M.",
    text: "The gold sphere huggies haven't left my ears in months. They look far more expensive than they were.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Amara K.",
    text: "Bought the floral necklace as a gift and ended up keeping it. The packaging alone feels like a treat.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Elena R.",
    text: "Beautiful, lightweight and the gold hasn't faded. My new everyday earrings — I get compliments constantly.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-stone mb-3">
            Loved by Thousands
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.id}
              className="text-center px-4 md:px-6 py-8 border-t border-sand"
            >
              <div className="flex items-center justify-center gap-0.5 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="font-serif italic text-xl md:text-2xl text-ink leading-snug">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-5 text-[11px] uppercase tracking-[0.25em] text-stone">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
