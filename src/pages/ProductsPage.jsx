import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    name: 'Electronics & Components',
    description: 'Consumer electronics, PCBs, cables, connectors, LED products, smart devices, and electronic components.',
    imgId: 'prod-electronics-a1b2c3',
  },
  {
    name: 'Home & Garden Products',
    description: 'Furniture, kitchenware, home decor, garden tools, lighting, and household accessories.',
    imgId: 'prod-home-d4e5f6',
  },
  {
    name: 'Apparel & Textiles',
    description: 'Clothing, fabrics, footwear, bags, accessories, and custom private label garments.',
    imgId: 'prod-apparel-g7h8i9',
  },
  {
    name: 'Industrial Machinery',
    description: 'Manufacturing equipment, CNC machines, pumps, valves, tools, and industrial components.',
    imgId: 'prod-machinery-j1k2l3',
  },
  {
    name: 'Packaging & Printing',
    description: 'Custom boxes, labels, bags, bottles, printed materials, and promotional packaging.',
    imgId: 'prod-packaging-m4n5o6',
  },
  {
    name: 'Auto Parts & Accessories',
    description: 'Replacement parts, car accessories, motorcycle components, and automotive electronics.',
    imgId: 'prod-auto-p7q8r9',
  },
  {
    name: 'Sports & Outdoor Equipment',
    description: 'Fitness equipment, camping gear, outdoor apparel, sporting goods, and recreational products.',
    imgId: 'prod-sports-s1t2u3',
  },
  {
    name: 'Health & Beauty Products',
    description: 'Cosmetics, skincare, personal care, health supplements, and beauty tools.',
    imgId: 'prod-health-v4w5x6',
  },
  {
    name: 'Toys & Games',
    description: 'Children toys, educational products, board games, plush toys, and electronic toys.',
    imgId: 'prod-toys-y7z8a9',
  },
  {
    name: 'Building Materials',
    description: 'Tiles, flooring, hardware, plumbing fixtures, doors, windows, and construction supplies.',
    imgId: 'prod-building-b1c2d3',
  },
  {
    name: 'Food & Beverage',
    description: 'Packaged foods, beverages, food processing equipment, and food-grade packaging.',
    imgId: 'prod-food-e4f5g6',
  },
  {
    name: 'Pet Products',
    description: 'Pet food, toys, accessories, grooming supplies, and pet care equipment.',
    imgId: 'prod-pet-h7i8j9',
  },
]

export default function ProductsPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-[#1a2744] py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 id="products-page-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Products We Source
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              From consumer goods to industrial equipment, we source across a wide range of product categories. If it is manufactured in China, we can help you find the right supplier.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {categories.map((cat, index) => (
              <div key={index} className="card group">
                <div
                  className="w-full aspect-video rounded-md mb-5 bg-[#f5f7fa] overflow-hidden"
                  data-strk-bg-id={cat.imgId}
                  data-strk-bg={`[product-cat-name-${index}] [products-page-title]`}
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="600"
                />
                <h3 id={`product-cat-name-${index}`} className="text-lg font-semibold text-[#1a2744] mb-2">
                  {cat.name}
                </h3>
                <p className="text-[#4a5568] text-sm leading-relaxed">{cat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#f5f7fa]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a2744] mb-4">
              Do Not See Your Product Category?
            </h2>
            <p className="text-[#4a5568] mb-8">
              We source virtually any product manufactured in China. Tell us what you need and we will find the right supplier.
            </p>
            <Link to="/contact" className="btn-primary">
              Get a Free Sourcing Quote
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
