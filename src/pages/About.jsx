import React from 'react'

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative h-[60vh] flex items-center justify-center bg-[#1C1A17]">
        <img 
          src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=2000&q=90" 
          alt="Velmora Atelier" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 text-center px-6">
          <div className="text-[#C5A26F] text-xs tracking-[0.3em] mb-4">ESTABLISHED 2018</div>
          <h1 className="serif text-6xl text-white tracking-[0.08em]">Our Story</h1>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-6 py-20">
        <div className="prose prose-lg">
          <p className="text-xl text-[#2C2823]/90 leading-relaxed mb-8">
            Velmora was founded with a simple belief: that fine jewelry should be accessible, 
            wearable, and made to last. We create demi-fine pieces that bridge the gap between 
            precious heirlooms and everyday adornments.
          </p>

          <h2 className="serif text-3xl tracking-[0.03em] mt-16 mb-6">The Velmora Difference</h2>
          <p className="text-[#2C2823]/80 leading-relaxed mb-6">
            Every piece begins in our studio, where our designers draw inspiration from vintage 
            silhouettes, natural forms, and the quiet confidence of the modern woman. We source 
            only the finest materials — 18K gold plating over solid brass, premium crystals, 
            and hypoallergenic findings.
          </p>
          <p className="text-[#2C2823]/80 leading-relaxed mb-6">
            Each item is hand-finished by skilled artisans who share our commitment to quality. 
            We inspect every piece multiple times before it reaches you, ensuring it meets our 
            exacting standards.
          </p>

          <h2 className="serif text-3xl tracking-[0.03em] mt-16 mb-6">Our Promise</h2>
          <ul className="space-y-3 text-[#2C2823]/80">
            <li>• 18K gold plating that resists tarnishing</li>
            <li>• Hypoallergenic materials safe for sensitive skin</li>
            <li>• Thoughtful packaging suitable for gifting</li>
            <li>• 30-day returns and lifetime care guidance</li>
            <li>• Carbon-neutral shipping on every order</li>
          </ul>

          <div className="mt-16 pt-12 border-t border-[#E5DFD3] text-center">
            <p className="text-[#7A7368] italic">Thank you for choosing Velmora.</p>
            <p className="mt-2 text-sm tracking-[0.1em]">— The Velmora Team</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
