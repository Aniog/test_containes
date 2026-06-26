import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Cpu,
  Shirt,
  Home,
  Cog,
  Package,
  ToyBrick,
  Car,
  Heart,
  UtensilsCrossed,
  Lightbulb,
  Dumbbell,
  Baby,
  Watch,
  Music,
  PenTool,
  ShoppingBag,
} from 'lucide-react'

const categories = [
  {
    icon: Cpu,
    title: 'Electronics & Components',
    description: 'Consumer electronics, PCBs, cables, connectors, LED products, smart devices, and electronic components.',
    examples: ['Smartphones & accessories', 'LED lighting', 'PCB assemblies', 'Cables & connectors', 'Smart home devices'],
  },
  {
    icon: Shirt,
    title: 'Textiles & Apparel',
    description: 'Clothing, fabrics, footwear, accessories, and textile products for fashion and industrial use.',
    examples: ['Men\'s & women\'s clothing', 'Sportswear', 'Fabrics & materials', 'Footwear', 'Bags & accessories'],
  },
  {
    icon: Home,
    title: 'Home & Garden Products',
    description: 'Furniture, kitchenware, garden tools, home decor, and household items.',
    examples: ['Furniture', 'Kitchen utensils', 'Garden tools', 'Home decor', 'Storage solutions'],
  },
  {
    icon: Cog,
    title: 'Machinery & Industrial Parts',
    description: 'Industrial machinery, CNC parts, pumps, valves, and manufacturing equipment.',
    examples: ['CNC machined parts', 'Industrial pumps', 'Valves & fittings', 'Manufacturing equipment', 'Automation components'],
  },
  {
    icon: Package,
    title: 'Packaging & Printing',
    description: 'Custom packaging, labels, boxes, bags, and printed materials for products and retail.',
    examples: ['Custom boxes', 'Labels & stickers', 'Shopping bags', 'Product packaging', 'Printed materials'],
  },
  {
    icon: ToyBrick,
    title: 'Toys & Gifts',
    description: 'Children\'s toys, promotional gifts, party supplies, and novelty items.',
    examples: ['Educational toys', 'Plush toys', 'Promotional gifts', 'Party supplies', 'Board games'],
  },
  {
    icon: Car,
    title: 'Automotive Parts',
    description: 'Auto parts, accessories, tools, and aftermarket components for vehicles.',
    examples: ['Engine components', 'Body parts', 'Interior accessories', 'Tools & equipment', 'Lighting systems'],
  },
  {
    icon: Heart,
    title: 'Health & Beauty Products',
    description: 'Cosmetics, skincare, personal care, health supplements, and beauty tools.',
    examples: ['Skincare products', 'Makeup', 'Hair care', 'Health supplements', 'Beauty tools'],
  },
  {
    icon: UtensilsCrossed,
    title: 'Food & Beverage',
    description: 'Food processing equipment, packaging, ingredients, and beverage products.',
    examples: ['Food packaging', 'Processing equipment', 'Tea & coffee', 'Snack products', 'Beverage containers'],
  },
  {
    icon: Lightbulb,
    title: 'Lighting & Electrical',
    description: 'LED lights, fixtures, electrical components, and lighting solutions.',
    examples: ['LED bulbs', 'Commercial lighting', 'Outdoor lighting', 'Electrical panels', 'Smart lighting'],
  },
  {
    icon: Dumbbell,
    title: 'Sports & Fitness',
    description: 'Exercise equipment, sportswear, outdoor gear, and fitness accessories.',
    examples: ['Gym equipment', 'Yoga accessories', 'Outdoor gear', 'Sportswear', 'Fitness trackers'],
  },
  {
    icon: Baby,
    title: 'Baby & Kids Products',
    description: 'Baby care products, children\'s furniture, toys, and safety items.',
    examples: ['Baby clothing', 'Strollers', 'Baby furniture', 'Safety products', 'Feeding accessories'],
  },
  {
    icon: Watch,
    title: 'Jewelry & Accessories',
    description: 'Fashion jewelry, watches, sunglasses, and personal accessories.',
    examples: ['Fashion jewelry', 'Watches', 'Sunglasses', 'Hair accessories', 'Belts & wallets'],
  },
  {
    icon: Music,
    title: 'Musical Instruments',
    description: 'Guitars, keyboards, percussion, audio equipment, and accessories.',
    examples: ['Guitars', 'Keyboards & pianos', 'Percussion', 'Audio equipment', 'Accessories'],
  },
  {
    icon: PenTool,
    title: 'Office & Stationery',
    description: 'Office supplies, stationery, writing instruments, and organizational products.',
    examples: ['Notebooks', 'Pens & pencils', 'Desk organizers', 'Filing products', 'Art supplies'],
  },
  {
    icon: ShoppingBag,
    title: 'Pet Products',
    description: 'Pet food, toys, accessories, grooming products, and pet care items.',
    examples: ['Pet toys', 'Pet clothing', 'Grooming tools', 'Pet beds', 'Feeding accessories'],
  },
]

export default function ProductsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Products We Source</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              We source across a wide range of industries and product categories. If you do not see your product listed below, contact us — we likely have experience with it.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <cat.icon className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{cat.title}</h3>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">{cat.description}</p>
                <ul className="space-y-1.5">
                  {cat.examples.map((ex, ei) => (
                    <li key={ei} className="text-sm text-slate-500 flex items-center gap-2">
                      <span className="w-1 h-1 bg-slate-400 rounded-full" />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Do Not See Your Product?</h2>
          <p className="text-lg text-slate-600 mb-8">
            We source many more product categories than listed here. Tell us what you need and we will find the right supplier.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-700 text-white text-base font-semibold rounded-lg hover:bg-blue-800 transition-colors"
          >
            Tell Us What You Need
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
