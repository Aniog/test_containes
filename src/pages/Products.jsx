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
    examples: ['Bluetooth speakers', 'USB cables', 'LED panels', 'Smart plugs', 'PCB assemblies'],
    imgId: 'prod-page-elec-1a2b3c',
  },
  {
    id: 'textiles',
    title: 'Textiles & Apparel',
    desc: 'Clothing, sportswear, uniforms, fabrics, home textiles, bags, and fashion accessories.',
    examples: ['T-shirts & polos', 'Workwear & uniforms', 'Bed linen', 'Backpacks', 'Yoga wear'],
    imgId: 'prod-page-text-4d5e6f',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Goods',
    desc: 'Office furniture, home furniture, kitchenware, bathroom accessories, and decorative items.',
    examples: ['Office desks & chairs', 'Sofas', 'Kitchen utensils', 'Bathroom fixtures', 'Candles & decor'],
    imgId: 'prod-page-furn-7g8h9i',
  },
  {
    id: 'machinery',
    title: 'Machinery & Equipment',
    desc: 'Industrial machinery, CNC machines, packaging equipment, agricultural tools, and spare parts.',
    examples: ['CNC routers', 'Packaging machines', 'Compressors', 'Conveyor systems', 'Pumps & valves'],
    imgId: 'prod-page-mach-0j1k2l',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, labels, corrugated boxes, plastic containers, and printing services.',
    examples: ['Custom boxes', 'Product labels', 'Plastic bottles', 'Paper bags', 'Blister packaging'],
    imgId: 'prod-page-pack-3m4n5o',
  },
  {
    id: 'auto-parts',
    title: 'Auto Parts & Accessories',
    desc: 'Aftermarket auto parts, car accessories, tires, filters, and vehicle electronics.',
    examples: ['Brake pads', 'Car mats', 'LED headlights', 'Oil filters', 'Dash cameras'],
    imgId: 'prod-page-auto-6p7q8r',
  },
  {
    id: 'building',
    title: 'Building Materials',
    desc: 'Tiles, sanitary ware, steel products, glass, doors, windows, and construction hardware.',
    examples: ['Ceramic tiles', 'Steel pipes', 'Aluminum profiles', 'Door handles', 'Solar panels'],
    imgId: 'prod-page-build-9s0t1u',
  },
  {
    id: 'health-beauty',
    title: 'Health & Beauty',
    desc: 'Cosmetics, skincare, supplements, medical devices, and personal care products.',
    examples: ['Skincare products', 'Hair tools', 'Supplements', 'Face masks', 'Massage devices'],
    imgId: 'prod-page-health-2v3w4x',
  },
  {
    id: 'toys-sports',
    title: 'Toys & Sports',
    desc: 'Children\'s toys, outdoor sports equipment, fitness gear, and recreational products.',
    examples: ['Plush toys', 'Fitness bands', 'Camping gear', 'Bicycles', 'Board games'],
    imgId: 'prod-page-toys-5y6z7a',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 id="products-page-title" className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Products We Source
          </h1>
          <p id="products-page-subtitle" className="text-lg text-slate-300 max-w-2xl">
            We source across dozens of product categories. If it's manufactured in China, we can help you find the right supplier.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition">
                <div className="h-48 overflow-hidden">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[prod-page-${cat.id}-title] [products-page-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 id={`prod-page-${cat.id}-title`} className="text-lg font-semibold text-brand-navy mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-3">{cat.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.examples.map((ex) => (
                      <span key={ex} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
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

      <section className="py-16 md:py-20 bg-brand-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-navy mb-4">Don't See Your Product?</h2>
          <p className="text-slate-600 mb-8">We source products across virtually every manufacturing category in China. Contact us with your specific requirements.</p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition no-underline"
          >
            Tell Us What You Need <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
