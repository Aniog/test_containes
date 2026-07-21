import React from 'react'

export default function JournalPage() {
  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <span className="text-xs tracking-[0.25em] uppercase text-velmora-gold font-medium">
          The Velmora Journal
        </span>
        <h1 className="mt-4 font-serif text-4xl md:text-5xl font-light text-velmora-charcoal tracking-wide">
          Stories & Style
        </h1>
        <div className="w-12 h-px bg-velmora-gold mx-auto mt-6 mb-8" />
        <p className="text-sm text-velmora-stone">
          Styling tips, behind-the-scenes, and jewelry care guides — coming soon.
        </p>
      </div>
    </div>
  )
}
