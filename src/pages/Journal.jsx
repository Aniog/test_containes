import React from 'react'

export default function Journal() {
  return (
    <div className="min-h-screen bg-velmora-ivory pb-20 pt-24 md:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-velmora-gold">Journal</p>
          <h1 className="mt-3 font-serif text-3xl md:text-4xl">Stories & Styling Notes</h1>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <article key={i} className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden bg-velmora-linen">
                <div className="h-full w-full bg-velmora-espresso/10 transition-transform duration-700 group-hover:scale-105" />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-velmora-gold">Style Guide</p>
              <h3 className="mt-2 font-serif text-xl">How to Layer Gold Necklaces Like an Editor</h3>
              <p className="mt-2 text-sm text-velmora-text-muted">
                Five simple rules for building a layered look that feels effortless, not overdone.
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
