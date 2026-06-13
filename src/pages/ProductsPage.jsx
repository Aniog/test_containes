import React from 'react'
import { Link } from 'react-router-dom'
import {
  Package,
  ArrowRight,
  CheckCircle,
} from 'lucide-react'

const categories = [
  {
    title: 'Electronics & Components',
    description: 'Consumer electronics, PCBs, cables, connectors, LED products, smart devices, and electronic components.',
    examples: ['Smartphones & accessories', 'PCB assemblies', 'LED lighting', 'Cables & connectors', 'Smart home devices'],
  },
  {
    title: 'Home & Garden Products',
    description: 'Furniture, kitchenware, garden tools, home decor, lighting, and household items.',
    examples: ['Outdoor furniture', 'Kitchen appliances', 'Garden tools', 'Home decor', 'LED lighting'],
  },
  {
    title: 'Apparel & Textiles',
    description: 'Clothing, fabrics, accessories, footwear, and textile products for all markets.',
    examples: ['Men\'s & women\'s clothing', 'Sportswear', 'Footwear', 'Bags & accessories', 'Fabrics & materials'],
  },
  {
    title: 'Industrial Equipment',
    description: 'Machinery, tools, automation equipment, and industrial components.',
    examples: ['CNC machines', 'Power tools', 'Automation systems', 'Pumps & valves', 'Industrial sensors'],
  },
  {
    title: 'Packaging & Printing',
    description: 'Custom packaging, labels, printed materials, and promotional products.',
    examples: ['Custom boxes', 'Labels & stickers', 'Shopping bags', 'Promotional items', 'Printed materials'],
  },
  {
    title: 'Toys & Gifts',
    description: 'Children\'s toys, promotional gifts, seasonal items, and novelty products.',
    examples: ['Educational toys', 'Plush toys', 'Promotional gifts', 'Seasonal decorations', 'Novelty items'],
  },
  {
    title: 'Automotive Parts',
    description: 'Auto parts, accessories, tools, and aftermarket components.',
    examples: ['Engine parts', 'Body accessories', 'Interior accessories', 'Tools & equipment', 'Lighting systems'],
  },
  {
    title: 'Building Materials',
    description: 'Construction materials, hardware, sanitary ware, and building accessories.',
    examples: ['Tiles & flooring', 'Sanitary ware', 'Hardware & fasteners', 'Doors & windows', 'Building hardware'],
  },
  {
    title: 'Sports & Outdoor',
    description: 'Sports equipment, outdoor gear, fitness products, and recreational items.',
    examples: ['Fitness equipment', 'Camping gear', 'Sports accessories', 'Outdoor clothing', 'Water sports'],
  },
  {
    title: 'Beauty & Personal Care',
    description: 'Cosmetics, skincare, hair care, and personal care products.',
    examples: ['Skincare products', 'Makeup', 'Hair care', 'Personal care tools', 'Packaging'],
  },
  {
    title: 'Pet Products',
    description: 'Pet supplies, accessories, toys, and care products.',
    examples: ['Pet toys', 'Pet beds', 'Pet clothing', 'Feeding accessories', 'Grooming tools'],
  },
  {
    title: 'Medical & Healthcare',
    description: 'Medical devices, healthcare products, and laboratory equipment.',
    examples: ['Medical devices', 'PPE equipment', 'Laboratory supplies', 'Healthcare accessories', 'Diagnostic tools'],
  },
]

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#0f2b46]">
        <div className="container-custom text-center">
          <span className="text-[#c8963e] font-semibold text-sm uppercase tracking-wider">Product Categories</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Products We Source
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            We source virtually any product manufactured in China. Here are our most common product categories.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div key={category.title} className="card group">
                <div className="w-12 h-12 bg-[#0f2b46]/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#c8963e]/10 transition-colors">
                  <Package className="w-6 h-6 text-[#0f2b46] group-hover:text-[#c8963e] transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                <p className="text-[#4a5568] text-sm leading-relaxed mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.examples.map((example) => (
                    <li key={example} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#c8963e] flex-shrink-0 mt-0.5" />
                      <span className="text-[#4a5568] text-sm">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#f5f7fa]">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Don't See Your Product Category?</h2>
          <p className="text-[#4a5568] text-lg mb-8 max-w-2xl mx-auto">
            We can source almost any product from China. Contact us to discuss your specific requirements.
          </p>
          <Link to="/contact" className="btn-primary text-lg px-10 py-4">
            Request a Custom Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </>
  )
}
