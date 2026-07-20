import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <div className="pt-20 md:pt-24">
      <div className="container-padding py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="serif-heading text-5xl md:text-6xl mb-8">Our Story</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury budget. 
            We create demi-fine pieces that bridge the gap between everyday wear and special occasions, 
            using 18K gold plating over sterling silver for lasting beauty at an accessible price.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Each piece is thoughtfully designed in our studio, inspired by the quiet elegance of nature 
            and the timeless beauty of fine craftsmanship. We believe jewelry should be treasured, not locked away — 
            made to be worn, loved, and passed down through generations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <h3 className="serif-heading text-3xl mb-2">18K</h3>
              <p className="text-muted-foreground text-sm">Gold Plated</p>
            </div>
            <div className="text-center">
              <h3 className="serif-heading text-3xl mb-2">100%</h3>
              <p className="text-muted-foreground text-sm">Hypoallergenic</p>
            </div>
            <div className="text-center">
              <h3 className="serif-heading text-3xl mb-2">30-Day</h3>
              <p className="text-muted-foreground text-sm">Returns</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
