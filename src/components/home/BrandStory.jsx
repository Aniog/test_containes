import React from 'react'
import { Link } from 'react-router-dom'

const BrandStory = () => {
  return (
    <section className="section-padding bg-secondary/20">
      <div className="container-padding">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&h=1000&fit=crop"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Our Story</p>
            <h2 className="serif-heading text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              Where Elegance<br />Meets Everyday
            </h2>
            <div className="w-12 h-px bg-primary mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't come with a luxury price tag. 
              Each piece is thoughtfully designed in our studio, crafted with 18K gold plating over recycled brass, 
              and finished with the care of fine jewelry.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We create for the woman who values quality over quantity, who reaches for the same earrings 
              every morning because they feel like part of her. Pieces that transition from boardroom to 
              dinner date without a second thought.
            </p>
            <Link to="/about" className="btn-outline">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
