import {useRef, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { PLACEHOLDER } from '@/components/ui/Button'

export default function BrandStory() {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, node)
    })
    return () => window.cancelAnimationFrame(frameId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section ref={ref} className="bg-cream py-20 md:py-28">
      <div className="max-w-8xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-ivory">
            <img
              alt="Velmora atelier"
              data-strk-img-id="story-img-velmora-3b8c1d"
              data-strk-img="[story-text] [story-title] gold jewelry atelier craftsmanship hands"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src={PLACEHOLDER}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-6">
            <p className="text-[11px] uppercase tracking-widest3 text-gold mb-4">
              Our Story
            </p>
            <h2
              id="story-title"
              className="font-serif text-4xl md:text-5xl text-ink leading-tight"
            >
              Quiet luxury,
              <br />
              <span className="italic">made to last.</span>
            </h2>
            <p
              id="story-text"
              className="mt-6 text-ink/80 leading-relaxed text-base md:text-lg"
            >
              Velmora began with a simple belief: fine-feel jewelry shouldn't
              require a fine-jewelry price. Each piece is 18K gold-plated over
              solid brass, hypoallergenic by design, and finished by hand for a
              warmth that reads as quietly expensive.
            </p>
            <p className="mt-4 text-sand leading-relaxed">
              We design in small, considered collections — pieces meant to be
              worn daily, layered freely, and treasured for years.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-[11px] uppercase tracking-widest3 text-ink border-b border-ink pb-1 hover:text-gold hover:border-gold transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
