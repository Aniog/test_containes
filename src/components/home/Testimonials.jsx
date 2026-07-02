import { Star } from 'lucide-react'

const Testimonials = ({ reviews }) => (
  <section className="bg-velmora-ivory px-5 py-16 text-velmora-ink lg:px-10 lg:py-24">
    <div className="mx-auto max-w-7xl">
      <div className="mb-9 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-clay">Loved by customers</p>
        <h2 className="mt-3 font-serif text-5xl font-semibold text-velmora-ink md:text-6xl">Notes of golden praise</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {reviews.map((review) => (
          <figure key={review.name} className="border border-velmora-line bg-velmora-cream p-7 text-velmora-ink shadow-soft">
            <div className="mb-5 flex gap-1 text-velmora-gold" aria-label="5 star review">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="font-serif text-2xl leading-8 text-velmora-ink">“{review.text}”</blockquote>
            <figcaption className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-velmora-clay">{review.name}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
)

export default Testimonials
