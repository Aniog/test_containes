import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="border-y border-line bg-sand py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative overflow-hidden bg-ink">
            <div className="aspect-[4/3] lg:aspect-[5/4]">
              <img
                data-strk-img-id="story-atelier-img"
                data-strk-img="jeweler's hands crafting a gold necklace at a workbench, atelier tools, warm window light, artisan jewelry making"
                data-strk-img-ratio="4x3"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Velmora atelier — a jeweler hand-finishing a gold piece"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute bottom-4 left-4 bg-cream/95 px-4 py-3 backdrop-blur-sm">
              <p className="font-serif text-sm italic text-ink">The Velmora atelier, Lisbon</p>
            </div>
          </div>

          <div className="lg:pl-4">
            <p className="mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-luxe text-gold-deep">
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              Our Story
            </p>
            <h2 className="font-serif text-3xl font-medium leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
              Jewelry that remembers
              <br />
              <em className="italic text-gold-deep">why it was given</em>
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-mocha sm:text-base">
              <p>
                Velmora began at a single workbench with a simple frustration:
                jewelry that felt precious was priced like a luxury car, and
                jewelry that was affordable felt disposable.
              </p>
              <p>
                So we chose the middle path — demi-fine. Thick 18K gold over
                recycled brass, hand-set stones, small-batch finishing. Pieces
                under $120 that carry the weight and warmth of heirlooms, made
                to be worn every day and given with meaning.
              </p>
            </div>
            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-luxe text-ink transition-colors hover:text-gold-deep"
            >
              Read Our Story
              <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-luxe group-hover:translate-x-1" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
