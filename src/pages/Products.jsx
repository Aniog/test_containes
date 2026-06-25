import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle } from 'lucide-react'

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, connectors, smart home devices, and electronic accessories.',
    items: ['Consumer Electronics', 'LED Lighting', 'PCB & Components', 'Smart Home Devices', 'Cables & Connectors'],
    imgId: 'prod-electronics-img-1a2b3c',
  },
  {
    id: 'home-garden',
    title: 'Home & Garden',
    desc: 'Furniture, kitchenware, home decor, garden tools, storage solutions, and household appliances.',
    items: ['Furniture', 'Kitchenware', 'Home Decor', 'Garden Tools', 'Storage Solutions'],
    imgId: 'prod-home-img-2b3c4d',
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    desc: 'Clothing, sportswear, uniforms, fabrics, accessories, bags, and footwear for all markets.',
    items: ['Casual & Formal Wear', 'Sportswear & Activewear', 'Uniforms & Workwear', 'Bags & Accessories', 'Footwear'],
    imgId: 'prod-apparel-img-3c4d5e',
  },
  {
    id: 'industrial',
    title: 'Industrial & Machinery',
    desc: 'CNC machines, industrial equipment, tools, hardware, pumps, valves, and manufacturing components.',
    items: ['CNC Machines', 'Industrial Tools', 'Pumps & Valves', 'Hardware & Fasteners', 'Safety Equipment'],
    imgId: 'prod-industrial-img-4d5e6f',
  },
  {
    id: 'auto-parts',
    title: 'Auto Parts & Accessories',
    desc: 'OEM and aftermarket auto parts, car accessories, tires, batteries, and vehicle electronics.',
    items: ['Engine Components', 'Body Parts', 'Car Electronics', 'Interior Accessories', 'Tires & Wheels'],
    imgId: 'prod-auto-img-5e6f7g',
  },
  {
    id: 'health-beauty',
    title: 'Health & Beauty',
    desc: 'Cosmetics, skincare, personal care products, medical devices, supplements, and packaging.',
    items: ['Skincare & Cosmetics', 'Personal Care', 'Medical Devices', 'Supplements', 'Beauty Tools'],
    imgId: 'prod-beauty-img-6f7g8h',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, labels, boxes, bags, bottles, jars, and printing services for all industries.',
    items: ['Custom Boxes & Cartons', 'Plastic Packaging', 'Glass Bottles & Jars', 'Labels & Stickers', 'Flexible Packaging'],
    imgId: 'prod-packaging-img-7g8h9i',
  },
  {
    id: 'building',
    title: 'Building & Construction',
    desc: 'Building materials, tiles, sanitary ware, doors, windows, steel structures, and construction tools.',
    items: ['Tiles & Flooring', 'Sanitary Ware', 'Doors & Windows', 'Steel Structures', 'Construction Tools'],
    imgId: 'prod-building-img-8h9i0j',
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
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-3">Product Categories</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Products We Source
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              We source across dozens of product categories. If it's manufactured in China, we can find the right supplier for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[prod-${cat.id}-desc] [prod-${cat.id}-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 id={`prod-${cat.id}-title`} className="text-xl font-bold text-text-primary mb-2">{cat.title}</h2>
                  <p id={`prod-${cat.id}-desc`} className="text-text-secondary text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span key={item} className="bg-bg-alt text-text-primary text-xs font-medium px-3 py-1 rounded-full">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Can't find */}
      <section className="bg-bg-alt py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-4">Don't See Your Product?</h2>
          <p className="text-text-secondary text-lg mb-8">We source products across virtually every category. Contact us with your specific requirements and we'll let you know how we can help.</p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-lg text-base no-underline transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
