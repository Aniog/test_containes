import { Link } from 'react-router-dom'
import { StrkImage } from '@/components/StrkImage'
import { useStrkImages } from '@/components/StrkImage'

export default function BrandStory() {
  const ref = useStrkImages([])
  return (
    <section id="about" ref={ref} className="bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-0 md:grid-cols-2">
        {/* Image left */}
        <div className="relative">
          <StrkImage
            imgId="brand-story-velmora-7e3a1c"
            query="[story-body] [story-title]"
            ratio="4x5"
            width={900}
            alt="Velmora jewelry craftsmanship"
            className="aspect-[4/5] w-full md:aspect-[5/6]"
          />
        </div>

        {/* Text right */}
        <div className="px-6 py-16 md:px-14 md:py-24 lg:px-20">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Our Story</p>
          <h2
            id="story-title"
            className="mt-4 font-serif text-4xl leading-tight text-espresso md:text-5xl"
          >
            Quiet luxury, made to last
          </h2>
          <p
            id="story-body"
            className="mt-6 text-sm leading-relaxed text-cocoa md:text-base"
          >
            Velmora began with a simple belief: that fine jewelry shouldn’t be
            reserved for rare occasions. We work in 18K gold plating over brass,
            hand-finishing every piece so it carries the warmth and weight of
            something far more precious — at a price that lets you wear it daily.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-cocoa md:text-base">
            Each design is made in small batches, tested for sensitive skin, and
            crafted to be treasured for years, not seasons.
          </p>
          <Link
            to="/#about"
            className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-espresso transition-colors hover:text-gold"
          >
            Read Our Story
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
