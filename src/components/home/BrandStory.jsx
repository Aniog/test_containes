import React from 'react'
import { Link } from 'react-router-dom'

const BrandStory = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=1000&fit=crop&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="text-xs tracking-wider-luxury uppercase text-[var(--velmora-accent)] mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              Where Tradition
              <br />
              Meets <span className="italic">Modern</span> Elegance
            </h2>
            <div className="hairline-divider mb-6" />
            <p className="text-[var(--velmora-text-secondary)] leading-relaxed mb-6">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't cost a fortune. 
              Our demi-fine pieces are crafted with 18K gold plating over recycled brass, designed 
              to be worn every day and treasured for years.
            </p>
            <p className="text-[var(--velmora-text-secondary)] leading-relaxed mb-8">
              Each piece is thoughtfully designed in our studio, blending timeless silhouettes with 
              contemporary sensibility. From the boardroom to the beach, Velmora jewelry moves with you.
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
