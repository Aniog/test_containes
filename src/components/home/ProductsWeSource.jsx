import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeader from '@/components/shared/SectionHeader'

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, sensors, connectors, and electronic assemblies.',
    imgId: 'products-electronics-1a2b',
    titleId: 'products-electronics-title',
    descId: 'products-electronics-desc',
  },
  {
    id: 'home-garden',
    title: 'Home & Garden Products',
    desc: 'Furniture, kitchenware, garden tools, home textiles, and decorative items.',
    imgId: 'products-home-3c4d',
    titleId: 'products-home-title',
    descId: 'products-home-desc',
  },
  {
    id: 'industrial',
    title: 'Industrial & Machinery',
    desc: 'Industrial equipment, CNC parts, molds, packaging machinery, and automation components.',
    imgId: 'products-industrial-5e6f',
    titleId: 'products-industrial-title',
    descId: 'products-industrial-desc',
  },
  {
    id: 'textiles',
    title: 'Textiles & Apparel',
    desc: 'Fabrics, garments, sportswear, bags, and fashion accessories.',
    imgId: 'products-textiles-7g8h',
    titleId: 'products-textiles-title',
    descId: 'products-textiles-desc',
  },
  {
    id: 'auto-parts',
    title: 'Auto Parts & Accessories',
    desc: 'OEM and aftermarket auto parts, lighting, interior accessories, and EV components.',
    imgId: 'products-auto-9i0j',
    titleId: 'products-auto-title',
    descId: 'products-auto-desc',
  },
  {
    id: 'health-beauty',
    title: 'Health & Beauty',
    desc: 'Cosmetics, skincare, health devices, supplements, and personal care products.',
    imgId: 'products-health-k1l2',
    titleId: 'products-health-title',
    descId: 'products-health-desc',
  },
]

export default function ProductsWeSource() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Products We Source"
          title="Wide Range of Product Categories"
          subtitle="We source across major manufacturing categories in China, connecting you with specialized suppliers for each."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat) => (
            <div key={cat.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow group">
              <div className="aspect-[4/3] overflow-hidden bg-gray-50">
                <img
                  alt={cat.title}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 id={cat.titleId} className="text-base font-semibold text-navy-600 mb-1">{cat.title}</h3>
                <p id={cat.descId} className="text-gray-500 text-sm leading-relaxed">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-accent-400 font-semibold hover:text-accent-500 transition-colors"
          >
            View All Product Categories
            <span className="text-lg">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
