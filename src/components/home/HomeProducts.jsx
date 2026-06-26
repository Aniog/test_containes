import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeader from '@/components/shared/SectionHeader'

const products = [
  {
    id: 'electronics',
    titleId: 'product-title-electronics',
    descId: 'product-desc-electronics',
    title: 'Electronics & Components',
    description: 'Consumer electronics, cables, PCBA, chargers, and accessories.',
    imgId: 'product-img-electronics-3c4d',
  },
  {
    id: 'apparel',
    titleId: 'product-title-apparel',
    descId: 'product-desc-apparel',
    title: 'Apparel & Textiles',
    description: 'Garments, fabrics, bags, footwear, and fashion accessories.',
    imgId: 'product-img-apparel-8e2a',
  },
  {
    id: 'hardware',
    titleId: 'product-title-hardware',
    descId: 'product-desc-hardware',
    title: 'Hardware & Tools',
    description: 'Building materials, fasteners, hand tools, and industrial parts.',
    imgId: 'product-img-hardware-5b7f',
  },
  {
    id: 'home-goods',
    titleId: 'product-title-home-goods',
    descId: 'product-desc-home-goods',
    title: 'Home & Kitchen Goods',
    description: 'Furniture, kitchenware, décor, and household products.',
    imgId: 'product-img-home-goods-1a9c',
  },
  {
    id: 'packaging',
    titleId: 'product-title-packaging',
    descId: 'product-desc-packaging',
    title: 'Packaging & Printing',
    description: 'Retail boxes, bags, labels, and custom printed materials.',
    imgId: 'product-img-packaging-6d3e',
  },
  {
    id: 'machinery',
    titleId: 'product-title-machinery',
    descId: 'product-desc-machinery',
    title: 'Machinery & Equipment',
    description: 'Small machinery, automation parts, and OEM equipment.',
    imgId: 'product-img-machinery-4f8b',
  },
]

export default function HomeProducts() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Products We Source"
          title="Industries and product categories we cover"
          description="From electronics to industrial parts, we work across the major export categories based in Guangdong, Zhejiang, and Jiangsu provinces."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="group bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  alt={product.title}
                  className="w-full h-full object-cover"
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [section-products-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-5">
                <h3
                  id={product.titleId}
                  className="text-lg font-semibold text-slate-900"
                >
                  {product.title}
                </h3>
                <p
                  id={product.descId}
                  className="mt-1 text-sm text-slate-600 leading-relaxed"
                >
                  {product.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-brand-800 text-brand-800 font-semibold hover:bg-brand-50 transition"
          >
            Browse all product categories
          </Link>
        </div>
      </div>
    </section>
  )
}
