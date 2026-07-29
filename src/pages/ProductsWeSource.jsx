import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Search } from 'lucide-react'
import SourcingInquiryForm from '@/components/SourcingInquiryForm'

const categories = [
  {
    name: 'Electronics & Components',
    items: [
      'Consumer electronics (phones, tablets, accessories)',
      'PCB assemblies and electronic components',
      'LED lighting and displays',
      'Smart home devices',
      'Audio and video equipment',
      'Cables, connectors, and adapters',
    ],
  },
  {
    name: 'Machinery & Industrial Equipment',
    items: [
      'CNC machines and tooling',
      'Packaging machinery',
      'Industrial pumps and valves',
      'Construction equipment',
      'Agricultural machinery',
      'Automation and robotics components',
    ],
  },
  {
    name: 'Textiles & Apparel',
    items: [
      'Garments and clothing',
      'Fabrics and raw materials',
      'Home textiles (bedding, towels)',
      'Workwear and uniforms',
      'Bags and luggage',
      'Footwear',
    ],
  },
  {
    name: 'Home & Garden Products',
    items: [
      'Furniture and home decor',
      'Kitchenware and cookware',
      'Garden tools and equipment',
      'Bathroom fixtures',
      'Storage and organization',
      'Outdoor furniture',
    ],
  },
  {
    name: 'Automotive Parts',
    items: [
      'Engine components',
      'Body parts and accessories',
      'Electrical systems',
      'Tires and wheels',
      'Interior accessories',
      'Aftermarket parts',
    ],
  },
  {
    name: 'Packaging Materials',
    items: [
      'Custom packaging boxes',
      'Labels and stickers',
      'Plastic and glass containers',
      'Protective packaging',
      'Shipping materials',
      'Eco-friendly packaging',
    ],
  },
  {
    name: 'Consumer Goods',
    items: [
      'Toys and games',
      'Sports and fitness equipment',
      'Beauty and personal care',
      'Pet supplies',
      'Office supplies',
      'Gift items and promotional products',
    ],
  },
  {
    name: 'Building Materials',
    items: [
      'Tiles and flooring',
      'Doors and windows',
      'Hardware and fasteners',
      'Plumbing fixtures',
      'Steel and metal products',
      'Insulation materials',
    ],
  },
]

export default function ProductsWeSource() {
  const containerRef = useRef(null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cat.items.some((item) => item.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Products We Source</h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            We source across multiple industries and product categories.
            If you do not see your product listed, contact us anyway. We likely can help.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="bg-white border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search products or categories..."
              className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-600">No products found matching your search.</p>
              <p className="text-sm text-slate-500 mt-2">Try a different search term or contact us directly.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredCategories.map((cat, i) => (
                <div key={i} className="bg-white rounded-xl border border-slate-200 p-6">
                  <h2 className="text-lg font-bold text-slate-900 mb-4">{cat.name}</h2>
                  <ul className="space-y-2">
                    {cat.items.map((item, j) => (
                      <li key={j} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Do Not See Your Product?</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We source many products beyond the categories listed here. Tell us what you need and we will let you know if we can help.
              </p>
              <Link to="/services" className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800 transition-colors">
                View Our Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <SourcingInquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
