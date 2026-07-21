import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-32 pb-16">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <h1 className="font-serif text-3xl md:text-5xl tracking-wide text-text-primary text-center">
          Our Story
        </h1>
        <div className="w-12 h-px bg-gold mx-auto mt-4 mb-10" />

        <div className="space-y-6 font-sans text-sm md:text-base text-text-secondary font-light leading-relaxed">
          <p>
            Velmora was born from a simple frustration: why should beautifully crafted jewelry
            cost a fortune? We believe that the pieces you wear every day — the ones that become
            part of your identity — should be accessible without compromise.
          </p>
          <p>
            Every Velmora piece begins as a hand-drawn sketch in our studio. Our designers draw
            inspiration from architecture, nature, and the quiet elegance of everyday life. From
            there, each design is refined through dozens of iterations before reaching its final
            form — one that feels both timeless and unmistakably modern.
          </p>
          <p>
            We use 18K gold plating over premium brass, hand-set cubic zirconia, and
            hypoallergenic materials that are gentle on even the most sensitive skin. No nickel,
            no compromises, no middlemen inflating the price.
          </p>
          <p>
            By selling directly to you, we eliminate the traditional retail markup and invest
            those savings into what matters: better materials, better craftsmanship, and better
            packaging. Each piece arrives in a signature Velmora box, ready to be gifted — or
            kept for yourself.
          </p>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/shop"
            className="font-sans text-xs tracking-super-wide uppercase bg-gold text-warm-black px-10 py-3.5 hover:bg-gold-light transition-colors duration-300 inline-block"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </div>
  )
}
