import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Cpu, Shirt, Wrench, Home, Car, Package, Building2, Heart } from 'lucide-react'

const categories = [
  {
    name: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, sensors, connectors, and electronic components for OEM and ODM projects.',
    items: ['Smart home devices', 'Wearable electronics', 'PCB assemblies', 'LED lighting', 'Batteries & power', 'Audio equipment'],
    icon: Cpu,
    imgId: 'product-electronics-v1w2x3',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
  },
  {
    name: 'Textiles & Apparel',
    desc: 'Fabrics, garments, home textiles, and fashion accessories from China\'s major textile hubs.',
    items: ['Casual & formal wear', 'Sportswear & activewear', 'Home textiles', 'Technical fabrics', 'Bags & accessories', 'Custom prints'],
    icon: Shirt,
    imgId: 'product-textiles-y4z5a6',
    titleId: 'prod-textiles-title',
    descId: 'prod-textiles-desc',
  },
  {
    name: 'Machinery & Equipment',
    desc: 'Industrial machinery, CNC equipment, automation systems, and manufacturing tools.',
    items: ['CNC machines', 'Packaging equipment', 'Material handling', 'Automation systems', 'Compressors & pumps', 'Industrial tools'],
    icon: Wrench,
    imgId: 'product-machinery-b7c8d9',
    titleId: 'prod-machinery-title',
    descId: 'prod-machinery-desc',
  },
  {
    name: 'Home & Garden',
    desc: 'Furniture, kitchenware, garden tools, home decor, and household products.',
    items: ['Indoor furniture', 'Outdoor furniture', 'Kitchen utensils', 'Garden equipment', 'Home decor', 'Storage solutions'],
    icon: Home,
    imgId: 'product-home-e1f2g3',
    titleId: 'prod-home-title',
    descId: 'prod-home-desc',
  },
  {
    name: 'Auto Parts & Accessories',
    desc: 'OEM parts, aftermarket components, and automotive accessories for various vehicle makes.',
    items: ['Engine components', 'Body parts', 'Electrical systems', 'Brake systems', 'Interior accessories', 'Lighting assemblies'],
    icon: Car,
    imgId: 'product-auto-h4i5j6',
    titleId: 'prod-auto-title',
    descId: 'prod-auto-desc',
  },
  {
    name: 'Packaging & Printing',
    desc: 'Custom packaging, labels, printing solutions, and branding materials.',
    items: ['Custom boxes', 'Flexible packaging', 'Labels & stickers', 'Shopping bags', 'Display stands', 'Printing services'],
    icon: Package,
    imgId: 'product-packaging-k7l8m9',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
  },
  {
    name: 'Building Materials',
    desc: 'Tiles, fixtures, hardware, and construction materials for residential and commercial projects.',
    items: ['Ceramic tiles', 'Sanitary ware', 'Door hardware', 'Lighting fixtures', 'Plumbing supplies', 'Flooring materials'],
    icon: Building2,
    imgId: 'product-building-n1o2p3',
    titleId: 'prod-building-title',
    descId: 'prod-building-desc',
  },
  {
    name: 'Health & Beauty',
    desc: 'Cosmetics, personal care products, wellness items, and beauty tools.',
    items: ['Skincare products', 'Hair care', 'Beauty tools', 'Supplements', 'Personal hygiene', 'Fragrances'],
    icon: Heart,
    imgId: 'product-beauty-q4r5s6',
    titleId: 'prod-beauty-title',
    descId: 'prod-beauty-desc',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">Products We Source</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              We source across a wide range of industries. If it's made in China, we can help you find the right supplier.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div key={cat.name} className="bg-white rounded-xl border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] bg-slate-100 overflow-hidden">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center">
                      <cat.icon className="w-5 h-5 text-ocean" />
                    </div>
                    <h3 id={cat.titleId} className="text-lg font-semibold text-navy">{cat.name}</h3>
                  </div>
                  <p id={cat.descId} className="text-sm text-slate-600 mb-4 leading-relaxed">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span key={item} className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Can't Find Your Product? */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">Don't See Your Product Category?</h2>
          <p className="text-lg text-slate-600 mb-8">
            We source far more than what's listed here. Tell us what you need and we'll find the right supplier.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-ocean text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors"
          >
            Tell Us What You Need
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
