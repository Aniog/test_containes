import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <main className="pt-20 md:pt-24">
      <div className="container-padding section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[hsl(var(--accent))] mb-4">Our Story</p>
          <h1 className="serif-heading text-4xl md:text-5xl tracking-[0.15em] mb-8 leading-tight">
            Where Craft<br />Meets Care
          </h1>
          <div className="space-y-6 text-[hsl(var(--foreground-secondary))] leading-relaxed">
            <p>
              Velmora was born from a simple belief: that beautiful jewelry shouldn't come with a luxury markup. We design demi-fine pieces that look and feel like heirlooms, at prices that make everyday luxury possible.
            </p>
            <p>
              Each piece is crafted with 18K gold plating over a solid brass base, ensuring lasting beauty without the premium price. Our designs draw inspiration from nature, architecture, and the quiet elegance of everyday moments.
            </p>
            <p>
              We believe jewelry should be an extension of who you are — not a status symbol, but a personal expression. That's why every Velmora piece is designed to be worn daily, layered, stacked, and treasured for years to come.
            </p>
          </div>
          <div className="mt-12">
            <Link to="/shop" className="btn-primary">Shop the Collection</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
