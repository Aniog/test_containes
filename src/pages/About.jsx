import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef} className="pt-20 sm:pt-24">
      {/* Hero */}
      <div className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
        <img
          data-strk-img-id="about-hero-bg"
          data-strk-img="velmora jewelry brand story artisan workshop gold craftsmanship editorial"
          data-strk-img-ratio="16x9"
          data-strk-img-width="1600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt="Velmora brand story"
          className="absolute inset-0 w-full h-full object-cover bg-stone-800"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div>
            <p className="text-gold-light text-[11px] font-medium tracking-widest-2xl uppercase mb-4">
              Our Story
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-light">
              Jewelry That Feels Like You
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="prose-stone">
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 mb-6">
            Our Philosophy
          </h2>
          <div className="w-12 h-px bg-gold mb-8" />
          <p className="text-stone-600 leading-relaxed mb-6">
            Velmora was born from a simple belief: luxury should be accessible, not exclusive. 
            We create demi-fine jewelry using 18K gold plating over quality base metals, 
            delivering the look and feel of fine jewelry at a fraction of the cost.
          </p>
          <p className="text-stone-600 leading-relaxed mb-6">
            Every piece in our collection is designed to be worn every day — to the office, 
            on a date, or wherever life takes you. Because the best jewelry isn't locked in a box. 
            It's part of your story.
          </p>
          <p className="text-stone-600 leading-relaxed mb-12">
            We believe in quality over quantity, in timeless design over fast trends, 
            and in creating pieces that become part of who you are.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-8 border-y border-stone-200 mb-12">
            <div className="text-center">
              <p className="font-serif text-3xl text-gold-dark mb-2">18K</p>
              <p className="text-xs text-stone-500 tracking-wide uppercase">Gold Plated</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-3xl text-gold-dark mb-2">100%</p>
              <p className="text-xs text-stone-500 tracking-wide uppercase">Hypoallergenic</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-3xl text-gold-dark mb-2">30 Day</p>
              <p className="text-xs text-stone-500 tracking-wide uppercase">Free Returns</p>
            </div>
          </div>

          <h2 className="font-serif text-3xl text-stone-900 mb-6">
            Craftsmanship
          </h2>
          <div className="w-12 h-px bg-gold mb-8" />
          <p className="text-stone-600 leading-relaxed">
            Each Velmora piece goes through a meticulous creation process. From initial sketches 
            to final polish, our designs balance artistry with wearability. We use advanced 
            plating techniques to ensure our gold coating lasts — maintaining its warm glow 
            through daily wear.
          </p>
        </div>
      </div>
    </div>
  )
}
