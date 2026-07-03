import React from 'react'
import { Link } from 'react-router-dom'

export default function JournalPage() {
  return (
    <div className="pt-24 md:pt-28 pb-16 bg-ivory min-h-screen">
      <div className="container-wide max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-5xl text-warm-black font-light">Journal</h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
          <p className="text-sm text-warm-tan mt-4">Stories, styling tips, and behind-the-scenes moments</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'How to Build Your Everyday Jewelry Stack', excerpt: 'A guide to layering necklaces, stacking earrings, and creating a look that feels uniquely yours.' },
            { title: 'The Art of Gifting: Jewelry for Every Occasion', excerpt: 'From birthdays to "just because" — how to choose a piece they\'ll treasure forever.' },
            { title: 'Behind the Craft: Our 18K Gold Plating Process', excerpt: 'A look inside our studio and the meticulous process behind every Velmora piece.' },
            { title: 'Caring for Your Demi-Fine Jewelry', excerpt: 'Simple tips to keep your pieces looking brand new, season after season.' },
          ].map((article, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[4x3] bg-cream mb-4 overflow-hidden">
                <div className="w-full h-full bg-warm-charcoal/10 flex items-center justify-center group-hover:bg-warm-charcoal/5 transition-colors">
                  <span className="font-serif text-warm-tan/40 text-lg">Coming Soon</span>
                </div>
              </div>
              <h3 className="font-serif text-lg text-warm-black group-hover:text-gold transition-colors">{article.title}</h3>
              <p className="text-sm text-warm-tan mt-1">{article.excerpt}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/shop" className="btn-secondary inline-block">
            Shop While You Wait
          </Link>
        </div>
      </div>
    </div>
  )
}
