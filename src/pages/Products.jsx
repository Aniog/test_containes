import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED lighting, sensors, connectors, and electronic components for OEM and ODM projects.',
    examples: ['PCB assemblies', 'LED lighting', 'Sensors & modules', 'Consumer electronics', 'Cables & connectors'],
    imgId: 'prod-electronics-w1x2y3',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
  },
  {
    id: 'home-garden',
    title: 'Home & Garden',
    desc: 'Furniture, kitchenware, home textiles, garden tools, and decorative items for retail and wholesale distribution.',
    examples: ['Furniture', 'Kitchenware', 'Home textiles', 'Garden tools', 'Decorative items'],
    imgId: 'prod-home-z4a5b6',
    titleId: 'prod-home-title',
    descId: 'prod-home-desc',
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    desc: 'Clothing, fabrics, accessories, sportswear, and fashion items from established garment factories.',
    examples: ['Casual wear', 'Sportswear', 'Fabrics & textiles', 'Fashion accessories', 'Workwear'],
    imgId: 'prod-apparel-c7d8e9',
    titleId: 'prod-apparel-title',
    descId: 'prod-apparel-desc',
  },
  {
    id: 'machinery',
    title: 'Machinery & Equipment',
    desc: 'Industrial machinery, CNC equipment, packaging machines, and automation systems for manufacturing operations.',
    examples: ['CNC machines', 'Packaging equipment', 'Automation systems', 'Industrial tools', 'Processing machinery'],
    imgId: 'prod-machinery-f1g2h3',
    titleId: 'prod-machinery-title',
    descId: 'prod-machinery-desc',
  },
  {
    id: 'auto-parts',
    title: 'Auto Parts & Accessories',
    desc: 'OEM and aftermarket auto parts, EV components, and vehicle accessories for the automotive industry.',
    examples: ['Engine components', 'EV parts', 'Body parts', 'Interior accessories', 'Lighting systems'],
    imgId: 'prod-auto-i4j5k6',
    titleId: 'prod-auto-title',
    descId: 'prod-auto-desc',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, labels, printing materials, and eco-friendly packaging solutions for brands.',
    examples: ['Custom boxes', 'Labels & stickers', 'Eco-friendly packaging', 'Printing materials', 'Display stands'],
    imgId: 'prod-packaging-l7m8n9',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
  },
  {
    id: 'building-materials',
    title: 'Building Materials',
    desc: 'Construction materials, hardware, plumbing fixtures, and building supplies for commercial and residential projects.',
    examples: ['Tiles & flooring', 'Plumbing fixtures', 'Hardware', 'Doors & windows', 'Insulation materials'],
    imgId: 'prod-building-o1p2q3',
    titleId: 'prod-building-title',
    descId: 'prod-building-desc',
  },
  {
    id: 'health-beauty',
    title: 'Health & Beauty',
    desc: 'Cosmetics, skincare, health supplements, and personal care products from GMP-certified facilities.',
    examples: ['Skincare products', 'Cosmetics', 'Health supplements', 'Personal care', 'Beauty tools'],
    imgId: 'prod-health-r4s5t6',
    titleId: 'prod-health-title',
    descId: 'prod-health-desc',
  },
  {
    id: 'sports-outdoors',
    title: 'Sports & Outdoors',
    desc: 'Sporting goods, outdoor equipment, fitness gear, and recreational products for active lifestyles.',
    examples: ['Fitness equipment', 'Outdoor gear', 'Sporting goods', 'Camping equipment', 'Water sports'],
    imgId: 'prod-sports-u7v8w9',
    titleId: 'prod-sports-title',
    descId: 'prod-sports-desc',
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
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-amber font-semibold text-sm uppercase tracking-wider mb-2">Product Categories</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
              Products We Source
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              We source across a wide range of industries. If it's made in China, we can help you find the right supplier for it.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group"
              >
                <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    alt={cat.title}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 id={cat.titleId} className="text-lg font-bold text-slate-900 mb-2">{cat.title}</h3>
                  <p id={cat.descId} className="text-slate-600 text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.examples.map((ex) => (
                      <span key={ex} className="bg-slate-100 text-slate-700 text-xs font-medium px-2.5 py-1 rounded-full">
                        {ex}
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
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Don't See Your Product Category?</h2>
          <p className="text-slate-600 text-lg mb-8">
            We source virtually anything made in China. Tell us what you need and we'll find the right supplier.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-amber hover:bg-amber-dark text-white px-8 py-3.5 rounded-lg text-base font-semibold transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
