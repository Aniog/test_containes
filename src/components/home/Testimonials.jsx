import { StarIcon } from "../ui/Icons.jsx"

const reviews = [
  {
    quote:
      "I bought the cuff first, then the huggies, then a second cuff in silver. Nothing has ever made me feel more like myself.",
    name: "Maya K.",
    product: "Vivid Aura Cuff",
  },
  {
    quote:
      "The quality at this price point is genuinely hard to find. The Royal Heirloom set arrived in a keepsake box I keep on my vanity.",
    name: "Priya N.",
    product: "Royal Heirloom Set",
  },
  {
    quote:
      "Quiet, warm, weighty in the hand. Exactly the feeling I wanted when I stopped buying fast jewelry. I'm a customer for life.",
    name: "Elena R.",
    product: "Majestic Flora Nectar",
  },
]

export default function Testimonials() {
  return (
    <section className="bg-ivory py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-editorial px-6 md:px-10 lg:px-16">
        <div className="max-w-2xl mb-12 md:mb-16">
          <p className="eyebrow">From Our Community</p>
          <h2 className="display-serif text-[36px] md:text-[52px] mt-3 leading-[1.05]">
            Words from
            <br />
            <span className="italic font-light">the people who wear it.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col p-8 md:p-10 bg-ivory-soft border border-hairline"
            >
              <div className="flex items-center gap-1 star mb-5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <StarIcon key={i} className="h-3.5 w-3.5" />
                ))}
              </div>
              <blockquote className="font-serif text-[20px] md:text-[22px] leading-snug text-ink italic font-light flex-1">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-hairline">
                <p className="text-[12px] tracking-eyebrow uppercase text-ink">
                  {r.name}
                </p>
                <p className="mt-1 text-[11px] text-muted">on the {r.product}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
