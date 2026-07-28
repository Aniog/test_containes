import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Cpu, Shirt, Settings, Home, Package, TreePine, Car, Heart,
  ArrowRight, CheckCircle, Mail, Filter
} from 'lucide-react'

const SectionHeader = ({ eyebrow, title, description, centered = true }) => (
  <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : ''}`}>
    {eyebrow && <p className="text-blue-700 font-semibold text-sm uppercase tracking-wider mb-3">{eyebrow}</p>}
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
    {description && <p className="text-slate-600 text-lg leading-relaxed">{description}</p>}
  </div>
)

const categories = [
  {
    id: 'electronics',
    icon: Cpu,
    name: 'Electronics & Components',
    description: 'Consumer electronics, PCBs, smart devices, and electronic components from verified manufacturers.',
    examples: [
      'Consumer Electronics',
      'PCBs & Components',
      'Smart Devices',
      'LED Lighting',
      'Power Banks',
      'Cables & Connectors',
    ],
    color: 'blue',
  },
  {
    id: 'textiles',
    icon: Shirt,
    name: 'Textiles & Apparel',
    description: 'Garments, fabrics, and accessories from established textile hubs.',
    examples: [
      'Casual Wear',
      'Sportswear',
      'Formal Apparel',
      'Fabrics & Materials',
      'Bags & Luggage',
      'Fashion Accessories',
    ],
    color: 'purple',
  },
  {
    id: 'machinery',
    icon: Settings,
    name: 'Machinery & Industrial',
    description: 'Industrial equipment, mechanical parts, and precision components.',
    examples: [
      'Industrial Equipment',
      'Mechanical Parts',
      'Precision Components',
      'Agricultural Machinery',
      'Construction Equipment',
      'CNC Machining',
    ],
    color: 'slate',
  },
  {
    id: 'home',
    icon: Home,
    name: 'Home & Garden',
    description: 'Furniture, home décor, and outdoor garden products.',
    examples: [
      'Furniture',
      'Home Décor',
      'Kitchenware',
      'Bathroom Products',
      'Garden Equipment',
      'Outdoor Living',
    ],
    color: 'teal',
  },
  {
    id: 'packaging',
    icon: Package,
    name: 'Packaging & Printing',
    description: 'Custom packaging solutions and printed materials.',
    examples: [
      'Paper Packaging',
      'Plastic Packaging',
      'Custom Labels',
      'Printed Materials',
      'Promotional Items',
      'eco-Friendly Options',
    ],
    color: 'amber',
  },
  {
    id: 'sports',
    icon: TreePine,
    name: 'Sports & Outdoor',
    description: 'Fitness equipment, camping gear, and outdoor products.',
    examples: [
      'Fitness Equipment',
      'Camping Gear',
      'Hiking Products',
      'Cycling Equipment',
      'Water Sports',
      'Team Sports',
    ],
    color: 'green',
  },
  {
    id: 'automotive',
    icon: Car,
    name: 'Automotive Parts',
    description: 'Vehicle parts, accessories, and automotive components.',
    examples: [
      'Auto Parts',
      'Car Accessories',
      'Motorcycle Parts',
      'EV Components',
      'Tool Sets',
      'Cleaning Products',
    ],
    color: 'red',
  },
  {
    id: 'healthcare',
    icon: Heart,
    name: 'Health & Beauty',
    description: 'Personal care products, beauty items, and health supplements.',
    examples: [
      'Skincare Products',
      'Hair Care',
      'Makeup & Cosmetics',
      'Health Supplements',
      'Medical Supplies',
      'Wellness Products',
    ],
    color: 'pink',
  },
]

const colorClasses = {
  blue: { bg: 'bg-blue-100', icon: 'text-blue-700', badge: 'bg-blue-100 text-blue-800' },
  purple: { bg: 'bg-purple-100', icon: 'text-purple-700', badge: 'bg-purple-100 text-purple-800' },
  slate: { bg: 'bg-slate-100', icon: 'text-slate-700', badge: 'bg-slate-100 text-slate-800' },
  teal: { bg: 'bg-teal-100', icon: 'text-teal-700', badge: 'bg-teal-100 text-teal-800' },
  amber: { bg: 'bg-amber-100', icon: 'text-amber-700', badge: 'bg-amber-100 text-amber-800' },
  green: { bg: 'bg-green-100', icon: 'text-green-700', badge: 'bg-green-100 text-green-800' },
  red: { bg: 'bg-red-100', icon: 'text-red-700', badge: 'bg-red-100 text-red-800' },
  pink: { bg: 'bg-pink-100', icon: 'text-pink-700', badge: 'bg-pink-100 text-pink-800' },
}

const Products = () => {
  const containerRef = useRef(null)
  const [activeFilter, setActiveFilter] = useState('all')

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const filteredCategories = activeFilter === 'all' 
    ? categories 
    : categories.filter(cat => cat.id === activeFilter)

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-slate-900 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            data-strk-bg-id="products-hero-bg"
            data-strk-bg="manufactured products warehouse storage"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1920"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Products We Source</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Products We Source</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            We have established supplier networks across major manufacturing sectors in China. From electronics to textiles, machinery to consumer goods, we can help you source quality products.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            eyebrow="Product Categories"
            title="What We Source"
            description="Browse our main product categories or tell us what you need if you don't see it listed."
          />

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'all'
                  ? 'bg-blue-800 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Categories
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === cat.id
                    ? 'bg-blue-800 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`${colorClasses[category.color].bg} p-8`}>
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <category.icon className={`w-8 h-8 ${colorClasses[category.color].icon}`} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{category.name}</h3>
                  <p className="text-slate-600 text-sm mb-4">{category.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.examples.slice(0, 4).map((example, index) => (
                      <span
                        key={index}
                        className={`text-xs font-medium px-2 py-1 rounded ${colorClasses[category.color].badge}`}
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Found Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-12 text-center shadow-lg border border-slate-100">
            <Package className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Don't See Your Product?
            </h2>
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
              Our supplier network extends beyond these categories. If you have specific products in mind, contact us and we'll find the right manufacturers for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                Request Custom Sourcing
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="mailto:info@ssourcing.cn"
                className="border-2 border-blue-800 text-blue-800 hover:bg-blue-50 px-8 py-4 rounded-md font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Hubs */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            eyebrow="Our Network"
            title="Manufacturing Hubs We Serve"
            description="We work with suppliers across China's major industrial regions."
          />
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { city: 'Shenzhen', province: 'Guangdong', specialty: 'Electronics, Tech, Smart Devices' },
              { city: 'Yiwu', province: 'Zhejiang', specialty: 'Small Commodities, General Goods' },
              { city: 'Hangzhou', province: 'Zhejiang', specialty: 'E-commerce Products, Textiles' },
              { city: 'Guangzhou', province: 'Guangdong', specialty: 'Fashion, Leather, Trade Hub' },
              { city: 'Ningbo', province: 'Zhejiang', specialty: 'Machinery, Tools, Hardware' },
              { city: 'Foshan', province: 'Guangdong', specialty: 'Furniture, Ceramics, Lighting' },
              { city: 'Qingdao', province: 'Shandong', specialty: 'Machinery, Rubber, Packaging' },
              { city: 'Dongguan', province: 'Guangdong', specialty: 'Electronics, Garments, Plastics' },
            ].map((hub, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-colors">
                <h3 className="text-lg font-bold mb-1">{hub.city}</h3>
                <p className="text-orange-500 text-sm font-medium mb-2">{hub.province}</p>
                <p className="text-slate-400 text-sm">{hub.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Source Your Products?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Tell us what you're looking for and we'll match you with qualified suppliers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="mailto:info@ssourcing.cn"
              className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
