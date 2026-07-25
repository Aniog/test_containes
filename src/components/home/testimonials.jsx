import { Quote } from 'lucide-react'
import SectionHeading from '@/components/ui/section-heading'
import Stars from '@/components/ui/stars'

const TESTIMONIALS = [
  {
    quote:
      'The Sphere Huggies have not left my ears since they arrived. They look twice the price and feel like nothing at all.',
    name: 'Amelia R.',
    detail: 'Golden Sphere Huggies',
  },
  {
    quote:
      'I bought the Heirloom Set for my sister\'s wedding. The gift box alone made her cry — the jewelry finished the job.',
    name: 'Sofia L.',
    detail: 'Royal Heirloom Set',
  },
  {
    quote:
      'Finally, gold that survives my gym sessions, my toddler, and my forgetfulness in the shower. Still perfect after a year.',
    name: 'Priya K.',
    detail: 'Amber Lace Earrings',
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 lg:py-28" aria-label="Customer reviews">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Kind Words"
          title="From Our Community"
        />
        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col border border-line bg-white p-7 transition-shadow duration-500 ease-luxe hover:shadow-[0_20px_50px_-30px_rgba(28,23,16,0.35)] sm:p-9"
            >
              <Quote className="h-6 w-6 text-gold" strokeWidth={1} aria-hidden="true" />
              <Stars rating={5} className="mt-5" />
              <blockquote className="mt-4 flex-1">
                <p className="font-serif text-lg italic leading-relaxed text-ink">
                  “{t.quote}”
                </p>
              </blockquote>
              <figcaption className="mt-6 border-t border-line pt-4">
                <p className="text-sm font-semibold text-ink">{t.name}</p>
                <p className="mt-0.5 text-xs text-mocha">Verified buyer · {t.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
