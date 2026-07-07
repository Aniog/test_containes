import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
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
    <section id="about" ref={containerRef} className="bg-velmora-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[560px] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-7e4b2a"
              data-strk-img="[brand-story-text] [brand-story-heading]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
            <p className="font-manrope text-xs uppercase tracking-widest text-velmora-gold mb-5">
              Our Story
            </p>
            <h2
              id="brand-story-heading"
              className="font-cormorant text-4xl md:text-5xl font-light text-velmora-text leading-tight mb-6"
            >
              Made for the<br />
              <em className="italic">Everyday Ritual</em>
            </h2>
            <div className="w-12 h-px bg-velmora-gold mb-8" />
            <p
              id="brand-story-text"
              className="font-manrope text-sm text-velmora-muted leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't be saved for special occasions. We design demi-fine pieces that feel luxurious enough to treasure, yet durable enough to wear every single day.
            </p>
            <p className="font-manrope text-sm text-velmora-muted leading-relaxed mb-10">
              Each piece is crafted from 18K gold-plated brass and sterling silver, set with hand-selected stones. Hypoallergenic, tarnish-resistant, and made to become part of your story.
            </p>
            <Link
              to="/"
              className="flex items-center gap-2 font-manrope text-xs uppercase tracking-widest text-velmora-text hover:text-velmora-gold transition-colors group w-fit"
            >
              Read Our Story
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
