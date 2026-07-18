import StarRating from "@/components/ui/StarRating"

const REVIEWS = [
  {
    id: "r1",
    name: "Sophia M.",
    text: "The Golden Sphere Huggies haven't left my ears in months. The weight, the finish — they feel far more expensive than they were.",
    rating: 5,
  },
  {
    id: "r2",
    name: "Amara K.",
    text: "Bought the Royal Heirloom Set as a gift and it arrived in the most beautiful box. My mother was genuinely moved. Quality is stunning.",
    rating: 5,
  },
  {
    id: "r3",
    name: "Elena R.",
    text: "I've layered the Celeste chain with everything I own. It's delicate but holds up — no tarnishing after a year of daily wear.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center mb-14">
          <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">Kind Words</p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso">From Our Customers</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {REVIEWS.map((r) => (
            <figure
              key={r.id}
              className="bg-cream-100 p-8 md:p-10 flex flex-col items-center text-center border border-line"
            >
              <StarRating value={r.rating} size={16} />
              <blockquote className="mt-5 font-serif text-xl md:text-2xl text-espresso italic leading-relaxed">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-6 text-[11px] uppercase tracking-widest2 text-muted">
                {r.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
