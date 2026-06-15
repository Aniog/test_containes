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
    <section id="about" className="py-20 md:py-28 bg-linen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden bg-parchment">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Velmora brand story"
                data-strk-img-id="brand-story-img-001"
                data-strk-img="[brand-story-heading] gold jewelry craftsmanship atelier"
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative gold border offset */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/30 -z-10" />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="font-manrope text-[10px] tracking-widest3 text-gold mb-5">OUR STORY</p>
            <h2 id="brand-story-heading" className="font-serif text-4xl md:text-5xl font-light text-obsidian leading-[1.15] mb-6">
              Born from a love of<br /><em className="italic text-gold-dark">quiet beauty</em>
            </h2>
            <div className="w-10 h-px bg-gold/40 mb-8" />
            <p className="font-manrope text-sm text-muted leading-relaxed mb-5">
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion. We create demi-fine pieces designed to be worn every day — from morning coffee to candlelit dinners.
            </p>
            <p className="font-manrope text-sm text-muted leading-relaxed mb-10">
              Each piece is crafted with 18K gold plating over hypoallergenic bases, designed to last and to be treasured. We believe in accessible luxury — jewelry that feels like an heirloom without the heirloom price.
            </p>
            <Link
              to="/#about"
              className="inline-flex items-center gap-3 font-manrope text-xs tracking-widest text-obsidian border-b border-obsidian pb-0.5 hover:text-gold hover:border-gold transition-colors duration-300"
            >
              READ OUR STORY
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
