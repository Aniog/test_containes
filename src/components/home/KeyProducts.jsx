import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Button } from '@/components/ui/Button'

const products = [
  { id: 'p1', name: 'Electronics & Tech', imgId: 'prod-electronics' },
  { id: 'p2', name: 'Home & Furniture', imgId: 'prod-furniture' },
  { id: 'p3', name: 'Apparel & Textiles', imgId: 'prod-apparel' },
  { id: 'p4', name: 'Outdoor & Sports', imgId: 'prod-outdoor' },
  { id: 'p5', name: 'Industrial Equipment', imgId: 'prod-industrial' },
  { id: 'p6', name: 'Kitchen & Dining', imgId: 'prod-kitchen' }
]

export default function KeyProducts() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 id="products-title" className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Products We Source
            </h2>
            <p id="products-subtitle" className="mt-4 text-xl text-slate-600">
              We have extensive experience across a wide range of industries and product categories.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link to="/products">View All Categories</Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {products.map((product) => (
            <div key={product.id} className="group relative overflow-hidden rounded-lg bg-white shadow-sm border border-slate-200 aspect-[3/4]">
              <img
                data-strk-img-id={product.imgId}
                data-strk-img={`[${product.id}-name] [products-title] China manufacturing shipment`}
                data-strk-img-ratio="2x3"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 3'%3E%3C/svg%3E"
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end">
                <span id={`${product.id}-name`} className="text-white font-bold text-sm sm:text-base leading-tight">
                  {product.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
