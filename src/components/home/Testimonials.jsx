import { Star } from 'lucide-react'
import SectionHeader from '@/components/common/SectionHeader.jsx'

const reviews = [
  {
    name: 'Maya R.',
    quote: 'The huggies feel expensive but are easy enough for every day. I have not taken them off.',
  },
  {
    name: 'Clara S.',
    quote: 'I bought the set as a birthday gift and the packaging made it feel incredibly special.',
  },
  {
    name: 'Elena W.',
    quote: 'Soft, warm gold that looks beautiful with everything. The quality surprised me for the price.',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-velmora-sand px-5 py-20 text-velmora-ink md:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Notes from customers"
          title="Quiet pieces, remembered often."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="border border-velmora-mist bg-velmora-pearl p-7 text-velmora-ink shadow-sm">
              <div className="flex gap-1 text-velmora-gold" aria-label="5 star review">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-6 font-serif text-2xl leading-9 text-velmora-ink">
                “{review.quote}”
              </p>
              <p className="mt-7 text-xs font-semibold uppercase tracking-widest text-velmora-taupe">
                {review.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
