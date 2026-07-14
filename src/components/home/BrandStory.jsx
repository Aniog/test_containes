import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section id="about" ref={containerRef} className="bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[560px] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-c4d5e6"
              data-strk-img="[brand-story-text] [brand-story-heading] fine jewelry artisan crafting gold"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex items-center px-8 md:px-12 lg:px-16 py-16 md:py-20">
            <div className="max-w-md">
              <p className="font-sans text-xs tracking-widest uppercase text-gold font-medium mb-4">Our Story</p>
              <h2 id="brand-story-heading" className="font-serif text-4xl md:text-5xl font-light text-ink leading-tight">
                Made with<br />
                <em className="italic">intention</em>
              </h2>
              <div className="w-12 h-px bg-gold mt-6 mb-6" />
              <p id="brand-story-text" className="font-sans text-sm md:text-base text-ink-muted leading-relaxed">
                Velmora was born from a simple belief: that beautiful jewelry shouldn't cost a fortune, but it should feel like it does. We design each piece with the modern woman in mind — someone who values quality, wears jewelry every day, and deserves to feel extraordinary.
              </p>
              <p className="font-sans text-sm md:text-base text-ink-muted leading-relaxed mt-4">
                Every Velmora piece is crafted from 18K gold-plated brass, hypoallergenic and designed to last. We believe in slow fashion, thoughtful design, and jewelry that becomes part of your story.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-3 mt-8 font-sans text-xs tracking-widest uppercase font-semibold text-ink hover:text-gold transition-colors duration-300 group"
              >
                Read Our Story
                <span className="w-8 h-px bg-ink group-hover:bg-gold group-hover:w-12 transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
