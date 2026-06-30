import React from 'react'

export default function AboutPage() {
  return (
    <main className="container-wide py-24 md:py-32">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--velmora-text-muted)] mb-4">Our Story</p>
        <h1 className="font-serif-display text-4xl md:text-5xl mb-8">Where Craft Meets Care</h1>
        <div className="hairline-divider mb-8" />
        <p className="text-[var(--velmora-text-muted)] leading-relaxed mb-6">
          Velmora was founded with a singular vision: to make beautiful, well-crafted jewelry accessible to every woman. We believe that the pieces you wear every day should be made with intention, care, and an unwavering commitment to quality.
        </p>
        <p className="text-[var(--velmora-text-muted)] leading-relaxed mb-6">
          Each Velmora piece is designed in our studio and crafted using 18K gold plating over responsibly sourced brass. We choose materials that are hypoallergenic and nickel-free, because jewelry should feel as good as it looks.
        </p>
        <p className="text-[var(--velmora-text-muted)] leading-relaxed mb-6">
          Our name comes from the Latin word for "truth" — because we believe in honest pricing, transparent practices, and jewelry that speaks for itself. No markups, no middlemen, just beautiful pieces delivered directly to you.
        </p>
        <div className="aspect-[16/9] mt-12 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1200&h=675&fit=crop"
            alt="Velmora craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </main>
  )
}
