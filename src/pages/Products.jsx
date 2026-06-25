import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    items: ['Consumer electronics', 'PCB assemblies', 'LED lighting', 'Cables & connectors', 'Smart home devices'],
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
    imgId: 'prod-electronics-img-j1a7',
  },
  {
    id: 'home-garden',
    title: 'Home & Garden',
    items: ['Furniture', 'Kitchenware', 'Bathroom fixtures', 'Garden tools', 'Home décor'],
    titleId: 'prod-home-title',
    descId: 'prod-home-desc',
    imgId: 'prod-home-img-k2b8',
  },
  {
    id: 'textiles',
    title: 'Textiles & Apparel',
    items: ['Workwear & uniforms', 'Sportswear', 'Casual clothing', 'Fabrics & trims', 'Bags & accessories'],
    titleId: 'prod-textiles-title',
    descId: 'prod-textiles-desc',
    imgId: 'prod-textiles-img-l3c9',
  },
  {
    id: 'industrial',
    title: 'Industrial Equipment',
    items: ['Machinery parts', 'Tools & hardware', 'Pumps & valves', 'Electrical equipment', 'Safety gear'],
    titleId: 'prod-industrial-title',
    descId: 'prod-industrial-desc',
    imgId: 'prod-industrial-img-m4d0',
  },
  {
    id: 'packaging',
    title: 'Packaging Materials',
    items: ['Corrugated boxes', 'Plastic containers', 'Labels & stickers', 'Blister packs', 'Custom packaging'],
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
    imgId: 'prod-packaging-img-n5e1',
  },
  {
    id: 'auto-parts',
    title: 'Auto Parts & Accessories',
    items: ['Engine components', 'Body parts', 'Interior accessories', 'Tires & wheels', 'Electrical systems'],
    titleId: 'prod-auto-title',
    descId: 'prod-auto-desc',
    imgId: 'prod-auto-img-o6f2',
  },
  {
    id: 'building',
    title: 'Building Materials',
    items: ['Steel & aluminum', 'Tiles & flooring', 'Plumbing fittings', 'Doors & windows', 'Insulation'],
    titleId: 'prod-building-title',
    descId: 'prod-building-desc',
    imgId: 'prod-building-img-p7g3',
  },
  {
    id: 'health-beauty',
    title: 'Health & Beauty',
    items: ['Skincare products', 'Hair care', 'Medical devices', 'Supplements packaging', 'Cosmetic tools'],
    titleId: 'prod-health-title',
    descId: 'prod-health-desc',
    imgId: 'prod-health-img-q8h4',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Products We Source
            </h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              We source manufactured goods across a wide range of industries. If it is made in China, we can likely help you find the right supplier.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <img
                  alt={cat.title}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                  className="w-full aspect-video object-cover bg-slate-100"
                />
                <div className="p-6">
                  <h3 id={cat.titleId} className="text-lg font-semibold text-slate-900 mb-3">{cat.title}</h3>
                  <p id={cat.descId} className="sr-only">{cat.items.join(', ')}</p>
                  <ul className="space-y-1.5">
                    {cat.items.map((item) => (
                      <li key={item} className="text-slate-600 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Listed */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
            Don't See Your Product?
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            This is not an exhaustive list. If your product is manufactured in China, contact us and we will let you know if we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center mt-8 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-3.5 rounded-lg text-base no-underline transition-colors"
          >
            Inquire About Your Product
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
