import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import {
  Package, Cpu, Factory2, Wrench,
  Shirt, Home, Car, ArrowRight,
  Lightbulb, Microscope, Building2, Smartphone
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    icon: Cpu,
    name: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, electronic components, sensors, connectors, wiring harnesses, and LED products.',
    items: ['Consumer Electronics', 'PCBs & Components', 'Sensors & Connectors', 'LED Lighting', 'Batteries & Power'],
  },
  {
    icon: Factory2,
    name: 'Industrial Equipment',
    desc: 'Machinery, automation equipment, industrial tools, hydraulic components, and manufacturing line supplies.',
    items: ['CNC Machining', 'Injection Molding', 'Packaging Machinery', 'Industrial Tools', 'Automation Parts'],
  },
  {
    icon: Package,
    name: 'Packaging & Materials',
    desc: 'Custom packaging solutions, raw materials, labels, corrugated boxes, and sustainable packaging options.',
    items: ['Corrugated Boxes', 'Flexible Packaging', 'Labels & Stickers', 'Plastic & Glass', 'Eco-Friendly'],
  },
  {
    icon: Shirt,
    name: 'Textiles & Apparel',
    desc: 'Garments, technical textiles, fabrics, accessories, and finished apparel for brands and retailers.',
    items: ['Fashion Apparel', 'Technical Textiles', 'Sportswear', 'Accessories', 'Home Textiles'],
  },
  {
    icon: Home,
    name: 'Home & Consumer Goods',
    desc: 'Household products, kitchenware, furniture, bathroom accessories, and general consumer lifestyle goods.',
    items: ['Kitchenware', 'Furniture', 'Home Decor', 'Bathroom Accessories', 'Storage Solutions'],
  },
  {
    icon: Car,
    name: 'Automotive Parts',
    desc: 'Auto components, aftermarket parts, accessories, EV components, and interior/exterior parts.',
    items: ['Engine Parts', 'Body & Exterior', 'Interior Components', 'EV Parts', 'Aftermarket Accessories'],
  },
  {
    icon: Microscope,
    name: 'Medical & Lab Supplies',
    desc: 'Medical devices, laboratory equipment, consumables, PPE, and healthcare products.',
    items: ['Medical Devices', 'Lab Equipment', 'Consumables', 'PPE', 'Diagnostic Supplies'],
  },
  {
    icon: Building2,
    name: 'Building & Construction',
    desc: 'Construction materials, hardware, fixtures, piping, and building components.',
    items: ['Hardware', 'Piping & Fittings', 'Lighting', 'Sanitary Ware', 'Building Materials'],
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-brand-blue to-slate-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Products We Source</h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              We source across a wide range of industries and product categories. 
              If it can be manufactured in China, we can find the right supplier for you.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((cat) => (
              <div key={cat.name} className="border border-slate-200 rounded-xl p-6 md:p-8 hover:shadow-md hover:border-brand-blue/20 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                    <cat.icon className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-bold text-slate-900 mb-2">{cat.name}</h2>
                    <p className="text-sm text-slate-600 mb-4">{cat.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {cat.items.map((item) => (
                        <span key={item} className="px-2.5 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-full border border-slate-200">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Sure */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Product Not Listed?</h2>
          <p className="text-slate-600 mb-6 max-w-lg mx-auto">
            We source across virtually all manufacturing categories. If you need something specific, 
            contact us and we will find the right supplier for you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Ask About Your Product
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-brand-blue to-blue-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source Your Products?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
            Get matched with verified suppliers who can manufacture your products to specification.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors shadow-lg"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}