import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="story" ref={containerRef} className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                data-strk-img-id="brand-story-img-s1t2u3"
                data-strk-img="[brand-story-text] [brand-story-title] artisan gold jewelry craftsmanship"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Velmora brand story"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-velvet-300 -z-10 hidden md:block" />
          </div>

          {/* Text */}
          <div className="space-y-6">
            <p className="font-sans text-xs uppercase tracking-widest text-velvet-500">Our Story</p>
            <h2 id="brand-story-title" className="font-serif text-4xl md:text-5xl text-obsidian-800 font-light leading-tight">
              Born from a love of<br />
              <em className="italic">quiet beauty</em>
            </h2>
            <div className="w-10 h-px bg-velvet-400" />
            <p id="brand-story-text" className="font-sans text-sm text-obsidian-500 leading-relaxed">
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't cost a fortune, but it should feel like it does. We design each piece with the modern woman in mind — someone who values craftsmanship, wears her jewelry every day, and wants it to last.
            </p>
            <p className="font-sans text-sm text-obsidian-500 leading-relaxed">
              Every Velmora piece is 18K gold plated, hypoallergenic, and designed to be worn from morning coffee to evening cocktails. Because you deserve jewelry that keeps up with your life.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-3 font-sans text-xs uppercase tracking-widest text-obsidian-700 hover:text-velvet-500 transition-colors group"
            >
              Read Our Story
              <span className="w-8 h-px bg-obsidian-400 group-hover:bg-velvet-500 group-hover:w-12 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
