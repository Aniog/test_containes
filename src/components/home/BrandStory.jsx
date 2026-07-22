import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-sand">
            <div
              className="absolute inset-0"
              data-strk-bg-id="story-bg-velmora-3c7e"
              data-strk-bg="[story-text] [story-eyebrow] gold jewelry craftsmanship hands workshop warm"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="900"
            />
          </div>

          <div className="md:pl-6">
            <p
              id="story-eyebrow"
              className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4"
            >
              Our Story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
              Made slowly, worn for years
            </h2>
            <p
              id="story-text"
              className="mt-6 text-stone leading-relaxed text-base md:text-[17px]"
            >
              Velmora began with a simple belief: that beautiful gold jewelry
              shouldn&rsquo;t be reserved for special occasions. Each piece is
              hand-finished in small batches, plated in 18K gold, and made to be
              lived in &mdash; from morning coffee to evening out. We design for
              the woman who treats herself well, and gifts just as thoughtfully.
            </p>
            <div className="mt-8">
              <Link
                to="/about"
                className="inline-block border border-ink text-ink text-[11px] uppercase tracking-[0.2em] px-9 py-4 hover:bg-ink hover:text-ivory transition-colors duration-300"
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
