import { Link } from 'react-router-dom'
import { Cpu, Cog, ShoppingBag, Shirt, Building, Car, HeartPulse, Package } from 'lucide-react'

const categories = [
  { icon: Cpu, name: 'Electronics & Components', items: 'PCBs, sensors, cables, consumer electronics' },
  { icon: Cog, name: 'Machinery & Industrial', items: 'CNC parts, tools, automation equipment' },
  { icon: ShoppingBag, name: 'Consumer Goods', items: 'Home products, gifts, sports equipment' },
  { icon: Shirt, name: 'Textiles & Apparel', items: 'Fabrics, garments, accessories' },
  { icon: Building, name: 'Building Materials', items: 'Hardware, fixtures, construction supplies' },
  { icon: Car, name: 'Auto Parts & Accessories', items: 'OEM parts, aftermarket components' },
  { icon: HeartPulse, name: 'Medical & Health', items: 'Devices, lab equipment, PPE' },
  { icon: Package, name: 'Packaging & Printing', items: 'Custom boxes, labels, promotional materials' },
]

export default function HomeProducts() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-blue-700 font-semibold text-sm uppercase tracking-wide">Product Categories</span>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            Products We Source
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We source a wide range of products from verified Chinese manufacturers.
            If you need it made in China, we can find the right supplier.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="bg-gray-50 rounded-xl p-5 hover:shadow-md transition-shadow border border-gray-100 group"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-700 transition-colors">
                <cat.icon className="w-5 h-5 text-blue-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">{cat.name}</h3>
              <p className="text-gray-500 text-sm">{cat.items}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            View All Product Categories
          </Link>
        </div>
      </div>
    </section>
  )
}
