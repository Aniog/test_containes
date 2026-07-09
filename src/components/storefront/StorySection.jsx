import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const StorySection = () => {
  const titleId = 'story-title'
  const bodyId = 'story-body'

  return (
    <section id="story" className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="overflow-hidden rounded-[32px] border border-champagne/30 bg-espresso shadow-soft">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora story"
              className="h-full w-full object-cover"
              data-strk-img-id="story-image-split-hero"
              data-strk-img={`[${bodyId}] [${titleId}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="1200"
            />
          </div>
        </div>
        <div className="max-w-xl space-y-5">
          <p className="text-xs uppercase tracking-[0.35em] text-gold">Our story</p>
          <h2 id={titleId} className="font-serif text-4xl leading-tight text-espresso md:text-5xl">
            Designed with an editorial eye and meant to be lived in.
          </h2>
          <p id={bodyId} className="text-sm leading-8 text-ink-soft md:text-base">
            Velmora was created for women who want jewelry that feels elevated without waiting for a special occasion. Every piece balances warm finishes, thoughtful proportions, and premium details that make daily styling feel quietly luxurious.
          </p>
          <p className="text-sm leading-8 text-ink-soft md:text-base">
            From compact huggies to gift-ready sets, our collections are designed to slip naturally into the rhythm of real life while still feeling memorable enough to keep.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.28em] text-espresso transition hover:text-gold"
          >
            Our Story
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default StorySection
