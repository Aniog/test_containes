import { useEffect, useRef } from 'react'

const categories = [
  {
    name: 'Electronics & Components',
    items: 'Consumer electronics, PCBs, LED lighting, sensors, cables & connectors',
    imgId: 'prod-electronics-d4e5f6',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
  },
  {
    name: 'Home & Garden',
    items: 'Furniture, kitchenware, home textiles, garden tools, storage solutions',
    imgId: 'prod-home-g7h8i9',
    titleId: 'prod-home-title',
    descId: 'prod-home-desc',
  },
  {
    name: 'Apparel & Textiles',
    items: 'Clothing, fabrics, sportswear, accessories, technical textiles',
    imgId: 'prod-apparel-j1k2l3',
    titleId: 'prod-apparel-title',
    descId: 'prod-apparel-desc',
  },
  {
    name: 'Industrial & Machinery',
    items: 'Machinery parts, tools, pumps, valves, automation equipment',
    imgId: 'prod-industrial-m4n5o6',
    titleId: 'prod-industrial-title',
    descId: 'prod-industrial-desc',
  },
  {
    name: 'Packaging & Printing',
    items: 'Custom packaging, labels, boxes, bags, printing materials',
    imgId: 'prod-packaging-p7q8r9',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
  },
  {
    name: 'Auto Parts & Accessories',
    items: 'Auto components, car accessories, EV parts, rubber & plastic parts',
    imgId: 'prod-auto-s1t2u3',
    titleId: 'prod-auto-title',
    descId: 'prod-auto-desc',
  },
]

export default function ProductsSection() {
  const containerRef = useRef(null)

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-3">Products We Source</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark tracking-tight mb-4">
            Sourcing Across Major Product Categories
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            We work with manufacturers across China's key industrial hubs, covering a wide range of product categories.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat) => (
            <div key={cat.name} className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  alt={cat.name}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 md:p-6">
                <h3 id={cat.titleId} className="text-lg font-bold text-primary-dark mb-2">{cat.name}</h3>
                <p id={cat.descId} className="text-steel text-sm leading-relaxed">{cat.items}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
