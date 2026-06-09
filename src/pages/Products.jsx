import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import CTASection from '@/components/shared/CTASection'

const categories = [
  {
    name: 'Electronics & Components',
    description: 'Consumer electronics, PCBs, LED lighting, sensors, cables, connectors, and electronic assemblies.',
    items: ['Consumer Electronics', 'PCBs & Circuit Boards', 'LED Lighting', 'Sensors & Modules', 'Cables & Connectors', 'Power Supplies'],
    imgId: 'pg-electronics-t7u8v9',
    titleId: 'pg-electronics-title',
    descId: 'pg-electronics-desc',
  },
  {
    name: 'Home & Garden',
    description: 'Furniture, kitchenware, home textiles, garden tools, storage solutions, and home decor items.',
    items: ['Furniture', 'Kitchenware', 'Home Textiles', 'Garden Tools', 'Storage Solutions', 'Home Decor'],
    imgId: 'pg-home-w1x2y3',
    titleId: 'pg-home-title',
    descId: 'pg-home-desc',
  },
  {
    name: 'Apparel & Textiles',
    description: 'Clothing, fabrics, sportswear, accessories, technical textiles, and custom manufacturing.',
    items: ['Casual & Formal Wear', 'Sportswear', 'Fabrics & Textiles', 'Accessories', 'Technical Textiles', 'Custom Manufacturing'],
    imgId: 'pg-apparel-z4a5b6',
    titleId: 'pg-apparel-title',
    descId: 'pg-apparel-desc',
  },
  {
    name: 'Industrial & Machinery',
    description: 'Machinery parts, tools, pumps, valves, automation equipment, and industrial components.',
    items: ['Machinery Parts', 'Hand & Power Tools', 'Pumps & Valves', 'Automation Equipment', 'Bearings & Gears', 'Industrial Components'],
    imgId: 'pg-industrial-c7d8e9',
    titleId: 'pg-industrial-title',
    descId: 'pg-industrial-desc',
  },
  {
    name: 'Packaging & Printing',
    description: 'Custom packaging, labels, boxes, bags, printing materials, and promotional items.',
    items: ['Custom Boxes', 'Labels & Stickers', 'Plastic & Paper Bags', 'Printing Materials', 'Promotional Items', 'Display Packaging'],
    imgId: 'pg-packaging-f1g2h3',
    titleId: 'pg-packaging-title',
    descId: 'pg-packaging-desc',
  },
  {
    name: 'Auto Parts & Accessories',
    description: 'Auto components, car accessories, EV parts, rubber and plastic parts for the automotive industry.',
    items: ['Engine Components', 'Car Accessories', 'EV Parts', 'Rubber & Plastic Parts', 'Lighting & Electrical', 'Body & Trim Parts'],
    imgId: 'pg-auto-i4j5k6',
    titleId: 'pg-auto-title',
    descId: 'pg-auto-desc',
  },
  {
    name: 'Health & Beauty',
    description: 'Cosmetics, personal care products, medical devices, health supplements, and beauty tools.',
    items: ['Cosmetics', 'Personal Care', 'Medical Devices', 'Health Supplements', 'Beauty Tools', 'Packaging for H&B'],
    imgId: 'pg-health-l7m8n9',
    titleId: 'pg-health-title',
    descId: 'pg-health-desc',
  },
  {
    name: 'Building & Construction',
    description: 'Construction materials, hardware, plumbing, electrical fittings, and building supplies.',
    items: ['Construction Materials', 'Hardware & Fasteners', 'Plumbing Supplies', 'Electrical Fittings', 'Tiles & Flooring', 'Doors & Windows'],
    imgId: 'pg-building-o1p2q3',
    titleId: 'pg-building-title',
    descId: 'pg-building-desc',
  },
  {
    name: 'Sports & Outdoors',
    description: 'Sporting goods, outdoor equipment, fitness gear, camping supplies, and recreational products.',
    items: ['Sporting Goods', 'Fitness Equipment', 'Camping Gear', 'Outdoor Furniture', 'Water Sports', 'Cycling Accessories'],
    imgId: 'pg-sports-r4s5t6',
    titleId: 'pg-sports-title',
    descId: 'pg-sports-desc',
  },
]

export default function ProductsPage() {
  const containerRef = useRef(null)

  return (
    <>
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-3">Products We Source</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Sourcing Across Major Product Categories
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            We work with manufacturers across China's key industrial hubs, covering a wide range of product categories for global buyers.
          </p>
        </div>
      </section>

      <section ref={containerRef} className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
                  <p id={cat.descId} className="text-steel text-sm leading-relaxed mb-4">{cat.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span key={item} className="bg-surface text-steel text-xs px-2.5 py-1 rounded-full">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Don't See Your Product Category?"
        subtitle="We source across virtually all product categories made in China. Contact us with your specific requirements and we will find the right suppliers."
        ctaText="Contact Us About Your Product"
      />
    </>
  )
}
