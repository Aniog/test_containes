import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useStrkImages } from '@/lib/useStrkImages'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function BrandStory() {
  const ref = useStrkImages([])

  return (
    <section className="bg-cream-deep py-20 md:py-28">
      <div ref={ref} className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden bg-ink md:aspect-[5/6]">
          <img
            src={PLACEHOLDER}
            alt="Velmora atelier"
            data-strk-img-id="story-img-velmora-3c9d"
            data-strk-img="[story-text] [story-eyebrow] jewelry atelier hands crafting gold editorial warm"
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="md:pl-4">
          <p id="story-eyebrow" className="text-[11px] uppercase tracking-widest2 text-gold-deep">
            Our Story
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-ink md:text-5xl">
            Jewelry made to live in, not lock away
          </h2>
          <p id="story-text" className="mt-6 text-sm leading-relaxed text-ink-soft">
            Velmora began with a simple frustration: beautiful jewelry was either
            impossibly expensive or quickly lost its shine. We set out to make
            demi-fine pieces in 18K gold plate that feel considered, wear beautifully,
            and sit at an honest price.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            Every piece is designed in our studio and finished by hand, with
            hypoallergenic bases and materials chosen to last. No noise, no
            shortcuts — just gold you will reach for every morning.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-wide2 text-ink transition-colors hover:text-gold-deep"
          >
            Read Our Story <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}
