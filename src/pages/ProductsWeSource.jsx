import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    name: 'Electronics & Components',
    desc: 'Smart devices, PCBs, charging cables, power banks, adapters, circuit boards, electronic components, LED products, IoT modules.',
    examples: ['Smart home devices', 'USB cables & chargers', 'PCB assemblies', 'Bluetooth speakers', 'Power adapters'],
    imgId: 'prod-detail-elec-01',
    titleId: 'prod-detail-title-0',
  },
  {
    name: 'Machinery & Industrial',
    desc: 'Industrial equipment, power tools, hardware, mechanical parts, bearings, fasteners, valves, pumps, and precision components.',
    examples: ['Power tools', 'Industrial pumps', 'Bearings & seals', 'Fasteners & hardware', 'Valves & fittings'],
    imgId: 'prod-detail-mach-02',
    titleId: 'prod-detail-title-1',
  },
  {
    name: 'Textiles & Apparel',
    desc: 'Clothing, fabrics, footwear, bags, accessories, outdoor apparel, and fashion items across all materials and styles.',
    examples: ['Cotton & blended fabrics', 'Activewear & sportswear', 'Leather goods', 'Footwear', 'Fashion accessories'],
    imgId: 'prod-detail-text-03',
    titleId: 'prod-detail-title-2',
  },
  {
    name: 'Consumer Goods',
    desc: 'Household items, personal care products, toys, stationery, kitchenware, pet products, and seasonal items.',
    examples: ['Kitchen utensils & gadgets', 'Pet accessories', 'Toys & games', 'Personal care items', 'Home organizers'],
    imgId: 'prod-detail-cons-04',
    titleId: 'prod-detail-title-3',
  },
  {
    name: 'Home & Garden',
    desc: 'Furniture, decor, lighting, outdoor equipment, gardening tools, bathroom fixtures, and kitchen furniture.',
    examples: ['Indoor furniture', 'Outdoor furniture', 'Home lighting', 'Gardening tools', 'Bathroom fixtures'],
    imgId: 'prod-detail-home-05',
    titleId: 'prod-detail-title-4',
  },
  {
    name: 'Packaging & Printing',
    desc: 'Custom packaging, boxes, bags, labels, printed materials, and branded merchandise for retail and e-commerce.',
    examples: ['Custom cardboard boxes', 'Printed paper bags', 'Product labels & stickers', 'Gift packaging', 'Retail displays'],
    imgId: 'prod-detail-pack-06',
    titleId: 'prod-detail-title-5',
  },
  {
    name: 'Automotive Parts',
    desc: 'Car accessories, interior parts, aftermarket components, tires, tools, and vehicle electronics.',
    examples: ['Car interior accessories', 'LED lighting kits', 'Tool sets', 'Auto electronics', 'Aftermarket parts'],
    imgId: 'prod-detail-auto-07',
    titleId: 'prod-detail-title-6',
  },
  {
    name: 'Custom / OEM / ODM',
    desc: 'Bespoke product development, private label manufacturing, and end-to-end custom manufacturing projects.',
    examples: ['Prototyping', 'Mold & tooling development', 'Private label products', 'Custom branding', 'Design-to-production'],
    imgId: 'prod-detail-cust-08',
    titleId: 'prod-detail-title-7',
  },
]

export default function ProductsWeSource() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-[#1A365D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-[#C27A3E]/20 text-[#F5EDE3] text-xs font-medium tracking-wider uppercase rounded-full mb-4">
            Product Categories
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Products We Source</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            We source across virtually every major product category. If it is manufactured in China, we can find the right supplier for you.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48 bg-slate-100">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A365D]/70 to-transparent" />
                  <h2 id={cat.titleId} className="absolute bottom-4 left-5 text-xl font-bold text-white">{cat.name}</h2>
                </div>
                <div className="p-6">
                  <p className="text-[#64748B] text-sm leading-relaxed mb-5">{cat.desc}</p>
                  <div className="mb-5">
                    <h4 className="text-xs font-semibold text-[#1A365D] uppercase tracking-wider mb-3">Common Examples</h4>
                    <div className="flex flex-wrap gap-2">
                      {cat.examples.map((ex) => (
                        <span key={ex} className="px-3 py-1 bg-[#F8F9FA] text-[#1E293B] text-xs font-medium rounded-full border border-slate-200">
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-[#C27A3E] text-sm font-semibold hover:underline"
                  >
                    Request sourcing for this category
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A365D] mb-4">Do not see your category?</h2>
          <p className="text-[#64748B] mb-6">
            We source products across virtually every category. Contact us to discuss your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C27A3E] text-white text-sm font-semibold rounded-md hover:bg-[#A8642E] transition-colors"
          >
            Get a Free Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
