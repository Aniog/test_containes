import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const categories = [
    {
      id: 'electronics',
      title: 'Electronics & Components',
      items: ['Consumer electronics', 'PCBs and circuit boards', 'Power supplies and adapters', 'Cables and connectors', 'LED lighting products', 'Smart home devices'],
      desc: 'Consumer electronics, components, and electrical products'
    },
    {
      id: 'home',
      title: 'Home & Kitchen',
      items: ['Kitchen appliances', 'Cookware and bakeware', 'Home textiles', 'Furniture and decor', 'Storage solutions', 'Cleaning equipment'],
      desc: 'Household goods, appliances, and home improvement products'
    },
    {
      id: 'industrial',
      title: 'Industrial Equipment',
      items: ['Machinery components', 'Hand and power tools', 'Safety equipment', 'Material handling', 'Fasteners and hardware', 'Welding supplies'],
      desc: 'Tools, machinery parts, and industrial supplies'
    },
    {
      id: 'apparel',
      title: 'Apparel & Textiles',
      items: ['Clothing and garments', 'Fabrics and materials', 'Footwear', 'Bags and accessories', 'Workwear and uniforms', 'Home textiles'],
      desc: 'Fashion, workwear, and textile products'
    },
    {
      id: 'auto',
      title: 'Automotive Parts',
      items: ['OEM components', 'Aftermarket accessories', 'Replacement parts', 'Car care products', 'Tires and wheels', 'Interior accessories'],
      desc: 'Vehicle components and automotive accessories'
    },
    {
      id: 'packaging',
      title: 'Packaging Materials',
      items: ['Corrugated boxes', 'Labels and stickers', 'Protective packaging', 'Retail displays', 'Shipping supplies', 'Custom packaging'],
      desc: 'Packaging solutions for various industries'
    },
    {
      id: 'health',
      title: 'Health & Personal Care',
      items: ['Medical devices', 'Personal care products', 'Fitness equipment', 'Beauty tools', 'Health supplements', 'Hygiene products'],
      desc: 'Healthcare, wellness, and personal care items'
    },
    {
      id: 'outdoor',
      title: 'Outdoor & Sports',
      items: ['Camping equipment', 'Sports gear', 'Outdoor furniture', 'Garden tools', 'Fitness accessories', 'Recreational products'],
      desc: 'Outdoor, sports, and recreational equipment'
    },
  ]

  return (
    <div ref={containerRef} className="max-w-7xl mx-auto px-6 py-16">
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl font-semibold text-[#0F2942] mb-4">Products We Source</h1>
        <p className="text-xl text-[#64748B]">We regularly source across these product categories for clients worldwide. Contact us for categories not listed here.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {categories.map((cat, idx) => (
          <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="h-48 relative">
              <img
                data-strk-img-id={`cat-${cat.id}`}
                data-strk-img={`[cat-${cat.id}-desc] [cat-${cat.id}-title] sourcing products`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
              <div className="absolute bottom-0 p-6 text-white">
                <h3 id={`cat-${cat.id}-title`} className="font-semibold text-2xl mb-1">{cat.title}</h3>
                <p id={`cat-${cat.id}-desc`} className="text-sm text-gray-200">{cat.desc}</p>
              </div>
            </div>
            <div className="p-6">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-sm text-[#1E293B]">
                {cat.items.map((item, i) => (
                  <li key={i} className="py-1">• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#F8FAFC] rounded-xl p-10 text-center">
        <h2 className="text-2xl font-semibold text-[#0F2942] mb-3">Don't see your product category?</h2>
        <p className="text-[#64748B] mb-6">We source across many additional categories. Tell us what you need.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#3A8A7B] text-white font-medium rounded-lg hover:bg-[#2F6F63]">
          Inquire About Your Product
        </Link>
      </div>
    </div>
  )
}