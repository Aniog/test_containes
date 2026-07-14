import { Star } from 'lucide-react'

const reviews = [
  { name: 'Maya R.', copy: 'The Golden Sphere Huggies look far more expensive than they are. I wear them three days a week.' },
  { name: 'Elise K.', copy: 'Elegant packaging, beautiful glow, and the necklace was perfect for my sister’s birthday.' },
  { name: 'Nina S.', copy: 'Quiet, warm, and special. The pieces layer so well without feeling too trend-driven.' },
]

const Testimonials = () => (
  <section className="bg-velmora-ivory px-5 pb-16 text-velmora-ink sm:px-8 lg:px-10 lg:pb-24">
    <div className="mx-auto max-w-7xl border-t border-velmora-espresso/10 pt-14">
      <div className="grid gap-5 md:grid-cols-3">
        {reviews.map((review) => (
          <article key={review.name} className="bg-velmora-pearl p-7 text-velmora-ink shadow-sm">
            <div className="mb-5 flex gap-1 text-velmora-champagne">
              {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
            </div>
            <p className="font-serif text-2xl leading-snug text-velmora-ink">“{review.copy}”</p>
            <p className="mt-6 text-xs font-extrabold uppercase tracking-luxe text-velmora-bronze">{review.name}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Testimonials
