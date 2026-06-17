import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, Factory, Package, Wrench, Laptop, Home, ShoppingBag, Baby, Car, Hammer } from 'lucide-react'

const Products = () => {
  const categories = [
    { title: 'Home & Kitchen', icon: Home, items: ['Cookware', 'Storage Solutions', 'Home Decor', 'Textiles'] },
    { title: 'Electronics', icon: Laptop, items: ['Computer Accessories', 'Audio Devices', 'Smart Home Gadgets', 'Power Banks'] },
    { title: 'Industrial Tools', icon: Wrench, items: ['Precision Instruments', 'Hand Tools', 'Power Tools', 'Safety Gear'] },
    { title: 'Personal Care', icon: ShoppingBag, items: ['Cosmetic Packaging', 'Grooming Kits', 'Fitness Accessories', 'Wellness Products'] },
    { title: 'Toys & Baby', icon: Baby, items: ['Educational Toys', 'Plush Toys', 'Baby Nursery Gear', 'Outdoor play'] },
    { title: 'Automotive Parts', icon: Car, items: ['Interior Accessories', 'LED Lighting', 'Performance Parts', 'Cleaning Kits'] },
    { title: 'Building Materials', icon: Hammer, items: ['Sanitary Ware', 'Flooring', 'Hardware Fittings', 'Lighting Fixtures'] },
    { title: 'General Merchandise', icon: Package, items: ['Office Supplies', 'Gifts & Premiums', 'Seasonal Decor', 'Apparel'] },
  ]

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-slate-200 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Products We <span className="text-amber-500">Source</span></h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            With over a decade of experience across various industries, we have developed a vast network of verified manufacturers in China's key industrial hubs.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-slate-900 text-amber-500 rounded-lg flex items-center justify-center mb-6">
                  <cat.icon className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-4">{cat.title}</h2>
                <ul className="space-y-3">
                  {cat.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="h-4 w-4 text-amber-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Request */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-20 left-10 w-64 h-64 border-2 border-white/20 rounded-full" />
           <div className="absolute bottom-20 right-10 w-96 h-96 border-2 border-white/20 rounded-full" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6">Don't see your product here?</h2>
          <p className="text-xl text-slate-300 mb-10">
            Our expertise goes beyond these categories. If it is manufactured in China, we can source it for you. 
            We specialize in custom manufacturing and private label (OEM/ODM) projects.
          </p>
          <Link to="/contact" className="bg-white text-slate-900 px-10 py-4 rounded-md font-bold text-lg hover:bg-amber-500 transition-colors inline-block">
            Submit a Custom Sourcing Request
          </Link>
        </div>
      </section>

      {/* Hubs Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Strategic Local Presence in China's Hubs</h2>
              <div className="space-y-6">
                {[
                  { city: 'Shenzhen & Dongguan', info: 'Electronics, Tech, High-precision manufacturing' },
                  { city: 'Guangzhou & Foshan', info: 'Furniture, Textiles, Lighting, Hospitality supplies' },
                  { city: 'Ningbo & Yiwu', info: 'General merchandise, Tools, Stationery, Small household items' },
                  { city: 'Shanghai & Suzhou', info: 'Industrial equipment, Medical supplies, Chemicals' }
                ].map((hub, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center shrink-0 font-bold text-amber-600 text-xs">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{hub.city}</h3>
                      <p className="text-slate-600 text-sm">{hub.info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative group">
              <div 
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id="hubs-bg"
                data-strk-bg="China map industrial hubs cities manufacturing"
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="800"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
