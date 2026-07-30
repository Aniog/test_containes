import { useState, useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import CTAButton from '@/components/CTAButton'
import SectionHeader from '@/components/SectionHeader'

const categories = [
  {
    id: 'electronics',
    label: 'Electronics',
    imgId: 'prod-img-1-a1b2c3',
    titleId: 'prod-1-title',
    descId: 'prod-1-desc',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, LED lighting, PCBs, cables, chargers, smart home devices, and electronic components.',
    examples: ['LED lighting', 'Smart home devices', 'Cables & chargers', 'PCBs & components', 'Consumer electronics'],
    regions: 'Shenzhen, Dongguan, Guangzhou',
  },
  {
    id: 'furniture',
    label: 'Furniture',
    imgId: 'prod-img-2-d4e5f6',
    titleId: 'prod-2-title',
    descId: 'prod-2-desc',
    title: 'Furniture & Home Decor',
    desc: 'Indoor and outdoor furniture, home accessories, decorative items, storage solutions, and soft furnishings.',
    examples: ['Indoor furniture', 'Outdoor furniture', 'Home accessories', 'Storage solutions', 'Decorative items'],
    regions: 'Foshan, Guangzhou, Shunde',
  },
  {
    id: 'apparel',
    label: 'Apparel',
    imgId: 'prod-img-3-g7h8i9',
    titleId: 'prod-3-title',
    descId: 'prod-3-desc',
    title: 'Apparel & Textiles',
    desc: 'Clothing, sportswear, workwear, uniforms, fabrics, and textile accessories for fashion and functional brands.',
    examples: ['Clothing & fashion', 'Sportswear', 'Workwear & uniforms', 'Fabrics & textiles', 'Accessories'],
    regions: 'Guangzhou, Hangzhou, Keqiao',
  },
  {
    id: 'machinery',
    label: 'Machinery',
    imgId: 'prod-img-4-j0k1l2',
    titleId: 'prod-4-title',
    descId: 'prod-4-desc',
    title: 'Machinery & Industrial',
    desc: 'Industrial machinery, tools, hardware, metal parts, and equipment for manufacturing and construction sectors.',
    examples: ['Industrial machinery', 'Power tools', 'Metal parts & hardware', 'Construction equipment', 'Pumps & motors'],
    regions: 'Wenzhou, Ningbo, Tianjin',
  },
  {
    id: 'toys',
    label: 'Toys',
    imgId: 'prod-img-5-m3n4o5',
    titleId: 'prod-5-title',
    descId: 'prod-5-desc',
    title: 'Toys & Baby Products',
    desc: 'Toys, educational products, baby gear, and children\'s accessories with full compliance support for EN71, ASTM, and other standards.',
    examples: ['Plastic toys', 'Educational toys', 'Baby gear', 'Plush toys', 'Outdoor play equipment'],
    regions: 'Shantou, Dongguan, Yiwu',
  },
  {
    id: 'health',
    label: 'Health & Beauty',
    imgId: 'prod-img-6-p6q7r8',
    titleId: 'prod-6-title',
    descId: 'prod-6-desc',
    title: 'Health & Beauty',
    desc: 'Personal care products, cosmetics, health devices, supplements packaging, and wellness accessories.',
    examples: ['Skincare products', 'Hair care', 'Health devices', 'Wellness accessories', 'Cosmetic packaging'],
    regions: 'Guangzhou, Shanghai, Hangzhou',
  },
  {
    id: 'sports',
    label: 'Sports',
    imgId: 'prod-img-7-s9t0u1',
    titleId: 'prod-7-title',
    descId: 'prod-7-desc',
    title: 'Sports & Outdoor',
    desc: 'Sports equipment, fitness gear, outdoor products, camping accessories, and activewear.',
    examples: ['Fitness equipment', 'Outdoor gear', 'Camping accessories', 'Sports apparel', 'Cycling products'],
    regions: 'Xiamen, Quanzhou, Ningbo',
  },
  {
    id: 'packaging',
    label: 'Packaging',
    imgId: 'prod-img-8-v2w3x4',
    titleId: 'prod-8-title',
    descId: 'prod-8-desc',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, boxes, bags, labels, and printed materials for retail, e-commerce, and brand packaging.',
    examples: ['Custom boxes', 'Retail packaging', 'Paper bags', 'Labels & stickers', 'Printed materials'],
    regions: 'Guangzhou, Shenzhen, Dongguan',
  },
  {
    id: 'auto',
    label: 'Auto Parts',
    imgId: 'prod-img-9-y5z6a7',
    titleId: 'prod-9-title',
    descId: 'prod-9-desc',
    title: 'Auto Parts & Accessories',
    desc: 'Automotive parts, accessories, tools, and components for aftermarket and OEM applications.',
    examples: ['Car accessories', 'Replacement parts', 'Auto tools', 'Lighting & electronics', 'Interior accessories'],
    regions: 'Guangzhou, Wenzhou, Chongqing',
  },
]

export default function Products() {
  const [active, setActive] = useState(categories[0].id)
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [active])

  const current = categories.find((c) => c.id === active)

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-900 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent-500/20 text-accent-400 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
              Products We Source
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">
              What We Source from China
            </h1>
            <p className="text-neutral-300 text-lg leading-relaxed max-w-2xl">
              We source across a wide range of product categories, connecting buyers with verified Chinese manufacturers in the right regions.
            </p>
          </div>
        </div>
      </section>

      {/* Category Explorer */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Product Categories"
            title="Browse by Category"
            subtitle="Select a category to see what we source, typical products, and key manufacturing regions."
          />

          {/* Tab buttons */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === cat.id
                    ? 'bg-brand-700 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Active category */}
          {current && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 id={current.titleId} className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">{current.title}</h2>
                <p id={current.descId} className="text-neutral-600 leading-relaxed mb-6">{current.desc}</p>
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-3">Typical Products</h3>
                  <div className="flex flex-wrap gap-2">
                    {current.examples.map((ex) => (
                      <span key={ex} className="bg-brand-50 text-brand-700 text-sm px-3 py-1 rounded-full font-medium">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-neutral-50 rounded-xl p-4 mb-6">
                  <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1">Key Manufacturing Regions</p>
                  <p className="text-neutral-700 font-medium">{current.regions}</p>
                </div>
                <CTAButton to="/contact" variant="primary" showArrow>
                  Source This Product Category
                </CTAButton>
              </div>
              <div className="rounded-2xl overflow-hidden bg-neutral-100 aspect-video">
                <img
                  data-strk-img-id={current.imgId}
                  data-strk-img={`[${current.descId}] [${current.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={current.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Not Listed */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">Don't See Your Product?</h2>
          <p className="text-neutral-600 mb-8 max-w-xl mx-auto">
            We source a wide variety of products beyond the categories listed above. Contact us with your product details and we'll let you know if we can help.
          </p>
          <CTAButton to="/contact" variant="outline-dark" showArrow>
            Ask About Your Product
          </CTAButton>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Source Your Product from China?</h2>
          <p className="text-neutral-200 text-lg mb-8">
            Submit your inquiry and we'll identify verified suppliers within 5–7 business days.
          </p>
          <CTAButton to="/contact" size="lg" showArrow>
            Get a Free Sourcing Quote
          </CTAButton>
        </div>
      </section>
    </div>
  )
}
