import React from 'react'
import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="section-padding bg-[hsl(var(--background-secondary))]">
      <div className="container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="overflow-hidden rounded-sm aspect-[4/5] md:aspect-[3/4]">
            <img
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=1000&fit=crop&crop=center"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[hsl(var(--accent))] mb-4">Our Story</p>
            <h2 className="serif-heading text-3xl md:text-4xl tracking-[0.15em] mb-6 leading-tight">
              Where Craft<br />Meets Care
            </h2>
            <div className="space-y-4 text-[hsl(var(--foreground-secondary))] leading-relaxed">
              <p>
                Velmora was born from a simple belief: that beautiful jewelry shouldn't come with a luxury markup. We design demi-fine pieces that look and feel like heirlooms, at prices that make everyday luxury possible.
              </p>
              <p>
                Each piece is crafted with 18K gold plating over a solid brass base, ensuring lasting beauty without the premium price. Our designs draw inspiration from nature, architecture, and the quiet elegance of everyday moments.
              </p>
            </div>
            <Link to="/about" className="btn-secondary mt-8 inline-block">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
