import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  { name: 'Electronics & Components', imgId: 'prod-electronics-d4e5f6' },
  { name: 'Machinery & Industrial', imgId: 'prod-machinery-g7h8i9' },
  { name: 'Home & Garden', imgId: 'prod-home-j1k2l3' },
  { name: 'Apparel & Textiles', imgId: 'prod-apparel-m4n5o6' },
  { name: 'Packaging & Printing', imgId: 'prod-packaging-p7q8r9' },
  { name: 'Building Materials', imgId: 'prod-building-s1t2u3' },
  { name: 'Automotive Parts', imgId: 'prod-auto-v4w5x6' },
  { name: 'Health & Beauty', imgId: 'prod-health-y7z8a1' },
]

export default function ProductsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-blue-800 font-semibold text-sm uppercase tracking-wide">Product Categories</span>
          <h2 className="heading-2 mt-2 mb-4">Products We Source</h2>
          <p className="body-text max-w-2xl mx-auto">
            We source across a wide range of industries. If it is made in China, we can help you find the right supplier.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((cat) => (
            <div key={cat.name} className="group relative overflow-hidden rounded-lg aspect-square bg-slate-100">
              <div
                className="absolute inset-0 transition-transform duration-300 group-hover:scale-105"
                data-strk-bg-id={cat.imgId}
                data-strk-bg={`[${cat.name}-label]`}
                data-strk-bg-ratio="1x1"
                data-strk-bg-width="400"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span id={`${cat.name}-label`} className="text-white font-semibold text-sm md:text-base">
                  {cat.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
