import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <main className="pt-20 lg:pt-24">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&h=900&fit=crop"
          alt="Velmora craftsmanship"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="serif-heading text-5xl md:text-6xl lg:text-7xl mb-6">
            Our Story
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light">
            Where tradition meets modern elegance
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-20 lg:py-28">
        <div className="prose prose-lg mx-auto">
          <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
            Velmora was born from a simple belief: that beautiful jewelry should be accessible to everyone. Founded in 2024, we set out to bridge the gap between fine jewelry and everyday wear, creating pieces that feel luxurious without the luxury price tag.
          </p>
          
          <h2 className="serif-heading text-3xl md:text-4xl mb-6 mt-16">Our Philosophy</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Every piece in our collection is thoughtfully designed in our studio, drawing inspiration from natural forms, architectural lines, and the timeless elegance of vintage jewelry. We believe that the best accessories are the ones you reach for every day — pieces that feel like an extension of yourself.
          </p>

          <h2 className="serif-heading text-3xl md:text-4xl mb-6 mt-16">Craftsmanship</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Our demi-fine collection is crafted with 18K gold plating over recycled brass, ensuring both beauty and sustainability. Each piece undergoes rigorous quality control to ensure it meets our exacting standards. We work with skilled artisans who share our passion for creating jewelry that lasts.
          </p>

          <h2 className="serif-heading text-3xl md:text-4xl mb-6 mt-16">Sustainability</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            We're committed to responsible jewelry making. Our materials are sourced ethically, our packaging is recyclable, and we're constantly exploring ways to reduce our environmental footprint. Because beautiful jewelry shouldn't cost the earth.
          </p>

          <div className="border-t border-foreground/10 pt-12 mt-16 text-center">
            <Link to="/shop" className="btn-outline">
              Explore Our Collection
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
