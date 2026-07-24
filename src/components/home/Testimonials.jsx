import { Star } from 'lucide-react'
import { reviews } from '@/data/products'
import SectionHeading from './SectionHeading'

function Testimonials() {
  return (
    <section className="bg-velmora-ivory px-4 py-20 text-velmora-ink sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <SectionHeading eyebrow="Notes from customers" title="Quiet pieces, lasting compliments." centered />
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="bg-velmora-porcelain p-7 text-center shadow-sm">
              <div className="mb-5 flex justify-center gap-1 text-velmora-gold" aria-label="5 stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="font-serif text-2xl leading-8 text-velmora-espresso">“{review.quote}”</blockquote>
              <p className="mt-6 text-xs font-bold uppercase tracking-luxury text-velmora-deepgold">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
