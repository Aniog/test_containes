import React from 'react'
import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&h=1100&fit=crop"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:pl-8">
            <p className="text-velmora-gold text-sm tracking-widest mb-4">OUR STORY</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-base leading-tight mb-6">
              Where Elegance<br />Meets Everyday
            </h2>
            <div className="w-12 h-px bg-velmora-gold mb-6" />
            <p className="text-velmora-muted leading-relaxed mb-4">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't be reserved for special occasions. 
              Our demi-fine pieces are crafted with 18K gold plating over recycled brass, designed to be worn, loved, 
              and treasured every single day.
            </p>
            <p className="text-velmora-muted leading-relaxed mb-8">
              Each piece is thoughtfully designed in our studio, balancing timeless elegance with modern sensibility. 
              We believe in quality that speaks softly, in details that matter, and in jewelry that becomes part of your story.
            </p>
            <Link
              to="/about"
              className="inline-block text-sm tracking-widest text-velmora-base border-b border-velmora-gold pb-1 hover:text-velmora-gold transition-colors"
            >
              READ OUR STORY
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
