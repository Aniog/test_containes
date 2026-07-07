import React from 'react'

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-16 pb-20">
      <div className="text-center mb-16">
        <div className="text-xs tracking-[0.2em] text-[#B8976D] mb-3">NEW YORK • EST. 2019</div>
        <h1 className="font-serif text-6xl tracking-[0.05em]">Our Story</h1>
      </div>

      <div className="prose prose-lg max-w-none text-[#6B665F] space-y-8 text-[15px] leading-relaxed">
        <p>
          Velmora was founded with a simple conviction: that demi-fine jewelry should feel as luxurious as fine jewelry, without the unattainable price tag.
        </p>
        <p>
          Our founder, a former fashion editor, grew frustrated by the lack of options that balanced quality, design, and accessibility. She set out to create pieces that would become part of a woman's everyday rotation — not reserved for special occasions.
        </p>
        <p>
          Every Velmora piece begins in our New York studio, where our design team sketches, prototypes, and refines until each detail feels just right. We work exclusively with 18K gold plating over solid brass, paired with responsibly sourced crystals. Our pieces are hypoallergenic and designed to last.
        </p>
      </div>

      <div className="my-16 py-12 border-y border-[#E5DFD3] grid md:grid-cols-3 gap-8 text-center">
        {[
          { number: '18K', label: 'Gold Plating' },
          { number: '5+', label: 'Years of Craft' },
          { number: '40+', label: 'Countries Shipped' }
        ].map((stat, i) => (
          <div key={i}>
            <div className="font-serif text-5xl mb-2">{stat.number}</div>
            <div className="text-xs tracking-[0.15em] text-[#6B665F]">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="text-center text-[#6B665F]">
        <p className="mb-4">Thank you for choosing Velmora.</p>
        <p className="text-sm tracking-[0.1em]">— The Velmora Team</p>
      </div>
    </div>
  )
}

export default About