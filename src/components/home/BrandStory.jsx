import React from 'react'
import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="py-32 grid grid-cols-1 md:grid-cols-2">
      <div 
        className="aspect-square md:aspect-auto bg-muted min-h-[500px]"
        data-strk-bg-id="brand-story-bg"
        data-strk-bg="jewelry studio designer workbench warm neutral"
        data-strk-bg-ratio="1x1"
        data-strk-bg-width="1200"
      />
      <div className="bg-[#FAF7F5] p-12 md:p-24 flex flex-col justify-center items-start">
        <span className="text-[11px] uppercase tracking-[0.3em] opacity-60 mb-8 block">Our Ethos</span>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-12 leading-tight">
          Jewelry with a <br /> <i>Quiet Confidence</i>
        </h2>
        <p className="text-muted-foreground text-sm leading-loose max-w-lg mb-12 font-light">
          Founded on the principle that luxury should be felt, not heard. Velmora creates demi-fine gold jewelry for the modern woman who treasures subtlety. Each piece is crafted with 18K gold plating over hypoallergenic brass, designed to be worn, loved, and passed down. 
        </p>
        <Link to="/about" className="text-[11px] uppercase tracking-[0.2em] underline underline-offset-8 decoration-border hover:decoration-foreground transition-all">
          Explore Our Story
        </Link>
      </div>
    </section>
  )
}
