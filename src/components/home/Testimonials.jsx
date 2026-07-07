import React from "react"
import SectionHeader from "@/components/ui/SectionHeader"
import StarRating from "@/components/ui/StarRating"

const reviews = [
  {
    quote:
      "I bought the Vivid Aura cuff on a whim and have barely taken it off. It looks so much more expensive than it is — I get asked about it constantly.",
    name: "Ava M.",
    product: "Vivid Aura Jewels",
  },
  {
    quote:
      "Gifted the Royal Heirloom set to my sister for her wedding. The box, the card, the pieces — it all felt like a tiny ceremony of its own.",
    name: "Noor K.",
    product: "Royal Heirloom Set",
  },
  {
    quote:
      "The Golden Sphere Huggies are the everyday earrings I didn't know I needed. Light enough to sleep in, weighty enough to feel real.",
    name: "Sofia L.",
    product: "Golden Sphere Huggies",
  },
]

const Testimonials = () => {
  return (
    <section className="section-pad bg-ivory-warm">
      <div className="container-wrap">
        <SectionHeader
          eyebrow="Loved by you"
          title="Quiet applause from our community"
          align="center"
          className="mb-14"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((r, i) => (
            <figure
              key={i}
              className="bg-ivory p-7 lg:p-9 border border-hairline flex flex-col gap-5 hover:shadow-soft transition-shadow duration-500"
            >
              <StarRating value={5} />
              <blockquote className="font-serif text-[18px] lg:text-[19px] leading-[1.5] text-ink">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-auto pt-4 border-t border-hairline">
                <p className="product-name">{r.name}</p>
                <p className="mt-1 text-[11px] font-sans uppercase tracking-[0.18em] text-muted">
                  on {r.product}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
