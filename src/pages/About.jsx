import React from 'react'

export default function About() {
  return (
    <main className="pt-32 min-h-screen bg-ivory">
      <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-accent font-medium mb-4">Our Story</p>
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-wide mb-8">
          Designed for the Everyday
        </h1>
        <p className="text-taupe leading-relaxed mb-6">
          Velmora was founded with a singular vision: to create jewelry that bridges the gap between costume and fine. 
          We believe that luxury should be accessible, and that the pieces you wear every day deserve the same care and 
          craftsmanship as heirloom treasures.
        </p>
        <p className="text-taupe leading-relaxed mb-6">
          Each design begins as a sketch in our New York studio, where we draw inspiration from architecture, nature, and 
          the quiet confidence of modern women. Our artisans then bring these sketches to life using 18K gold-plated brass, 
          surgical steel posts, and hand-set crystals — materials chosen for their beauty, durability, and skin-friendly properties.
        </p>
        <p className="text-taupe leading-relaxed">
          We are committed to responsible production, working with family-owned workshops that share our values of quality 
          over quantity. Every piece is inspected by hand before it reaches you, because we believe the details matter.
        </p>
      </div>
    </main>
  )
}
