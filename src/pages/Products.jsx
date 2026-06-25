import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle } from 'lucide-react'

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    items: ['LED lighting', 'Consumer electronics', 'PCB assemblies', 'Cables & connectors', 'Smart home devices'],
    imgId: 'prod-electronics-4a8b2c',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
    desc: 'Shenzhen and Dongguan manufacturing hubs',
  },
  {
    id: 'home-garden',
    title: 'Home & Garden',
    items: ['Kitchenware', 'Storage solutions', 'Garden tools', 'Bathroom accessories', 'Cleaning products'],
    imgId: 'prod-home-5c9d3e',
    titleId: 'prod-home-title',
    descId: 'prod-home-desc',
    desc: 'Yiwu and Zhejiang production clusters',
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    items: ['Workwear & uniforms', 'Sportswear', 'Fashion accessories', 'Fabrics & materials', 'Bags & luggage'],
    imgId: 'prod-apparel-6d0e4f',
    titleId: 'prod-apparel-title',
    descId: 'prod-apparel-desc',
    desc: 'Guangzhou and Fujian textile centers',
  },
  {
    id: 'industrial',
    title: 'Industrial Equipment',
    items: ['Machinery parts', 'Tools & hardware', 'Pumps & valves', 'Electrical equipment', 'Safety gear'],
    imgId: 'prod-industrial-7e1f5g',
    titleId: 'prod-industrial-title',
    descId: 'prod-industrial-desc',
    desc: 'Jiangsu and Zhejiang industrial zones',
  },
  {
    id: 'auto-parts',
    title: 'Auto Parts & Accessories',
    items: ['Engine components', 'Body parts', 'Interior accessories', 'Tires & wheels', 'Car electronics'],
    imgId: 'prod-auto-8f2g6h',
    titleId: 'prod-auto-title',
    descId: 'prod-auto-desc',
    desc: 'Guangzhou and Chongqing auto clusters',
  },
  {
    id: 'health-beauty',
    title: 'Health & Beauty',
    items: ['Skincare products', 'Hair care tools', 'Medical devices', 'Fitness equipment', 'Supplements packaging'],
    imgId: 'prod-health-9g3h7i',
    titleId: 'prod-health-title',
    descId: 'prod-health-desc',
    desc: 'Shanghai and Guangzhou beauty hubs',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    items: ['Custom boxes', 'Labels & stickers', 'Plastic packaging', 'Paper products', 'Display stands'],
    imgId: 'prod-packaging-0h4i8j',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
    desc: 'Dongguan and Wenzhou printing centers',
  },
  {
    id: 'building',
    title: 'Building Materials',
    items: ['Tiles & flooring', 'Plumbing fixtures', 'Lighting fixtures', 'Steel & aluminum', 'Glass products'],
    imgId: 'prod-building-1i5j9k',
    titleId: 'prod-building-title',
    descId: 'prod-building-desc',
    desc: 'Foshan and Hebei material markets',
  },
]

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Product Categories</p>
            <h1 id="products-page-title" className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Products We Source
            </h1>
            <p id="products-page-subtitle" className="text-white/70 text-lg">
              We source across all major product categories from China's top manufacturing regions. If it's made in China, we can find it.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-surface rounded-xl border border-slate-200 overflow-hidden">
                <div className="h-48 relative">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}] [products-page-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 id={cat.titleId} className="text-xl font-bold text-slate-900 mb-1">{cat.title}</h3>
                  <p id={cat.descId} className="text-slate-500 text-sm mb-4">{cat.desc}</p>
                  <ul className="space-y-2">
                    {cat.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
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

      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Don't See Your Product?</h2>
          <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
            We source virtually any product manufactured in China. Send us your requirements and we'll find the right supplier.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-7 py-3.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors no-underline"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Products
