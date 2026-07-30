import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'
import CTABanner from '@/components/CTABanner'

const categories = [
  {
    id: 'electronics',
    title: 'Consumer Electronics',
    desc: 'Smartphones, tablets, accessories, audio equipment, smart home devices, and electronic components.',
    items: ['Mobile accessories', 'Bluetooth speakers', 'LED lighting', 'Smart home devices', 'Power banks', 'Cables & adapters'],
  },
  {
    id: 'textiles',
    title: 'Textiles & Apparel',
    desc: 'Clothing, sportswear, uniforms, fabrics, home textiles, and fashion accessories.',
    items: ['Casual & formal wear', 'Sportswear & activewear', 'Uniforms & workwear', 'Home textiles', 'Bags & luggage', 'Footwear'],
  },
  {
    id: 'home-garden',
    title: 'Home & Garden',
    desc: 'Furniture, kitchenware, bathroom products, garden tools, and home decor items.',
    items: ['Furniture & storage', 'Kitchenware', 'Bathroom accessories', 'Garden tools', 'Home decor', 'Cleaning products'],
  },
  {
    id: 'industrial',
    title: 'Industrial & Machinery',
    desc: 'Manufacturing equipment, tools, hardware, auto parts, and industrial supplies.',
    items: ['CNC machines', 'Hand & power tools', 'Auto parts', 'Hardware & fasteners', 'Packaging machinery', 'Safety equipment'],
  },
  {
    id: 'health-beauty',
    title: 'Health & Beauty',
    desc: 'Cosmetics, skincare, personal care products, medical devices, and health supplements packaging.',
    items: ['Skincare products', 'Cosmetics & makeup', 'Hair care', 'Personal care devices', 'Packaging & bottles', 'Salon equipment'],
  },
  {
    id: 'toys-sports',
    title: 'Toys & Sports',
    desc: 'Children\'s toys, outdoor sports equipment, fitness gear, and recreational products.',
    items: ['Educational toys', 'Outdoor toys', 'Fitness equipment', 'Camping gear', 'Water sports', 'Board games & puzzles'],
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, labels, boxes, bags, and printing services for all industries.',
    items: ['Custom boxes & cartons', 'Flexible packaging', 'Labels & stickers', 'Shopping bags', 'Display stands', 'Gift packaging'],
  },
  {
    id: 'building',
    title: 'Building Materials',
    desc: 'Construction materials, plumbing, electrical fittings, tiles, and architectural hardware.',
    items: ['Tiles & flooring', 'Plumbing fixtures', 'Electrical fittings', 'Door & window hardware', 'Insulation materials', 'Steel & aluminum'],
  },
]

export default function ProductsPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-orange text-sm font-semibold uppercase tracking-wide">Products We Source</span>
            <h1 id="products-page-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mt-2 mb-4">
              Wide Range of Product Categories
            </h1>
            <p id="products-page-subtitle" className="text-slate-300 text-lg leading-relaxed">
              We source across all major product categories from China. If it is manufactured in China, we can find the right supplier for you.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div key={category.id} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition">
                <div className="mb-4">
                  <img
                    data-strk-img-id={`product-cat-${category.id}-8a3f`}
                    data-strk-img={`[product-${category.id}-desc] [product-${category.id}-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={category.title}
                    className="rounded-lg w-full h-40 object-cover"
                  />
                </div>
                <h3 id={`product-${category.id}-title`} className="text-lg font-bold text-slate-900 mb-2">{category.title}</h3>
                <p id={`product-${category.id}-desc`} className="text-sm text-slate-600 mb-4">{category.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {category.items.slice(0, 4).map((item) => (
                    <span key={item} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                      {item}
                    </span>
                  ))}
                  {category.items.length > 4 && (
                    <span className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded">
                      +{category.items.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Sourcing */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Don't See Your Product?
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-8">
            We source virtually any product manufactured in China. Send us your requirements and we will find the right supplier for you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-orange text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-orange-dark transition text-base"
          >
            Send Your Product Requirements <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      <CTABanner
        title="Need Help Sourcing a Product?"
        subtitle="Tell us what you are looking for and we will provide supplier options within 48 hours."
      />
    </div>
  )
}
