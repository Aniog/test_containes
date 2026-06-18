import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'
import SectionHeader from '../shared/SectionHeader'

const categories = [
  { id: 'electronics', title: 'Electronics & Components', desc: 'PCBs, LED lighting, cables, consumer electronics', imgId: 'prod-img-electronics-p1q2r3', titleId: 'prod-title-electronics', descId: 'prod-desc-electronics' },
  { id: 'furniture', title: 'Furniture & Home Decor', desc: 'Office furniture, home accessories, storage solutions', imgId: 'prod-img-furniture-s4t5u6', titleId: 'prod-title-furniture', descId: 'prod-desc-furniture' },
  { id: 'clothing', title: 'Clothing & Textiles', desc: 'Apparel, sportswear, uniforms, fabric', imgId: 'prod-img-clothing-v7w8x9', titleId: 'prod-title-clothing', descId: 'prod-desc-clothing' },
  { id: 'machinery', title: 'Machinery & Industrial', desc: 'Equipment, tools, spare parts, hardware', imgId: 'prod-img-machinery-y1z2a3', titleId: 'prod-title-machinery', descId: 'prod-desc-machinery' },
  { id: 'toys', title: 'Toys & Baby Products', desc: 'Toys, educational products, baby gear', imgId: 'prod-img-toys-b4c5d6', titleId: 'prod-title-toys', descId: 'prod-desc-toys' },
  { id: 'health', title: 'Health & Beauty', desc: 'Cosmetics, supplements, medical devices', imgId: 'prod-img-health-e7f8g9', titleId: 'prod-title-health', descId: 'prod-desc-health' },
]

export default function ProductsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Product Categories"
          title="Products We Source from China"
          subtitle="We have experience sourcing across a wide range of product categories, with established supplier networks in each."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className="group relative rounded-xl overflow-hidden bg-[#EBF2FA] aspect-[4/3] cursor-pointer">
              <img
                alt={cat.title}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/80 via-[#1A1A2E]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 id={cat.titleId} className="text-white font-semibold text-sm md:text-base leading-tight">{cat.title}</h3>
                <p id={cat.descId} className="text-white/70 text-xs mt-1 hidden md:block">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-[#1A3C6E] font-semibold hover:text-[#C0392B] transition-colors"
          >
            View All Product Categories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
