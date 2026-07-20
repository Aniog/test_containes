import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <section className="py-16 lg:py-24 bg-dark-50" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <div className="aspect-[4/5] bg-dark-200 overflow-hidden">
            <img
              data-strk-img-id="velmora-brand-story"
              data-strk-img="[story-heading] [story-text]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text side */}
          <div className="max-w-md">
            <span className="text-xs tracking-widest uppercase text-gold-600 font-medium">Our Story</span>
            <h2 id="story-heading" className="font-serif text-3xl md:text-4xl text-dark-900 mt-3 leading-tight">
              Jewelry That<br />Outlasts Trends
            </h2>
            <div className="w-12 h-px bg-gold-400 mt-6 mb-6" />
            <p id="story-text" className="text-dark-500 text-sm leading-relaxed">
              At Velmora, we believe fine jewelry shouldn't be reserved for special occasions alone. 
              Every piece we create is designed to be worn — daily, freely, unapologetically. 
              We source the finest materials, from 18K gold plating to genuine crystals, 
              and craft each item with the care it deserves.
            </p>
            <p className="text-dark-500 text-sm leading-relaxed mt-4">
              Our collections are made for the woman who treasures both quality and intention — 
              whether she's buying for herself or someone she loves.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center mt-8 text-xs tracking-widest uppercase text-dark-900 font-medium border-b border-dark-900 pb-0.5 hover:text-gold-600 hover:border-gold-600 transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}