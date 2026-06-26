import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    description: 'Consumer electronics, PCBs, sensors, connectors, displays, smart home devices, and electronic components.',
    examples: ['Smart home devices', 'Wearable electronics', 'PCB assemblies', 'LED displays', 'Sensors & modules'],
    imgId: 'prod-electronics-a1b2c3',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
  },
  {
    id: 'machinery',
    title: 'Machinery & Equipment',
    description: 'Industrial machinery, CNC equipment, automation systems, packaging machines, and production line equipment.',
    examples: ['CNC machines', 'Packaging equipment', 'Automation systems', 'Industrial robots', 'Compressors & pumps'],
    imgId: 'prod-machinery-d4e5f6',
    titleId: 'prod-machinery-title',
    descId: 'prod-machinery-desc',
  },
  {
    id: 'textiles',
    title: 'Textiles & Apparel',
    description: 'Fabrics, garments, home textiles, sportswear, fashion accessories, and custom clothing manufacturing.',
    examples: ['Custom apparel', 'Technical fabrics', 'Home textiles', 'Sportswear', 'Fashion accessories'],
    imgId: 'prod-textiles-g7h8i9',
    titleId: 'prod-textiles-title',
    descId: 'prod-textiles-desc',
  },
  {
    id: 'home-garden',
    title: 'Home & Garden',
    description: 'Furniture, kitchenware, garden tools, home decor, lighting fixtures, and household products.',
    examples: ['Indoor furniture', 'Kitchenware', 'Garden equipment', 'Lighting fixtures', 'Home decor'],
    imgId: 'prod-home-j1k2l3',
    titleId: 'prod-home-title',
    descId: 'prod-home-desc',
  },
  {
    id: 'auto-parts',
    title: 'Auto Parts & Accessories',
    description: 'OEM and aftermarket parts, electric vehicle components, automotive electronics, and car accessories.',
    examples: ['Engine components', 'EV parts', 'Auto electronics', 'Body parts', 'Brake systems'],
    imgId: 'prod-auto-m4n5o6',
    titleId: 'prod-auto-title',
    descId: 'prod-auto-desc',
  },
  {
    id: 'building-materials',
    title: 'Building Materials',
    description: 'Tiles, sanitary ware, hardware, fixtures, construction materials, and interior finishing products.',
    examples: ['Ceramic tiles', 'Sanitary ware', 'Door hardware', 'Bathroom fixtures', 'Flooring materials'],
    imgId: 'prod-building-p7q8r9',
    titleId: 'prod-building-title',
    descId: 'prod-building-desc',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    description: 'Custom packaging, labels, printing materials, gift boxes, and sustainable packaging solutions.',
    examples: ['Custom boxes', 'Product labels', 'Gift packaging', 'Eco-friendly packaging', 'Printing materials'],
    imgId: 'prod-packaging-s1t2u3',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
  },
  {
    id: 'health-beauty',
    title: 'Health & Beauty',
    description: 'Cosmetics, skincare products, health supplements, personal care items, and beauty tools.',
    examples: ['Skincare products', 'Cosmetics', 'Health supplements', 'Beauty tools', 'Personal care'],
    imgId: 'prod-health-v4w5x6',
    titleId: 'prod-health-title',
    descId: 'prod-health-desc',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-primary-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Products We Source</h1>
          <p className="text-lg text-primary-200 max-w-2xl mx-auto">
            We source across a wide range of industries, connecting you with specialized manufacturers in China.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="aspect-[4/3] sm:aspect-auto bg-neutral-100 overflow-hidden">
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
                  <div className="p-5 flex flex-col justify-center">
                    <h3 id={cat.titleId} className="text-lg font-bold text-neutral-900 mb-2">{cat.title}</h3>
                    <p id={cat.descId} className="text-neutral-500 text-sm leading-relaxed mb-3">{cat.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.examples.map((ex) => (
                        <span key={ex} className="text-xs bg-primary-50 text-primary-600 px-2 py-1 rounded-full font-medium">
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">Don't See Your Product Category?</h2>
          <p className="text-neutral-500 mb-8">
            We source many more product types than listed here. Contact us with your specific requirements and we will let you know how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-600 transition-colors"
          >
            Tell Us What You Need
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
