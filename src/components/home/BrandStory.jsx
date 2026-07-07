import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-parchment">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[600px]">
            <img
              alt="Velmora brand story"
              data-strk-img-id="brand-story-image"
              data-strk-img="[brand-story-title] [brand-story-text] gold jewelry making atelier"
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex items-center bg-cream px-8 py-14 md:px-12 lg:px-20">
            <div className="max-w-md">
              <p className="mb-3 font-sans text-xs uppercase tracking-[0.2em] text-gold">
                Our Philosophy
              </p>
              <h2
                id="brand-story-title"
                className="font-serif text-3xl text-espresso md:text-4xl lg:text-5xl"
              >
                Designed for the Modern Muse
              </h2>
              <div className="my-6 h-px w-16 bg-gold" />
              <p
                id="brand-story-text"
                className="leading-relaxed text-taupe"
              >
                Velmora was born from a belief that fine jewelry should feel
                accessible, not intimidating. Each piece is thoughtfully
                designed in small batches, using 18k gold plating and
                nickel-free materials that are gentle on skin and kind to your
                wardrobe.
              </p>
              <p className="mt-4 leading-relaxed text-taupe">
                From morning meetings to midnight toasts, our pieces move with
                you — quiet luxury for real life.
              </p>
              <Link
                to="/about"
                className="mt-8 inline-block border-b border-espresso pb-1 text-xs uppercase tracking-[0.14em] text-espresso transition-colors hover:text-gold"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
