import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Package } from 'lucide-react'

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED products, cables, connectors, smart devices, and electronic accessories.',
    items: ['Consumer Electronics', 'PCB & Components', 'LED Lighting', 'Smart Home Devices', 'Cables & Connectors'],
  },
  {
    id: 'home-garden',
    title: 'Home & Garden',
    desc: 'Furniture, kitchenware, home decor, garden tools, storage solutions, and household products.',
    items: ['Furniture', 'Kitchenware', 'Home Decor', 'Garden Tools', 'Storage Solutions'],
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    desc: 'Clothing, sportswear, uniforms, fabrics, accessories, and custom garment manufacturing.',
    items: ['Casual Wear', 'Sportswear', 'Workwear & Uniforms', 'Fabrics & Textiles', 'Fashion Accessories'],
  },
  {
    id: 'industrial',
    title: 'Industrial & Machinery',
    desc: 'Manufacturing equipment, tools, industrial parts, pumps, valves, and automation components.',
    items: ['CNC Machines', 'Industrial Tools', 'Pumps & Valves', 'Automation Parts', 'Safety Equipment'],
  },
  {
    id: 'auto-parts',
    title: 'Auto Parts & Accessories',
    desc: 'Automotive components, car accessories, motorcycle parts, and vehicle electronics.',
    items: ['Engine Parts', 'Car Accessories', 'Motorcycle Parts', 'Vehicle Electronics', 'Tires & Wheels'],
  },
  {
    id: 'health-beauty',
    title: 'Health & Beauty',
    desc: 'Cosmetics, skincare, personal care products, medical devices, and health supplements packaging.',
    items: ['Skincare Products', 'Cosmetics', 'Personal Care', 'Medical Devices', 'Packaging'],
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, labels, boxes, bags, printing services, and packaging machinery.',
    items: ['Custom Boxes', 'Labels & Stickers', 'Bags & Pouches', 'Printing Services', 'Packaging Machinery'],
  },
  {
    id: 'building',
    title: 'Building Materials',
    desc: 'Construction materials, hardware, plumbing, electrical fittings, and architectural products.',
    items: ['Steel & Metal', 'Plumbing Fixtures', 'Electrical Fittings', 'Tiles & Flooring', 'Hardware'],
  },
  {
    id: 'toys-sports',
    title: 'Toys & Sports',
    desc: 'Children\'s toys, outdoor sports equipment, fitness gear, and recreational products.',
    items: ['Educational Toys', 'Outdoor Sports', 'Fitness Equipment', 'Board Games', 'Inflatable Products'],
  },
]

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 id="products-title" className="text-4xl md:text-5xl font-bold text-slate-800">
              Products We Source
            </h1>
            <p id="products-subtitle" className="mt-6 text-lg text-slate-600 leading-relaxed">
              We source across 50+ product categories from China's manufacturing hubs. Whatever you need, we can find the right supplier.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video relative">
                  <img
                    data-strk-img-id={`product-cat-${cat.id}`}
                    data-strk-img={`[product-cat-${cat.id}-title] [products-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 id={`product-cat-${cat.id}-title`} className="text-lg font-semibold text-slate-800 mb-2">{cat.title}</h3>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item, idx) => (
                      <span key={idx} className="text-xs bg-slate-50 text-slate-600 px-2.5 py-1 rounded-full border border-slate-100">
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

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Package className="w-12 h-12 text-sky mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Don't See Your Product?</h2>
          <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
            We source virtually any manufactured product from China. If it's made in a factory, we can find it. Contact us with your specific requirements.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center bg-sky text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-sky-light transition-colors"
            >
              Tell Us What You Need
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
