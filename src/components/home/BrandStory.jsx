import React from 'react'
import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Our Philosophy</p>
            <h2 className="serif-heading text-4xl md:text-5xl mb-6 text-balance">
              Jewelry That Tells<br />Your Story
            </h2>
            <div className="w-12 h-px bg-accent mb-6" />
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Velmora was born from a simple belief: everyone deserves to feel extraordinary. Our demi-fine pieces are crafted with the same care and attention as luxury jewelry, at a price that makes everyday indulgence possible.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Each piece is 18K gold plated over recycled brass, hypoallergenic, and designed to be worn — not locked away. Because the best jewelry is the kind you never take off.
            </p>
            <Link to="/about" className="btn-outline inline-block">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
