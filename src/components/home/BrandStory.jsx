import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import StrkImage from '@/components/common/StrkImage'

export default function BrandStory() {
  return (
    <section id="about" className="bg-velmora-ivory py-16 text-velmora-ink md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="absolute -left-4 -top-4 h-full w-full rounded-t-full border border-velmora-gold/50" />
          <div className="relative overflow-hidden rounded-t-full bg-velmora-champagne shadow-soft">
            <StrkImage
              id="brand-story-craft-table-5cb81f"
              query="[brand-story-copy] [brand-story-title]"
              ratio="3x4"
              width="900"
              alt="Velmora jewelry styling table"
              className="aspect-[3/4] w-full object-cover"
            />
          </div>
        </div>
        <div className="lg:pl-10">
          <p className="text-xs font-bold uppercase tracking-[0.34em] text-velmora-gold">Our story</p>
          <h2 id="brand-story-title" className="mt-4 font-serif text-5xl font-medium leading-tight text-velmora-ink md:text-7xl">
            Jewelry that feels intimate, never overdone.
          </h2>
          <p id="brand-story-copy" className="mt-6 text-base leading-8 text-velmora-taupe md:text-lg">
            Velmora was created for women who collect meaning in small luminous details. Our demi-fine pieces are designed in warm gold finishes with thoughtful silhouettes, accessible pricing, and a lasting editorial point of view.
          </p>
          <div className="mt-8 grid gap-4 border-y border-velmora-line py-6 sm:grid-cols-3">
            {['Nickel-safe', 'Gift-ready', 'Small-batch feel'].map((item) => (
              <p key={item} className="text-xs font-bold uppercase tracking-[0.2em] text-velmora-ink">
                {item}
              </p>
            ))}
          </div>
          <Link
            to="/#about"
            className="mt-8 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.22em] text-velmora-gold transition hover:text-velmora-ink"
          >
            Our Story
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
