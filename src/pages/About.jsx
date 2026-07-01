import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-parchment pt-20">
      {/* Hero */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-f1e2d3"
          data-strk-bg="[about-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1400"
        />
        <div className="absolute inset-0 bg-obsidian/60" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-champagne mb-3">Our Story</p>
            <h1 id="about-hero-title" className="font-serif text-5xl md:text-6xl text-ivory font-light">
              About Velmora
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-20 space-y-12">
        <div className="text-center space-y-5">
          <h2 className="font-serif text-3xl md:text-4xl text-obsidian font-light">
            Jewelry for the everyday woman
          </h2>
          <div className="w-10 h-px bg-champagne mx-auto" />
          <p className="font-sans text-sm text-stone leading-relaxed">
            Velmora was founded on a simple belief: that beautiful, high-quality jewelry shouldn't be reserved for special occasions or require a luxury budget. We design demi-fine pieces that feel genuinely luxurious, wear effortlessly day after day, and last for years — not just a season.
          </p>
          <p className="font-sans text-sm text-stone leading-relaxed">
            Every piece in our collection is thoughtfully crafted with 18K gold plating over hypoallergenic bases, designed to be worn daily, layered freely, and gifted with love. We believe jewelry is personal — it tells your story, marks your moments, and becomes part of who you are.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-champagne/20">
          {[
            { number: '18K', label: 'Gold Plated' },
            { number: '50K+', label: 'Happy Customers' },
            { number: '100%', label: 'Hypoallergenic' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-4xl text-champagne font-light">{stat.number}</p>
              <p className="font-sans text-xs uppercase tracking-widest text-stone mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/shop"
            className="inline-block bg-champagne text-obsidian font-sans text-xs uppercase tracking-widest px-10 py-4 hover:bg-champagne-dark transition-colors duration-200"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </div>
  )
}
