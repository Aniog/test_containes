import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import CTAButton from '@/components/CTAButton'

const categories = [
  {
    id: 'electronics',
    name: 'Electronics & Components',
    imgId: 'prod-img-electronics-a1b2c3',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, batteries, smart home devices, and electronic components.',
    examples: ['LED lighting', 'Smart home devices', 'PCBs & components', 'Cables & connectors', 'Batteries & chargers'],
  },
  {
    id: 'furniture',
    name: 'Furniture & Home Decor',
    imgId: 'prod-img-furniture-d4e5f6',
    titleId: 'prod-furniture-title',
    descId: 'prod-furniture-desc',
    desc: 'Solid wood and engineered wood furniture, upholstered pieces, home accessories, and decorative items.',
    examples: ['Solid wood furniture', 'Upholstered sofas', 'Home accessories', 'Decorative items', 'Outdoor furniture'],
  },
  {
    id: 'clothing',
    name: 'Clothing & Textiles',
    imgId: 'prod-img-clothing-g7h8i9',
    titleId: 'prod-clothing-title',
    descId: 'prod-clothing-desc',
    desc: 'Apparel, sportswear, workwear, fabrics, and textile products for private label and OEM production.',
    examples: ['Casual apparel', 'Sportswear', 'Workwear & uniforms', 'Fabrics & textiles', 'Bags & accessories'],
  },
  {
    id: 'machinery',
    name: 'Machinery & Industrial',
    imgId: 'prod-img-machinery-j1k2l3',
    titleId: 'prod-machinery-title',
    descId: 'prod-machinery-desc',
    desc: 'Industrial machinery, tools, hardware, and equipment for manufacturing and construction sectors.',
    examples: ['Industrial machinery', 'Power tools', 'Hardware & fasteners', 'Safety equipment', 'Construction materials'],
  },
  {
    id: 'toys',
    name: 'Toys & Baby Products',
    imgId: 'prod-img-toys-m4n5o6',
    titleId: 'prod-toys-title',
    descId: 'prod-toys-desc',
    desc: 'Toys, educational products, baby gear, and children\'s accessories with CE, ASTM, and EN71 compliance support.',
    examples: ['Educational toys', 'Plush toys', 'Baby gear', 'Outdoor play equipment', 'Board games'],
  },
  {
    id: 'health',
    name: 'Health & Beauty',
    imgId: 'prod-img-health-p7q8r9',
    titleId: 'prod-health-title',
    descId: 'prod-health-desc',
    desc: 'Personal care products, cosmetics, wellness devices, and health accessories for retail and private label.',
    examples: ['Skincare products', 'Wellness devices', 'Personal care accessories', 'Fitness equipment', 'Medical devices'],
  },
  {
    id: 'sports',
    name: 'Sports & Outdoor',
    imgId: 'prod-img-sports-s1t2u3',
    titleId: 'prod-sports-title',
    descId: 'prod-sports-desc',
    desc: 'Sports equipment, outdoor gear, fitness accessories, and camping products.',
    examples: ['Fitness equipment', 'Camping gear', 'Cycling accessories', 'Water sports', 'Team sports equipment'],
  },
  {
    id: 'packaging',
    name: 'Packaging & Printing',
    imgId: 'prod-img-packaging-v4w5x6',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
    desc: 'Custom packaging, printed materials, labels, boxes, and promotional items for retail and e-commerce.',
    examples: ['Custom boxes', 'Labels & stickers', 'Promotional items', 'Paper bags', 'Display stands'],
  },
  {
    id: 'auto',
    name: 'Auto Parts',
    imgId: 'prod-img-auto-y7z8a9',
    titleId: 'prod-auto-title',
    descId: 'prod-auto-desc',
    desc: 'Automotive parts, accessories, and aftermarket components for passenger and commercial vehicles.',
    examples: ['Car accessories', 'Replacement parts', 'Lighting systems', 'Interior accessories', 'Truck parts'],
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
      <section className="bg-blue-950 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-blue-300 font-semibold text-sm uppercase tracking-wider mb-3">Product Categories</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">Products We Source from China</h1>
            <p className="text-neutral-300 text-lg leading-relaxed mb-8">
              We source a wide range of products across major manufacturing categories. If it is made in China, we can help you find the right supplier.
            </p>
            <CTAButton size="lg" showArrow>Get a Free Sourcing Quote</CTAButton>
          </div>
        </div>
      </section>

      {/* Category browser */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <h2 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">Categories</h2>
              <nav className="space-y-1">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActive(cat.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      active === cat.id
                        ? 'bg-blue-800 text-white'
                        : 'text-neutral-700 hover:bg-neutral-100'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Detail */}
            {activeCategory && (
              <div className="lg:col-span-3">
                <img
                  alt={activeCategory.name}
                  data-strk-img-id={activeCategory.imgId}
                  data-strk-img={`[${activeCategory.descId}] [${activeCategory.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full rounded-2xl shadow-md object-cover aspect-video mb-8"
                />
                <h2 id={activeCategory.titleId} className="text-2xl md:text-3xl font-bold text-neutral-800 mb-3">{activeCategory.name}</h2>
                <p id={activeCategory.descId} className="text-neutral-600 text-lg leading-relaxed mb-6">{activeCategory.desc}</p>
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-3">Common Products</h3>
                  <div className="flex flex-wrap gap-2">
                    {activeCategory.examples.map((ex) => (
                      <span key={ex} className="bg-blue-50 text-blue-800 text-sm font-medium px-3 py-1.5 rounded-full border border-blue-100">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
                <CTAButton showArrow>Source {activeCategory.name}</CTAButton>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't See Your Product Category?</h2>
          <p className="text-blue-200 text-lg mb-8">
            We source a wide variety of products. Contact us and we will let you know if we can help.
          </p>
          <CTAButton size="lg" showArrow>Ask About Your Product</CTAButton>
        </div>
      </section>
    </div>
  )
}
