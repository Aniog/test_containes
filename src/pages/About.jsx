import React from 'react'

const About = () => {
  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-6 pt-12 pb-24">
        <div className="text-center mb-16">
          <div className="text-xs tracking-[0.15em] text-[#6B6560]">SINCE 2019</div>
          <h1 className="text-7xl serif mt-4">Our Story</h1>
        </div>

        <div className="prose prose-lg max-w-none text-[#6B6560]">
          <p className="text-xl leading-tight text-[#2C2825] mb-8">Velmora was born from a simple belief: beautiful jewelry shouldn't be reserved for special occasions or require a lifetime of savings.</p>
          
          <p>Our founder, after years working in the fine jewelry industry, saw a gap between mass-produced fashion jewelry and inaccessible precious metal pieces. She envisioned a middle ground—demi-fine jewelry that felt special, lasted, and didn't break the bank.</p>
          
          <p className="my-8">Today, every Velmora piece is designed in our New York studio and hand-finished by skilled artisans. We use only the highest quality materials: 18K gold plating over sterling silver, ethically sourced crystals, and hypoallergenic findings.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-[#E5E0D8]">
          {[
            { num: "18K", label: "Gold Plating" },
            { num: "5", label: "Year Warranty" },
            { num: "40+", label: "Countries Shipped" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl serif text-[#B89B6E]">{stat.num}</div>
              <div className="text-sm tracking-[0.1em] mt-2 text-[#6B6560]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About