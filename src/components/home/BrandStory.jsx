import { Link } from 'react-router-dom'
import { useStrkImages } from '@/lib/useStrkImages'

export default function BrandStory() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="bg-ink text-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden bg-espresso">
          <div
            className="absolute inset-0"
            data-strk-bg-id="story-bg-2c8e91"
            data-strk-bg="[story-subtitle] [story-title] gold jewelry craftsmanship hands artisan workshop warm"
            data-strk-bg-ratio="4x5"
            data-strk-bg-width="800"
          />
        </div>

        {/* Text */}
        <div className="md:pl-6">
          <p className="text-xs uppercase tracking-widest2 text-champagne mb-4">
            Our Story
          </p>
          <h2
            id="story-title"
            className="font-serif text-3xl md:text-4xl text-cream leading-tight"
          >
            Quiet luxury, made to last
          </h2>
          <p
            id="story-subtitle"
            className="mt-6 text-stone leading-relaxed"
          >
            Velmora began with a simple belief: fine jewelry shouldn’t demand a
            special occasion. Each piece is hand-finished in 18K gold plate over
            a hypoallergenic base, designed to be worn, layered, and lived in —
            then passed on.
          </p>
          <p className="mt-4 text-stone leading-relaxed">
            From the first sketch to the final polish, we obsess over the
            details you feel but rarely see: the weight of a huggie, the catch
            of a clasp, the warmth of the gold.
          </p>
          <div className="mt-9">
            <Link
              to="/about"
              className="inline-block border border-cream/40 text-cream text-xs uppercase tracking-widest2 px-10 py-4 hover:bg-cream hover:text-ink transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
