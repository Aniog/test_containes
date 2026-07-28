import { useState, useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SectionTitle from '../components/shared/SectionTitle'
import { Link } from 'react-router-dom'
import { ArrowRight, Tag } from 'lucide-react'

const categories = [
  {
    id: 'electronics',
    name: 'Electronics & Components',
    description: 'Consumer electronics, PCBs, cables, chargers, smart devices, batteries, LED lighting, and electronic components.',
    examples: ['Bluetooth speakers', 'USB cables & adapters', 'PCB assemblies', 'Smart home devices', 'Power banks', 'LED strips'],
    titleId: 'prod-title-electronics',
    descId: 'prod-desc-electronics',
    imgId: 'prod-img-electronics',
  },
  {
    id: 'textiles',
    name: 'Textiles & Apparel',
    description: 'Garments, fabrics, bags, shoes, accessories, home textiles, and custom printed materials.',
    examples: ['T-shirts & hoodies', 'Backpacks & tote bags', 'Athletic wear', 'Socks & underwear', 'Bedding sets', 'Custom printed fabrics'],
    titleId: 'prod-title-textiles',
    descId: 'prod-desc-textiles',
    imgId: 'prod-img-textiles',
  },
  {
    id: 'hardware',
    name: 'Hardware & Tools',
    description: 'Hand tools, power tools, fasteners, building materials, plumbing fittings, and hardware components.',
    examples: ['Screwdriver sets', 'Drill bits & saw blades', 'Stainless steel fasteners', 'Door handles & hinges', 'Plumbing fittings', 'Safety equipment'],
    titleId: 'prod-title-hardware',
    descId: 'prod-desc-hardware',
    imgId: 'prod-img-hardware',
  },
  {
    id: 'home',
    name: 'Home & Kitchen',
    description: 'Furniture, cookware, tableware, storage solutions, home décor, and lighting fixtures.',
    examples: ['Cookware sets', 'Ceramic dinnerware', 'Storage organizers', 'Wall art & décor', 'LED lamps', 'Kitchen gadgets'],
    titleId: 'prod-title-home',
    descId: 'prod-desc-home',
    imgId: 'prod-img-home',
  },
  {
    id: 'packaging',
    name: 'Packaging Materials',
    description: 'Boxes, bags, labels, bottles, tubes, and custom packaging solutions for retail and e-commerce.',
    examples: ['Corrugated shipping boxes', 'Stand-up pouches', 'Glass & plastic bottles', 'Custom printed labels', 'Tube packaging', 'Gift boxes'],
    titleId: 'prod-title-packaging',
    descId: 'prod-desc-packaging',
    imgId: 'prod-img-packaging',
  },
  {
    id: 'industrial',
    name: 'Industrial & Machinery',
    description: 'Machinery parts, automation equipment, raw materials, metal components, and OEM parts.',
    examples: ['CNC machined parts', 'Hydraulic components', 'Conveyor belts', 'Rubber & silicone parts', 'Sheet metal fabrication', 'Custom molds'],
    titleId: 'prod-title-industrial',
    descId: 'prod-desc-industrial',
    imgId: 'prod-img-industrial',
  },
  {
    id: 'beauty',
    name: 'Beauty & Personal Care',
    description: 'Cosmetics, skincare products, hair care, grooming tools, and personal care accessories.',
    examples: ['Makeup brushes & tools', 'Skincare bottles & jars', 'Hair styling tools', 'Nail care products', 'Men\'s grooming kits', 'Bath accessories'],
    titleId: 'prod-title-beauty',
    descId: 'prod-desc-beauty',
    imgId: 'prod-img-beauty',
  },
  {
    id: 'sports',
    name: 'Sports & Outdoor',
    description: 'Fitness equipment, camping gear, bicycles, water sports equipment, and outdoor accessories.',
    examples: ['Resistance bands', 'Yoga mats & blocks', 'Camping tents', 'Cycling accessories', 'Water bottles', 'Fishing gear'],
    titleId: 'prod-title-sports',
    descId: 'prod-desc-sports',
    imgId: 'prod-img-sports',
  },
]

export default function Products() {
  const [active, setActive] = useState(categories[0].id)
  const containerRef = useRef(null)

  const activeCategory = categories.find((c) => c.id === active)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [active])

  return (
    <div>
      {/* Hero */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-4">
            Products We Source
          </h1>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            We source across a wide range of product categories. If you don't see yours listed, reach out — we've likely sourced something similar before.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section ref={containerRef} className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-4 xl:col-span-3">
              <div className="sticky top-24 space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActive(cat.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      active === cat.id
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-surface text-text-secondary hover:bg-surface-dark hover:text-text-primary'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-8 xl:col-span-9">
              {activeCategory && (
                <div className="bg-surface rounded-2xl overflow-hidden border border-border">
                  <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-surface-dark">
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
                  <div className="p-6 md:p-10">
                    <h2 id={activeCategory.titleId} className="text-2xl md:text-3xl font-bold text-text-primary mb-3">
                      {activeCategory.name}
                    </h2>
                    <p id={activeCategory.descId} className="text-text-secondary leading-relaxed mb-6">
                      {activeCategory.description}
                    </p>
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Tag className="w-4 h-4" />
                        Common Products We Source
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {activeCategory.examples.map((ex) => (
                          <span
                            key={ex}
                            className="px-3 py-1.5 bg-white border border-border rounded-full text-sm text-text-secondary"
                          >
                            {ex}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-accent-hover transition-colors"
                    >
                      Request a Quote for {activeCategory.name}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Request CTA */}
      <section className="py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
            Don't See Your Product Category?
          </h2>
          <p className="text-text-secondary mb-8">
            We've sourced thousands of unique products. Tell us what you need and we'll let you know if we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-accent-hover transition-colors shadow-lg"
          >
            Submit a Custom Request
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
