import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Check } from 'lucide-react'

const categories = [
  {
    name: 'Electronics & Accessories',
    desc: 'Consumer electronics, mobile accessories, smart home devices, audio equipment, wearables, chargers, cables, and electronic components.',
    imgId: 'prod-cat-electronics-a1b2',
    examples: 'Wireless earbuds, power banks, USB-C hubs, Bluetooth speakers, smart plugs, LED drivers',
  },
  {
    name: 'Apparel, Textiles & Footwear',
    desc: 'Garments, sportswear, uniforms, bags, shoes, hats, socks, and textile fabrics for all seasons and demographics.',
    imgId: 'prod-cat-apparel-c3d4',
    examples: 'T-shirts, hoodies, denim, activewear, canvas bags, leather shoes, organic cotton fabric',
  },
  {
    name: 'Home, Kitchen & Lifestyle',
    desc: 'Kitchenware, cookware, tableware, home decor, storage solutions, smart home gadgets, and lifestyle accessories.',
    imgId: 'prod-cat-home-e5f6',
    examples: 'Silicone kitchen tools, stainless steel cookware, ceramic mugs, bamboo organizers, candles',
  },
  {
    name: 'Furniture & Home Furnishings',
    desc: 'Indoor and outdoor furniture, office furniture, lighting, rugs, curtains, mattresses, and custom wood/metal fabrication.',
    imgId: 'prod-cat-furniture-g7h8',
    examples: 'Solid wood tables, ergonomic office chairs, rattan outdoor sets, modular sofas, LED floor lamps',
  },
  {
    name: 'Hardware, Tools & Industrial',
    desc: 'Hand tools, power tools, fasteners, bearings, industrial equipment, machinery parts, and safety equipment.',
    imgId: 'prod-cat-hardware-i9j0',
    examples: 'Cordless drills, wrench sets, stainless bolts, CNC-machined parts, welding equipment, PPE',
  },
  {
    name: 'Packaging & Printing',
    desc: 'Custom packaging, boxes, bags, labels, printed materials, promotional items, and branded merchandise.',
    imgId: 'prod-cat-packaging-k1l2',
    examples: 'Custom printed boxes, Kraft paper bags, holographic labels, branded tissue paper, gift sets',
  },
  {
    name: 'Automotive Parts & Accessories',
    desc: 'Replacement parts, performance upgrades, interior accessories, tools, and OEM/aftermarket components.',
    imgId: 'prod-cat-auto-m3n4',
    examples: 'Brake pads, LED headlights, car mats, roof racks, motorcycle parts, diagnostic tools',
  },
  {
    name: 'Toys, Games & Sporting Goods',
    desc: 'Children\'s toys, board games, outdoor play equipment, sports gear, fitness equipment, and hobby products.',
    imgId: 'prod-cat-toys-o5p6',
    examples: 'Plush toys, RC cars, yoga mats, resistance bands, camping gear, educational STEM kits',
  },
  {
    name: 'Beauty, Personal Care & Health',
    desc: 'Cosmetics, skincare, hair tools, personal care appliances, health devices, and wellness products.',
    imgId: 'prod-cat-beauty-q7r8',
    examples: 'Facial rollers, hair straighteners, electric toothbrushes, makeup brushes, essential oil diffusers',
  },
  {
    name: 'Medical Supplies & Devices',
    desc: 'PPE, medical consumables, diagnostic devices, hospital equipment, and rehabilitation products.',
    imgId: 'prod-cat-medical-s9t0',
    examples: 'Surgical masks, blood pressure monitors, wheelchairs, disposable gloves, first-aid kits',
  },
  {
    name: 'Pet Products',
    desc: 'Pet toys, beds, grooming tools, feeding accessories, and pet health products.',
    imgId: 'prod-cat-pet-u1v2',
    examples: 'Cat scratching posts, dog beds, automatic feeders, pet grooming clippers, collars & leashes',
  },
  {
    name: 'Outdoor & Garden',
    desc: 'Garden tools, outdoor furniture, camping equipment, solar lights, planters, and landscaping supplies.',
    imgId: 'prod-cat-outdoor-w3x4',
    examples: 'Garden hoses, solar pathway lights, camping tents, portable BBQs, raised garden beds',
  },
]

const capabilities = [
  'Custom manufacturing (OEM/ODM) for all categories',
  'Private labeling and custom packaging design',
  'Multi-material expertise (metal, plastic, wood, textile, electronics)',
  'Low MOQ factories for startups and small brands',
  'High-volume production lines for enterprise buyers',
  'Product design and engineering support',
  'Compliance testing and certification assistance',
  'Consolidation: source across categories and ship together',
]

export default function ProductsWeSource() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-900 text-white">
        <div className="container-wide py-16 md:py-20">
          <div className="max-w-3xl">
            <span id="products-page-title" className="text-accent-400 font-semibold text-sm uppercase tracking-wide">Products We Source</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-4 leading-tight">
              We Source Across 20+ Categories
            </h1>
            <p id="products-page-desc" className="text-lg text-white/70 leading-relaxed">
              From consumer electronics to industrial machinery — our supplier network spans virtually every major manufacturing sector in China.
            </p>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.name} className="group bg-surface border border-surface-border rounded-xl overflow-hidden hover:shadow-lg transition-all">
                <div className="aspect-[16/10] bg-surface-alt overflow-hidden">
                  <img
                    alt={cat.name}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[cat-desc-${cat.imgId}] [cat-name-${cat.imgId}]`}
                    data-strk-img-ratio="16x10"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 id={`cat-name-${cat.imgId}`} className="font-semibold text-text mb-2">{cat.name}</h3>
                  <p id={`cat-desc-${cat.imgId}`} className="text-text-secondary text-sm leading-relaxed mb-3">{cat.desc}</p>
                  <div className="text-xs text-text-muted bg-surface-alt rounded px-3 py-2">
                    <span className="font-medium text-text">Example products:</span> {cat.examples}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-surface-alt">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-text mb-4">
                Manufacturing Capabilities
              </h2>
              <p className="text-text-secondary">
                Whatever your product, we have the network and expertise to make it happen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {capabilities.map((cap) => (
                <div key={cap} className="flex items-center gap-3 bg-white rounded-lg p-4 border border-surface-border">
                  <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                    <Check size={14} className="text-green-600" />
                  </div>
                  <span className="text-text-secondary text-sm">{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-800 text-white">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't See Your Product Category?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Our supplier network is constantly growing. If you have a specialized product need, reach out — we likely have a factory for it.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-10 py-4 rounded-lg text-lg transition-colors"
          >
            Tell Us What You Need
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}