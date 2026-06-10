import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Lightbulb, Sofa, Shirt, Wrench, Package, Cpu, Factory } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const categories = [
  { icon: Lightbulb, name: 'Electronics', examples: 'Consumer electronics, PCBs, components' },
  { icon: Sofa, name: 'Furniture', examples: 'Home furniture, office chairs, decor' },
  { icon: Shirt, name: 'Textiles & Apparel', examples: 'Garments, fabrics, accessories' },
  { icon: Wrench, name: 'Machinery', examples: 'Industrial equipment, tools' },
  { icon: Package, name: 'Packaging', examples: 'Paper, plastic, metal packaging' },
  { icon: Cpu, name: 'Parts & Components', examples: 'Metal parts, plastic molds' },
]

const ProductsSection = () => {
  return (
    <section className="py-20 bg-slate-50" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Products We Source"
          subtitle="Extensive experience across multiple industries and product categories"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-white rounded-xl p-6 border border-slate-200 hover:border-secondary hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 bg-secondary-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors">
                <category.icon className="w-7 h-7 text-secondary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{category.name}</h3>
              <p className="text-slate-600 text-sm">{category.examples}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-6">
            Don't see your product category? We likely source it too. Contact us to discuss your requirements.
          </p>
          <Link to="/products">
            <button className="inline-flex items-center text-secondary font-semibold hover:text-secondary-600 transition-colors">
              View Full Product List
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProductsSection