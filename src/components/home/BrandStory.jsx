import { Link } from 'react-router-dom'
import { useStrkImages } from '@/hooks/useStrkImages'

export default function BrandStory() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-sand">
            <div
              data-strk-bg-id="story-bg-4c8e1b"
              data-strk-bg="[story-text] gold jewelry craftsmanship atelier warm light"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
              className="absolute inset-0"
            />
          </div>

          <div className="md:pl-6">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
              Gold, made to be lived in.
            </h2>
            <p
              id="story-text"
              className="text-stone text-base md:text-lg mt-6 leading-relaxed"
            >
              Velmora began with a simple frustration: beautiful gold jewelry was
              either heirloom-expensive or quickly lost its shine. We set out to
              make demi-fine pieces — 18K gold-plated, hypoallergenic, and
              honestly priced — that you could reach for every morning without a
              second thought. Each piece is designed in our studio and finished
              by hand, so it wears like a treasure and lives like a favourite.
            </p>
            <div className="mt-9">
              <Link
                to="/about"
                className="inline-block border border-ink text-ink text-xs uppercase tracking-[0.2em] px-10 py-4 hover:bg-ink hover:text-ivory transition-colors duration-300"
              >
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
