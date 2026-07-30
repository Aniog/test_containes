import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 'electronics',
    name: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, batteries, smart home devices, and electronic components.',
    examples: ['LED Lights', 'Smart Home Devices', 'PCB Assemblies', 'Cables & Connectors', 'Batteries', 'Surveillance Cameras'],
    imgId: 'prod-electronics-img-a1b2c3',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
  },
  {
    id: 'furniture',
    name: 'Furniture & Home Decor',
    desc: 'Indoor and outdoor furniture, home accessories, decorative items, storage solutions, and soft furnishings.',
    examples: ['Office Chairs', 'Outdoor Furniture', 'Storage Cabinets', 'Decorative Items', 'Rugs & Textiles', 'Lighting Fixtures'],
    imgId: 'prod-furniture-img-d4e5f6',
    titleId: 'prod-furniture-title',
    descId: 'prod-furniture-desc',
  },
  {
    id: 'clothing',
    name: 'Clothing & Textiles',
    desc: 'Apparel, activewear, workwear, uniforms, fabrics, and accessories for fashion brands and retailers.',
    examples: ['Activewear', 'Workwear & Uniforms', 'Fashion Apparel', 'Bags & Accessories', 'Fabrics', 'Socks & Underwear'],
    imgId: 'prod-clothing-img-g7h8i9',
    titleId: 'prod-clothing-title',
    descId: 'prod-clothing-desc',
  },
  {
    id: 'machinery',
    name: 'Machinery & Industrial',
    desc: 'Industrial equipment, power tools, agricultural machinery, construction equipment, and spare parts.',
    examples: ['Power Tools', 'Agricultural Equipment', 'Industrial Pumps', 'CNC Machines', 'Generators', 'Spare Parts'],
    imgId: 'prod-machinery-img-j1k2l3',
    titleId: 'prod-machinery-title',
    descId: 'prod-machinery-desc',
  },
  {
    id: 'toys',
    name: 'Toys & Baby Products',
    desc: 'Educational toys, outdoor play equipment, baby gear, and children\'s products meeting international safety standards.',
    examples: ['Educational Toys', 'Outdoor Play Sets', 'Baby Strollers', 'Plush Toys', 'Board Games', 'Baby Monitors'],
    imgId: 'prod-toys-img-m4n5o6',
    titleId: 'prod-toys-title',
    descId: 'prod-toys-desc',
  },
  {
    id: 'health',
    name: 'Health & Beauty',
    desc: 'Personal care products, cosmetics, medical devices, fitness equipment, and wellness products.',
    examples: ['Skincare Products', 'Fitness Equipment', 'Medical Devices', 'Supplements', 'Hair Care', 'Massage Tools'],
    imgId: 'prod-health-img-p7q8r9',
    titleId: 'prod-health-title',
    descId: 'prod-health-desc',
  },
  {
    id: 'sports',
    name: 'Sports & Outdoor',
    desc: 'Sports equipment, outdoor gear, camping products, cycling accessories, and fitness products.',
    examples: ['Camping Gear', 'Cycling Accessories', 'Gym Equipment', 'Water Sports', 'Team Sports', 'Hiking Gear'],
    imgId: 'prod-sports-img-s1t2u3',
    titleId: 'prod-sports-title',
    descId: 'prod-sports-desc',
  },
  {
    id: 'packaging',
    name: 'Packaging & Printing',
    desc: 'Custom packaging, printed materials, labels, boxes, bags, and promotional merchandise.',
    examples: ['Custom Boxes', 'Paper Bags', 'Labels & Stickers', 'Promotional Items', 'Printed Catalogs', 'Gift Packaging'],
    imgId: 'prod-packaging-img-v4w5x6',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
  },
  {
    id: 'auto',
    name: 'Auto Parts',
    desc: 'Automotive components, accessories, tools, and aftermarket parts for passenger and commercial vehicles.',
    examples: ['Car Accessories', 'Engine Parts', 'Lighting Systems', 'Tires & Wheels', 'Tools & Equipment', 'EV Components'],
    imgId: 'prod-auto-img-y7z8a9',
    titleId: 'prod-auto-title',
    descId: 'prod-auto-desc',
  },
]

export default function Products() {
  const containerRef = useRef(null)
  const [active, setActive] = useState(categories[0].id)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [active])

  const activeCategory = categories.find((c) => c.id === active)

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-900 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-400 mb-3 block">Product Categories</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
              Products We Source from China
            </h1>
            <p className="text-brand-200 text-lg leading-relaxed">
              We source across 30+ product categories. Whether you need a single product or a full product line, our team has the expertise and supplier network to deliver.
            </p>
          </div>
        </div>
      </section>

      {/* Category Tabs + Detail */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 mb-4">Categories</h2>
              <div className="flex flex-col gap-1">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActive(cat.id)}
                    className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      active === cat.id
                        ? 'bg-brand-700 text-white'
                        : 'text-neutral-700 hover:bg-neutral-200 hover:text-brand-700'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Detail */}
            {activeCategory && (
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden">
                  <div className="aspect-[16/7] overflow-hidden">
                    <img
                      data-strk-img-id={activeCategory.imgId}
                      data-strk-img={`[${activeCategory.descId}] [${activeCategory.titleId}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="900"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={activeCategory.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h2 id={activeCategory.titleId} className="text-2xl font-bold text-brand-900 mb-3">{activeCategory.name}</h2>
                    <p id={activeCategory.descId} className="text-neutral-600 leading-relaxed mb-6">{activeCategory.desc}</p>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 mb-3">Common Products</h3>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {activeCategory.examples.map((ex) => (
                        <span key={ex} className="bg-brand-50 text-brand-700 text-sm font-medium px-3 py-1.5 rounded-full border border-brand-100">
                          {ex}
                        </span>
                      ))}
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-400 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                    >
                      Source This Category <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Don't See Your Product Category?</h2>
          <p className="text-brand-200 text-lg mb-8">
            We source a wide range of products beyond the categories listed. Contact us with your requirements and we'll assess feasibility.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-400 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Submit Your Inquiry <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
