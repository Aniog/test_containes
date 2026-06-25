import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, connectors, smart home devices, and electronic accessories.',
    examples: ['Bluetooth speakers', 'USB cables', 'LED panels', 'Smart plugs', 'Power banks'],
    imgId: 'prod-electronics-img-x1y2z3',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    desc: 'Clothing, sportswear, uniforms, fabrics, home textiles, bags, and fashion accessories.',
    examples: ['T-shirts & polos', 'Activewear', 'Denim', 'Bed linens', 'Backpacks'],
    imgId: 'prod-apparel-img-a3b4c5',
    titleId: 'prod-apparel-title',
    descId: 'prod-apparel-desc',
  },
  {
    id: 'home-garden',
    title: 'Home & Garden',
    desc: 'Furniture, kitchenware, bathroom fixtures, garden tools, outdoor furniture, and home decor.',
    examples: ['Sofas & chairs', 'Cookware sets', 'Faucets', 'Garden tools', 'Decorative lighting'],
    imgId: 'prod-home-img-d6e7f8',
    titleId: 'prod-home-title',
    descId: 'prod-home-desc',
  },
  {
    id: 'industrial',
    title: 'Industrial & Hardware',
    desc: 'Machinery parts, fasteners, hand tools, power tools, safety equipment, and industrial supplies.',
    examples: ['CNC parts', 'Bolts & nuts', 'Drill bits', 'Safety helmets', 'Hydraulic fittings'],
    imgId: 'prod-industrial-img-g9h1i2',
    titleId: 'prod-industrial-title',
    descId: 'prod-industrial-desc',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, corrugated boxes, labels, shopping bags, display stands, and promotional materials.',
    examples: ['Custom boxes', 'Product labels', 'Paper bags', 'Blister packs', 'Display racks'],
    imgId: 'prod-packaging-img-j3k4l5',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
  },
  {
    id: 'automotive',
    title: 'Automotive & Parts',
    desc: 'Auto accessories, replacement parts, tires, car electronics, and aftermarket components.',
    examples: ['Car mats', 'LED headlights', 'Brake pads', 'Dash cameras', 'Seat covers'],
    imgId: 'prod-automotive-img-m6n7o8',
    titleId: 'prod-automotive-title',
    descId: 'prod-automotive-desc',
  },
  {
    id: 'health-beauty',
    title: 'Health & Beauty',
    desc: 'Cosmetics, skincare, personal care devices, supplements packaging, and beauty tools.',
    examples: ['Skincare bottles', 'Makeup brushes', 'Hair tools', 'Massage devices', 'Nail supplies'],
    imgId: 'prod-health-img-p9q1r2',
    titleId: 'prod-health-title',
    descId: 'prod-health-desc',
  },
  {
    id: 'toys-sports',
    title: 'Toys & Sports',
    desc: 'Children toys, outdoor sports equipment, fitness gear, camping supplies, and recreational products.',
    examples: ['Educational toys', 'Yoga mats', 'Camping tents', 'Bicycles', 'Board games'],
    imgId: 'prod-toys-img-s3t4u5',
    titleId: 'prod-toys-title',
    descId: 'prod-toys-desc',
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
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">Product Categories</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Products We Source
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              We source across dozens of product categories. Whether you need electronics, textiles, industrial parts, or consumer goods — if it is manufactured in China, we can help you find it.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  alt={cat.title}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 id={cat.titleId} className="text-xl font-bold text-slate-900 mb-2">{cat.title}</h2>
                  <p id={cat.descId} className="text-slate-600 text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.examples.map((ex) => (
                      <span key={ex} className="bg-blue-50 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full">{ex}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">Don't See Your Product?</h2>
          <p className="text-slate-600 text-lg mb-8">We source virtually any product manufactured in China. Contact us with your requirements and we will find the right supplier for you.</p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg text-base no-underline transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
