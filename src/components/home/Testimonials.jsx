import { Star } from 'lucide-react'
import SectionHeading from '@/components/common/SectionHeading.jsx'

const reviews = [
  {
    name: 'Maya R.',
    text: 'The huggies look far more expensive than they are. I wear them with everything and they still feel special.',
  },
  {
    name: 'Elena C.',
    text: 'I bought the necklace as a birthday gift and the packaging felt beautiful. She put it on immediately.',
  },
  {
    name: 'Priya S.',
    text: 'Quiet, polished, and comfortable. Exactly the kind of gold jewelry I wanted for everyday outfits.',
  },
]

const Testimonials = () => (
  <section className="bg-velmora-parchment py-16 text-velmora-espresso md:py-24">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <SectionHeading eyebrow="Loved by customers" title="A little glow, every day." />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {reviews.map((review) => (
          <article key={review.name} className="border border-velmora-stone/70 bg-velmora-ivory p-7 text-velmora-espresso shadow-soft">
            <div className="flex gap-1 text-velmora-goldDark" aria-label="5 star review">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-6 font-serif text-2xl leading-8 text-velmora-espresso">“{review.text}”</p>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-velmora-taupe">{review.name}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Testimonials
