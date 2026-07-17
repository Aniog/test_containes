import React from 'react'
import products from '../../data/products'
import ProductCard from './ProductCard'

const bestsellerIds = [
  'golden-sphere-huggies',
  'vivid-aura-jewels',
  'majestic-flora-nectar',
  'amber-lace-earrings',
  'royal-heirloom-set',
]

export default function Bestsellers() {
  const bestsellers = bestsellerIds.map((id) => products.find((p) => p.id === id)).filter(Boolean)

  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
      <div className="text-center mb-14">
        <p className="text-[0.6875rem] tracking-[0.2em] uppercase text-velmora-muted font-medium mb-3">
          Most Loved
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide">
          Bestsellers
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-6">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
