import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Cpu, Home, Shirt, Cog, Car, Package, Building, ShoppingBag, Zap, Utensils, Heart } from 'lucide-react'

const categories = [
  {
    icon: Cpu,
    title: 'Electronics & Components',
    description: 'PCBs, semiconductors, consumer electronics, cables, connectors, sensors, and electronic components.',
    examples: ['Printed circuit boards (PCBs)', 'Consumer electronics', 'Cables and connectors', 'Sensors and modules', 'LED lighting components'],
  },
  {
    icon: Home,
    title: 'Home & Garden Products',
    description: 'Furniture, kitchenware, home decor, garden tools, lighting, and household items.',
    examples: ['Furniture and fixtures', 'Kitchen and dining products', 'Home decor items', 'Garden tools and equipment', 'LED and smart lighting'],
  },
  {
    icon: Shirt,
    title: 'Apparel & Textiles',
    description: 'Clothing, fabrics, accessories, footwear, and textile materials for fashion and industrial use.',
    examples: ['Garments and clothing', 'Fabrics and textiles', 'Footwear', 'Bags and accessories', 'Workwear and uniforms'],
  },
  {
    icon: Cog,
    title: 'Industrial Machinery',
    description: 'Manufacturing equipment, automation systems, tools, and industrial components.',
    examples: ['CNC machines', 'Packaging machinery', 'Automation equipment', 'Industrial tools', 'Machine parts and components'],
  },
  {
    icon: Car,
    title: 'Automotive Parts',
    description: 'Auto components, accessories, tools, and aftermarket parts for vehicles.',
    examples: ['Engine components', 'Body parts and accessories', 'Electrical systems', 'Aftermarket parts', 'Diagnostic tools'],
  },
  {
    icon: Package,
    title: 'Packaging Materials',
    description: 'Custom packaging, boxes, bags, labels, and protective materials for products.',
    examples: ['Custom boxes and cartons', 'Plastic and paper bags', 'Labels and stickers', 'Protective packaging', 'Display packaging'],
  },
  {
    icon: Building,
    title: 'Building Materials',
    description: 'Construction materials, hardware, fixtures, and building supplies.',
    examples: ['Tiles and flooring', 'Hardware and fasteners', 'Plumbing fixtures', 'Doors and windows', 'Insulation materials'],
  },
  {
    icon: ShoppingBag,
    title: 'Consumer Goods',
    description: 'Promotional items, toys, sports equipment, beauty products, and everyday consumer products.',
    examples: ['Promotional products', 'Toys and games', 'Sports equipment', 'Beauty and personal care', 'Pet products'],
  },
  {
    icon: Zap,
    title: 'Hardware & Tools',
    description: 'Hand tools, power tools, hardware accessories, and DIY equipment.',
    examples: ['Hand tools', 'Power tools', 'Hardware accessories', 'Safety equipment', 'Measuring instruments'],
  },
  {
    icon: Utensils,
    title: 'Food & Beverage Equipment',
    description: 'Commercial kitchen equipment, food processing machinery, and beverage production tools.',
    examples: ['Commercial kitchen equipment', 'Food processing machines', 'Beverage equipment', 'Food packaging', 'Restaurant supplies'],
  },
  {
    icon: Heart,
    title: 'Medical & Health Products',
    description: 'Medical devices, health equipment, PPE, and wellness products.',
    examples: ['Medical devices', 'Health monitoring equipment', 'PPE and safety gear', 'Wellness products', 'Laboratory supplies'],
  },
]

export default function ProductsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Products We Source</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              We source a wide range of products from verified Chinese manufacturers across multiple industries. If your product is not listed below, contact us and we will let you know if we can help.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-primary/30 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{category.title}</h3>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">{category.description}</p>
                <ul className="space-y-1.5">
                  {category.examples.map((example, eIndex) => (
                    <li key={eIndex} className="text-sm text-slate-500 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Do Not See Your Product?</h2>
            <p className="text-lg text-slate-600 mb-8">
              We source many products beyond the categories listed above. Tell us what you need and we will let you know if we can help.
            </p>
            <Link to="/contact" className="btn-primary">
              Tell Us What You Need
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
