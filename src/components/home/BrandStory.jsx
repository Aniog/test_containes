import React from 'react'
import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=1000&fit=crop"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Our Story
            </p>
            <h2 className="serif-heading text-4xl md:text-5xl mb-6 leading-tight">
              Where Tradition<br />Meets Modern Elegance
            </h2>
            <div className="w-16 h-px bg-foreground/20 mb-8" />
            <p className="text-muted-foreground leading-relaxed mb-6">
              Founded with a passion for accessible luxury, Velmora bridges the gap between fine jewelry and everyday wear. Each piece is thoughtfully designed in our studio, crafted with 18K gold plating over recycled brass, and finished with meticulous attention to detail.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              We believe that beautiful jewelry shouldn't come at the cost of the earth — or your wallet. Our demi-fine collection offers the look and feel of luxury, designed to be worn daily and treasured for years.
            </p>
            <Link to="/about" className="btn-outline">
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
