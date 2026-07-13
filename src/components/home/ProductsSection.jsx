import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Cpu, Cog, Sofa, Shirt, Package, Sparkles, Wrench, MoreHorizontal } from 'lucide-react'
import SectionLabel from '@/components/shared/SectionLabel'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  { name: 'Electronics & Electrical', icon: Cpu, imgId: 'product-electronics', titleId: 'product-title-electronics', descId: 'product-desc-electronics', description: 'Components, consumer electronics, cables, chargers, and small appliances.' },
  { name: 'Machinery & Industrial Parts', icon: Cog, imgId: 'product-machinery', titleId: 'product-title-machinery', descId: 'product-desc-machinery', description: 'Custom parts, tooling, hardware, and industrial equipment.' },
  { name: 'Home & Furniture', icon: Sofa, imgId: 'product-furniture', titleId: 'product-title-furniture', descId: 'product-desc-furniture', description: 'Furniture, lighting, kitchenware, décor, and household goods.' },
  { name: 'Apparel & Textiles', icon: Shirt, imgId: 'product-apparel', titleId: 'product-title-apparel', descId: 'product-desc-apparel', description: 'Garments, fabrics, bags, accessories, and textile products.' },
  { name: 'Packaging & Printing', icon: Package, imgId: 'product-packaging', titleId: 'product-title-packaging', descId: 'product-desc-packaging', description: 'Custom boxes, labels, bags, and printed promotional materials.' },
  { name: 'Beauty & Personal Care', icon: Sparkles, imgId: 'product-beauty', titleId: 'product-title-beauty', descId: 'product-desc-beauty', description: 'Skincare, cosmetics, grooming tools, and personal care items.' },
  { name: 'Hardware & Tools', icon: Wrench, imgId: 'product-hardware', titleId: 'product-title-hardware', descId: 'product-desc-hardware', description: 'Hand tools, power tools, fasteners, and construction hardware.' },
  { name: 'Other Categories', icon: MoreHorizontal, imgId: 'product-other', titleId: 'product-title-other', descId: 'product-desc-other', description: 'Tell us your product. If it is made in China, we can help source it.' },
]

export default function ProductsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} id="products" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <SectionLabel>Products We Source</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Sourcing Across Major Industries
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We source a wide range of products from verified manufacturers across China.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.name}
              className="group rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="mb-3 flex items-center gap-2 text-blue-600">
                  <product.icon className="h-5 w-5" />
                  <h3 id={product.titleId} className="text-base font-semibold text-slate-900">{product.name}</h3>
                </div>
                <p id={product.descId} className="text-sm text-slate-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 no-underline hover:no-underline"
          >
            Browse all product categories
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
