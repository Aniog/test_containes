import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SectionTitle from '../shared/SectionTitle'

const categories = [
  { name: 'Electronics & Components', desc: 'Consumer electronics, PCBs, cables, chargers, smart devices', imgId: 'product-electronics', titleId: 'cat-title-1', descId: 'cat-desc-1' },
  { name: 'Textiles & Apparel', desc: 'Garments, fabrics, bags, shoes, accessories, home textiles', imgId: 'product-textiles', titleId: 'cat-title-2', descId: 'cat-desc-2' },
  { name: 'Hardware & Tools', desc: 'Hand tools, power tools, fasteners, building materials, fittings', imgId: 'product-hardware', titleId: 'cat-title-3', descId: 'cat-desc-3' },
  { name: 'Home & Kitchen', desc: 'Furniture, cookware, tableware, storage, décor, lighting', imgId: 'product-home', titleId: 'cat-title-4', descId: 'cat-desc-4' },
  { name: 'Packaging Materials', desc: 'Boxes, bags, labels, bottles, custom packaging solutions', imgId: 'product-packaging', titleId: 'cat-title-5', descId: 'cat-desc-5' },
  { name: 'Industrial & Machinery', desc: 'Machinery parts, automation equipment, raw materials, components', imgId: 'product-industrial', titleId: 'cat-title-6', descId: 'cat-desc-6' },
]

export default function ProductsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Products We Source"
          subtitle="We source a wide range of product categories from vetted manufacturers across China. If you need it made, we can find the right factory."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat) => (
            <div key={cat.name} className="group rounded-xl overflow-hidden border border-border bg-surface hover:shadow-lg transition-all">
              <div className="aspect-[4/3] overflow-hidden bg-surface-dark">
                <img
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 md:p-6">
                <h3 id={cat.titleId} className="text-lg font-bold text-text-primary mb-2">{cat.name}</h3>
                <p id={cat.descId} className="text-sm text-text-secondary leading-relaxed">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
          >
            See All Product Categories
            <span className="text-lg">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
