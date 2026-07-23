import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        <div className="text-center mb-16">
          <div className="text-xs tracking-[0.15em] text-[#C5A26F] mb-3">EST. 2019 • NEW YORK</div>
          <h1 className="serif text-6xl mb-6">Our Story</h1>
          <p className="text-xl text-[#6B6B5F]">Quiet luxury, thoughtfully made.</p>
        </div>

        <div className="prose prose-lg max-w-none text-[#6B6B5F] space-y-8 leading-relaxed">
          <p>Velmora was founded with a simple belief: fine jewelry should be worn, not stored away. We create demi-fine pieces that feel personal and approachable—designed for the woman who values quality without ostentation.</p>
          
          <p>Every piece begins in our New York atelier, where our small team of artisans hand-finishes each item with care. We source only the finest materials: 18K gold plating over solid brass, hypoallergenic posts, and ethically sourced crystals.</p>

          <div className="my-12 aspect-video bg-[#F0EBE3] flex items-center justify-center">
            <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80" alt="Atelier" className="max-h-full" />
          </div>

          <p>Our collections are intentionally small. We release new pieces seasonally, allowing us to focus on craftsmanship over quantity. Each design is meant to become part of your daily ritual—something you reach for again and again.</p>

          <p>Thank you for choosing Velmora. We hope our jewelry brings you as much joy as it brings us to create it.</p>
        </div>

        <div className="mt-16 text-center">
          <Link to="/shop" className="btn btn-primary">Explore the Collection</Link>
        </div>
      </div>

      <footer className="bg-[#0F0F0F] text-white/60 py-10 text-center text-xs tracking-[0.1em] mt-20">
        © {new Date().getFullYear()} Velmora Fine Jewelry
      </footer>
    </div>
  )
}