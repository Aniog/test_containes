import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    name: 'Electronics & Components',
    items: 'Consumer electronics, PCBs, connectors, sensors, LED products, cables, batteries, smart home devices',
    imgId: 'products-page-electronics-l1m2n3',
    titleId: 'products-page-electronics-title',
    descId: 'products-page-electronics-desc',
  },
  {
    name: 'Textiles & Garments',
    items: 'Apparel, fabrics, home textiles, sportswear, accessories, bags, shoes, knitwear, woven goods',
    imgId: 'products-page-textiles-o4p5q6',
    titleId: 'products-page-textiles-title',
    descId: 'products-page-textiles-desc',
  },
  {
    name: 'Hardware & Tools',
    items: 'Hand tools, power tools, fasteners, locks, plumbing fixtures, construction hardware, welding supplies',
    imgId: 'products-page-hardware-r7s8t9',
    titleId: 'products-page-hardware-title',
    descId: 'products-page-hardware-desc',
  },
  {
    name: 'Home & Garden',
    items: 'Furniture, kitchenware, garden tools, lighting, decor, cookware, storage, bathroom accessories',
    imgId: 'products-page-home-u1v2w3',
    titleId: 'products-page-home-title',
    descId: 'products-page-home-desc',
  },
  {
    name: 'Packaging & Printing',
    items: 'Custom packaging, labels, boxes, bags, printing materials, gift boxes, food packaging, eco-friendly packaging',
    imgId: 'products-page-packaging-x4y5z6',
    titleId: 'products-page-packaging-title',
    descId: 'products-page-packaging-desc',
  },
  {
    name: 'Auto Parts & Accessories',
    items: 'Car parts, motorcycle components, EV accessories, tires, filters, brake pads, lighting, interior parts',
    imgId: 'products-page-auto-a7b8c9',
    titleId: 'products-page-auto-title',
    descId: 'products-page-auto-desc',
  },
  {
    name: 'Medical & Health Products',
    items: 'Medical devices, health monitors, PPE, disposable medical supplies, wellness products, rehabilitation equipment',
    imgId: 'products-page-medical-d1e2f3',
    titleId: 'products-page-medical-title',
    descId: 'products-page-medical-desc',
  },
  {
    name: 'Chemical & Raw Materials',
    items: 'Industrial chemicals, plastics, resins, adhesives, coatings, pigments, rubber, metal alloys',
    imgId: 'products-page-chemical-g4h5i6',
    titleId: 'products-page-chemical-title',
    descId: 'products-page-chemical-desc',
  },
  {
    name: 'Sports & Outdoor',
    items: 'Fitness equipment, camping gear, bicycles, water sports, outdoor furniture, playground equipment',
    imgId: 'products-page-sports-j7k8l9',
    titleId: 'products-page-sports-title',
    descId: 'products-page-sports-desc',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-slate-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="products-page-title" className="text-3xl md:text-4xl font-bold text-white mb-4">
            Products We Source
          </h1>
          <p id="products-page-subtitle" className="text-slate-300 text-lg max-w-2xl mx-auto">
            We source across a wide range of product categories. If you need something made in China, we can find the right supplier for it.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.name} className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden group hover:border-primary-200 hover:shadow-md transition-all">
                <div className="h-48 overflow-hidden">
                  <img
                    alt={cat.name}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}] [products-page-subtitle] [products-page-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 id={cat.titleId} className="text-lg font-semibold text-slate-900 mb-2">{cat.name}</h3>
                  <p id={cat.descId} className="text-slate-600 text-sm leading-relaxed">{cat.items}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-slate-50 rounded-xl p-8 border border-slate-200 text-center">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Need a product not listed here?
            </h3>
            <p className="text-slate-600 mb-6">
              China manufactures virtually every product category. If your product is not listed, contact us — we can likely find a qualified supplier for it.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-accent-600 transition-colors no-underline"
            >
              Tell Us What You Need
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
