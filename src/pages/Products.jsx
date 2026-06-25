import React from 'react'
import { Link } from 'react-router-dom'
import {
  Zap, Package, Heart, Factory, Star, BarChart3, Wrench, Truck,
  ArrowRight, CheckCircle, Globe, Search, Phone
} from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import { cn } from '@/lib/utils'

const categories = [
  {
    id: 'electronics',
    icon: Zap,
    title: 'Electronics & Components',
    desc: 'Consumer electronics, IoT devices, PCBs, cables, chargers, audio equipment, and smart home devices.',
    products: ['Bluetooth speakers', 'Wireless earbuds', 'Phone accessories', 'LED lighting', 'Smart plugs', 'USB cables'],
    region: 'Shenzhen, Dongguan',
  },
  {
    id: 'home-garden',
    icon: Package,
    title: 'Home & Garden',
    desc: 'Furniture, kitchenware, home decor, lighting fixtures, gardening tools, and outdoor living products.',
    products: ['Stainless steel cookware', 'Bamboo organizers', 'LED lamps', 'Garden tools', 'Home decor', 'Storage solutions'],
    region: 'Foshan, Ningbo',
  },
  {
    id: 'apparel',
    icon: Heart,
    title: 'Apparel & Textiles',
    desc: 'Clothing, bags, fabrics, accessories, sportswear, workwear, and promotional textiles.',
    products: ['T-shirts and polos', 'Work uniforms', 'Bags and backpacks', 'Sportswear', 'Caps and hats', 'Custom embroidery'],
    region: 'Guangzhou, Quanzhou',
  },
  {
    id: 'industrial',
    icon: Factory,
    title: 'Industrial & Machinery',
    desc: 'Hand tools, power tools, auto parts, packaging machinery, industrial equipment, and spare parts.',
    products: ['Hand tools', 'Hydraulic fittings', 'Auto parts', 'Packaging machines', 'Bearings', 'Metal fabrication'],
    region: 'Yongkang, Wenzhou',
  },
  {
    id: 'consumer',
    icon: Star,
    title: 'Consumer Goods',
    desc: 'Toys, stationery, beauty products, promotional items, pet supplies, and seasonal merchandise.',
    products: ['Promotional gifts', 'Stationery sets', 'Pet accessories', 'Beauty tools', 'Toys', 'Drinkware'],
    region: 'Yiwu, Shantou',
  },
  {
    id: 'building',
    icon: Wrench,
    title: 'Building & Hardware',
    desc: 'Flooring, fasteners, construction materials, plumbing fittings, and architectural hardware.',
    products: ['Flooring tiles', 'Door hardware', 'Fasteners and screws', 'Plumbing fittings', 'Safety equipment', 'Adhesives'],
    region: 'Foshan, Wenzhou',
  },
]

const sourcingAdvantages = [
  { stat: '1,200+', label: 'Verified factories across China' },
  { stat: '40+', label: 'Countries served' },
  { stat: '98.5%', label: 'On-time delivery rate' },
  { stat: '500+', label: 'Products successfully sourced' },
]

const Products = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-white/10 text-white text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
            Product Categories
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Products We Source</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We work across China's major manufacturing regions to source a wide range of products. Each category benefits from our verified supplier network and quality control processes.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy-50 border-b border-navy-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {sourcingAdvantages.map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-3xl font-extrabold text-navy-900">{item.stat}</p>
                <p className="text-sm text-gray-500 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {categories.map((cat, idx) => (
              <div
                key={cat.id}
                id={cat.id}
                className={cn(
                  'grid lg:grid-cols-2 gap-10 items-center',
                  idx % 2 === 1 && 'lg:[direction:rtl]'
                )}
              >
                <div className={cn(idx % 2 === 1 && 'lg:[direction:ltr]')}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 bg-navy-100 rounded-xl flex items-center justify-center">
                      <cat.icon className="w-6 h-6 text-navy-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-navy-900">{cat.title}</h2>
                      <span className="text-xs text-gray-400">Key region: {cat.region}</span>
                    </div>
                  </div>
                  <p className="text-gray-500 leading-relaxed mb-5">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.products.map((p) => (
                      <span key={p} className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-sm text-gray-600 rounded-lg">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={cn(
                  'h-64 bg-gradient-to-br from-navy-50 to-navy-100 rounded-2xl flex items-center justify-center',
                  idx % 2 === 1 && 'lg:[direction:ltr]'
                )}>
                  <div className="text-center">
                    <cat.icon className="w-16 h-16 text-navy-200 mx-auto mb-3" />
                    <p className="text-navy-400 text-sm font-medium">{cat.title}</p>
                    <p className="text-navy-300 text-xs">{cat.region}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom sourcing */}
      <section className="py-16 bg-navy-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">Don't See Your Product?</h2>
          <p className="text-gray-500 mb-6">
            We source across all manufacturing categories. If your product is made in China, we can find the right factory for it.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors"
          >
            Tell Us What You Need <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Products
