import SectionHeader from '../SectionHeader'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  { id: 'electronics', name: 'Electronics & Components', desc: 'PCBs, cables, adapters, consumer electronics, and industrial components.', titleId: 'prod-electronics-title', descId: 'prod-electronics-desc' },
  { id: 'apparel', name: 'Apparel & Textiles', desc: 'Garments, fabrics, bags, shoes, and accessories with full material traceability.', titleId: 'prod-apparel-title', descId: 'prod-apparel-desc' },
  { id: 'machinery', name: 'Machinery & Hardware', desc: 'Metal parts, tools, molds, industrial equipment, and precision components.', titleId: 'prod-machinery-title', descId: 'prod-machinery-desc' },
  { id: 'home', name: 'Home & Furniture', desc: 'Furniture, lighting, kitchenware, decor, and household goods.', titleId: 'prod-home-title', descId: 'prod-home-desc' },
  { id: 'packaging', name: 'Packaging & Printing', desc: 'Custom boxes, labels, bags, and printed materials for branding.', titleId: 'prod-packaging-title', descId: 'prod-packaging-desc' },
  { id: 'beauty', name: 'Beauty & Personal Care', desc: 'Cosmetics, skincare, haircare, and personal grooming products.', titleId: 'prod-beauty-title', descId: 'prod-beauty-desc' },
]

export default function ProductsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          caption="Industries"
          title="Products We Source"
          subtitle="We source across a wide range of categories. If you need it manufactured in China, we can find the right supplier."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((p) => (
            <div key={p.id} className="group rounded-xl border border-border bg-bg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[16/10] overflow-hidden bg-bg-alt">
                <img
                  data-strk-img-id={`product-img-${p.id}`}
                  data-strk-img={`[${p.descId}] [${p.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 lg:p-6">
                <h3 id={p.titleId} className="text-base font-semibold text-text-primary mb-1">{p.name}</h3>
                <p id={p.descId} className="text-sm text-text-secondary leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
