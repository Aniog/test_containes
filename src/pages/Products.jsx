import { Link } from 'react-router-dom'
import {
  Package, Smartphone, Home, Shirt, Car, Sparkles,
  Gamepad2, Wrench, Tag, Heart, Briefcase, Cpu,
  ArrowRight, CheckCircle2
} from 'lucide-react'
import CTABanner from '../components/CTABanner'

const categories = [
  {
    icon: Smartphone,
    name: 'Consumer Electronics',
    products: ['Bluetooth speakers & headphones', 'Phone cases & accessories', 'Smart home devices', 'Power banks & chargers', 'LED lights & gadgets', 'Wearable technology'],
    region: 'Shenzhen, Dongguan',
    moq: '500 - 5,000 units',
  },
  {
    icon: Home,
    name: 'Home & Garden',
    products: ['Kitchen utensils & cookware', 'Storage & organization', 'Garden tools & planters', 'LED lighting fixtures', 'Bathroom accessories', 'Home decor items'],
    region: 'Ningbo, Yiwu, Foshan',
    moq: '200 - 3,000 units',
  },
  {
    icon: Shirt,
    name: 'Fashion & Apparel',
    products: ['T-shirts & casual wear', 'Bags & backpacks', 'Fashion jewelry & accessories', 'Shoes & footwear', 'Scarves & hats', 'Custom branded clothing'],
    region: 'Guangzhou, Shenzhen',
    moq: '100 - 2,000 units',
  },
  {
    icon: Car,
    name: 'Auto Parts & Accessories',
    products: ['LED headlights & bulbs', 'Car phone mounts', 'Floor mats & seat covers', 'Dash cameras', 'Car cleaning supplies', 'Aftermarket replacement parts'],
    region: 'Guangzhou, Wenzhou',
    moq: '200 - 5,000 units',
  },
  {
    icon: Sparkles,
    name: 'Beauty & Personal Care',
    products: ['Makeup brushes & tools', 'Skincare packaging', 'Hair accessories', 'Cosmetic bags', 'Nail art supplies', 'Mirrors & beauty gadgets'],
    region: 'Shenzhen, Yiwu',
    moq: '500 - 10,000 units',
  },
  {
    icon: Gamepad2,
    name: 'Toys & Games',
    products: ['Educational toys', 'Board games & puzzles', 'Outdoor play equipment', 'Stuffed animals', 'RC vehicles', 'Building blocks & sets'],
    region: 'Shantou, Dongguan',
    moq: '500 - 5,000 units',
  },
  {
    icon: Wrench,
    name: 'Industrial Equipment',
    products: ['CNC components', 'Hydraulic fittings', 'Hand & power tools', 'Safety equipment', 'Bearings & fasteners', 'Custom machined parts'],
    region: 'Ningbo, Wenzhou',
    moq: '100 - 5,000 units',
  },
  {
    icon: Tag,
    name: 'Promotional Products',
    products: ['Custom branded pens', 'Promotional bags', 'Corporate gifts', 'Trade show giveaways', 'Custom USB drives', 'Branded drinkware'],
    region: 'Yiwu, Guangzhou',
    moq: '500 - 50,000 units',
  },
  {
    icon: Package,
    name: 'Packaging & Printing',
    products: ['Custom boxes & cartons', 'Product labels & stickers', 'Shopping bags', 'Bubble wrap & fillers', 'Rigid gift boxes', 'Eco-friendly packaging'],
    region: 'Dongguan, Shenzhen',
    moq: '1,000 - 100,000 units',
  },
  {
    icon: Heart,
    name: 'Health & Wellness',
    products: ['Fitness accessories', 'Massage devices', 'Yoga mats & props', 'Supplement bottles', 'First aid kits', 'Posture correctors'],
    region: 'Shenzhen, Xiamen',
    moq: '200 - 5,000 units',
  },
  {
    icon: Briefcase,
    name: 'Office & Stationery',
    products: ['Notebooks & journals', 'Desk organizers', 'Whiteboards & markers', 'Desk lamps', 'Pen holders', 'Custom stationery sets'],
    region: 'Ningbo, Yiwu',
    moq: '500 - 10,000 units',
  },
  {
    icon: Cpu,
    name: 'Hardware & Building Materials',
    products: ['Door handles & locks', 'Plumbing fittings', 'Cabinet hardware', 'Flooring samples', 'Light switches & sockets', 'Custom metal fabrication'],
    region: 'Foshan, Wenzhou',
    moq: '100 - 5,000 units',
  },
]

export default function Products() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0F172A] to-[#1B4D8E] py-20 text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-sm text-blue-200 font-medium mb-4">Product Categories</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Products We Source</h1>
          <p className="text-lg text-gray-300 max-w-[600px] mx-auto">
            We source products across diverse categories from verified manufacturers in China's major industrial regions.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(cat => (
              <div key={cat.name} className="p-6 rounded-xl border border-gray-200 hover:border-[#1B4D8E]/30 hover:shadow-lg transition-all bg-white group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#F59E0B]/10 rounded-lg flex items-center justify-center group-hover:bg-[#F59E0B] transition-colors">
                    <cat.icon className="w-5 h-5 text-[#F59E0B] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A]">{cat.name}</h3>
                </div>
                <ul className="space-y-1.5 mb-4">
                  {cat.products.map(p => (
                    <li key={p} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="pt-3 border-t border-gray-100 flex flex-wrap gap-4 text-xs text-gray-400">
                  <span>Region: <strong className="text-gray-600">{cat.region}</strong></span>
                  <span>MOQ: <strong className="text-gray-600">{cat.moq}</strong></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Regions */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-3">Key Manufacturing Regions</h2>
            <p className="text-lg text-gray-500">We work with factories across China's major industrial hubs</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { city: 'Shenzhen', specialty: 'Electronics, gadgets, LED products' },
              { city: 'Guangzhou', specialty: 'Fashion, auto parts, cosmetics' },
              { city: 'Dongguan', specialty: 'Electronics, furniture, packaging' },
              { city: 'Yiwu', specialty: 'Small commodities, promotional items' },
              { city: 'Ningbo', specialty: 'Auto parts, hardware, stationery' },
              { city: 'Foshan', specialty: 'Furniture, ceramics, building materials' },
              { city: 'Wenzhou', specialty: 'Shoes, lighters, auto parts' },
              { city: 'Shantou', specialty: 'Toys, plastic products' },
              { city: 'Xiamen', specialty: 'Sports goods, electronics' },
            ].map(r => (
              <div key={r.city} className="p-4 bg-white rounded-lg border border-gray-100">
                <h4 className="text-base font-bold text-[#0F172A] mb-1">{r.city}</h4>
                <p className="text-xs text-gray-500">{r.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Don't See Your Product Category?" subtitle="We source a wide range of products. Contact us with your specific requirements and we will find the right supplier." />
    </div>
  )
}
