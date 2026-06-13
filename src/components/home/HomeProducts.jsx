import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    title: 'Electronics & Components',
    desc: 'PCBs, semiconductors, connectors, cables, displays, and IoT modules.',
    imgId: 'home-prod-electronics-x1y2z3',
    titleId: 'home-prod-title-electronics',
    descId: 'home-prod-desc-electronics',
  },
  {
    title: 'Machinery & Industrial Parts',
    desc: 'CNC parts, injection molds, bearings, motors, and custom fabrication.',
    imgId: 'home-prod-machinery-a1b2c3',
    titleId: 'home-prod-title-machinery',
    descId: 'home-prod-desc-machinery',
  },
  {
    title: 'Textiles & Apparel',
    desc: 'Garments, fabrics, home textiles, bags, and sportswear manufacturing.',
    imgId: 'home-prod-textiles-d4e5f6',
    titleId: 'home-prod-title-textiles',
    descId: 'home-prod-desc-textiles',
  },
  {
    title: 'Home & Kitchen Products',
    desc: 'Cookware, appliances, furniture, storage, and home decor items.',
    imgId: 'home-prod-homekitchen-g7h8i9',
    titleId: 'home-prod-title-home',
    descId: 'home-prod-desc-home',
  },
  {
    title: 'Packaging & Printing',
    desc: 'Custom boxes, labels, flexible packaging, corrugated cartons for e-commerce.',
    imgId: 'home-prod-packaging-j0k1l2',
    titleId: 'home-prod-title-packaging',
    descId: 'home-prod-desc-packaging',
  },
  {
    title: 'Automotive Parts & Accessories',
    desc: 'Aftermarket parts, rubber components, metal stamping, and electrical systems.',
    imgId: 'home-prod-automotive-m3n4o5',
    titleId: 'home-prod-title-automotive',
    descId: 'home-prod-desc-automotive',
  },
]

export default function HomeProducts() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-gold-500 font-semibold text-sm uppercase tracking-wide mb-3">What We Source</p>
          <h2 id="home-products-heading" className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4">
            Products We Source from China
          </h2>
          <p id="home-products-sub" className="text-slate-600 text-lg leading-relaxed">
            Across 20+ industries, we have deep category expertise and a network of pre-vetted manufacturers.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.title} className="group relative bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  alt={cat.title}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}] [home-products-heading]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 id={cat.titleId} className="font-bold text-navy-800 mb-1">{cat.title}</h3>
                <p id={cat.descId} className="text-sm text-slate-500 leading-relaxed">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold border-2 border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white transition-colors"
          >
            Browse All Product Categories
          </Link>
        </div>
      </div>
    </section>
  )
}
