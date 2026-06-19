import React from 'react'

const About = () => {
  return (
    <div className="max-w-[900px] mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <p className="text-xs tracking-[3px] text-[#8B7355] mb-3">EST. 2019</p>
        <h1 className="font-serif text-6xl tracking-[2px]">Our Story</h1>
      </div>

      <div className="prose prose-lg max-w-none text-[#6B635C] leading-relaxed space-y-6">
        <p>Velmora was founded with a simple belief: that beautiful jewelry should be accessible without compromise. We create demi-fine pieces that feel personal, timeless, and made to last.</p>
        
        <p>Each design begins with quiet observation—of light, of movement, of the way women move through their lives. We work with skilled artisans who share our commitment to quality and detail.</p>

        <p>Our materials are chosen with care. 18K gold plating over solid brass. Hypoallergenic posts. Stones selected for their brilliance and durability. Every piece is finished by hand.</p>

        <p>We believe in thoughtful consumption. Jewelry that you reach for again and again. Pieces that become part of your story.</p>
      </div>

      <div className="mt-16 pt-12 border-t border-[#D4C5B5] grid md:grid-cols-3 gap-8 text-center">
        <div>
          <p className="font-serif text-4xl tracking-[1px] mb-2">5</p>
          <p className="text-sm tracking-[2px] text-[#8B7355]">COUNTRIES</p>
        </div>
        <div>
          <p className="font-serif text-4xl tracking-[1px] mb-2">48</p>
          <p className="text-sm tracking-[2px] text-[#8B7355]">STYLES</p>
        </div>
        <div>
          <p className="font-serif text-4xl tracking-[1px] mb-2">12K</p>
          <p className="text-sm tracking-[2px] text-[#8B7355]">PIECES SHIPPED</p>
        </div>
      </div>
    </div>
  )
}

export default About
