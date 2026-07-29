import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { SectionHeading, CTAButton } from '@/components/shared/SectionHeading'

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    items: ['Consumer electronics', 'LED lighting', 'PCB assemblies', 'Cables & connectors', 'Smart home devices', 'Audio equipment'],
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
    imgId: 'prod-electronics-img-e3f4g5',
  },
  {
    id: 'home-garden',
    title: 'Home & Garden',
    items: ['Furniture', 'Kitchenware', 'Bathroom fixtures', 'Garden tools', 'Home decor', 'Storage solutions'],
    titleId: 'prod-home-title',
    descId: 'prod-home-desc',
    imgId: 'prod-home-img-h6i7j8',
  },
  {
    id: 'textiles',
    title: 'Textiles & Apparel',
    items: ['Clothing & uniforms', 'Fabrics & yarns', 'Bags & luggage', 'Bedding & towels', 'Sportswear', 'Promotional apparel'],
    titleId: 'prod-textiles-title',
    descId: 'prod-textiles-desc',
    imgId: 'prod-textiles-img-k9l1m2',
  },
  {
    id: 'industrial',
    title: 'Industrial & Machinery',
    items: ['CNC machines', 'Pumps & valves', 'Conveyor systems', 'Packaging machinery', 'Welding equipment', 'Industrial tools'],
    titleId: 'prod-industrial-title',
    descId: 'prod-industrial-desc',
    imgId: 'prod-industrial-img-n3o4p5',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    items: ['Corrugated boxes', 'Plastic containers', 'Labels & stickers', 'Gift boxes', 'Blister packaging', 'Shrink wrap'],
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
    imgId: 'prod-packaging-img-q6r7s8',
  },
  {
    id: 'auto-parts',
    title: 'Auto Parts & Accessories',
    items: ['Engine components', 'Body parts', 'Interior accessories', 'Lighting', 'Filters & belts', 'Wheels & tires'],
    titleId: 'prod-auto-title',
    descId: 'prod-auto-desc',
    imgId: 'prod-auto-img-t9u1v2',
  },
  {
    id: 'building',
    title: 'Building Materials',
    items: ['Steel & aluminum', 'Tiles & flooring', 'Plumbing fittings', 'Electrical supplies', 'Glass & windows', 'Insulation'],
    titleId: 'prod-building-title',
    descId: 'prod-building-desc',
    imgId: 'prod-building-img-w3x4y5',
  },
  {
    id: 'consumer',
    title: 'Consumer Goods & Gifts',
    items: ['Toys & games', 'Stationery', 'Promotional items', 'Pet products', 'Beauty & personal care', 'Sports & fitness'],
    titleId: 'prod-consumer-title',
    descId: 'prod-consumer-desc',
    imgId: 'prod-consumer-img-z6a7b8',
  },
]

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Products We Source</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            We source across a wide range of product categories. If it is made in China, we can help you find the right supplier.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-neutral-50 rounded-xl border border-neutral-200 overflow-hidden">
                <div className="aspect-[3/2] bg-neutral-100">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 id={cat.titleId} className="text-xl font-bold text-neutral-900 mb-3">{cat.title}</h3>
                  <p id={cat.descId} className="sr-only">Products in {cat.title} category sourced from China</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-neutral-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
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
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Don't See Your Product?</h2>
          <p className="text-neutral-600 mb-8 max-w-xl mx-auto">
            We source virtually any product manufactured in China. Contact us with your specific requirements and we will find the right supplier.
          </p>
          <CTAButton />
        </div>
      </section>
    </div>
  )
}

export default Products
