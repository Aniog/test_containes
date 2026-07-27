import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    name: 'Electronics & Components',
    description: 'PCBs, cables, connectors, semiconductors, consumer electronics, IoT devices, and accessories.',
    imgId: 'prod-cat-electronics-a1b2c3',
    descId: 'prod-cat-electronics-desc',
  },
  {
    name: 'Machinery & Industrial',
    description: 'Industrial automation parts, CNC components, pumps, valves, motors, and heavy equipment spares.',
    imgId: 'prod-cat-machinery-d4e5f6',
    descId: 'prod-cat-machinery-desc',
  },
  {
    name: 'Textiles & Apparel',
    description: 'Fabrics, garments, activewear, bags, footwear, and textile raw materials for fashion brands.',
    imgId: 'prod-cat-textiles-g7h8i9',
    descId: 'prod-cat-textiles-desc',
  },
  {
    name: 'Home & Furniture',
    description: 'Indoor and outdoor furniture, kitchenware, lighting, home decor, and bathroom fixtures.',
    imgId: 'prod-cat-home-j0k1l2',
    descId: 'prod-cat-home-desc',
  },
  {
    name: 'Packaging Materials',
    description: 'Custom boxes, pouches, labels, bottles, jars, and sustainable packaging solutions.',
    imgId: 'prod-cat-packaging-m3n4o5',
    descId: 'prod-cat-packaging-desc',
  },
  {
    name: 'Consumer Goods',
    description: 'Toys, sporting goods, personal care products, beauty tools, and household items.',
    imgId: 'prod-cat-consumer-p6q7r8',
    descId: 'prod-cat-consumer-desc',
  },
  {
    name: 'Automotive Parts',
    description: 'Replacement parts, accessories, EV components, lighting, and interior accessories.',
    imgId: 'prod-cat-automotive-s9t0u1',
    descId: 'prod-cat-automotive-desc',
  },
  {
    name: 'Medical & Health',
    description: 'Medical devices, PPE, wellness products, and health accessories with regulatory support.',
    imgId: 'prod-cat-medical-v2w3x4',
    descId: 'prod-cat-medical-desc',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 id="products-title" className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Products We Source
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              We maintain active supplier relationships across dozens of product categories. If you do not see your product listed below, contact us — our network is broader than what fits on one page.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [products-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-slate-900 mb-1">{cat.name}</h3>
                  <p id={cat.descId} className="text-sm text-slate-600 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Need Something Else?
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Our supplier network extends to niche and custom manufacturing. Share your requirements and we will find the right partner.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold text-base px-8 py-4 rounded-lg transition-colors"
          >
            Request a Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
