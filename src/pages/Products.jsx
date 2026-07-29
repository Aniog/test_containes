import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, chargers, smart home devices, and electronic components.',
    examples: ['LED lights', 'Power banks', 'Smart speakers', 'PCB assemblies', 'Cables & adapters'],
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
    imgId: 'prod-electronics-img-a1b2c3',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Decor',
    desc: 'Office furniture, bedroom sets, living room pieces, decorative items, and custom-made furniture.',
    examples: ['Office chairs', 'Wooden tables', 'Sofas', 'Wall art', 'Storage solutions'],
    titleId: 'prod-furniture-title',
    descId: 'prod-furniture-desc',
    imgId: 'prod-furniture-img-d4e5f6',
  },
  {
    id: 'clothing',
    title: 'Clothing & Textiles',
    desc: 'Apparel, sportswear, workwear, fabrics, and accessories for fashion brands and retailers.',
    examples: ['T-shirts & hoodies', 'Sportswear', 'Workwear uniforms', 'Fabrics', 'Bags & accessories'],
    titleId: 'prod-clothing-title',
    descId: 'prod-clothing-desc',
    imgId: 'prod-clothing-img-g7h8i9',
  },
  {
    id: 'machinery',
    title: 'Machinery & Industrial',
    desc: 'Industrial equipment, tools, hardware, and machinery for manufacturing and construction.',
    examples: ['Power tools', 'CNC machines', 'Hydraulic equipment', 'Safety gear', 'Hardware fittings'],
    titleId: 'prod-machinery-title',
    descId: 'prod-machinery-desc',
    imgId: 'prod-machinery-img-j1k2l3',
  },
  {
    id: 'toys',
    title: 'Toys & Baby Products',
    desc: 'Educational toys, outdoor play equipment, baby gear, and children\'s accessories.',
    examples: ['Educational toys', 'Plush toys', 'Baby strollers', 'Ride-on toys', 'Puzzles & games'],
    titleId: 'prod-toys-title',
    descId: 'prod-toys-desc',
    imgId: 'prod-toys-img-m4n5o6',
  },
  {
    id: 'health',
    title: 'Health & Beauty',
    desc: 'Personal care products, cosmetics, medical devices, fitness equipment, and wellness products.',
    examples: ['Skincare products', 'Fitness equipment', 'Medical supplies', 'Supplements packaging', 'Beauty tools'],
    titleId: 'prod-health-title',
    descId: 'prod-health-desc',
    imgId: 'prod-health-img-p7q8r9',
  },
  {
    id: 'sports',
    title: 'Sports & Outdoor',
    desc: 'Sports equipment, outdoor gear, camping products, and fitness accessories.',
    examples: ['Camping gear', 'Gym equipment', 'Cycling accessories', 'Water sports', 'Team sports gear'],
    titleId: 'prod-sports-title',
    descId: 'prod-sports-desc',
    imgId: 'prod-sports-img-s1t2u3',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, boxes, bags, labels, and printed materials for brands and retailers.',
    examples: ['Custom boxes', 'Paper bags', 'Labels & stickers', 'Hang tags', 'Retail packaging'],
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
    imgId: 'prod-packaging-img-v4w5x6',
  },
  {
    id: 'auto',
    title: 'Auto Parts & Accessories',
    desc: 'Automotive components, car accessories, and replacement parts for distributors and retailers.',
    examples: ['Car accessories', 'Replacement parts', 'Lighting systems', 'Interior accessories', 'Tools & equipment'],
    titleId: 'prod-auto-title',
    descId: 'prod-auto-desc',
    imgId: 'prod-auto-img-y7z8a9',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-brand-gold uppercase tracking-widest mb-3">Product Categories</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Products We Source from China
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              We source across 30+ product categories. If it's manufactured in China, we can likely find the right supplier for you.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="bg-site-bg py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 id={cat.titleId} className="text-lg font-bold text-navy mb-2">{cat.title}</h2>
                  <p id={cat.descId} className="text-gray-600 text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.examples.map((ex) => (
                      <span key={ex} className="bg-blue-50 text-navy text-xs font-medium px-2.5 py-1 rounded-full">
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

      {/* Don't see your product */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-navy mb-3">Don't See Your Product Category?</h2>
          <p className="text-gray-600 mb-8">
            We source a wide range of products beyond the categories listed above. Contact us with your requirements and we'll let you know if we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Submit Your Sourcing Request <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
