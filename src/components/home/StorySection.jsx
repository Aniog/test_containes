import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function StorySection() {
  return (
    <section className="border-y border-line bg-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:gap-16 md:px-8 md:py-28">
        <div className="reveal relative overflow-hidden bg-sand">
          <div className="aspect-[4/5] w-full md:aspect-[5/6]">
            <img
              data-strk-img-id="story-atelier"
              data-strk-img="[story-sub] [story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="The Velmora atelier"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute bottom-5 left-5 bg-cream/95 px-5 py-4">
            <p className="font-serif text-3xl text-ink">2019</p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-muted">Est. in Lisbon</p>
          </div>
        </div>

        <div className="reveal">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-deep">
            Our story
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium leading-tight text-ink md:text-5xl">
            Jewelry that feels like heirlooms, priced like everyday
          </h2>
          <p id="story-title" className="sr-only">
            Velmora atelier crafting demi-fine gold jewelry
          </p>
          <p id="story-sub" className="mt-6 text-sm leading-relaxed text-ink-soft md:text-base">
            Velmora began at a single goldsmith’s bench with a simple frustration:
            beautiful jewelry was either precious and unwearable, or affordable and
            forgettable. We make the third kind — demi-fine pieces plated in a thick
            layer of 18k gold, hand-finished in small batches, and tested to be kind
            to sensitive skin.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft md:text-base">
            Every piece is designed to be lived in — through workdays, weddings,
            and everything in between — and to be passed on with the stories it gathers.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 border-b border-ink pb-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink transition-colors hover:border-gold-deep hover:text-gold-deep"
          >
            Read our story
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  )
}
