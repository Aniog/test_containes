import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 text-center">Our Story</p>
        <h1 className="serif-heading text-5xl md:text-6xl text-center mb-12">The Velmora Story</h1>

        <div className="aspect-[16/9] mb-12 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1200&q=80"
            alt="Velmora craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="serif-heading text-2xl md:text-3xl italic text-center mb-12 text-balance">
            "We believe jewelry should be felt, not just admired."
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Velmora was founded in 2024 with a singular vision: to create demi-fine jewelry that bridges the gap between everyday accessories and luxury pieces. Our founder, inspired by the quiet elegance of heirloom jewelry, set out to design pieces that feel special enough for celebrations yet effortless enough for daily wear.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Every Velmora piece starts as a sketch in our studio, where designers balance timeless silhouettes with contemporary sensibility. We work exclusively with 18K gold plating over recycled brass — a choice that honors both beauty and sustainability.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Our commitment to hypoallergenic materials means every piece is nickel-free and safe for sensitive skin. Because luxury should never come at the cost of comfort.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
            <div className="text-center">
              <p className="serif-heading text-4xl text-accent mb-2">18K</p>
              <p className="text-xs tracking-widest uppercase text-muted-foreground">Gold Plated</p>
            </div>
            <div className="text-center">
              <p className="serif-heading text-4xl text-accent mb-2">100%</p>
              <p className="text-xs tracking-widest uppercase text-muted-foreground">Hypoallergenic</p>
            </div>
            <div className="text-center">
              <p className="serif-heading text-4xl text-accent mb-2">Free</p>
              <p className="text-xs tracking-widest uppercase text-muted-foreground">Worldwide Shipping</p>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            We ship to over 40 countries, and every order arrives in our signature gift box — because we believe the unboxing experience is part of the joy. Our 30-day return policy means you can shop with complete confidence.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Velmora is more than jewelry. It's a reminder that you deserve to feel extraordinary, every single day.
          </p>
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline inline-block">
            Explore the Collection
          </Link>
        </div>
      </div>
    </div>
  )
}
