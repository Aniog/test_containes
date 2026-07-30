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
    examples: ['Bluetooth speakers', 'USB cables', 'LED panels', 'Smart plugs', 'PCB assemblies'],
  },
  {
    id: 'home-garden',
    title: 'Home & Garden',
    desc: 'Furniture, kitchenware, home decor, garden tools, storage solutions, and household appliances.',
    examples: ['Outdoor furniture', 'Kitchen utensils', 'Storage containers', 'Garden tools', 'Decorative items'],
  },
  {
    id: 'textiles-apparel',
    title: 'Textiles & Apparel',
    desc: 'Clothing, fabrics, sportswear, workwear, accessories, bags, and textile raw materials.',
    examples: ['Custom uniforms', 'Sportswear', 'Bags & backpacks', 'Bedding sets', 'Promotional apparel'],
  },
  {
    id: 'industrial',
    title: 'Industrial Equipment',
    desc: 'Machinery, tools, hardware, industrial components, safety equipment, and manufacturing supplies.',
    examples: ['CNC machines', 'Hand tools', 'Safety gear', 'Fasteners', 'Pumps & valves'],
  },
  {
    id: 'auto-parts',
    title: 'Automotive Parts',
    desc: 'OEM and aftermarket auto parts, accessories, tools, and vehicle electronics.',
    examples: ['Brake pads', 'LED headlights', 'Car accessories', 'Filters', 'Diagnostic tools'],
  },
  {
    id: 'packaging',
    title: 'Packaging Materials',
    desc: 'Custom packaging, labels, boxes, bags, bottles, and packaging machinery.',
    examples: ['Custom boxes', 'Poly bags', 'Glass bottles', 'Labels & stickers', 'Packaging machines'],
  },
  {
    id: 'health-beauty',
    title: 'Health & Beauty',
    desc: 'Cosmetics, skincare, supplements, medical devices, personal care products, and beauty tools.',
    examples: ['Skincare products', 'Makeup tools', 'Supplements', 'Massage devices', 'Hair care'],
  },
  {
    id: 'building-materials',
    title: 'Building Materials',
    desc: 'Construction materials, tiles, plumbing fixtures, electrical fittings, and architectural hardware.',
    examples: ['Ceramic tiles', 'Faucets', 'Door hardware', 'Solar panels', 'Steel structures'],
  },
  {
    id: 'consumer-goods',
    title: 'Consumer Goods & Gifts',
    desc: 'Promotional products, toys, stationery, pet supplies, and seasonal merchandise.',
    examples: ['Promotional gifts', 'Toys & games', 'Pet accessories', 'Stationery', 'Holiday items'],
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
      <section className="bg-[#0f2a4a] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#e86a2e] font-semibold text-sm uppercase tracking-wider mb-3">Product Categories</p>
            <h1 id="prod-hero-title" className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Products We Source from China
            </h1>
            <p id="prod-hero-subtitle" className="mt-5 text-lg text-neutral-200 leading-relaxed">
              We source across dozens of product categories. If it's manufactured in China, we can find the right supplier for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow">
                <img
                  data-strk-img-id={`prod-cat-${cat.id}-img-4a2c`}
                  data-strk-img={`[prod-cat-${cat.id}-desc] [prod-cat-${cat.id}-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-6">
                  <h3 id={`prod-cat-${cat.id}-title`} className="text-lg font-semibold text-[#0f2a4a] mb-2">{cat.title}</h3>
                  <p id={`prod-cat-${cat.id}-desc`} className="text-sm text-neutral-700 leading-relaxed mb-3">{cat.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.examples.map((ex) => (
                      <span key={ex} className="text-xs bg-neutral-100 text-neutral-700 px-2 py-1 rounded">
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
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2a4a] tracking-tight">
            Don't See Your Product Category?
          </h2>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            We source products across virtually every manufacturing sector in China. Contact us with your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center mt-8 bg-[#e86a2e] hover:bg-[#d05a20] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
