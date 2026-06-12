import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import CTAButton from '@/components/shared/CTAButton'
import SectionHeading from '@/components/shared/SectionHeading'

const categories = [
  {
    title: 'Electronics & Components',
    items: ['LED lighting', 'PCB assemblies', 'Consumer electronics', 'Cables & connectors', 'Smart home devices'],
    id: 'cat-electronics',
  },
  {
    title: 'Home & Garden',
    items: ['Furniture', 'Kitchenware', 'Bathroom fixtures', 'Garden tools', 'Home décor'],
    id: 'cat-home',
  },
  {
    title: 'Textiles & Apparel',
    items: ['Workwear & uniforms', 'Sportswear', 'Fabrics & yarns', 'Bags & accessories', 'Footwear'],
    id: 'cat-textiles',
  },
  {
    title: 'Industrial & Machinery',
    items: ['CNC parts', 'Injection molds', 'Packaging machines', 'Pumps & valves', 'Metal fabrication'],
    id: 'cat-industrial',
  },
  {
    title: 'Building Materials',
    items: ['Tiles & flooring', 'Plumbing fittings', 'Steel structures', 'Glass & windows', 'Insulation materials'],
    id: 'cat-building',
  },
  {
    title: 'Auto Parts & Accessories',
    items: ['Brake components', 'Filters', 'Body parts', 'Interior accessories', 'EV components'],
    id: 'cat-auto',
  },
  {
    title: 'Health & Beauty',
    items: ['Cosmetics packaging', 'Personal care devices', 'Supplements', 'Medical supplies', 'Salon equipment'],
    id: 'cat-health',
  },
  {
    title: 'Packaging & Printing',
    items: ['Custom boxes', 'Labels & stickers', 'Plastic containers', 'Glass bottles', 'Flexible packaging'],
    id: 'cat-packaging',
  },
  {
    title: 'Consumer Goods',
    items: ['Toys & games', 'Pet products', 'Stationery', 'Promotional items', 'Outdoor & sports'],
    id: 'cat-consumer',
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
      <section className="bg-navy-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-accent-500/20 text-accent-400 mb-4">
              Product Categories
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Products We Source from China
            </h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              From electronics to building materials, we source across all major product categories. If it's manufactured in China, we can find the right supplier for you.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-40 bg-slate-100 relative">
                  <img
                    data-strk-img-id={`${cat.id}-img-5f1a`}
                    data-strk-img={`[${cat.id}-title] manufacturing products`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 id={`${cat.id}-title`} className="text-lg font-semibold text-slate-900 mb-3">{cat.title}</h3>
                  <ul className="space-y-1.5">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 bg-accent-500 rounded-full shrink-0" />
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

      {/* Custom Products */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Don't See Your Product?
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            We source virtually any product manufactured in China. Send us your requirements and we'll find the right supplier — no matter how niche your product is.
          </p>
          <div className="mt-8">
            <CTAButton>Get a Free Sourcing Quote</CTAButton>
          </div>
        </div>
      </section>
    </div>
  )
}
