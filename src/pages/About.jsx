import React from 'react'

export default function About() {
  return (
    <main className="pt-20 md:pt-24 min-h-screen">
      <div className="bg-cream-200/30 border-b border-cream-300/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 text-center">
          <p className="font-sans text-[10px] uppercase tracking-mega-wide text-gold-600 mb-4">Our Story</p>
          <h1 className="section-heading">The Velmora Story</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="space-y-8">
          <p className="font-serif text-xl md:text-2xl text-slate-850 leading-relaxed italic">
            "We believe that beautiful jewelry should be an everyday luxury, not a special occasion splurge."
          </p>

          <div className="divider-hairline my-10" />

          <div className="space-y-6 font-sans text-base text-slate-850/60 leading-relaxed">
            <p>
              Velmora Fine Jewelry was founded in 2023 with a clear mission: to create premium demi-fine
              jewelry that bridges the gap between costume and fine jewelry. We saw a world where women
              had to choose between affordable-but-cheap and beautiful-but-unaffordable — and we knew
              there had to be a better way.
            </p>
            <p>
              Every Velmora piece is crafted with 18K gold plating over premium brass, designed to be
              hypoallergenic and built to last. We work directly with skilled artisans who share our
              commitment to quality, cutting out traditional retail markups to bring you luxury-quality
              jewelry at accessible prices.
            </p>
            <p>
              Our collections are inspired by the quiet confidence of the modern woman — elegant
              without being ostentatious, premium without pretension. From our signature huggies
              to our statement necklaces, each piece is designed to become a treasured part of your
              everyday style.
            </p>
            <p>
              Today, Velmora serves customers in over 40 countries, and we're just getting started.
              Thank you for being part of our story.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
