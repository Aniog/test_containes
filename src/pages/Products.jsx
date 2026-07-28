import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import CTABanner from '@/components/CTABanner'

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, semiconductors, connectors, cables, chargers, power banks, smart home devices, and IoT products.',
    items: 'Smartphones, tablets, Bluetooth devices, LED lighting, circuit boards, connectors, sensors, power supplies.',
    imgId: 'products-electronics-a1b2c3',
    titleId: 'products-electronics-title',
    descId: 'products-electronics-desc',
  },
  {
    id: 'industrial',
    title: 'Industrial Parts & Machinery',
    desc: 'CNC machined parts, metal stampings, injection molds, die castings, bearings, gears, pumps, valves, and industrial automation equipment.',
    items: 'Precision machined components, hydraulic parts, conveyor systems, packaging machinery, industrial tools.',
    imgId: 'products-industrial-d4e5f6',
    titleId: 'products-industrial-title',
    descId: 'products-industrial-desc',
  },
  {
    id: 'consumer',
    title: 'Consumer Goods & Housewares',
    desc: 'Home appliances, kitchenware, furniture, home decor, storage solutions, cleaning tools, and everyday consumer products.',
    items: 'Blenders, cookware, furniture, bathroom accessories, storage containers, cleaning supplies, pet products.',
    imgId: 'products-consumer-g7h8i9',
    titleId: 'products-consumer-title',
    descId: 'products-consumer-desc',
  },
  {
    id: 'textiles',
    title: 'Textiles, Apparel & Accessories',
    desc: 'Garments, fabrics, home textiles, bags, luggage, footwear, hats, gloves, and fashion accessories for all market segments.',
    items: 'T-shirts, dresses, bedding sets, towels, backpacks, handbags, sports shoes, winter wear.',
    imgId: 'products-textiles-j0k1l2',
    titleId: 'products-textiles-title',
    descId: 'products-textiles-desc',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, paper boxes, plastic packaging, labels and stickers, flexible packaging, gift boxes, and promotional materials.',
    items: 'Corrugated boxes, blister packs, stand-up pouches, custom printed labels, shopping bags, product catalogs.',
    imgId: 'products-packaging-m3n4o5',
    titleId: 'products-packaging-title',
    descId: 'products-packaging-desc',
  },
  {
    id: 'auto',
    title: 'Auto Parts & Accessories',
    desc: 'Aftermarket auto parts, EV components, replacement parts, car accessories, motorcycle parts, and vehicle maintenance products.',
    items: 'Brake pads, filters, LED headlights, car mats, roof racks, EV chargers, motorcycle helmets, tire accessories.',
    imgId: 'products-auto-p6q7r8',
    titleId: 'products-auto-title',
    descId: 'products-auto-desc',
  },
  {
    id: 'medical',
    title: 'Medical & Healthcare Supplies',
    desc: 'Medical disposables, diagnostic equipment, rehabilitation products, hospital furniture, personal protective equipment (PPE).',
    items: 'Face masks, gloves, gowns, blood pressure monitors, wheelchairs, hospital beds, first-aid kits.',
    imgId: 'products-medical-s9t0u1',
    titleId: 'products-medical-title',
    descId: 'products-medical-desc',
  },
  {
    id: 'sports',
    title: 'Sports & Outdoor Equipment',
    desc: 'Fitness equipment, outdoor gear, camping supplies, sports accessories, bicycles and parts, water sports equipment.',
    items: 'Dumbbells, yoga mats, tents, sleeping bags, fishing gear, bicycle parts, gym machines, hiking poles.',
    imgId: 'products-sports-v2w3x4',
    titleId: 'products-sports-title',
    descId: 'products-sports-desc',
  },
  {
    id: 'toys',
    title: 'Toys, Gifts & Promotional Items',
    desc: 'Children toys, educational products, corporate gifts, promotional merchandise, seasonal decorations, and novelty items.',
    items: 'Plush toys, building blocks, puzzles, branded pens, custom USB drives, Christmas decorations, party supplies.',
    imgId: 'products-toys-y5z6a7',
    titleId: 'products-toys-title',
    descId: 'products-toys-desc',
  },
  {
    id: 'construction',
    title: 'Building Materials & Hardware',
    desc: 'Construction materials, hardware tools, bathroom fittings, doors and windows, flooring, roofing, and electrical supplies.',
    items: 'Tiles, faucets, power tools, door handles, LED panels, aluminum profiles, plumbing fittings, fasteners.',
    imgId: 'products-construction-b8c9d0',
    titleId: 'products-construction-title',
    descId: 'products-construction-desc',
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
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-400 font-semibold text-sm tracking-wide uppercase mb-3">Products We Source</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            What Can We Source from China?
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            With 12+ years of experience and a network of 5,000+ factories, we can source products
            across virtually any category. Below are some of our most commonly sourced product types.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="bg-white rounded-xl border border-gray-100 hover:border-brand-200 hover:shadow-lg transition-all overflow-hidden flex flex-col sm:flex-row"
              >
                <div className="sm:w-2/5 overflow-hidden">
                  <img
                    alt={cat.title}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}] products manufactured in China`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-48 sm:h-full object-cover"
                  />
                </div>
                <div className="p-6 sm:w-3/5">
                  <h3 id={cat.titleId} className="text-lg font-bold text-navy-950 mb-2">
                    {cat.title}
                  </h3>
                  <p id={cat.descId} className="text-gray-600 text-sm leading-relaxed mb-3">
                    {cat.desc}
                  </p>
                  <p className="text-xs text-gray-400">
                    <span className="font-medium text-gray-500">Common items:</span> {cat.items}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-950 mb-4">
            Don't See Your Product Category?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Our sourcing network spans dozens of industries. Even if your product isn't listed above,
            there is a good chance we can help. Reach out and tell us what you need.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors shadow-sm"
          >
            Contact Us About Your Product <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}
