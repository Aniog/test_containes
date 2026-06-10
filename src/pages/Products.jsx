import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, connectors, smart home devices, and electronic accessories.',
    items: ['Consumer Electronics', 'LED Lighting', 'PCB & Components', 'Smart Home Devices', 'Cables & Connectors', 'Audio Equipment'],
    imgId: 'prod-electronics-8a3f1c',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
  },
  {
    id: 'textiles',
    title: 'Textiles & Apparel',
    desc: 'Clothing, uniforms, sportswear, fabrics, home textiles, bags, and fashion accessories from certified factories.',
    items: ['Casual & Formal Wear', 'Sportswear & Activewear', 'Uniforms & Workwear', 'Home Textiles', 'Bags & Luggage', 'Fashion Accessories'],
    imgId: 'prod-textiles-2b7e4d',
    titleId: 'prod-textiles-title',
    descId: 'prod-textiles-desc',
  },
  {
    id: 'home-garden',
    title: 'Home & Garden',
    desc: 'Furniture, kitchenware, bathroom fixtures, garden tools, outdoor furniture, and home décor products.',
    items: ['Furniture', 'Kitchenware', 'Bathroom Fixtures', 'Garden Tools', 'Outdoor Furniture', 'Home Décor'],
    imgId: 'prod-home-5c9a2e',
    titleId: 'prod-home-title',
    descId: 'prod-home-desc',
  },
  {
    id: 'industrial',
    title: 'Industrial & Machinery',
    desc: 'CNC machines, pumps, motors, industrial tools, safety equipment, and manufacturing components.',
    items: ['CNC Machines', 'Pumps & Motors', 'Industrial Tools', 'Safety Equipment', 'Fasteners & Hardware', 'Welding Equipment'],
    imgId: 'prod-industrial-7d4b1f',
    titleId: 'prod-industrial-title',
    descId: 'prod-industrial-desc',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, labels, boxes, bags, bottles, jars, and printing services for retail and wholesale.',
    items: ['Custom Boxes & Cartons', 'Plastic Packaging', 'Glass Bottles & Jars', 'Labels & Stickers', 'Flexible Packaging', 'Display Stands'],
    imgId: 'prod-packaging-3e8c5a',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
  },
  {
    id: 'auto-parts',
    title: 'Auto Parts & Accessories',
    desc: 'OEM and aftermarket auto parts, accessories, tires, batteries, and vehicle electronics.',
    items: ['Engine Parts', 'Body Parts', 'Interior Accessories', 'Vehicle Electronics', 'Tires & Wheels', 'Batteries'],
    imgId: 'prod-auto-6f2d9b',
    titleId: 'prod-auto-title',
    descId: 'prod-auto-desc',
  },
  {
    id: 'health-beauty',
    title: 'Health & Beauty',
    desc: 'Cosmetics, skincare, supplements, medical devices, personal care products, and salon equipment.',
    items: ['Skincare & Cosmetics', 'Hair Care Products', 'Supplements', 'Medical Devices', 'Personal Care', 'Salon Equipment'],
    imgId: 'prod-health-9a1c4e',
    titleId: 'prod-health-title',
    descId: 'prod-health-desc',
  },
  {
    id: 'building',
    title: 'Building Materials',
    desc: 'Tiles, pipes, fittings, steel, glass, insulation, and construction hardware from verified manufacturers.',
    items: ['Tiles & Flooring', 'Pipes & Fittings', 'Steel & Metal', 'Glass Products', 'Insulation Materials', 'Construction Hardware'],
    imgId: 'prod-building-4b7e2c',
    titleId: 'prod-building-title',
    descId: 'prod-building-desc',
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
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Products We Source
            </h1>
            <p className="mt-6 text-lg text-slate-200 leading-relaxed">
              We source across all major product categories from China's manufacturing hubs. If it's made in China, we can find the right supplier for you.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {categories.map((cat, idx) => (
              <div key={cat.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`}>
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <h2 id={cat.titleId} className="text-2xl md:text-3xl font-bold text-slate-800">
                    {cat.title}
                  </h2>
                  <p id={cat.descId} className="mt-4 text-slate-600 leading-relaxed">
                    {cat.desc}
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-2">
                    {cat.items.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="rounded-xl shadow-md w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Can't Find */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
            Don't See Your Product?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We source products across hundreds of categories. If it's manufactured in China, we can help you find it. Contact us with your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center mt-8 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
