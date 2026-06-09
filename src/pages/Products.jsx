import { Link } from 'react-router-dom'
import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react'

const categories = [
  {
    icon: '🏠',
    name: 'Home & Kitchen',
    desc: 'Cookware, kitchen gadgets, storage solutions, home decor, furniture, textiles, and lighting.',
    products: ['Stainless steel cookware sets', 'Silicone kitchen utensils', 'Food storage containers', 'Decorative vases and planters', 'Cotton and linen tablecloths', 'LED desk lamps'],
  },
  {
    icon: '📱',
    name: 'Electronics & Gadgets',
    desc: 'Consumer electronics, mobile accessories, smart home devices, IoT products, and audio equipment.',
    products: ['Wireless Bluetooth earbuds', 'USB-C charging cables and hubs', 'Smart plugs and switches', 'Phone cases and screen protectors', 'Portable Bluetooth speakers', 'Smartwatch accessories'],
  },
  {
    icon: '👗',
    name: 'Apparel & Textiles',
    desc: 'Clothing, bags, footwear, accessories, fabrics, and sportswear for men, women, and children.',
    products: ['Custom T-shirts and hoodies', 'Denim jeans and jackets', 'Canvas and leather bags', 'Athletic and yoga wear', 'Baby and children clothing', 'Bedding and bath textiles'],
  },
  {
    icon: '🧸',
    name: 'Toys, Gifts & Stationery',
    desc: 'Plush toys, educational toys, promotional gifts, stationery, and seasonal decorations.',
    products: ['Plush stuffed animals', 'Custom promotional merchandise', 'Wooden educational toys', 'Notebooks and planners', 'Christmas and holiday decor', 'Corporate gift sets'],
  },
  {
    icon: '🏗️',
    name: 'Hardware & Industrial',
    desc: 'Power tools, hand tools, fasteners, building materials, machinery parts, and industrial supplies.',
    products: ['Cordless power drills', 'Stainless steel fasteners', 'LED industrial lighting', 'Hydraulic hose fittings', 'Aluminum extrusion profiles', 'PPE and safety equipment'],
  },
  {
    icon: '⚽',
    name: 'Sports & Outdoor',
    desc: 'Fitness equipment, camping gear, sports accessories, bicycles, and outdoor recreation products.',
    products: ['Resistance bands and yoga mats', 'Camping tents and sleeping bags', 'Fishing rods and tackle boxes', 'Bicycle parts and accessories', 'Hiking backpacks', 'Water bottles and hydration packs'],
  },
  {
    icon: '💄',
    name: 'Beauty & Personal Care',
    desc: 'Cosmetics, skincare products, hair tools, beauty accessories, and personal grooming items.',
    products: ['Makeup brush sets', 'Electric facial cleansing brushes', 'Hair straighteners and curlers', 'Nail art and manicure kits', 'Bamboo toothbrushes', 'Cosmetic bags and organizers'],
  },
  {
    icon: '🏥',
    name: 'Medical & Health',
    desc: 'Medical supplies, PPE, health monitoring devices, rehabilitation equipment, and wellness products.',
    products: ['Disposable face masks', 'Digital blood pressure monitors', 'Hot and cold therapy packs', 'Ergonomic office chairs', 'Air purifiers and humidifiers', 'First aid kits and supplies'],
  },
  {
    icon: '🚗',
    name: 'Automotive & Accessories',
    desc: 'Car accessories, replacement parts, tools, electronics, and detailing products.',
    products: ['Car phone mounts and chargers', 'LED headlight bulbs', 'Car floor mats', 'Diagnostic scan tools', 'Car wash and detailing kits', 'Dash cameras'],
  },
  {
    icon: '🐾',
    name: 'Pet Supplies',
    desc: 'Pet toys, grooming tools, beds, accessories, and feeding products for dogs, cats, and small pets.',
    products: ['Pet grooming clippers', 'Memory foam pet beds', 'Interactive dog toys', 'Collapsible pet bowls', 'Cat scratching posts', 'Pet carriers and backpacks'],
  },
  {
    icon: '🍽️',
    name: 'Food & Beverage Packaging',
    desc: 'Disposable containers, bottles, cups, utensils, and custom packaging for food businesses.',
    products: ['Biodegradable takeaway containers', 'Custom printed coffee cups', 'Glass jars with lids', 'Bamboo cutlery sets', 'Vacuum insulated bottles', 'Silicone food storage bags'],
  },
  {
    icon: '💡',
    name: 'Renewable Energy',
    desc: 'Solar panels, batteries, LED lighting, inverters, and energy-saving products.',
    products: ['Portable solar panels', 'Lithium battery packs', 'Solar garden lights', 'LED panel lights', 'Mini wind turbines', 'Battery management systems'],
  },
]

export default function Products() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold-400 font-semibold text-sm tracking-wide uppercase mb-4">Products We Source</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              We Source Across 20+ Industries
            </h1>
            <p className="text-xl text-brand-200 leading-relaxed">
              From consumer goods to industrial components, we have the expertise to find the right manufacturer for your product category.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md hover:border-brand-200 transition-all">
                <span className="text-3xl mb-3 block">{cat.icon}</span>
                <h2 className="text-xl font-bold text-slate-900 mb-2">{cat.name}</h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{cat.desc}</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-xs font-semibold text-slate-400 uppercase mb-2">Example Products</p>
                  <ul className="space-y-1.5">
                    {cat.products.map((p, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Don't See It */}
      <section className="py-16 bg-brand-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Don't See Your Product?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            These are just examples. We source across virtually all manufacturing categories. If it's made in China, we can help you find the right supplier.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg">
              Tell Us What You Need
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:+8613800000000" className="inline-flex items-center justify-center gap-2 border-2 border-brand-200 hover:border-brand-600 text-brand-700 hover:text-brand-600 font-semibold px-8 py-4 rounded-lg transition-colors">
              <Phone className="w-5 h-5" />
              Schedule a Call
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
