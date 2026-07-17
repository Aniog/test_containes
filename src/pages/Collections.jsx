import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const collections = [
  {
    id: 'everyday-essentials',
    title: 'Everyday Essentials',
    description: 'Minimalist pieces designed to be worn from morning to midnight. Your new daily uniform.',
    query: 'gold minimalist jewelry everyday essentials elegant',
    link: '/shop',
  },
  {
    id: 'statement-edit',
    title: 'The Statement Edit',
    description: 'Bold, eye-catching pieces that turn heads. For when you want to be noticed.',
    query: 'statement gold jewelry bold earrings necklace editorial',
    link: '/shop?category=earrings',
  },
  {
    id: 'gift-worthy',
    title: 'Gift-Worthy Sets',
    description: 'Beautifully packaged and ready to give. Because some moments deserve sparkle.',
    query: 'jewelry gift set luxury packaging velvet box gold',
    link: '/shop?category=sets',
  },
]

export default function Collections() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef} className="pt-20 sm:pt-24">
      {/* Header */}
      <div className="bg-ivory-200 border-b border-stone-200/60 py-10 sm:py-14">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <p className="text-[11px] font-medium tracking-widest-2xl uppercase text-gold-dark mb-3">
            Curated
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-900">
            Collections
          </h1>
        </div>
      </div>

      {/* Collections grid */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {collections.map((col) => (
            <Link
              key={col.id}
              to={col.link}
              className="group block"
            >
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden mb-4">
                <img
                  data-strk-img-id={`collection-${col.id}`}
                  data-strk-img={`[collection-desc-${col.id}] [collection-title-${col.id}] ${col.query} demi-fine luxury`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={col.title}
                  className="absolute inset-0 w-full h-full object-cover bg-stone-200 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
              </div>
              <h2 id={`collection-title-${col.id}`} className="font-serif text-xl sm:text-2xl text-stone-900 tracking-wide">
                {col.title}
              </h2>
              <p id={`collection-desc-${col.id}`} className="text-sm text-stone-500 mt-2 leading-relaxed">
                {col.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
