import React from 'react'
import { Link } from 'react-router-dom'
import { getStrkImage } from '@/lib/strkImages.js'

export default function BrandStory() {
  return (
    <section id="story" className="bg-velmora-pearl px-4 py-16 text-velmora-espresso sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative overflow-hidden bg-velmora-blush shadow-velvet">
          <div className="absolute -left-10 -top-10 h-44 w-44 rounded-full bg-velmora-champagne/20 blur-3xl" />
          <img
            className="aspect-[4/5] w-full object-cover"
            id="story-image"
            alt="Velmora jewelry atelier"
            data-strk-img-id="brand-story-atelier-n4o5p6"
            data-strk-img="[story-copy] [story-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1000"
            src={getStrkImage('brand-story-atelier-n4o5p6')}
          />
        </div>
        <div className="mx-auto max-w-xl lg:max-w-none lg:pl-12">
          <p className="text-xs font-bold uppercase tracking-widest text-velmora-antique">Our philosophy</p>
          <h2 id="story-title" className="mt-5 font-serif text-5xl font-medium leading-none text-velmora-espresso md:text-7xl">Gold made intimate, modern, and enduring.</h2>
          <p id="story-copy" className="mt-7 text-base leading-8 text-velmora-smoke md:text-lg">Velmora was created for women who buy jewelry for the everyday moments that become memory. Each piece is designed with warm gold tones, refined silhouettes, and a premium feel that remains beautifully accessible.</p>
          <Link to="/shop" className="velmora-focus mt-8 inline-flex border-b border-velmora-antique pb-2 text-xs font-bold uppercase tracking-widest text-velmora-antique transition hover:text-velmora-espresso">Our Story</Link>
        </div>
      </div>
    </section>
  )
}
