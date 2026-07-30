import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { CheckCircle2 } from 'lucide-react'
import CTASection from '@/components/CTASection'

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, connectors, and electronic accessories.',
    items: ['Consumer electronics', 'PCB assemblies', 'LED lighting', 'Cables & connectors', 'Smart home devices', 'Audio equipment'],
    imgId: 'prod-electronics-img-a1b2c3',
  },
  {
    id: 'textiles',
    title: 'Textiles & Apparel',
    desc: 'Clothing, uniforms, sportswear, fabrics, home textiles, and fashion accessories.',
    items: ['Casual & formal wear', 'Sportswear & activewear', 'Uniforms & workwear', 'Home textiles', 'Bags & accessories', 'Fabrics & trims'],
    imgId: 'prod-textiles-img-d4e5f6',
  },
  {
    id: 'home-garden',
    title: 'Home & Garden',
    desc: 'Furniture, kitchenware, bathroom fixtures, garden tools, and home decor items.',
    items: ['Furniture', 'Kitchenware', 'Bathroom fixtures', 'Garden tools', 'Home decor', 'Storage solutions'],
    imgId: 'prod-home-img-g7h8i9',
  },
  {
    id: 'industrial',
    title: 'Industrial & Machinery',
    desc: 'Manufacturing equipment, tools, hardware, industrial components, and spare parts.',
    items: ['CNC machines', 'Industrial tools', 'Hardware & fasteners', 'Pumps & valves', 'Electrical equipment', 'Safety equipment'],
    imgId: 'prod-industrial-img-j1k2l3',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, labels, boxes, bags, bottles, and printing services.',
    items: ['Custom boxes & cartons', 'Flexible packaging', 'Glass & plastic bottles', 'Labels & stickers', 'Shopping bags', 'Display packaging'],
    imgId: 'prod-packaging-img-m4n5o6',
  },
  {
    id: 'auto-parts',
    title: 'Auto Parts & Accessories',
    desc: 'Replacement parts, accessories, tools, and aftermarket automotive components.',
    items: ['Engine components', 'Body parts', 'Interior accessories', 'Lighting', 'Tires & wheels', 'Diagnostic tools'],
    imgId: 'prod-auto-img-p7q8r9',
  },
  {
    id: 'health-beauty',
    title: 'Health & Beauty',
    desc: 'Cosmetics, skincare, supplements, medical devices, and personal care products.',
    items: ['Skincare products', 'Cosmetics & makeup', 'Hair care', 'Health supplements', 'Medical devices', 'Personal care'],
    imgId: 'prod-health-img-s1t2u3',
  },
  {
    id: 'building',
    title: 'Building Materials',
    desc: 'Construction materials, tiles, plumbing, electrical fittings, and architectural hardware.',
    items: ['Tiles & flooring', 'Plumbing fixtures', 'Electrical fittings', 'Steel & aluminum', 'Doors & windows', 'Insulation materials'],
    imgId: 'prod-building-img-v4w5x6',
  },
]

export default function ProductsPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-navy/10 text-navy text-sm font-medium px-3 py-1 rounded-full mb-4">
              Product Categories
            </span>
            <h1 id="products-page-title" className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
              Products We Source from China
            </h1>
            <p id="products-page-subtitle" className="text-lg text-slate-600 max-w-2xl mx-auto">
              We source across all major product categories from China's manufacturing regions. If it's made in China, we can find the right supplier for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <img
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.id}-desc] [${cat.id}-title] [products-page-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 id={`${cat.id}-title`} className="text-xl font-bold text-slate-900 mb-2">{cat.title}</h2>
                  <p id={`${cat.id}-desc`} className="text-slate-600 text-sm mb-4">{cat.desc}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {cat.items.map((item) => (
                      <div key={item} className="flex items-center gap-1.5 text-slate-700 text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 bg-slate-50 rounded-xl p-8 border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Don't see your product category?</h3>
            <p className="text-slate-600 mb-4">We source virtually any manufactured product from China. Contact us with your requirements.</p>
            <Link
              to="/contact"
              className="inline-block bg-orange text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-dark transition-colors"
            >
              Tell Us What You Need
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
