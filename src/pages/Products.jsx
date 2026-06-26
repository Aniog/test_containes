import { Link } from 'react-router-dom'
import { ArrowRight, Cpu, Wrench, Package2, Home, Truck, ShieldCheck } from 'lucide-react'

const categories = [
  {
    icon: Cpu,
    title: 'Electronics & Components',
    description: 'Consumer electronics, PCBs, sensors, displays, connectors, wiring harnesses, power supplies, and electronic components for industrial applications.',
    items: ['Consumer electronics', 'PCBs & assemblies', 'Sensors & controllers', 'Displays & touch panels', 'Connectors & cables', 'Power supplies'],
  },
  {
    icon: Wrench,
    title: 'Industrial Equipment & Parts',
    description: 'Machinery components, tools, automation equipment, hydraulic systems, valves, pumps, bearings, and custom-engineered parts.',
    items: ['Machinery components', 'Industrial tools', 'Automation parts', 'Hydraulic systems', 'Valves & pumps', 'Custom parts'],
  },
  {
    icon: Package2,
    title: 'Packaging & Printing',
    description: 'Custom packaging solutions including cartons, labels, flexible packaging, corrugated boxes, retail displays, and printed materials.',
    items: ['Cartons & boxes', 'Labels & stickers', 'Flexible packaging', 'Retail displays', 'Printed materials', 'Protective packaging'],
  },
  {
    icon: Home,
    title: 'Home & Lifestyle',
    description: 'Furniture, kitchenware, home textiles, lighting fixtures, decor items, bath accessories, and lifestyle products for retail and hospitality.',
    items: ['Indoor furniture', 'Kitchenware & tableware', 'Home textiles', 'Lighting fixtures', 'Home decor', 'Bath accessories'],
  },
  {
    icon: Truck,
    title: 'Auto Parts & Accessories',
    description: 'Interior and exterior auto parts, EV components, aftermarket accessories, rubber parts, filters, and automotive electronics.',
    items: ['Interior parts', 'Exterior parts', 'EV components', 'Aftermarket accessories', 'Filters & rubber parts', 'Auto electronics'],
  },
  {
    icon: ShieldCheck,
    title: 'Medical & Safety Equipment',
    description: 'PPE, medical devices, laboratory equipment, safety gear, first aid supplies, and pharmaceutical packaging materials.',
    items: ['Personal protective equipment', 'Medical devices', 'Lab equipment', 'Safety gear', 'First aid supplies', 'Pharma packaging'],
  },
]

export default function Products() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Products We Source</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              We source across a broad range of categories. Our supplier network covers major manufacturing hubs throughout China.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {categories.map((cat, i) => (
              <div key={i} className="bg-white rounded-xl border border-border p-6 hover:shadow-lg hover:border-primary-200 transition-all">
                <div className="w-12 h-12 bg-accent-50 rounded-lg flex items-center justify-center mb-4">
                  <cat.icon className="w-6 h-6 text-accent-600" />
                </div>
                <h3 className="text-lg font-semibold text-primary-900 mb-2">{cat.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{cat.description}</p>
                <ul className="space-y-1.5">
                  {cat.items.map((item, j) => (
                    <li key={j} className="text-sm text-gray-500 flex items-center gap-2">
                      <span className="w-1 h-1 bg-accent-400 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-900 mb-4">Dont See Your Category?</h2>
          <p className="text-lg text-gray-600 mb-8">We source across many more categories. Contact us with your product details and we will find the right supplier.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-accent-500 text-white px-8 py-3.5 rounded-lg font-semibold text-base hover:bg-accent-600 transition-colors">
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}