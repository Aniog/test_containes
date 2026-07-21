import StarRating from '@/components/ui/StarRating'

const REVIEWS = [
  {
    name: 'Amara L.',
    text: 'The Golden Sphere Huggies have not left my ears in three months. They feel far more expensive than they were.',
    rating: 5,
  },
  {
    name: 'Priya M.',
    text: 'Bought the Royal Heirloom Set as a gift — the box alone made it feel special. She has not stopped wearing it.',
    rating: 5,
  },
  {
    name: 'Sofia R.',
    text: 'Amber Lace is delicate but holds up beautifully. The gold tone is warm, not brassy. My new everyday earrings.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-8xl px-5 py-20 md:px-8 md:py-28">
      <div className="mb-12 text-center">
        <p className="text-[11px] uppercase tracking-[0.4em] text-gold">Loved By You</p>
        <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">Kind Words</h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
        {REVIEWS.map((r) => (
          <figure
            key={r.name}
            className="flex flex-col items-center border border-sand bg-cream px-8 py-10 text-center"
          >
            <StarRating value={r.rating} size={16} />
            <blockquote className="mt-5 font-serif text-lg italic leading-relaxed text-ink">
              “{r.text}”
            </blockquote>
            <figcaption className="mt-6 text-[11px] uppercase tracking-widest2 text-taupe">
              {r.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
