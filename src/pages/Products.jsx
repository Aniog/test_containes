import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Accessories',
    desc: 'Consumer electronics, smartphone accessories, chargers, cables, Bluetooth devices, smart home products, IoT devices, and electronic components. We source from Shenzhen — the global electronics manufacturing hub.',
    items: ['Smartphone accessories', 'Bluetooth audio devices', 'Smart home products', 'Chargers & power banks', 'Electronic components', 'Wearable devices'],
  },
  {
    id: 'home-kitchen',
    title: 'Home & Kitchen',
    desc: 'Kitchenware, cookware, home storage, cleaning tools, bathroom accessories, home decor, and furniture. We work with factories in Guangdong, Zhejiang, and Fujian provinces.',
    items: ['Kitchenware & cookware', 'Home storage solutions', 'Bathroom accessories', 'Home decor items', 'Furniture & fittings', 'Cleaning tools'],
  },
  {
    id: 'textiles-apparel',
    title: 'Textiles & Apparel',
    desc: 'Clothing, sportswear, bags, shoes, home textiles, curtains, bedding, and fashion accessories. We source from specialized textile clusters in Zhejiang and Guangdong.',
    items: ['Clothing & apparel', 'Sportswear & activewear', 'Bags & luggage', 'Home textiles', 'Bedding & linens', 'Fashion accessories'],
  },
  {
    id: 'hardware-tools',
    title: 'Hardware & Industrial Tools',
    desc: 'Power tools, hand tools, fasteners, building materials, industrial supplies, and metal fabrication. Sourced from China\'s major hardware manufacturing centers.',
    items: ['Power tools', 'Hand tools', 'Fasteners & hardware', 'Building materials', 'Industrial supplies', 'Metal parts & fabrication'],
  },
  {
    id: 'packaging-printing',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, labels, boxes, bags, printed materials, promotional items, and branded merchandise. We work with ISO-certified packaging manufacturers.',
    items: ['Custom packaging', 'Labels & stickers', 'Paper bags & boxes', 'Printed materials', 'Promotional merchandise', 'Branded packaging'],
  },
  {
    id: 'machinery-parts',
    title: 'Machinery & Spare Parts',
    desc: 'Industrial machinery, spare parts, automation equipment, custom fabrication, molds, and tooling. Sourced from specialized manufacturers across China.',
    items: ['Industrial machinery', 'Spare parts', 'Automation equipment', 'Custom fabrication', 'Molds & tooling', 'Mechanical components'],
  },
  {
    id: 'sports-outdoor',
    title: 'Sports & Outdoor',
    desc: 'Sporting goods, fitness equipment, outdoor gear, camping supplies, and recreational products from specialized manufacturers.',
    items: ['Fitness equipment', 'Outdoor gear', 'Camping supplies', 'Sports accessories', 'Water sports equipment', 'Bicycle parts & accessories'],
  },
  {
    id: 'toys-gifts',
    title: 'Toys & Gifts',
    desc: 'Toys, games, gift items, promotional products, seasonal decorations, and novelty items. All sourced with strict safety standard compliance.',
    items: ['Toys & games', 'Gift items', 'Promotional products', 'Seasonal decorations', 'Novelty items', 'Craft supplies'],
  },
  {
    id: 'automotive',
    title: 'Automotive Parts & Accessories',
    desc: 'Auto parts, car accessories, motorcycle accessories, and vehicle electronics. Sourced from automotive supply chain hubs in China.',
    items: ['Auto spare parts', 'Car accessories', 'Motorcycle parts', 'Vehicle electronics', 'Car care products', 'Garage equipment'],
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">Products We Source</p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            We Source Across Industries
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Our sourcing expertise spans a wide range of product categories. Whatever you need
            manufactured, we can connect you with the right factory in China.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-surface rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div
                  data-strk-bg-id={`products-cat-bg-${cat.id}-z9y8x7`}
                  data-strk-bg={`[products-cat-title-${cat.id}] china factory manufacturing product`}
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="600"
                  style={{ paddingTop: '56.25%', backgroundSize: 'cover', backgroundPosition: 'center' }}
                />
                <div className="p-6">
                  <h3 id={`products-cat-title-${cat.id}`} className="font-bold text-navy text-lg mb-2">{cat.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span key={item} className="inline-flex px-2.5 py-1 bg-white rounded-md text-xs text-gray-600 border border-gray-100">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            Don't see your product category?
          </h2>
          <p className="text-gray-600 mb-8">
            We source across many more industries than listed here. If your product isn't
            shown, contact us — we likely have experience in your category.
          </p>
          <Link to="/contact" className="inline-flex items-center px-8 py-3.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors shadow-md">
            Tell Us About Your Product
          </Link>
        </div>
      </section>
    </div>
  )
}