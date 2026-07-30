import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Package } from 'lucide-react'

const categories = [
  {
    id: 'electronics',
    name: 'Electronics & Components',
    items: ['Consumer electronics', 'LED lighting', 'PCBs and components', 'Cables and connectors', 'Smart home devices', 'Power banks'],
    imgId: 'prod-electronics-img-a1b2c3',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
    desc: 'Consumer electronics, LED lighting, PCBs, cables, smart home devices and more from certified Chinese manufacturers.',
  },
  {
    id: 'furniture',
    name: 'Furniture & Home Decor',
    items: ['Office furniture', 'Bedroom furniture', 'Outdoor furniture', 'Home accessories', 'Lighting fixtures', 'Storage solutions'],
    imgId: 'prod-furniture-img-d4e5f6',
    titleId: 'prod-furniture-title',
    descId: 'prod-furniture-desc',
    desc: 'Office, bedroom, and outdoor furniture plus home accessories and lighting from established Chinese factories.',
  },
  {
    id: 'textiles',
    name: 'Textiles & Apparel',
    items: ['Clothing and garments', 'Sportswear', 'Workwear and uniforms', 'Bags and accessories', 'Home textiles', 'Technical fabrics'],
    imgId: 'prod-textiles-img-g7h8i9',
    titleId: 'prod-textiles-title',
    descId: 'prod-textiles-desc',
    desc: 'Clothing, sportswear, workwear, bags, home textiles and technical fabrics from verified Chinese garment factories.',
  },
  {
    id: 'hardware',
    name: 'Hardware & Tools',
    items: ['Hand tools', 'Power tools', 'Fasteners and fixings', 'Industrial hardware', 'Safety equipment', 'Construction materials'],
    imgId: 'prod-hardware-img-j1k2l3',
    titleId: 'prod-hardware-title',
    descId: 'prod-hardware-desc',
    desc: 'Hand tools, power tools, fasteners, industrial hardware, safety equipment and construction materials.',
  },
  {
    id: 'packaging',
    name: 'Packaging & Printing',
    items: ['Custom boxes', 'Paper bags', 'Plastic packaging', 'Labels and stickers', 'Display stands', 'Gift packaging'],
    imgId: 'prod-packaging-img-m4n5o6',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
    desc: 'Custom boxes, paper bags, plastic packaging, labels, display stands and gift packaging from Chinese printers.',
  },
  {
    id: 'toys',
    name: 'Toys & Sporting Goods',
    items: ['Children\'s toys', 'Educational toys', 'Outdoor sports equipment', 'Fitness equipment', 'Games and puzzles', 'Hobby products'],
    imgId: 'prod-toys-img-p7q8r9',
    titleId: 'prod-toys-title',
    descId: 'prod-toys-desc',
    desc: 'Children\'s toys, educational toys, outdoor sports equipment, fitness gear and hobby products.',
  },
  {
    id: 'beauty',
    name: 'Beauty & Personal Care',
    items: ['Cosmetics', 'Skincare products', 'Hair care', 'Personal care devices', 'Wellness products', 'OEM formulations'],
    imgId: 'prod-beauty-img-s1t2u3',
    titleId: 'prod-beauty-title',
    descId: 'prod-beauty-desc',
    desc: 'Cosmetics, skincare, hair care, personal care devices and OEM beauty formulations from certified factories.',
  },
  {
    id: 'industrial',
    name: 'Industrial & Machinery',
    items: ['Machinery parts', 'Pumps and valves', 'Electrical equipment', 'Automation components', 'Measuring instruments', 'Safety gear'],
    imgId: 'prod-industrial-img-v4w5x6',
    titleId: 'prod-industrial-title',
    descId: 'prod-industrial-desc',
    desc: 'Machinery parts, pumps, valves, electrical equipment, automation components and industrial safety gear.',
  },
  {
    id: 'food',
    name: 'Food & Agriculture',
    items: ['Dried foods', 'Spices and seasonings', 'Tea and beverages', 'Agricultural products', 'Food processing equipment', 'Packaging for food'],
    imgId: 'prod-food-img-y7z8a9',
    titleId: 'prod-food-title',
    descId: 'prod-food-desc',
    desc: 'Dried foods, spices, tea, agricultural products and food processing equipment from compliant Chinese suppliers.',
  },
]

export default function Products() {
  const containerRef = useRef(null)
  const [active, setActive] = useState(categories[0].id)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [active])

  const activeCategory = categories.find((c) => c.id === active)

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-brand-accent font-semibold text-sm uppercase tracking-wider">Product Categories</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              Products We Source
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              We source across 30+ product categories from verified Chinese manufacturers. If your product isn't listed, contact us — we likely source it.
            </p>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl border border-brand-border overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img
                    alt={cat.name}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 id={cat.titleId} className="font-display font-semibold text-brand-navy text-lg mb-2">{cat.name}</h3>
                  <p id={cat.descId} className="text-brand-muted text-sm mb-4 leading-relaxed">{cat.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.slice(0, 4).map((item) => (
                      <span key={item} className="bg-brand-light text-brand-blue text-xs px-2.5 py-1 rounded-full font-medium">
                        {item}
                      </span>
                    ))}
                    {cat.items.length > 4 && (
                      <span className="bg-gray-100 text-brand-muted text-xs px-2.5 py-1 rounded-full font-medium">
                        +{cat.items.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Not listed */}
          <div className="bg-brand-light rounded-2xl p-8 md:p-10 text-center border border-brand-border">
            <Package className="w-12 h-12 text-brand-blue mx-auto mb-4" />
            <h2 className="font-display text-2xl font-bold text-brand-navy mb-3">
              Don't See Your Product?
            </h2>
            <p className="text-brand-muted text-lg mb-6 max-w-xl mx-auto">
              We source a wide range of products beyond the categories listed above. Contact us with your product details and we'll let you know if we can help.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand-accent hover:bg-amber-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Ask About Your Product <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
