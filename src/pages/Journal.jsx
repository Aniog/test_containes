import React from 'react'
import { Link } from 'react-router-dom'

const Journal = () => {
  return (
    <div className="bg-velmora-cream pt-20 md:pt-24">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-28">
        <div className="text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-stone-800 tracking-wide">
            The Journal
          </h1>
          <div className="w-16 h-px bg-velmora-gold mt-6 mx-auto" />
          <p className="font-sans text-sm text-stone-500 mt-6 tracking-wider uppercase">
            Stories, style guides, and inspiration — coming soon
          </p>
          <Link to="/shop" className="btn-outline inline-block mt-8">
            Explore the Collection
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Journal
