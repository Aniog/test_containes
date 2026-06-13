import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const categories = [
  { name: 'Electronics & Components', imgId: 'prod-electronics-a1b2c3' },
  { name: 'Home & Garden Products', imgId: 'prod-home-d4e5f6' },
  { name: 'Apparel & Textiles', imgId: 'prod-apparel-g7h8i9' },
  { name: 'Industrial Machinery', imgId: 'prod-machinery-j1k2l3' },
  { name: 'Packaging & Printing', imgId: 'prod-packaging-m4n5o6' },
  { name: 'Auto Parts & Accessories', imgId: 'prod-auto-p7q8r9' },
  { name: 'Sports & Outdoor Equipment', imgId: 'prod-sports-s1t2u3' },
  { name: 'Health & Beauty Products', imgId: 'prod-health-v4w5x6' },
]

export default function ProductsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 id="products-title" className="text-2xl md:text-3xl lg:text-[36px] font-bold text-[#1a2744] mb-4">
            Products We Source
          </h2>
          <p className="text-[#4a5568] max-w-2xl mx-auto text-base md:text-lg">
            From consumer goods to industrial equipment, we source across a wide range of product categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="group relative rounded-lg overflow-hidden aspect-square bg-[#f5f7fa] border border-[#e2e8f0] hover:shadow-md transition-shadow"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[products-title] [product-cat-${index}]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2744]/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p id={`product-cat-${index}`} className="text-white text-sm md:text-base font-semibold leading-tight">
                  {cat.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/products" className="btn-secondary">
            View All Product Categories
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
