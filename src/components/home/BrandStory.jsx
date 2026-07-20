import React from 'react'
import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="section-padding bg-background">
      <div className="container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=1000&fit=crop"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="text-sm tracking-widest uppercase text-accent mb-4">Our Story</p>
            <h2 className="serif-heading text-4xl md:text-5xl mb-6 leading-tight">
              Where Tradition Meets Modern Elegance
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Founded with a passion for accessible luxury, Velmora creates demi-fine jewelry that bridges the gap between everyday wear and special occasions. Each piece is thoughtfully designed in our studio, using 18K gold plating over sterling silver for lasting beauty.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We believe that fine jewelry should be treasured, not locked away. Our pieces are made to be worn, loved, and passed down.
            </p>
            <Link to="/about" className="btn-outline inline-block">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
