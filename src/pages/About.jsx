import React from 'react'

const AboutPage = () => {
  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <h1 className="font-serif text-3xl md:text-4xl tracking-ultra-wide uppercase text-base font-light text-center mb-4">
          Our Story
        </h1>
        <div className="w-12 h-px bg-gold mx-auto mb-10" />

        <div className="prose max-w-none">
          <p className="text-base text-stone-600 font-sans leading-relaxed mb-6">
            Velmora was born from a simple belief: that fine-quality jewelry should be accessible, not exclusive. Founded in 2023, we set out to create demi-fine pieces that combine the warmth and richness of solid gold with an approachable price point.
          </p>
          <p className="text-base text-stone-600 font-sans leading-relaxed mb-6">
            Every piece in our collection is crafted with 18K gold plating over sterling silver, designed to be worn every day and treasured for years. We obsess over every detail — the weight of a huggie, the drape of a chain, the warmth of the gold.
          </p>
          <p className="text-base text-stone-600 font-sans leading-relaxed mb-6">
            Because the jewelry you reach for every morning should feel as special as the day you first wore it.
          </p>

          <div className="my-12 text-center">
            <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
              <div>
                <p className="font-serif text-3xl text-gold">18K</p>
                <p className="text-xs tracking-widest uppercase font-sans text-stone-500 mt-1">Gold Plated</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-gold">925</p>
                <p className="text-xs tracking-widest uppercase font-sans text-stone-500 mt-1">Sterling Silver</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-gold">0</p>
                <p className="text-xs tracking-widest uppercase font-sans text-stone-500 mt-1">Nickel Free</p>
              </div>
            </div>
          </div>

          <p className="text-base text-stone-600 font-sans leading-relaxed">
            We believe in transparency, sustainability, and the joy of wearing something beautiful without compromise. Welcome to Velmora.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
