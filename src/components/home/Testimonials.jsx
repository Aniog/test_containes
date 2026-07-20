import React from 'react'
import { Star } from 'lucide-react'

const reviews = [
  { name: 'Maya R.', text: 'The huggies look far more expensive than they are. I wear them almost every day.' },
  { name: 'Elena S.', text: 'Beautiful packaging and the necklace has that soft vintage sparkle I wanted.' },
  { name: 'Claire T.', text: 'Gifted the set to my sister and immediately ordered earrings for myself.' },
]

export default function Testimonials() {
  return (
    <section className="bg-velmora-ivory px-5 py-20 text-velmora-espresso md:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-antique">In their words</p>
          <h2 className="mt-3 font-serif text-5xl leading-none text-velmora-espresso md:text-6xl">Quiet shine, noticed.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="border border-velmora-mist bg-white/45 p-7 shadow-sm text-velmora-espresso">
              <div className="flex gap-1 text-velmora-champagne" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-6 font-serif text-2xl leading-8 text-velmora-espresso">“{review.text}”</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-velmora-cocoa/75">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
