import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Cpu, Cog, Shirt, Home, Package, Car, Wrench, Laptop, Dumbbell, ToyBrick } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    icon: Cpu,
    title: 'Electronics & Components',
    desc: 'PCBs, semiconductors, connectors, sensors, displays, IoT modules, power supplies, wire harnesses, and embedded systems. We source from Shenzhen, Dongguan, and Suzhou electronics clusters.',
    imgId: 'prod-page-electronics-z1y2x3',
    titleId: 'prod-page-title-electronics',
    descId: 'prod-page-desc-electronics',
    slug: 'electronics-components',
  },
  {
    icon: Cog,
    title: 'Machinery & Industrial Parts',
    desc: 'CNC machined parts, injection molds, die casting, stamping, bearings, gears, motors, pumps, valves, and custom fabrication. Sourced from Zhejiang, Jiangsu, and Guangdong industrial zones.',
    imgId: 'prod-page-machinery-w4v5u6',
    titleId: 'prod-page-title-machinery',
    descId: 'prod-page-desc-machinery',
    slug: 'machinery-industrial-parts',
  },
  {
    icon: Car,
    title: 'Automotive Parts & Accessories',
    desc: 'Aftermarket parts, rubber and plastic components, metal stamping, LED lighting, electrical systems, interior accessories. Key regions: Zhejiang, Hubei, and Chongqing.',
    imgId: 'prod-page-automotive-t3s2r1',
    titleId: 'prod-page-title-automotive',
    descId: 'prod-page-desc-automotive',
    slug: 'automotive-parts-accessories',
  },
  {
    icon: Shirt,
    title: 'Textiles, Apparel & Bags',
    desc: 'Garments, sportswear, home textiles, bags, backpacks, footwear, and fashion accessories. Manufacturing hubs in Guangdong, Fujian, and Zhejiang provinces.',
    imgId: 'prod-page-textiles-m0n1o2',
    titleId: 'prod-page-title-textiles',
    descId: 'prod-page-desc-textiles',
    slug: 'textiles-apparel-bags',
  },
  {
    icon: Home,
    title: 'Home & Kitchen Products',
    desc: 'Cookware, small appliances, furniture, storage solutions, home decor, bathroom accessories, and smart home devices. Key regions: Guangdong and Fujian.',
    imgId: 'prod-page-home-p3q4r5',
    titleId: 'prod-page-title-home',
    descId: 'prod-page-desc-home',
    slug: 'home-kitchen-products',
  },
  {
    icon: Package,
    title: 'Packaging & Printing',
    desc: 'Custom boxes, labels, flexible packaging, paper bags, corrugated cartons, and promotional print materials for e-commerce and retail brands.',
    imgId: 'prod-page-packaging-a1b2c3',
    titleId: 'prod-page-title-packaging',
    descId: 'prod-page-desc-packaging',
    slug: 'packaging-printing',
  },
  {
    icon: Laptop,
    title: 'Consumer Electronics',
    desc: 'Bluetooth speakers, headphones, chargers, power banks, smart wearables, phone accessories, and consumer gadgets. Core sourcing from Shenzhen and Dongguan.',
    imgId: 'prod-page-consumer-d4e5f6',
    titleId: 'prod-page-title-consumer',
    descId: 'prod-page-desc-consumer',
    slug: 'consumer-electronics',
  },
  {
    icon: Dumbbell,
    title: 'Sports & Outdoor Equipment',
    desc: 'Fitness equipment, camping gear, outdoor furniture, sports accessories, yoga products, and recreational goods. Sourced across Zhejiang, Guangdong, and Fujian.',
    imgId: 'prod-page-sports-g7h8i9',
    titleId: 'prod-page-title-sports',
    descId: 'prod-page-desc-sports',
    slug: 'sports-outdoor-equipment',
  },
  {
    icon: ToyBrick,
    title: 'Toys & Educational Products',
    desc: 'Plastic toys, wooden toys, STEM kits, educational materials, puzzles, and children\'s products with strict safety compliance. Key region: Shantou and Guangdong.',
    imgId: 'prod-page-toys-j0k1l2',
    titleId: 'prod-page-title-toys',
    descId: 'prod-page-desc-toys',
    slug: 'toys-educational-products',
  },
  {
    icon: Wrench,
    title: 'Hardware & Tools',
    desc: 'Hand tools, power tools, fasteners, building materials, plumbing supplies, and hardware accessories. Sourced from Yongkang (Zhejiang) and Daliang (Guangdong).',
    imgId: 'prod-page-hardware-m3n4o5',
    titleId: 'prod-page-title-hardware',
    descId: 'prod-page-desc-hardware',
    slug: 'hardware-tools',
  },
]

export default function ProductsPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-navy-800 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wide mb-3">What We Source</p>
            <h1 id="prod-page-heading" className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Products We Source from China
            </h1>
            <p id="prod-page-sub" className="text-lg text-slate-300 leading-relaxed">
              Across 20+ industries and thousands of product categories, we have the
              expertise and supplier network to source what your business needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-500 text-sm mb-10">
            No matter your product, if it's manufactured in China, we can source it.
            Click any category to request a quote.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/contact?product=${encodeURIComponent(cat.title)}`}
                className="group bg-slate-50 rounded-xl overflow-hidden border border-slate-100 hover:shadow-md hover:border-navy-200 transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-200">
                  <img
                    alt={cat.title}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}] [prod-page-heading]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <cat.icon className="w-4 h-4 text-navy-600" />
                    <h2 id={cat.titleId} className="font-bold text-navy-800 group-hover:text-navy-900 transition-colors">
                      {cat.title}
                    </h2>
                  </div>
                  <p id={cat.descId} className="text-sm text-slate-500 leading-relaxed mb-3">{cat.desc}</p>
                  <span className="text-xs font-semibold text-gold-500 flex items-center gap-1">
                    Request a quote <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Don't See Your Product Category?</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            These are our most common categories, but we source across virtually all industries.
            If it's made in China, we can help you source it.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-gold-500 text-white hover:bg-gold-600 transition-colors shadow-lg shadow-gold-500/25"
          >
            Tell Us About Your Product
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
