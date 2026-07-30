import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import CTAButton from '@/components/shared/CTAButton'
import SectionHeader from '@/components/shared/SectionHeader'

const categories = [
  {
    id: 'electronics',
    name: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, batteries, smart home devices, and electronic components.',
    examples: ['Bluetooth speakers', 'LED strip lights', 'Power banks', 'Smart plugs', 'PCB assemblies', 'Cables & adapters'],
    imgId: 'prod-electronics-a1b2',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
  },
  {
    id: 'furniture',
    name: 'Furniture & Home Decor',
    desc: 'Indoor and outdoor furniture, home accessories, storage solutions, and decorative items.',
    examples: ['Sofas & chairs', 'Office desks', 'Storage shelving', 'Garden furniture', 'Mirrors & frames', 'Candles & decor'],
    imgId: 'prod-furniture-c3d4',
    titleId: 'prod-furniture-title',
    descId: 'prod-furniture-desc',
  },
  {
    id: 'apparel',
    name: 'Clothing & Textiles',
    desc: 'Garments, activewear, workwear, accessories, and home textiles including custom private label production.',
    examples: ['T-shirts & hoodies', 'Activewear', 'Workwear & uniforms', 'Bags & accessories', 'Bedding & towels', 'Custom embroidery'],
    imgId: 'prod-apparel-e5f6',
    titleId: 'prod-apparel-title',
    descId: 'prod-apparel-desc',
  },
  {
    id: 'machinery',
    name: 'Machinery & Industrial',
    desc: 'Industrial equipment, tools, hardware, and machinery for manufacturing and construction.',
    examples: ['Power tools', 'Hand tools', 'Industrial pumps', 'CNC parts', 'Safety equipment', 'Fasteners & hardware'],
    imgId: 'prod-machinery-g7h8',
    titleId: 'prod-machinery-title',
    descId: 'prod-machinery-desc',
  },
  {
    id: 'toys',
    name: 'Toys & Baby Products',
    desc: 'Children\'s toys, educational products, baby gear, and nursery items with safety certification support.',
    examples: ['Wooden toys', 'Educational kits', 'Plush toys', 'Baby furniture', 'Ride-on toys', 'Outdoor play equipment'],
    imgId: 'prod-toys-i9j0',
    titleId: 'prod-toys-title',
    descId: 'prod-toys-desc',
  },
  {
    id: 'health',
    name: 'Health & Beauty',
    desc: 'Personal care products, wellness items, medical devices, and beauty accessories.',
    examples: ['Skincare packaging', 'Massage devices', 'Fitness equipment', 'Medical supplies', 'Hair accessories', 'Cosmetic tools'],
    imgId: 'prod-health-k1l2',
    titleId: 'prod-health-title',
    descId: 'prod-health-desc',
  },
  {
    id: 'sports',
    name: 'Sports & Outdoor',
    desc: 'Sports equipment, outdoor gear, camping products, and fitness accessories.',
    examples: ['Gym equipment', 'Camping gear', 'Cycling accessories', 'Water sports', 'Team sports gear', 'Yoga & fitness'],
    imgId: 'prod-sports-m4n5',
    titleId: 'prod-sports-title',
    descId: 'prod-sports-desc',
  },
  {
    id: 'packaging',
    name: 'Packaging & Printing',
    desc: 'Custom packaging, printed materials, labels, and branded packaging solutions for retail and e-commerce.',
    examples: ['Custom boxes', 'Paper bags', 'Labels & stickers', 'Retail packaging', 'Mailer boxes', 'Tissue & inserts'],
    imgId: 'prod-packaging-o6p7',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
  },
  {
    id: 'auto',
    name: 'Auto Parts',
    desc: 'Automotive components, accessories, and aftermarket parts for passenger and commercial vehicles.',
    examples: ['Car accessories', 'LED headlights', 'Seat covers', 'Filters & fluids', 'Body parts', 'Truck accessories'],
    imgId: 'prod-auto-q8r9',
    titleId: 'prod-auto-title',
    descId: 'prod-auto-desc',
  },
]

export default function Products() {
  const containerRef = useRef(null)
  const [active, setActive] = useState(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [active])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block bg-accent-500 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Products We Source
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What We Can Source for You
            </h1>
            <p className="text-lg text-neutral-300 leading-relaxed mb-6">
              We source across a wide range of product categories. If it's made in China, we can help you find the right supplier.
            </p>
            <CTAButton to="/contact" size="lg" showArrow>
              Tell Us What You Need
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Product Categories"
            title="Industries & Categories We Cover"
            subtitle="We have sourcing experience across these major product categories. Don't see yours? Contact us — we likely cover it."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(({ id, name, desc, examples, imgId, titleId, descId }) => (
              <div
                key={id}
                className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setActive(active === id ? null : id)}
              >
                <div className="h-44 overflow-hidden bg-neutral-100">
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 id={titleId} className="font-semibold text-neutral-900 mb-2">{name}</h3>
                  <p id={descId} className="text-sm text-neutral-600 leading-relaxed mb-3">{desc}</p>
                  {active === id && (
                    <div className="mt-3 pt-3 border-t border-neutral-100">
                      <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">Examples</p>
                      <div className="flex flex-wrap gap-1.5">
                        {examples.map((ex) => (
                          <span key={ex} className="text-xs bg-brand-50 text-brand-700 px-2 py-1 rounded-full">{ex}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  <button className="text-xs font-semibold text-brand-600 mt-2 hover:text-brand-800 transition-colors">
                    {active === id ? 'Show less ↑' : 'See examples ↓'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-neutral-600 text-lg mb-6">
            Don't see your product category listed? We source across many more industries. Contact us to discuss your specific needs.
          </p>
          <CTAButton to="/contact" showArrow>
            Get a Free Sourcing Quote
          </CTAButton>
        </div>
      </section>
    </div>
  )
}
