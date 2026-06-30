import React from 'react'

export default function Journal() {
  return (
    <div className="bg-cream min-h-screen pt-20 md:pt-24">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-medium text-stone-900 tracking-wide">
          Journal
        </h1>
        <div className="w-12 h-px bg-gold mx-auto mt-4 mb-8" />
        <p className="text-stone-500 leading-relaxed">
          Stories, styling tips, and behind-the-scenes moments — coming soon.
        </p>
      </div>
    </div>
  )
}
