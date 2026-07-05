import React from 'react'
import { Link } from 'react-router-dom'

export default function BrandStorySection() {
  return (
    <section className="velmora-section bg-[var(--velmora-bg-secondary)]">
      <div className="velmora-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[3/4] md:aspect-square overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <span className="velmora-label text-[var(--velmora-accent)]">Our Story</span>
            <h2 className="velmora-heading-md text-[var(--velmora-text)] mt-3 mb-6">
              Where Elegance Meets Everyday
            </h2>
            <p className="velmora-body text-[var(--velmora-text-muted)] mb-4">
              Velmora was born from a simple belief: luxury jewelry should be accessible, not exclusive.
              Each piece is thoughtfully designed in our studio, using ethically sourced materials and
              18K gold plating that lasts.
            </p>
            <p className="velmora-body text-[var(--velmora-text-muted)] mb-8">
              We craft jewelry for the modern woman who values quality over quantity, who treasures
              pieces that tell a story, and who believes that everyday moments deserve a touch of gold.
            </p>
            <Link to="/about" className="velmora-btn velmora-btn-outline">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
