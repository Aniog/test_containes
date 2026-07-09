import React from 'react'

export default function Journal() {
  return (
    <div className="min-h-screen pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <p className="font-sans text-xs font-medium tracking-widest-3xl uppercase text-gold mb-3">
          Velmora Journal
        </p>
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-base font-light mb-6">
          Stories & Inspiration
        </h1>
        <div className="w-12 h-px bg-gold mx-auto mb-8" />
        <p className="font-sans text-sm text-muted max-w-md mx-auto leading-relaxed">
          Style guides, behind-the-scenes, and the stories behind our designs. 
          Coming soon.
        </p>
      </div>
    </div>
  )
}
