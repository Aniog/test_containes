import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, semiconductors, connectors, cables, IoT devices, and accessories.',
    imgId: 'prod-cat-electronics-f1a2',
    titleId: 'prod-cat-electronics-title',
    descId: 'prod-cat-electronics-desc',
  },
  {
    title: 'Home & Kitchen Appliances',
    desc: 'Small kitchen appliances, home cleaning devices, air purifiers, water filters, and smart home products.',
    imgId: 'prod-cat-home-g3b4',
    titleId: 'prod-cat-home-title',
    descId: 'prod-cat-home-desc',
  },
  {
    title: 'Furniture & Home Decor',
    desc: 'Indoor and outdoor furniture, lighting, textiles, rugs, wall decor, and custom-designed pieces.',
    imgId: 'prod-cat-furniture-h5c6',
    titleId: 'prod-cat-furniture-title',
    descId: 'prod-cat-furniture-desc',
  },
  {
    title: 'Apparel & Textiles',
    desc: 'Garments, sportswear, footwear, bags, accessories, fabrics, and custom OEM/ODM clothing lines.',
    imgId: 'prod-cat-apparel-i7d8',
    titleId: 'prod-cat-apparel-title',
    descId: 'prod-cat-apparel-desc',
  },
  {
    title: 'Hardware & Industrial Parts',
    desc: 'Fasteners, CNC machined parts, metal fabrication, molds, tools, bearings, and industrial components.',
    imgId: 'prod-cat-hardware-j9e0',
    titleId: 'prod-cat-hardware-title',
    descId: 'prod-cat-hardware-desc',
  },
  {
    title: 'Packaging & Printing',
    desc: 'Custom boxes, paper bags, labels, flexible packaging, POP displays, and branded promotional materials.',
    imgId: 'prod-cat-packaging-k1f2',
    titleId: 'prod-cat-packaging-title',
    descId: 'prod-cat-packaging-desc',
  },
  {
    title: 'Beauty & Personal Care',
    desc: 'Skincare, cosmetics, hair care, personal grooming devices, beauty tools, and private label products.',
    imgId: 'prod-cat-beauty-l3g4',
    titleId: 'prod-cat-beauty-title',
    descId: 'prod-cat-beauty-desc',
  },
  {
    title: 'Toys & Sporting Goods',
    desc: 'Children toys, educational products, outdoor gear, fitness equipment, and sports accessories.',
    imgId: 'prod-cat-toys-m5h6',
    titleId: 'prod-cat-toys-title',
    descId: 'prod-cat-toys-desc',
  },
  {
    title: 'Medical Devices & Supplies',
    desc: 'PPE, diagnostic devices, medical consumables, rehabilitation equipment, and healthcare accessories.',
    imgId: 'prod-cat-medical-n7i8',
    titleId: 'prod-cat-medical-title',
    descId: 'prod-cat-medical-desc',
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
      <section className="bg-brand-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 id="products-title" className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Products We Source
            </h1>
            <p className="text-lg text-blue-200 leading-relaxed">
              We source across a wide range of categories, backed by deep experience in China's manufacturing clusters.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.imgId} className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    alt={cat.title}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}] [products-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 id={cat.titleId} className="font-semibold text-brand-900 mb-2">{cat.title}</h3>
                  <p id={cat.descId} className="text-slate-600 text-sm leading-relaxed">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Don't see your product? */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-900 mb-4">
            Don't See Your Product Category?
          </h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            If your product is not listed, we likely still source it. Our network spans dozens of industries across China's key manufacturing regions. Reach out and we will let you know within 24 hours if we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-3.5 rounded-lg text-base transition-colors"
          >
            Ask About Your Product
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
