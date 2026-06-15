import React from 'react'
import { Link } from 'react-router-dom'

const collections = [
  {
    id: 'everyday-gold',
    name: 'Everyday Gold',
    description: 'Timeless pieces designed for daily wear. Effortless elegance that transitions from morning to midnight.',
  },
  {
    id: 'statement-collection',
    name: 'Statement',
    description: 'Bold, expressive pieces for when you want to be noticed. Crystal accents and sculptural forms.',
  },
  {
    id: 'gift-sets',
    name: 'Gift Sets',
    description: 'Curated sets in our signature velvet-lined gift boxes. Perfect for celebrating someone special.',
  },
]

export default function CollectionsPage() {
  return (
    <main className="pt-20 sm:pt-24">
      <div className="bg-cream-dark py-10 sm:py-14 text-center">
        <p className="text-overline font-medium tracking-[0.25em] text-gold uppercase mb-2">
          Curated Edits
        </p>
        <h1 className="font-serif text-display-sm text-charcoal">Collections</h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {collections.map((col) => (
            <Link
              key={col.id}
              to="/shop"
              className="group relative aspect-[4/5] rounded-lg overflow-hidden"
            >
              <div
                data-strk-img-id={`collection-${col.id}`}
                data-strk-img={`${col.name} gold jewelry collection editorial`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <h3 className="font-serif text-heading text-white mb-2">{col.name}</h3>
                <p className="text-body-sm text-white/70 leading-relaxed">{col.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
