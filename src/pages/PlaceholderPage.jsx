import React from 'react'
import { Link } from 'react-router-dom'

const PlaceholderPage = ({ title, subtitle }) => {
  return (
    <main className="pt-20 md:pt-24 min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <p className="text-xs tracking-wider-luxury uppercase text-[var(--velmora-accent)] mb-4">
          Coming Soon
        </p>
        <h1 className="font-serif text-3xl md:text-4xl mb-4">{title}</h1>
        <p className="text-sm text-[var(--velmora-text-muted)] mb-8 max-w-md mx-auto">
          {subtitle}
        </p>
        <Link to="/shop" className="btn-primary">
          Explore Our Collection
        </Link>
      </div>
    </main>
  )
}

export default PlaceholderPage
