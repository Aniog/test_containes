import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Sofa, Shirt, Cog, PackageOpen, ShieldCheck, Wrench } from 'lucide-react'

const categories = [
  {
    icon: Sparkles,
    title: 'Electronics & Gadgets',
    items: ['Consumer electronics', 'Smart home devices', 'Audio & headphones', 'Phone accessories', 'Computer components', 'LED lighting'],
    hubs: 'Shenzhen, Guangzhou, Dongguan',
  },
  {
    icon: Sofa,
    title: 'Home & Garden',
    items: ['Furniture (indoor & outdoor)', 'Home decor', 'Kitchenware & tableware', 'Garden tools', 'Bathroom accessories', 'Storage solutions'],
    hubs: 'Foshan, Zhongshan, Hangzhou',
  },
  {
    icon: Shirt,
    title: 'Apparel & Fashion',
    items: ['Ready-to-wear garments', 'Footwear & sneakers', 'Bags & luggage', 'Fashion accessories', 'Textiles & fabrics', 'Sportswear & activewear'],
    hubs: 'Guangzhou, Yiwu, Wenzhou',
  },
  {
    icon: Cog,
    title: 'Industrial & Machinery',
    items: ['Manufacturing equipment', 'Industrial tools', 'Automation parts', 'Hydraulic components', 'Measuring instruments', 'Packaging machinery'],
    hubs: 'Dongguan, Qingdao, Shanghai',
  },
  {
    icon: PackageOpen,
    title: 'Packaging & Printing',
    items: ['Custom boxes & cartons', 'Labels & stickers', 'Flexible packaging', 'Printing services', 'Display stands', 'Gift packaging'],
    hubs: 'Dongguan, Shenzhen, Wenzhou',
  },
  {
    icon: ShieldCheck,
    title: 'Health & Personal Care',
    items: ['Cosmetics & skincare', 'Personal care products', 'Supplements & nutrition', 'Medical devices', 'Hygiene products', 'Wellness equipment'],
    hubs: 'Guangzhou, Shanghai, Xiamen',
  },
  {
    icon: Wrench,
    title: 'Automotive Parts',
    items: ['Auto parts & accessories', 'Motorcycle parts', 'Interior accessories', 'Car electronics', 'Maintenance tools', 'Tires & wheels'],
    hubs: 'Taizhou, Wenzhou, Changzhou',
  },
]

export default function Products() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-navy-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Products We Source
            </h1>
            <p className="text-lg lg:text-xl text-slate-300 leading-relaxed">
              We source across a broad range of categories from China&apos;s 
              major manufacturing hubs. Whatever your product, we can find 
              the right supplier.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {categories.map((cat) => {
              const Icon = cat.icon
              return (
                <div
                  key={cat.title}
                  className="p-6 lg:p-8 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-navy-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-4">{cat.title}</h3>
                  <ul className="space-y-2 mb-5">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="text-xs text-slate-400">
                    <span className="font-medium">Manufacturing hubs: </span>
                    {cat.hubs}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-16 bg-navy-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-navy-900 mb-4">
            Don&apos;t See Your Product Category?
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            We are not limited to the categories listed here. Contact us with your 
            product requirements and we will assess feasibility within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3.5 rounded-lg text-lg transition-colors"
          >
            Submit Your Product Inquiry
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}