import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function AboutPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef} className="section-padding bg-background">
      <div className="container-padding max-w-3xl mx-auto">
        <h1 className="serif-heading text-4xl md:text-5xl mb-8 text-center">Our Story</h1>

        <div className="space-y-6 text-foreground/80 leading-relaxed">
          <p>
            Velmora was founded with a simple mission: to make beautiful, high-quality jewelry accessible to everyone. 
            We believe that luxury shouldn't come with an exclusive price tag.
          </p>

          <div className="aspect-[16/9] bg-secondary my-8">
            <img
              data-strk-img-id="about-story-img"
              data-strk-img="[about-story-text] [our-story-title]"
              data-strk-img-ratio="16x9"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora workshop"
              className="w-full h-full object-cover"
            />
          </div>

          <p>
            Our demi-fine collection is crafted using 18K gold plating over sterling silver, creating pieces that 
            look and feel luxurious while remaining affordable. Each design is carefully considered, from the weight 
            of an earring to the drape of a chain.
          </p>

          <h2 className="serif-heading text-2xl mt-8 mb-4">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="p-6 bg-secondary/50">
              <h3 className="product-name text-sm mb-2">Quality First</h3>
              <p className="text-sm">
                We use only the finest materials and work with skilled artisans to ensure every piece meets our standards.
              </p>
            </div>
            <div className="p-6 bg-secondary/50">
              <h3 className="product-name text-sm mb-2">Accessible Luxury</h3>
              <p className="text-sm">
                Beautiful jewelry shouldn't require a luxury budget. Our direct-to-consumer model keeps prices fair.
              </p>
            </div>
            <div className="p-6 bg-secondary/50">
              <h3 className="product-name text-sm mb-2">Sustainability</h3>
              <p className="text-sm">
                We're committed to responsible sourcing and minimizing our environmental impact at every step.
              </p>
            </div>
            <div className="p-6 bg-secondary/50">
              <h3 className="product-name text-sm mb-2">Inclusivity</h3>
              <p className="text-sm">
                Our designs are made for everyone. We celebrate diversity in all its forms.
              </p>
            </div>
          </div>

          <p>
            Today, Velmora serves women around the world who appreciate thoughtful design and quality craftsmanship. 
            We're proud to be part of your everyday moments and special occasions alike.
          </p>
        </div>
      </div>
    </div>
  )
}
