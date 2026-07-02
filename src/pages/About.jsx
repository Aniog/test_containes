import React from 'react'

const About = () => {
  return (
    <div className="pt-20">
      <div className="max-w-[900px] mx-auto px-6 py-16">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.15em] text-[#8B7355]">EST. 2018 • NEW YORK</p>
          <h1 className="font-serif text-6xl tracking-[0.05em] mt-4">Our Story</h1>
        </div>

        <div className="prose prose-lg max-w-none text-[#6B635E] space-y-8 leading-relaxed">
          <p>
            Velmora was founded with a simple belief: that fine jewelry should be accessible without compromise. 
            We create demi-fine pieces that feel as precious as the moments they mark—designed to be worn, loved, 
            and passed down.
          </p>
          
          <p>
            Every piece begins in our atelier, where our team of designers and artisans work with intention. 
            We source the finest 18K gold plating and hypoallergenic materials, ensuring each creation meets 
            our exacting standards for quality and comfort.
          </p>

          <div className="my-12 py-8 border-y border-[#E5DFD3] text-center">
            <p className="font-serif text-2xl tracking-[0.1em] text-[#2C2522]">“Jewelry should feel like an extension of yourself—quiet, personal, and enduring.”</p>
          </div>

          <p>
            We believe in thoughtful consumption. Our collections are intentionally small, our production limited, 
            and our packaging designed to be kept and reused. When you choose Velmora, you're choosing pieces 
            that will accompany you through seasons and years.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-[#E5DFD3] grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <p className="font-medium mb-2">Sustainability</p>
            <p className="text-[#6B635E]">Recycled packaging, responsibly sourced materials, and a commitment to reducing waste at every step.</p>
          </div>
          <div>
            <p className="font-medium mb-2">Craftsmanship</p>
            <p className="text-[#6B635E]">Each piece is hand-finished by skilled artisans who take pride in their work.</p>
          </div>
          <div>
            <p className="font-medium mb-2">Community</p>
            <p className="text-[#6B635E]">A portion of every sale supports women-led initiatives in our local community.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About