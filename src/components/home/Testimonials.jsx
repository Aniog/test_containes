import React from 'react'
import { Star } from 'lucide-react'
import SectionHeader from '@/components/common/SectionHeader.jsx'

const reviews = [
  { name: 'Maya R.', quote: 'The huggies feel expensive but effortless. I wear them every day and they still look new.' },
  { name: 'Claire W.', quote: 'The gift box made it feel so special. My sister thought I spent twice as much.' },
  { name: 'Nina S.', quote: 'Soft, warm gold tones that layer beautifully. Nothing about it feels trend-chasing.' },
]

export default function Testimonials() {
  return (
    <section className="bg-velmora-ivory px-4 py-16 text-velmora-espresso sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Kind words" title="Quiet compliments, often" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="border border-velmora-sand/70 bg-velmora-pearl p-7 shadow-soft">
              <div className="flex gap-1 text-velmora-champagne" aria-label="5 stars">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-6 font-serif text-2xl leading-snug text-velmora-espresso">“{review.quote}”</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-widest text-velmora-smoke">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
