import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  { name: 'Electronics & Components', desc: 'PCBs, cables, chargers, smart devices', imgId: 'prod-elec-01', titleId: 'prod-title-0', descId: 'prod-desc-0' },
  { name: 'Machinery & Industrial', desc: 'Tools, equipment, industrial parts', imgId: 'prod-mach-02', titleId: 'prod-title-1', descId: 'prod-desc-1' },
  { name: 'Textiles & Apparel', desc: 'Fabrics, clothing, accessories, footwear', imgId: 'prod-text-03', titleId: 'prod-title-2', descId: 'prod-desc-2' },
  { name: 'Consumer Goods', desc: 'Household items, personal care, toys', imgId: 'prod-cons-04', titleId: 'prod-title-3', descId: 'prod-desc-3' },
  { name: 'Home & Garden', desc: 'Furniture, decor, kitchen, outdoor', imgId: 'prod-home-05', titleId: 'prod-title-4', descId: 'prod-desc-4' },
  { name: 'Packaging & Printing', desc: 'Boxes, bags, labels, custom packaging', imgId: 'prod-pack-06', titleId: 'prod-title-5', descId: 'prod-desc-5' },
  { name: 'Automotive Parts', desc: 'Accessories, components, aftermarket', imgId: 'prod-auto-07', titleId: 'prod-title-6', descId: 'prod-desc-6' },
  { name: 'Custom / OEM', desc: 'Bespoke products, private label, OEM/ODM', imgId: 'prod-cust-08', titleId: 'prod-title-7', descId: 'prod-desc-7' },
]

export default function ProductsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 bg-[#F5EDE3] text-[#C27A3E] text-xs font-medium tracking-wider uppercase rounded-full mb-4">
            What We Source
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] mb-4">Products We Source</h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            We source across virtually every major product category. If it is manufactured in China, we can find the right supplier for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <div
              key={p.name}
              className="group bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-[#C27A3E]/30 transition-all duration-300"
            >
              <div className="relative h-40 bg-slate-100">
                <img
                  data-strk-img-id={p.imgId}
                  data-strk-img={`[${p.descId}] [${p.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={p.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A365D]/50 to-transparent" />
              </div>
              <div className="p-5">
                <h3 id={p.titleId} className="text-base font-semibold text-[#1A365D] mb-1">{p.name}</h3>
                <p id={p.descId} className="text-[#64748B] text-sm">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products-we-source"
            className="inline-flex items-center px-6 py-3 border-2 border-[#1A365D] text-[#1A365D] text-sm font-semibold rounded-md hover:bg-[#1A365D] hover:text-white transition-colors"
          >
            View Full Product List
          </Link>
        </div>
      </div>
    </section>
  )
}
