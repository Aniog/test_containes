import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const categories = [
    {
      title: 'Consumer Electronics',
      desc: 'We source a wide range of consumer electronics and accessories from established manufacturers.',
      examples: ['Smart home devices and IoT products', 'Audio equipment and headphones', 'Power banks and charging accessories', 'Computer peripherals and cables', 'LED lighting and smart bulbs', 'Bluetooth speakers and wearables'],
    },
    {
      title: 'Home & Garden',
      desc: 'Home goods, kitchenware, and garden products from factories with export experience.',
      examples: ['Furniture and home decor', 'Kitchen tools and cookware', 'Storage and organization products', 'Lighting fixtures', 'Garden tools and outdoor furniture', 'Bedding and bath textiles'],
    },
    {
      title: 'Fashion & Apparel',
      desc: 'Clothing, footwear, and accessories from factories serving international brands.',
      examples: ['Casual and fashion apparel', 'Footwear and accessories', 'Bags, backpacks, and luggage', 'Hats, scarves, and gloves', 'Activewear and sportswear', 'Jewelry and fashion accessories'],
    },
    {
      title: 'Industrial Equipment & Tools',
      desc: 'Machinery parts, hand tools, and industrial supplies for B2B buyers.',
      examples: ['Hand tools and power tool accessories', 'Safety equipment and PPE', 'Fasteners, fittings, and hardware', 'Material handling equipment', 'Workshop and garage equipment', 'Measuring and testing instruments'],
    },
    {
      title: 'Automotive Parts & Accessories',
      desc: 'Aftermarket automotive parts and accessories from ISO-certified suppliers.',
      examples: ['Car interior and exterior accessories', 'Replacement parts and components', 'Car care and maintenance products', 'Towing and trailer equipment', 'Motorcycle parts and accessories', 'Truck and commercial vehicle parts'],
    },
    {
      title: 'Toys, Games & Hobbies',
      desc: 'Toys and recreational products meeting international safety standards.',
      examples: ['Educational and learning toys', 'Outdoor play equipment', 'Board games and puzzles', 'Arts and crafts supplies', 'Sports and fitness equipment', 'Hobby and model products'],
    },
    {
      title: 'Beauty & Personal Care',
      desc: 'Beauty tools, personal care devices, and packaging from compliant manufacturers.',
      examples: ['Beauty tools and applicators', 'Hair care devices', 'Personal care electronics', 'Packaging and containers', 'Bath and body accessories', 'Travel kits and organizers'],
    },
    {
      title: 'Sports & Outdoor',
      desc: 'Sports equipment, outdoor gear, and recreational products.',
      examples: ['Camping and hiking equipment', 'Fitness and exercise products', 'Team sports equipment', 'Water sports and swimming', 'Cycling accessories', 'Fishing and hunting gear'],
    },
  ]

  return (
    <div ref={containerRef}>
      <section className="bg-slate-900 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-xs tracking-[2px] text-white/60 mb-4">PRODUCT CATEGORIES</div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4">Products We Source</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            We have experience sourcing across a wide range of product categories. 
            If your product is not listed, we can still help.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="border border-slate-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{cat.title}</h3>
              <p className="text-slate-600 mb-5 text-sm leading-relaxed">{cat.desc}</p>
              <div className="text-xs uppercase tracking-widest text-slate-500 mb-3">EXAMPLES</div>
              <ul className="grid grid-cols-1 gap-y-1.5 text-sm text-slate-600">
                {cat.examples.map((ex, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Products We Typically Do Not Source</h2>
          <p className="text-slate-600 mb-8">We focus on products where we can add value through verification and quality control.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-left">
            <div className="bg-white border border-slate-200 rounded-lg p-5">• Food, beverages, and supplements</div>
            <div className="bg-white border border-slate-200 rounded-lg p-5">• Pharmaceuticals and medical devices (regulated)</div>
            <div className="bg-white border border-slate-200 rounded-lg p-5">• Live animals or plants</div>
            <div className="bg-white border border-slate-200 rounded-lg p-5">• Precious metals and gemstones</div>
            <div className="bg-white border border-slate-200 rounded-lg p-5">• Products requiring specialized certifications we cannot support</div>
            <div className="bg-white border border-slate-200 rounded-lg p-5">• Highly regulated or restricted items</div>
          </div>
          <p className="mt-6 text-sm text-slate-500">If you are unsure whether we can help with your product, please contact us.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Minimum Order Quantities</h2>
          <p className="text-slate-600">MOQs vary significantly by product category and factory.</p>
        </div>
        <div className="text-sm text-slate-600 max-w-2xl mx-auto">
          <p className="mb-4">Typical MOQ ranges we encounter:</p>
          <ul className="space-y-2 pl-1">
            <li>• Consumer electronics and appliances: 500 - 2,000 units</li>
            <li>• Apparel and textiles: 300 - 1,000 pieces per style/color</li>
            <li>• Home goods and furniture: 100 - 500 units</li>
            <li>• Industrial tools and equipment: 200 - 1,000 units</li>
            <li>• Custom or private label products: Often higher</li>
          </ul>
          <p className="mt-4 text-xs text-slate-500">We can discuss your specific volume requirements during the initial consultation.</p>
        </div>
      </section>

      <CTASection 
        title="Looking for a product not listed?" 
        subtitle="Tell us what you need to source. We will let you know if we can help." 
      />
    </div>
  )
}

export default Products
