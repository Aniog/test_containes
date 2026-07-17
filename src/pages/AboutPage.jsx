import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--velmora-bg)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <p className="velmora-label text-[var(--velmora-accent)] mb-4 text-center">Our Story</p>
        <h1 className="velmora-heading text-4xl md:text-5xl text-center mb-8">The Velmora Philosophy</h1>
        <div className="velmora-divider-thin w-24 mx-auto mb-12" />
        
        <div className="prose prose-lg max-w-none text-[var(--velmora-text-muted)] leading-relaxed space-y-6">
          <p>
            Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury budget. 
            Founded in 2020, we set out to create demi-fine pieces that bridge the gap between costume jewelry 
            and high-end fine jewelry.
          </p>
          <p>
            Each piece in our collection is designed in-house, using 18K gold plating over recycled brass. 
            We source our materials responsibly and work with artisans who share our commitment to quality 
            and sustainability.
          </p>
          <p>
            Our name, Velmora, draws from the Latin "velum" (veil) and "aura" (breeze) — representing 
            the delicate, ethereal quality we strive for in every design. Jewelry that feels like a second skin, 
            that enhances rather than overwhelms.
          </p>
          <p>
            Today, Velmora serves women in over 40 countries who share our values: quality over quantity, 
            intention over impulse, and timeless style over fleeting trends.
          </p>
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="velmora-btn-outline">
            Explore the Collection
          </Link>
        </div>
      </div>
    </div>
  )
}
