import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    name: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, sensors, connectors, LED lighting, and electronic assemblies.',
    items: ['Smart home devices', 'PCB assemblies', 'LED lighting', 'Sensors & modules', 'Power adapters', 'Cables & connectors'],
    imgId: 'cat-elec-w1x2y3',
    titleId: 'cat-elec-title',
    descId: 'cat-elec-desc',
  },
  {
    name: 'Home & Garden',
    desc: 'Furniture, kitchenware, home decor, storage solutions, and garden tools.',
    items: ['Kitchen utensils', 'Storage organizers', 'Garden tools', 'Home textiles', 'Ceramic & glassware', 'Wall decor'],
    imgId: 'cat-home-z4a5b6',
    titleId: 'cat-home-title',
    descId: 'cat-home-desc',
  },
  {
    name: 'Apparel & Textiles',
    desc: 'Clothing, fabrics, sportswear, fashion accessories, and custom uniforms.',
    items: ['Casual wear', 'Sportswear', 'Custom uniforms', 'Fabrics & textiles', 'Bags & accessories', 'Hats & caps'],
    imgId: 'cat-apparel-c7d8e9',
    titleId: 'cat-apparel-title',
    descId: 'cat-apparel-desc',
  },
  {
    name: 'Machinery & Parts',
    desc: 'Industrial machinery, auto parts, CNC components, and equipment assemblies.',
    items: ['CNC machined parts', 'Auto components', 'Pumps & valves', 'Motor parts', 'Stamping parts', 'Casting & forging'],
    imgId: 'cat-mach-f1g2h3',
    titleId: 'cat-mach-title',
    descId: 'cat-mach-desc',
  },
  {
    name: 'Packaging & Printing',
    desc: 'Custom packaging, labels, boxes, and commercial printing solutions.',
    items: ['Custom boxes', 'Labels & stickers', 'Flexible packaging', 'Paper bags', 'Blister packs', 'Printing services'],
    imgId: 'cat-pack-i4j5k6',
    titleId: 'cat-pack-title',
    descId: 'cat-pack-desc',
  },
  {
    name: 'Health & Beauty',
    desc: 'Cosmetics, personal care products, wellness devices, and beauty tools.',
    items: ['Skincare products', 'Hair care', 'Beauty tools', 'Supplements', 'Oral care', 'Massage devices'],
    imgId: 'cat-health-l7m8n9',
    titleId: 'cat-health-title',
    descId: 'cat-health-desc',
  },
  {
    name: 'Building Materials',
    desc: 'Construction materials, hardware, plumbing fixtures, and building supplies.',
    items: ['Tiles & flooring', 'Door hardware', 'Plumbing fixtures', 'Sanitary ware', 'Lighting fixtures', 'Window fittings'],
    imgId: 'cat-build-o1p2q3',
    titleId: 'cat-build-title',
    descId: 'cat-build-desc',
  },
  {
    name: 'Sports & Outdoors',
    desc: 'Fitness equipment, outdoor gear, camping supplies, and sporting goods.',
    items: ['Fitness equipment', 'Camping gear', 'Water sports', 'Cycling accessories', 'Yoga & pilates', 'Team sports'],
    imgId: 'cat-sport-r4s5t6',
    titleId: 'cat-sport-title',
    descId: 'cat-sport-desc',
  },
  {
    name: 'Automotive',
    desc: 'Auto parts, car accessories, EV components, and vehicle maintenance products.',
    items: ['Car accessories', 'EV components', 'Replacement parts', 'Car care products', 'Interior trim', 'Lighting & electrical'],
    imgId: 'cat-auto-u7v8w9',
    titleId: 'cat-auto-title',
    descId: 'cat-auto-desc',
  },
]

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-300 font-semibold text-sm uppercase tracking-wider mb-3">Product Categories</p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Products We Source
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            We source across a wide range of industries. If you don't see your category listed, ask us — we likely have experience with it.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section ref={containerRef} className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((cat) => (
              <div key={cat.imgId} className="bg-white rounded-lg overflow-hidden border border-slate-100 hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    alt={cat.name}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 id={cat.titleId} className="font-semibold text-navy text-lg mb-1">{cat.name}</h3>
                  <p id={cat.descId} className="text-slate-500 text-sm mb-4">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span key={item} className="bg-slate-50 text-slate-600 text-xs px-2.5 py-1 rounded-full">
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

      {/* CTA */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            Don't See Your Product Category?
          </h2>
          <p className="text-slate-500 mb-8">
            We source thousands of products across many industries. Tell us what you need and we'll find the right supplier.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-navy transition-colors"
          >
            Tell Us What You Need <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}

export default Products
