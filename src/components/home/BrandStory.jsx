import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import Button from '@/components/ui/Button'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="relative aspect-[4/5] overflow-hidden bg-ivory">
          <div
            className="absolute inset-0"
            data-strk-bg-id="story-bg-velmora-3c4d"
            data-strk-bg="[story-text] gold jewelry craftsmanship atelier warm"
            data-strk-bg-ratio="4x5"
            data-strk-bg-width="900"
          />
        </div>

        <div className="md:pl-4">
          <p className="text-[11px] uppercase tracking-[0.3em] text-stone mb-5">
            Our Story
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight">
            Made to be worn,
            <br />
            made to be kept.
          </h2>
          <p id="story-text" className="mt-6 text-ink/80 leading-relaxed">
            Velmora began with a simple belief: that fine jewelry should feel
            personal, not precious. Each piece is hand-finished in 18K gold
            plate over a hypoallergenic base, designed to live against the skin
            and age beautifully with you.
          </p>
          <p className="mt-4 text-ink/80 leading-relaxed">
            From the studio to your doorstep — no markups, no middlemen, just
            considered design at an honest price.
          </p>
          <div className="mt-9">
            <Button as={Link} to="/about" variant="outline">
              Read Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
