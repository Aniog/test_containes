import { Star } from 'lucide-react'
import SectionHeading from './SectionHeading'

const reviews = [
  {
    quote: 'The huggies feel substantial without being heavy. I wear them to work and dinner without thinking twice.',
    name: 'Maya R.',
  },
  {
    quote: 'I bought the set as a birthday gift and the packaging made it feel so much more expensive than it was.',
    name: 'Claire S.',
  },
  {
    quote: 'Warm, polished, and never too flashy. Velmora is exactly the kind of everyday gold I wanted.',
    name: 'Nina L.',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-velmora-porcelain px-5 py-16 text-velmora-ink sm:px-8 md:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Notes from customers" title="Quiet pieces, remembered often" />
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="border border-velmora-ink/10 bg-velmora-cream p-7 text-velmora-ink shadow-soft">
              <div className="mb-5 flex text-velmora-champagne" aria-label="5 stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="font-serif text-2xl leading-8 text-velmora-ink">“{review.quote}”</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-velmora-cocoa/70">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
