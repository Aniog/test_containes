import React from 'react'
import { Link } from 'react-router-dom'

const Collections = () => {
  const collections = [
    {
      id: 'the-gold-edit',
      name: 'The Gold Edit',
      description: 'Our signature collection of warm gold essentials — designed for everyday elegance.',
    },
    {
      id: 'the-evening-collection',
      name: 'The Evening Collection',
      description: 'Statement pieces crafted for special moments. Bold, refined, unforgettable.',
    },
    {
      id: 'the-gift-set',
      name: 'The Gift Set',
      description: 'Curated pairings presented in our signature velvet box — ready for gifting.',
    },
  ]

  return (
    <div className="min-h-screen bg-warmCream pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-light text-textDark tracking-wide">
            Collections
          </h1>
          <p className="font-sans text-base text-textMuted mt-4 max-w-xl mx-auto">
            Curated groupings of our finest pieces — each collection tells a story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {collections.map(collection => (
            <Link
              key={collection.id}
              to="/shop"
              className="group relative aspect-[4/3] overflow-hidden rounded-sm block bg-surface"
            >
              <div className="w-full h-full bg-gradient-to-br from-deepCharcoal/80 to-deepCharcoal/60 flex items-center justify-center">
                <div className="text-center px-6">
                  <h2 className="font-serif text-2xl md:text-3xl tracking-[0.2em] uppercase font-medium text-textLight group-hover:text-gold transition-colors">
                    {collection.name}
                  </h2>
                  <p className="font-sans text-sm text-textLight/70 mt-3">{collection.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Collections
