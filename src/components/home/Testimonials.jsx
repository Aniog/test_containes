import StarRating from "@/components/ui/StarRating"

const REVIEWS = [
  {
    id: 1,
    name: "Eleanor M.",
    text: "The Golden Sphere Huggies haven't left my ears since they arrived. The gold is warm and rich — they look far more expensive than they were.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya S.",
    text: "Bought the Royal Heirloom Set as a gift and the presentation was stunning. My mother cried. The quality is genuinely beautiful.",
    rating: 5,
  },
  {
    id: 3,
    name: "Camille D.",
    text: "I wear the Vivid Aura cuff every single day. It's delicate but holds up beautifully — no tarnishing after months of wear.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-8xl px-5 py-20 md:px-8 md:py-28">
      <div className="mb-12 text-center">
        <p className="text-[11px] uppercase tracking-widest3 text-taupe">
          Loved by Thousands
        </p>
        <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
          What Our Customers Say
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-3 md:gap-6">
        {REVIEWS.map((review) => (
          <figure
            key={review.id}
            className="flex flex-col items-center border border-sand bg-cream px-8 py-10 text-center"
          >
            <StarRating value={review.rating} size={16} />
            <blockquote className="mt-5 flex-1 font-serif text-lg italic leading-relaxed text-ink md:text-xl">
              “{review.text}”
            </blockquote>
            <figcaption className="mt-6 text-[11px] uppercase tracking-widest2 text-taupe">
              {review.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
