import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'
import { productCategories } from '@/data/content'

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const additionalCategories = [
    {
      id: 'building-materials',
      title: 'Building Materials & Hardware',
      description: 'Construction materials, hardware tools, fasteners, and building components for commercial and residential projects.',
      imgId: 'cat-building-b6c7d8',
      titleId: 'cat-building-title',
      descId: 'cat-building-desc',
    },
    {
      id: 'health-beauty',
      title: 'Health & Beauty Products',
      description: 'Cosmetics, skincare, health supplements, personal care items, and beauty tools with compliance support.',
      imgId: 'cat-health-e9f0g1',
      titleId: 'cat-health-title',
      descId: 'cat-health-desc',
    },
    {
      id: 'sports-outdoors',
      title: 'Sports & Outdoor Equipment',
      description: 'Fitness equipment, outdoor gear, camping supplies, sporting goods, and recreational products.',
      imgId: 'cat-sports-h2i3j4',
      titleId: 'cat-sports-title',
      descId: 'cat-sports-desc',
    },
    {
      id: 'toys-games',
      title: 'Toys & Games',
      description: 'Educational toys, board games, plush toys, and children\u2019s products with safety certification support.',
      imgId: 'cat-toys-k5l6m7',
      titleId: 'cat-toys-title',
      descId: 'cat-toys-desc',
    },
    {
      id: 'food-beverage',
      title: 'Food & Beverage Processing',
      description: 'Food processing equipment, packaging for food products, beverage production lines, and food-grade materials.',
      imgId: 'cat-food-n8o9p0',
      titleId: 'cat-food-title',
      descId: 'cat-food-desc',
    },
    {
      id: 'chemicals',
      title: 'Chemicals & Raw Materials',
      description: 'Industrial chemicals, raw materials, adhesives, coatings, and specialty chemicals for manufacturing.',
      imgId: 'cat-chemicals-q1r2s3',
      titleId: 'cat-chemicals-title',
      descId: 'cat-chemicals-desc',
    },
  ]

  const allCategories = [...productCategories, ...additionalCategories]

  return (
    <div ref={containerRef}>
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Products We Source</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We source across a wide range of product categories. If your product is made in China, we can find the right factory for it.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {allCategories.map((cat) => (
              <div key={cat.id} className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <img
                  alt={cat.title}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 id={cat.titleId} className="font-bold mb-2">{cat.title}</h3>
                  <p id={cat.descId} className="text-slate-muted text-sm leading-relaxed">{cat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Don't See Your Product Category?</h2>
          <p className="text-slate-muted mb-8">
            We can source virtually any product made in China. Tell us what you need and we will find the right supplier.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-navy text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-navy-light transition-colors duration-200"
          >
            Tell Us What You Need
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
