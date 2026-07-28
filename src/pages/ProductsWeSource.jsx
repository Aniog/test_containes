import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import loadStrkImgConfig from '../strk-img-config.js'
import { Package, CheckCircle } from 'lucide-react'

const categories = [
  {
    name: 'Electronics & Components',
    items: ['Consumer electronics', 'PCBs and components', 'LED lighting', 'Batteries and power supplies', 'Sensors and IoT devices'],
    imgId: 'cat-electronics',
  },
  {
    name: 'Home & Kitchen Products',
    items: ['Kitchen appliances', 'Cookware and bakeware', 'Home storage solutions', 'Cleaning products', 'Small household appliances'],
    imgId: 'cat-home-kitchen',
  },
  {
    name: 'Apparel & Textiles',
    items: ['Garments and fashion', 'Workwear and uniforms', 'Fabrics and materials', 'Accessories', 'Bags and luggage'],
    imgId: 'cat-apparel',
  },
  {
    name: 'Industrial Machinery',
    items: ['Manufacturing equipment', 'Packaging machinery', 'CNC and machining tools', 'Agricultural machinery', 'Construction equipment'],
    imgId: 'cat-machinery',
  },
  {
    name: 'Packaging & Materials',
    items: ['Corrugated boxes', 'Plastic packaging', 'Glass and metal containers', 'Flexible packaging', 'Labels and stickers'],
    imgId: 'cat-packaging',
  },
  {
    name: 'Furniture & Home Decor',
    items: ['Indoor furniture', 'Outdoor furniture', 'Office furniture', 'Home decor items', 'Lighting fixtures'],
    imgId: 'cat-furniture',
  },
  {
    name: 'Auto Parts & Accessories',
    items: ['Engine components', 'Body parts', 'Interior accessories', 'Car electronics', 'Maintenance tools'],
    imgId: 'cat-auto',
  },
  {
    name: 'Medical & Healthcare',
    items: ['Medical devices', 'Lab equipment', 'Personal protective equipment', 'Healthcare consumables', 'Rehabilitation products'],
    imgId: 'cat-medical',
  },
  {
    name: 'Toys & Sporting Goods',
    items: ['Educational toys', 'Outdoor sports equipment', 'Fitness equipment', 'Board games', 'Camping gear'],
    imgId: 'cat-toys',
  },
  {
    name: 'Beauty & Personal Care',
    items: ['Cosmetics and skincare', 'Hair care products', 'Personal grooming tools', 'Essential oils', 'Packaging for beauty products'],
    imgId: 'cat-beauty',
  },
  {
    name: 'Building & Construction',
    items: ['Building materials', 'Hardware and tools', 'Pipes and fittings', 'Electrical supplies', 'Safety equipment'],
    imgId: 'cat-construction',
  },
  {
    name: 'Food & Beverage Equipment',
    items: ['Food processing machinery', 'Beverage dispensing equipment', 'Commercial kitchen equipment', 'Packaging for food', 'Refrigeration units'],
    imgId: 'cat-food',
  },
]

export default function ProductsWeSource() {
  const containerRef = useRef(null)

  useEffect(() => {
    let cancelled = false
    loadStrkImgConfig().then((cfg) => {
      if (!cancelled && containerRef.current) {
        return ImageHelper.loadImages(cfg, containerRef.current)
      }
    })
    return () => { cancelled = true }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Products We Source</h1>
            <p className="mt-4 text-lg text-slate-600">
              We source across a wide range of industries. If it is manufactured in China, we can help you find the right supplier.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((cat, i) => (
              <div key={i} className="border border-slate-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div
                  data-strk-bg-id={cat.imgId}
                  data-strk-bg={`[cat-title-${i}] [cat-header]`}
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="800"
                  className="bg-slate-200 h-48 bg-cover bg-center"
                  
                />
                <div className="p-6">
                  <h2 id={`cat-title-${i}`} className="text-lg font-bold text-slate-900 mb-3">{cat.name}</h2>
                  <ul className="space-y-2">
                    {cat.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 id="cat-header" className="text-3xl font-bold text-slate-900 tracking-tight">Product Not Listed?</h2>
            <p className="mt-4 text-lg text-slate-600">
              We source across virtually all manufacturing categories. Contact us and we will find the right supplier for your specific product.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="bg-red-600 text-white px-8 py-3.5 rounded-md text-base font-semibold hover:bg-red-700 transition-colors inline-block"
              >
                Get a Free Sourcing Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}