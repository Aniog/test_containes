import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const collections = [
  {
    id: 'everyday-elegance',
    name: 'Everyday Elegance',
    description: 'Effortless pieces designed for daily wear. Understated luxury that transitions from morning to evening.',
    imageId: 'coll-everyday-a1',
  },
  {
    id: 'golden-hour',
    name: 'Golden Hour',
    description: 'Warm, luminous designs inspired by the magic of sunset. Statement pieces that catch the light.',
    imageId: 'coll-goldenhour-b2',
  },
  {
    id: 'heirloom',
    name: 'The Heirloom Edit',
    description: 'Timeless designs meant to be treasured for generations. Gift-worthy pieces in luxurious packaging.',
    imageId: 'coll-heirloom-c3',
  },
]

const CollectionsPage = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="font-serif text-3xl md:text-5xl tracking-wide text-charcoal">
            Collections
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
          <p className="mt-4 text-sm text-charcoal/60 font-sans max-w-md mx-auto">
            Curated edits of our finest pieces, each telling a distinct story.
          </p>
        </div>

        <div className="space-y-8 md:space-y-12">
          {collections.map((collection, i) => (
            <Link
              key={collection.id}
              to="/shop"
              className="group grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center"
            >
              <div className={`aspect-[16x10] overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <img
                  data-strk-img-id={collection.imageId}
                  data-strk-img={`[coll-${collection.id}-desc] [coll-${collection.id}-name]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="1000"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className={`py-4 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <h2
                  id={`coll-${collection.id}-name`}
                  className="font-serif text-2xl md:text-3xl tracking-wide text-charcoal group-hover:text-gold transition-colors"
                >
                  {collection.name}
                </h2>
                <div className="w-8 h-px bg-gold mt-3 mb-4" />
                <p
                  id={`coll-${collection.id}-desc`}
                  className="text-sm text-charcoal/60 font-sans leading-relaxed"
                >
                  {collection.description}
                </p>
                <span className="inline-block mt-4 text-xs tracking-product font-sans font-medium text-gold group-hover:text-gold-hover transition-colors">
                  EXPLORE COLLECTION
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CollectionsPage
