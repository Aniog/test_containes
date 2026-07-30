import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, connectors, smart home devices, and electronic accessories.',
    examples: ['LED lighting', 'PCB assemblies', 'Smart home devices', 'Cables & connectors', 'Consumer electronics'],
    imgId: 'prod-electronics-img-a1b2c3',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
  },
  {
    id: 'textiles',
    title: 'Textiles & Apparel',
    desc: 'Clothing, uniforms, sportswear, fabrics, home textiles, bags, and fashion accessories from certified factories.',
    examples: ['Workwear & uniforms', 'Sportswear', 'Home textiles', 'Bags & luggage', 'Fashion accessories'],
    imgId: 'prod-textiles-img-b2c3d4',
    titleId: 'prod-textiles-title',
    descId: 'prod-textiles-desc',
  },
  {
    id: 'home-garden',
    title: 'Home & Garden',
    desc: 'Furniture, kitchenware, bathroom fixtures, garden tools, outdoor furniture, and home decor items.',
    examples: ['Furniture', 'Kitchenware', 'Bathroom fixtures', 'Garden tools', 'Home decor'],
    imgId: 'prod-home-img-c3d4e5',
    titleId: 'prod-home-title',
    descId: 'prod-home-desc',
  },
  {
    id: 'auto-parts',
    title: 'Auto Parts & Accessories',
    desc: 'Replacement parts, car accessories, tires, filters, brake components, and aftermarket automotive products.',
    examples: ['Brake components', 'Filters & belts', 'Car accessories', 'Tires', 'Body parts'],
    imgId: 'prod-auto-img-d4e5f6',
    titleId: 'prod-auto-title',
    descId: 'prod-auto-desc',
  },
  {
    id: 'machinery',
    title: 'Machinery & Equipment',
    desc: 'Industrial machinery, CNC machines, packaging equipment, food processing machines, and manufacturing tools.',
    examples: ['CNC machines', 'Packaging equipment', 'Food processing', 'Printing machines', 'Industrial tools'],
    imgId: 'prod-machinery-img-e5f6g7',
    titleId: 'prod-machinery-title',
    descId: 'prod-machinery-desc',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, labels, boxes, bags, bottles, jars, and printed materials for retail and industrial use.',
    examples: ['Custom boxes', 'Labels & stickers', 'Bottles & jars', 'Retail packaging', 'Industrial packaging'],
    imgId: 'prod-packaging-img-f6g7h8',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
  },
  {
    id: 'building',
    title: 'Building Materials',
    desc: 'Tiles, sanitary ware, steel products, glass, doors, windows, and construction hardware.',
    examples: ['Ceramic tiles', 'Sanitary ware', 'Steel products', 'Doors & windows', 'Hardware'],
    imgId: 'prod-building-img-g7h8i9',
    titleId: 'prod-building-title',
    descId: 'prod-building-desc',
  },
  {
    id: 'health-beauty',
    title: 'Health & Beauty',
    desc: 'Cosmetics, skincare, personal care products, medical devices, supplements, and beauty tools.',
    examples: ['Skincare products', 'Cosmetics', 'Beauty tools', 'Personal care', 'Medical devices'],
    imgId: 'prod-health-img-h8i9j0',
    titleId: 'prod-health-title',
    descId: 'prod-health-desc',
  },
]

export default function ProductsPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Products We Source
            </h1>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              We source across most manufacturing categories from China. If your product is made in a factory, we can likely help you find the right supplier.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-brand-white rounded-xl border border-brand-border overflow-hidden">
                <img
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="p-6">
                  <h2 id={cat.titleId} className="text-xl font-bold text-brand-dark mb-2">
                    {cat.title}
                  </h2>
                  <p id={cat.descId} className="text-brand-gray text-sm leading-relaxed mb-4">
                    {cat.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cat.examples.map((ex) => (
                      <span key={ex} className="bg-blue-50 text-brand-blue text-xs font-medium px-2.5 py-1 rounded-full">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Can't find */}
      <section className="py-16 md:py-20 bg-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark tracking-tight">
            Don't See Your Product Category?
          </h2>
          <p className="mt-4 text-brand-gray text-lg max-w-2xl mx-auto">
            We source thousands of different products. Contact us with your specific requirements and we will let you know if we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center mt-8 bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
