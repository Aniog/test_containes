import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Sofa, Shirt, Cog, PackageOpen, ShieldCheck } from 'lucide-react'

const categories = [
  {
    icon: Sparkles,
    title: 'Electronics & Gadgets',
    description: 'Consumer electronics, smart devices, components, and accessories from verified manufacturers.',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: Sofa,
    title: 'Home & Garden',
    description: 'Furniture, home decor, kitchenware, garden tools, and outdoor living products.',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    icon: Shirt,
    title: 'Apparel & Accessories',
    description: 'Garments, footwear, bags, fashion accessories, and textile products across all categories.',
    bgColor: 'bg-pink-50',
    iconColor: 'text-pink-600',
  },
  {
    icon: Cog,
    title: 'Industrial Equipment',
    description: 'Machinery, tools, industrial parts, automation equipment, and manufacturing components.',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
  {
    icon: PackageOpen,
    title: 'Packaging & Printing',
    description: 'Custom packaging, labels, boxes, printing materials, and display solutions.',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    icon: ShieldCheck,
    title: 'Health & Beauty',
    description: 'Cosmetics, personal care products, supplements, medical supplies, and wellness items.',
    bgColor: 'bg-red-50',
    iconColor: 'text-red-600',
  },
]

export default function ProductsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      // Stock images loaded at runtime
    })
    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 text-center mb-4">
          Products We Source
        </h2>
        <p className="text-lg text-slate-600 text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          We source across a wide range of industries and product categories from 
          China&apos;s major manufacturing hubs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <div
                key={cat.title}
                className="group p-6 lg:p-8 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all"
              >
                <div className={`w-12 h-12 ${cat.bgColor} rounded-lg flex items-center justify-center mb-5`}>
                  <Icon className={`w-6 h-6 ${cat.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-3">{cat.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{cat.description}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-navy-700 font-semibold hover:text-navy-900 transition-colors"
          >
            View All Product Categories &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}