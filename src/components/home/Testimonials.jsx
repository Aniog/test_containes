import StarRating from "@/components/StarRating"

const REVIEWS = [
  {
    id: "t1",
    name: "Elena R.",
    text: "The Golden Sphere Huggies are my new everyday pair. The weight, the finish — they feel far more expensive than they were.",
  },
  {
    id: "t2",
    name: "Maya T.",
    text: "Gifted the Royal Heirloom Set to my sister and she cried. Beautifully boxed and even more beautiful on.",
  },
  {
    id: "t3",
    name: "Sofia L.",
    text: "I've worn the Vivid Aura cuff every day for three months. Still gleams like the day it arrived. Obsessed.",
  },
]

export default function Testimonials() {
  return (
    <section className="bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-editorial px-6 md:px-10">
        <div className="flex flex-col items-center text-center">
          <p className="eyebrow">Kind Words</p>
          <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">Treasured by Many</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure key={r.id} className="flex flex-col items-center bg-cream p-8 text-center">
              <StarRating value={5} size={16} />
              <blockquote className="mt-4 font-serif text-xl italic leading-relaxed text-ink">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-5 text-xs uppercase tracking-widest2 text-stone">
                {r.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
