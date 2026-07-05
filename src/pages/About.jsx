import React from 'react'

function About() {
  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="text-xs tracking-[0.15em] text-[#8B7355] mb-3">EST. 2018 • NEW YORK</div>
          <h1 className="font-serif text-6xl mb-6">Our Story</h1>
          <p className="text-xl text-[#6B665F]">Quiet luxury, thoughtfully made.</p>
        </div>

        <div className="prose prose-lg max-w-none text-[#6B665F] space-y-8 leading-relaxed">
          <p>
            Velmora was founded with a singular vision: to create demi-fine jewelry that feels as precious as fine jewelry, but accessible enough to wear every day.
          </p>
          <p>
            Our founder, a former fine jewelry designer, grew frustrated with the industry's extremes—either disposable fashion pieces or investment-level heirlooms. She believed there was a middle ground: jewelry that lasts, feels special, and doesn't require a special occasion.
          </p>
          <p>
            Every Velmora piece begins in our New York studio. We source the finest 18K gold plating, hand-select crystals, and work with artisans who share our commitment to quality. Each item is finished by hand, inspected, and packaged with care.
          </p>
          <p>
            We design for the woman who values intention over excess. Our pieces are meant to be layered, mixed, and worn—not stored away for special occasions. They're the jewelry you reach for daily, the pieces that become part of your story.
          </p>
        </div>

        <div className="mt-16 pt-16 border-t border-[#E5DFD3] grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="font-serif text-4xl mb-2">18K</div>
            <div className="text-sm tracking-[0.1em] text-[#6B665F]">Gold Plating</div>
          </div>
          <div>
            <div className="font-serif text-4xl mb-2">5</div>
            <div className="text-sm tracking-[0.1em] text-[#6B665F]">Signature Collections</div>
          </div>
          <div>
            <div className="font-serif text-4xl mb-2">30</div>
            <div className="text-sm tracking-[0.1em] text-[#6B665F]">Day Returns</div>
          </div>
        </div>
      </div>

      <div className="bg-[#2C2823] text-[#F8F5F1] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="font-serif text-3xl mb-6">Crafted with Intention</div>
          <p className="max-w-xl mx-auto text-[#C5A46E]">
            From our studio to your jewelry box, every step is considered. We believe beautiful things should be made to last—and worn with joy.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About