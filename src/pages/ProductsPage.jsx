import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle } from 'lucide-react'

const categories = [
  {
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, cables, sensors, semiconductors, LED products, and electronic accessories.',
    examples: ['Smart home devices', 'PCB assemblies', 'USB cables & connectors', 'LED lighting', 'Sensors & modules'],
    imgId: 'electronics-img-b1c2d3',
    imgQuery: '[cat-electronics]',
  },
  {
    title: 'Machinery & Equipment',
    desc: 'Industrial machines, manufacturing equipment, tools, automation systems, and spare parts.',
    examples: ['CNC machines', 'Packaging equipment', 'Agricultural machinery', 'Power tools', 'Automation components'],
    imgId: 'machinery-img-e4f5g6',
    imgQuery: '[cat-machinery]',
  },
  {
    title: 'Textiles & Apparel',
    desc: 'Fabrics, garments, accessories, uniforms, and textile materials for various industries.',
    examples: ['Custom clothing', 'Workwear & uniforms', 'Fabric rolls', 'Bags & accessories', 'Home textiles'],
    imgId: 'textiles-img-h7i8j9',
    imgQuery: '[cat-textiles]',
  },
  {
    title: 'Home & Garden',
    desc: 'Furniture, home decor, kitchenware, garden tools, and outdoor living products.',
    examples: ['Indoor furniture', 'Kitchen appliances', 'Garden tools', 'Home decor items', 'Outdoor furniture'],
    imgId: 'home-img-k1l2m3',
    imgQuery: '[cat-home]',
  },
  {
    title: 'Auto Parts & Accessories',
    desc: 'OEM parts, aftermarket accessories, automotive tools, and vehicle components.',
    examples: ['Engine components', 'Body parts', 'Interior accessories', 'Car electronics', 'Maintenance tools'],
    imgId: 'auto-img-n4o5p6',
    imgQuery: '[cat-auto]',
  },
  {
    title: 'Packaging & Printing',
    desc: 'Custom packaging, labels, bags, boxes, and promotional printed materials.',
    examples: ['Custom boxes', 'Product labels', 'Shopping bags', 'Promotional materials', 'Food packaging'],
    imgId: 'packaging-img-q7r8s9',
    imgQuery: '[cat-packaging]',
  },
  {
    title: 'Building Materials',
    desc: 'Construction materials, hardware, plumbing supplies, and architectural products.',
    examples: ['Steel products', 'Tiles & flooring', 'Plumbing fixtures', 'Hardware tools', 'Insulation materials'],
    imgId: 'building-img-t1u2v3',
    imgQuery: '[cat-building]',
  },
  {
    title: 'Sports & Outdoor',
    desc: 'Sporting goods, fitness equipment, outdoor gear, and recreational products.',
    examples: ['Fitness equipment', 'Camping gear', 'Sports apparel', 'Outdoor accessories', 'Water sports products'],
    imgId: 'sports-img-w4x5y6',
    imgQuery: '[cat-sports]',
  },
  {
    title: 'Toys & Gifts',
    desc: 'Children\'s toys, promotional gifts, holiday decorations, and novelty items.',
    examples: ['Educational toys', 'Plush toys', 'Promotional gifts', 'Holiday decorations', 'Board games'],
    imgId: 'toys-img-z7a8b9',
    imgQuery: '[cat-toys]',
  },
]

function CategoryCard({ cat }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white overflow-hidden hover:shadow-md transition-shadow">
      <div
        className="w-full h-48 bg-slate-100"
        data-strk-bg-id={cat.imgId}
        data-strk-bg={cat.imgQuery}
        data-strk-bg-ratio="4x3"
        data-strk-bg-width="600"
      />
      <div className="p-6">
        <h3 id={cat.imgQuery.replace('[', '').replace(']', '')} className="text-lg font-semibold text-slate-900">
          {cat.title}
        </h3>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed">{cat.desc}</p>
        <ul className="mt-4 space-y-1.5">
          {cat.examples.map((ex) => (
            <li key={ex} className="flex items-center gap-2 text-sm text-slate-700">
              <CheckCircle className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
              {ex}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function ProductsPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold">Products We Source</h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl">
            We source a wide range of products from verified Chinese manufacturers across all major industrial regions.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {categories.map((cat) => (
              <CategoryCard key={cat.title} cat={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900">Don't See Your Product?</h2>
          <p className="mt-4 text-slate-600">
            We can source almost any product from China. Tell us what you need and we will find the right suppliers.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
            >
              Request a Custom Sourcing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
