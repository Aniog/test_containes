import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeading from '@/components/shared/SectionHeading'
import CTAButton from '@/components/shared/CTAButton'

const categories = [
  { id: 'electronics', title: 'Consumer Electronics', desc: 'Headphones, chargers, smart devices, LED lighting', imgId: 'prod-electronics-5a2b1c', titleId: 'prod-electronics-title', descId: 'prod-electronics-desc' },
  { id: 'textiles', title: 'Textiles & Apparel', desc: 'Clothing, fabrics, uniforms, sportswear, accessories', imgId: 'prod-textiles-8d3e4f', titleId: 'prod-textiles-title', descId: 'prod-textiles-desc' },
  { id: 'home', title: 'Home & Garden', desc: 'Furniture, kitchenware, decor, outdoor products', imgId: 'prod-home-2c7f9a', titleId: 'prod-home-title', descId: 'prod-home-desc' },
  { id: 'industrial', title: 'Industrial & Machinery', desc: 'Tools, equipment, auto parts, hardware', imgId: 'prod-industrial-6e1b3d', titleId: 'prod-industrial-title', descId: 'prod-industrial-desc' },
]

const ProductsPreview = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Products We Source"
          subtitle="We source across dozens of product categories from China's top manufacturing regions."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className="bg-white rounded-xl overflow-hidden border border-border hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] relative overflow-hidden bg-surface">
                <img
                  alt={cat.title}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 id={cat.titleId} className="text-base font-semibold text-text-primary mb-1">{cat.title}</h3>
                <p id={cat.descId} className="text-sm text-text-secondary">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <CTAButton to="/products" variant="secondary">
            View All Product Categories
          </CTAButton>
        </div>
      </div>
    </section>
  )
}

export default ProductsPreview
