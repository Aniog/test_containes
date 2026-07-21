import StarRating from '@/components/ui/StarRating'

const testimonials = [
  {
    name: 'Sofia M.',
    text: 'The Golden Sphere huggies haven’t left my ears in months. They feel far more expensive than they were.',
    rating: 5,
  },
  {
    name: 'Amara K.',
    text: 'Bought the Royal Heirloom Set as a gift — the box alone felt luxurious. My sister cried. Worth every cent.',
    rating: 5,
  },
  {
    name: 'Priya R.',
    text: 'I layer the Seraph chain with everything. No tarnishing, no irritation. This is my go-to brand now.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="max-w-8xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-widest3 text-gold mb-3">
            Loved by Thousands
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">
            What They’re Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="bg-cream p-8 md:p-10 text-center border border-line"
            >
              <StarRating value={t.rating} size={16} className="justify-center mb-5" />
              <blockquote className="font-serif text-xl md:text-2xl text-ink italic leading-snug">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 text-[11px] uppercase tracking-widest3 text-sand">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
