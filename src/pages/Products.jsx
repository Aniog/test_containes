import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, connectors, smart devices, and electronic accessories.',
    items: ['Consumer Electronics', 'PCB & Components', 'LED Lighting', 'Smart Home Devices', 'Cables & Connectors'],
    imgId: 'prod-electronics-img-a1b2c3',
  },
  {
    id: 'textiles',
    title: 'Textiles & Apparel',
    desc: 'Clothing, fabrics, sportswear, workwear, accessories, and custom fashion manufacturing.',
    items: ['Casual & Fashion Wear', 'Sportswear & Activewear', 'Workwear & Uniforms', 'Fabrics & Textiles', 'Bags & Accessories'],
    imgId: 'prod-textiles-img-d4e5f6',
  },
  {
    id: 'home-garden',
    title: 'Home & Garden',
    desc: 'Furniture, kitchenware, home decor, garden tools, outdoor furniture, and household products.',
    items: ['Furniture', 'Kitchenware', 'Home Decor', 'Garden Tools', 'Outdoor Furniture'],
    imgId: 'prod-home-img-g7h8i9',
  },
  {
    id: 'industrial',
    title: 'Industrial & Machinery',
    desc: 'CNC parts, industrial equipment, tools, hardware, pumps, valves, and manufacturing machinery.',
    items: ['CNC Machined Parts', 'Industrial Equipment', 'Tools & Hardware', 'Pumps & Valves', 'Packaging Machinery'],
    imgId: 'prod-industrial-img-j1k2l3',
  },
  {
    id: 'auto-parts',
    title: 'Auto Parts & Accessories',
    desc: 'Automotive components, car accessories, EV parts, tires, and aftermarket products.',
    items: ['Engine Components', 'Car Accessories', 'EV Parts', 'Tires & Wheels', 'Aftermarket Parts'],
    imgId: 'prod-auto-img-m4n5o6',
  },
  {
    id: 'health-beauty',
    title: 'Health & Beauty',
    desc: 'Cosmetics, skincare, supplements, medical devices, personal care, and packaging.',
    items: ['Skincare & Cosmetics', 'Supplements', 'Medical Devices', 'Personal Care', 'Beauty Tools'],
    imgId: 'prod-health-img-p7q8r9',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, labels, boxes, bags, bottles, and printing services for all industries.',
    items: ['Custom Boxes', 'Labels & Stickers', 'Bottles & Containers', 'Bags & Pouches', 'Display Packaging'],
    imgId: 'prod-packaging-img-s1t2u3',
  },
  {
    id: 'building',
    title: 'Building Materials',
    desc: 'Construction materials, tiles, plumbing, electrical fittings, steel, and architectural hardware.',
    items: ['Tiles & Flooring', 'Plumbing Fixtures', 'Electrical Fittings', 'Steel & Metal', 'Architectural Hardware'],
    imgId: 'prod-building-img-v4w5x6',
  },
]

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-slate-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">Product Categories</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mt-3 tracking-tight">
              Products We Source
            </h1>
            <p className="text-slate-300 text-lg mt-4 leading-relaxed">
              We source across dozens of industries. If it's manufactured in China, we can find the right supplier for you.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200 hover:shadow-md transition-shadow">
                <div className="aspect-[2/1] relative">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[prod-${cat.id}-title] [prod-${cat.id}-desc]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 id={`prod-${cat.id}-title`} className="text-xl font-bold text-slate-900 mb-2">{cat.title}</h3>
                  <p id={`prod-${cat.id}-desc`} className="text-slate-500 text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span key={item} className="bg-white text-slate-700 text-xs font-medium px-3 py-1 rounded-full border border-slate-200">
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

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Don't See Your Product Category?
          </h2>
          <p className="text-slate-500 text-lg mb-8">
            We source virtually any product manufactured in China. Contact us with your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Products
