import React from 'react'

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
      <div className="text-center mb-16">
        <div className="uppercase tracking-[0.15em] text-xs text-vel-gold mb-3">Est. 2019</div>
        <h1 className="heading-serif text-6xl tracking-[-0.02em] mb-6">Our Story</h1>
        <p className="text-xl text-vel-muted max-w-lg mx-auto">Fine jewelry, thoughtfully made for the modern woman.</p>
      </div>

      <div className="prose prose-lg max-w-none text-vel-muted space-y-8 leading-relaxed">
        <p>
          Velmora began in a small studio in Brooklyn with a single question: why should beautiful, lasting jewelry be out of reach for so many?
        </p>
        <p>
          We set out to create demi-fine pieces that feel as precious as fine jewelry—crafted from 18K gold plating over solid brass, set with carefully selected crystals, and finished by hand.
        </p>
        <p>
          Every piece is designed to be worn daily, gifted meaningfully, and treasured for years. We believe in quiet luxury: the kind that doesn't announce itself, but feels unmistakably special.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-vel-border-light">
        <div>
          <div className="text-vel-gold text-sm tracking-widest mb-2">ETHOS</div>
          <div className="font-medium mb-2">Less, but better.</div>
          <p className="text-sm text-vel-muted">We design fewer pieces, with more intention. Each one is made to last.</p>
        </div>
        <div>
          <div className="text-vel-gold text-sm tracking-widest mb-2">CRAFT</div>
          <div className="font-medium mb-2">Hand-finished.</div>
          <p className="text-sm text-vel-muted">Our artisans inspect every detail. No piece leaves the studio without passing through many hands.</p>
        </div>
        <div>
          <div className="text-vel-gold text-sm tracking-widest mb-2">VALUES</div>
          <div className="font-medium mb-2">Responsible luxury.</div>
          <p className="text-sm text-vel-muted">We source responsibly, package minimally, and design for longevity—not trends.</p>
        </div>
      </div>
    </div>
  )
}

export default About
