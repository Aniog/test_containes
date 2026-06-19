import React from 'react'

const About = () => {
  return (
    <div className="max-w-[900px] mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <p className="text-xs tracking-[0.2em] text-[#6B6560]">NEW YORK • EST. 2018</p>
        <h1 className="serif text-6xl tracking-[-0.02em] mt-3">Our Story</h1>
      </div>

      <div className="prose prose-lg max-w-none text-[#6B6560] leading-relaxed space-y-6">
        <p>
          Velmora was founded with a simple belief: that beautiful, well-made jewelry should be accessible 
          without compromise. We create demi-fine pieces that honor the tradition of fine jewelry while 
          embracing a modern, effortless sensibility.
        </p>
        <p>
          Every piece begins in our New York studio, where our small team of designers and artisans 
          carefully considers each curve, each finish, each detail. We source the finest materials—18K 
          gold plating over sterling silver, ethically sourced crystals—and work with skilled craftspeople 
          who share our commitment to quality.
        </p>
        <p>
          Our collections are designed to be treasured and worn, not tucked away. Pieces that mark 
          moments, become heirlooms, and tell your story. We believe jewelry should feel as special 
          as the occasions it celebrates, and as comfortable as your everyday.
        </p>
      </div>

      <div className="mt-16 pt-16 border-t border-[#E5DFD6] grid md:grid-cols-3 gap-8 text-center">
        {[
          { num: "18K", label: "Gold Plating" },
          { num: "30", label: "Day Returns" },
          { num: "5", label: "Countries Shipped" },
        ].map((stat, i) => (
          <div key={i}>
            <p className="serif text-4xl tracking-[-0.02em]">{stat.num}</p>
            <p className="text-sm tracking-[0.1em] text-[#6B6560] mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
