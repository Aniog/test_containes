import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-24 bg-background" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-secondary w-full md:order-2">
            <img 
              data-strk-img-id="brand-story-image"
              data-strk-img="jewelry designer working gold craft elegant workshop aesthetic"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora Studio"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left md:order-1">
            <h2 className="font-serif text-4xl lg:text-5xl tracking-wide mb-6">Designed for Everyday Elegance</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed font-light text-lg">
              Velmora was born from a desire to bridge the gap between inaccessible fine jewelry and fleeting fast fashion. We believe that beautiful, high-quality jewelry should be an everyday comfort, not just an occasional luxury.
            </p>
            <p className="text-muted-foreground mb-10 leading-relaxed font-light text-lg">
              Using responsibly sourced 18K gold and hypoallergenic materials, every piece is designed in our studio to be lived in, layered, and loved for years to come.
            </p>
            <Link to="/about" className="uppercase tracking-[0.2em] text-sm font-medium border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors inline-block">
              Discover Our Story
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
