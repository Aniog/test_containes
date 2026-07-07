import React from 'react'
import { Star } from 'lucide-react'
import { StarRating } from '@/components/ui/StarRating'

const TESTIMONIALS = [
  {
    id: 't-maya',
    name: 'Maya K.',
    location: 'Brooklyn, NY',
    quote:
      'I bought the Golden Sphere Huggies on a whim and they have not left my ears in three months. The gold is the right warm tone, not yellow-bright.',
  },
  {
    id: 't-avery',
    name: 'Avery R.',
    location: 'Los Angeles, CA',
    quote:
      'I own a lot of demi-fine — Velmora is the first brand where the plating still looks brand new after daily wear. The Royal Heirloom Set is now my go-to gift.',
  },
  {
    id: 't-noor',
    name: 'Noor S.',
    location: 'London, UK',
    quote:
      'The Vivid Aura cuff is the most complimented piece I own. It looks far more expensive than it is, and the packaging made it feel like opening a small gift.',
  },
]

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container-page">
        <div className="text-center mb-12 md:mb-16">
          <p className="eyebrow text-mocha">From Our Community</p>
          <h2 className="display-2 mt-3 text-deep">Loved, in their own words</h2>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t) => (
            <li
              key={t.id}
              className="border border-taupe/50 bg-sand/30 p-8 md:p-10 flex flex-col"
            >
              <StarRating value={5} count={null} size={14} showCount={false} />
              <p className="font-serif italic text-lg md:text-xl leading-relaxed text-deep mt-6 flex-1">
                “{t.quote}”
              </p>
              <div className="mt-6 pt-6 border-t border-taupe/40">
                <p className="text-sm font-sans text-deep">{t.name}</p>
                <p className="text-[11px] tracking-eyebrow uppercase font-sans text-mocha mt-1">
                  Verified · {t.location}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
