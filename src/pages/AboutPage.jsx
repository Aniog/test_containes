import React from 'react'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <main className="pt-20 md:pt-24">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=1600&h=800&fit=crop)' }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="serif-heading text-4xl md:text-6xl mb-4">Our Story</h1>
          <p className="text-sm md:text-base text-white/80 max-w-lg mx-auto">
            Where elegance meets everyday luxury
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container-padding py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="w-12 h-px bg-primary mx-auto mb-8" />
          <p className="serif-heading text-2xl md:text-3xl text-center mb-12 leading-relaxed italic">
            "We believe that beautiful jewelry should be accessible, sustainable, and made to be worn every day."
          </p>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Velmora was founded with a simple mission: to create demi-fine jewelry that bridges the gap between 
              fast fashion and luxury fine jewelry. Each piece is designed in our studio with meticulous attention 
              to detail, using 18K gold plating over recycled brass — materials that look and feel luxurious 
              without the luxury price tag.
            </p>
            <p>
              Our name comes from the Latin word "velum," meaning veil or covering — a nod to the way jewelry 
              adorns and enhances the wearer. We create for the modern woman who values quality over quantity, 
              who reaches for the same earrings every morning because they feel like part of her identity.
            </p>
            <p>
              Every Velmora piece is hypoallergenic, nickel-free, and crafted with care. We believe in 
              transparency, sustainability, and the idea that the best accessories are the ones you never 
              want to take off.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link to="/shop" className="btn-outline">
              Explore the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-secondary/30 py-16 md:py-24">
        <div className="container-padding">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="serif-heading text-2xl mb-3">Quality First</h3>
              <p className="text-sm text-muted-foreground">18K gold plating over recycled brass. Hypoallergenic and built to last.</p>
            </div>
            <div>
              <h3 className="serif-heading text-2xl mb-3">Sustainable</h3>
              <p className="text-sm text-muted-foreground">Recycled materials, minimal packaging, and a commitment to reducing our footprint.</p>
            </div>
            <div>
              <h3 className="serif-heading text-2xl mb-3">Accessible Luxury</h3>
              <p className="text-sm text-muted-foreground">Premium design at prices that make everyday luxury a reality.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AboutPage
