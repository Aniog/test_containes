import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import CTASection from '@/components/home/CTASection'

const categories = [
  {
    title: 'Electronics & Components',
    description: 'Consumer electronics, PCBs, wiring harnesses, LED lighting, sensors, semiconductors, and electronic components.',
    items: ['PCB & PCBA assemblies', 'LED lighting products', 'Sensors & IoT modules', 'Consumer electronics', 'Wiring harnesses & cables', 'Battery packs & power supplies'],
  },
  {
    title: 'Industrial Equipment & Parts',
    description: 'Machinery parts, tools, pumps, valves, automation components, heavy equipment, and industrial supplies.',
    items: ['Hydraulic & pneumatic parts', 'CNC machined components', 'Injection molded parts', 'Fasteners & hardware', 'Industrial tools & equipment', 'Automation components'],
  },
  {
    title: 'Home & Lifestyle Products',
    description: 'Furniture, home decor, kitchenware, textiles, personal care items, and pet products for retail and wholesale.',
    items: ['Indoor & outdoor furniture', 'Home decor & accessories', 'Kitchen & diningware', 'Bedding & textiles', 'Personal care products', 'Pet supplies'],
  },
  {
    title: 'Packaging & Materials',
    description: 'Custom packaging solutions, labels, raw materials, plastic molding, and metal fabrication services.',
    items: ['Custom boxes & cartons', 'Labels & stickers', 'Plastic packaging', 'Glass & metal containers', 'Flexible packaging', 'Raw materials'],
  },
  {
    title: 'Fashion & Accessories',
    description: 'Apparel, footwear, bags, jewelry, watches, and fashion accessories for brands and retailers.',
    items: ['Ready-to-wear apparel', 'Footwear & sneakers', 'Bags & luggage', 'Jewelry & watches', 'Scarves & accessories', 'Sportswear & activewear'],
  },
  {
    title: 'Health & Medical Supplies',
    description: 'Medical devices, PPE, fitness equipment, supplements, and health care products certified for international markets.',
    items: ['Medical devices & equipment', 'PPE & protective gear', 'Fitness equipment', 'Health supplements', 'Hospital supplies', 'Personal care devices'],
  },
  {
    title: 'Automotive Parts',
    description: 'Auto parts, accessories, and components for aftermarket and OEM applications.',
    items: ['Engine parts & components', 'Electrical & lighting', 'Body parts & panels', 'Interior accessories', 'Suspension & braking', 'Diagnostic tools'],
  },
  {
    title: 'Toys & Gift Items',
    description: 'Children\'s toys, educational products, novelty gifts, and promotional items certified for safety.',
    items: ['Educational toys', 'Plush & soft toys', 'Outdoor & sports toys', 'Novelty gifts', 'Promotional items', 'Seasonal decorations'],
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
      <section className="bg-gray-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-primary-light font-semibold text-sm tracking-wide uppercase">Product Categories</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
              Products We Source
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              From electronics to home goods, we source across a wide range of product categories from China&apos;s manufacturing hubs.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {categories.map((cat, i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-5 p-6 rounded-xl border border-gray-100 bg-white shadow-sm">
                <div className="w-full sm:w-48 h-36 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0">
                  <div
                    className="w-full h-full bg-gray-200"
                    data-strk-bg-id={`product-cat-${i}`}
                    data-strk-bg={`[prod-cat-title-${i}] [prod-cat-desc-${i}]`}
                    data-strk-bg-ratio="4x3"
                    data-strk-bg-width="400"
                  />
                </div>
                <div className="flex-1">
                  <h2 id={`prod-cat-title-${i}`} className="text-lg font-bold text-gray-900 mb-2">{cat.title}</h2>
                  <p id={`prod-cat-desc-${i}`} className="text-sm text-gray-600 leading-relaxed mb-3">{cat.description}</p>
                  <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5">
                    {cat.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-1.5 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 p-8 rounded-xl bg-neutral-50 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Don&apos;t see your product category?</h3>
            <p className="text-gray-600 mb-6">We source virtually any product manufactured in China. Contact us to discuss your specific requirements.</p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary-dark transition-colors"
            >
              Inquire About Your Product
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}