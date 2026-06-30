import React from 'react'
import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="section-padding bg-[var(--velmora-cream)]">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1601121141461-9d6647bca1db?w=800&h=1000&fit=crop"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--velmora-text-muted)] mb-4">Our Story</p>
            <h2 className="font-serif-display text-4xl md:text-5xl mb-6">
              Where Craft<br />Meets Care
            </h2>
            <div className="hairline-divider mb-6" />
            <p className="text-[var(--velmora-text-muted)] leading-relaxed mb-4">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury budget. Each piece is thoughtfully designed in our studio, using 18K gold plating over responsibly sourced brass.
            </p>
            <p className="text-[var(--velmora-text-muted)] leading-relaxed mb-8">
              We focus on the details that matter — hypoallergenic materials, secure closures, and finishes that last. Because jewelry you wear every day deserves to be made with care.
            </p>
            <Link to="/about" className="btn-outline">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
