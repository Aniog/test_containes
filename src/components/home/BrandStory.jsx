import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export function BrandStory() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-24 bg-secondary/20" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
            <img 
              alt="Velmora Jewelry Craftsmanship"
              data-strk-img-id="brand-story-img"
              data-strk-img="jewelry artisan working on gold fine jewelry making close up"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="order-1 md:order-2 md:pl-8 lg:pl-16 text-center md:text-left">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Our Story
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Born from a desire for jewelry that bridges the gap between fast fashion and fine jewelry, Velmora was created for the modern woman.
            </p>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              We believe in pieces that feel special but can be worn every day. By using premium 18k gold vermeil and sterling silver, we craft demi-fine jewelry designed to endure, without the traditional retail markup.
            </p>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-none px-8 h-12 tracking-widest uppercase text-xs">
              <Link to="/about">Read More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
