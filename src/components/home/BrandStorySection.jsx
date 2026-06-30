import React from 'react'
import { Link } from 'react-router-dom'

export default function BrandStorySection() {
  return (
    <section className="velmora-section bg-[var(--velmora-bg-alt)]">
      <div className="velmora-container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[3/4] overflow-hidden bg-[var(--velmora-border)]">
            <img
              src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&h=1100&fit=crop"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="velmora-body-xs text-[var(--velmora-text-light)] tracking-[0.2em] mb-4">
              Our Story
            </p>
            <h2 className="velmora-heading velmora-heading-md mb-6">
              Where Elegance Meets Everyday
            </h2>
            <div className="velmora-divider w-12 mb-6" />
            <p className="velmora-body text-[var(--velmora-text-muted)] mb-4">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury budget. We design demi-fine pieces that bridge the gap between costume and couture — 18K gold plated over sterling silver, hypoallergenic, and crafted to withstand daily wear.
            </p>
            <p className="velmora-body text-[var(--velmora-text-muted)] mb-8">
              Each piece is designed in our studio with attention to the smallest details: the curve of an earring, the weight of a pendant, the way light catches a crystal. Because the jewelry you wear every day deserves to feel extraordinary.
            </p>
            <Link to="/about" className="velmora-btn velmora-btn-outline">
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
