import { Link } from 'react-router-dom';
import {
  Factory, Package, ArrowRight, Smartphone, Home, Shirt,
  Wrench, Sparkles, Box, Car, Lightbulb, CheckCircle
} from 'lucide-react';

const categories = [
  {
    icon: Smartphone,
    name: 'Consumer Electronics',
    desc: 'Smartphones, tablets, accessories, audio equipment, wearables, smart home devices, and IoT products from hubs like Shenzhen and Dongguan.',
    examples: ['Bluetooth earphones', 'Phone cases', 'Smart watches', 'Charging cables', 'Smart home sensors']
  },
  {
    icon: Home,
    name: 'Home & Kitchen Products',
    desc: 'Household essentials, kitchen tools, storage solutions, home decor, and cleaning products from manufacturers across Zhejiang and Guangdong.',
    examples: ['Kitchen utensils', 'Storage containers', 'Cleaning tools', 'Home decor items', 'Cookware sets']
  },
  {
    icon: Shirt,
    name: 'Apparel & Textiles',
    desc: 'Garments, fabrics, accessories, footwear, and custom apparel manufacturing from textile centers in Zhejiang, Jiangsu, and Guangdong.',
    examples: ['T-shirts and hoodies', 'Sportswear', 'Shoes', 'Bags', 'Custom uniforms']
  },
  {
    icon: Wrench,
    name: 'Industrial & Machinery',
    desc: 'Manufacturing equipment, industrial tools, machine parts, and automation components from industrial clusters nationwide.',
    examples: ['Power tools', 'CNC parts', 'Pumps and valves', 'Measuring instruments', 'Industrial sensors']
  },
  {
    icon: Sparkles,
    name: 'Health & Beauty',
    desc: 'Cosmetics, personal care products, supplements, beauty devices, and wellness equipment from certified facilities.',
    examples: ['Skincare products', 'Hair tools', 'Supplements', 'Essential oils', 'Beauty devices']
  },
  {
    icon: Box,
    name: 'Packaging & Printing',
    desc: 'Custom packaging boxes, labels, folding cartons, corrugated boxes, and commercial printing services.',
    examples: ['Gift boxes', 'Product labels', 'Shopping bags', 'Corrugated boxes', 'Brochures']
  },
  {
    icon: Car,
    name: 'Auto Parts & Accessories',
    desc: 'Vehicle components, car accessories, tools, and aftermarket parts from specialized automotive suppliers.',
    examples: ['LED headlights', 'Dash cameras', 'Floor mats', 'Car chargers', 'Interior accessories']
  },
  {
    icon: Lightbulb,
    name: 'Furniture & Lighting',
    desc: 'Indoor and outdoor furniture, lighting fixtures, home furnishings, and custom pieces from manufacturing hubs.',
    examples: ['LED lamps', 'Office chairs', 'Sofa sets', 'Outdoor furniture', 'Decorative lighting']
  },
  {
    icon: Package,
    name: 'Sports & Outdoor',
    desc: 'Fitness equipment, camping gear, outdoor recreation products, and sporting goods from specialized manufacturers.',
    examples: ['Yoga mats', 'Camping tents', 'Water bottles', 'Fitness bands', 'Outdoor tools']
  },
  {
    icon: Factory,
    name: 'Toys & Baby Products',
    desc: 'Children\'s toys, baby care products, educational materials, and infant accessories from certified facilities.',
    examples: ['Educational toys', 'Baby bottles', 'Strollers', 'Plush toys', 'Children\'s furniture']
  },
];

export default function Products() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-brand-900 to-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Products We Source</h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              From consumer electronics to industrial machinery, we source a wide range of products across China's major manufacturing hubs.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {categories.map((cat, i) => (
              <div key={i} className="border border-slate-200 rounded-xl p-6 md:p-8 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center shrink-0">
                    <cat.icon className="w-6 h-6 text-brand-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{cat.name}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{cat.desc}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.examples.map((ex, j) => (
                    <span key={j} className="text-xs bg-slate-100 text-slate-600 rounded-full px-3 py-1">{ex}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Capabilities */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Not Sure If We Can Source Your Product?</h2>
            <p className="text-lg text-slate-600">
              We handle custom and specialized products too. If it can be manufactured in China, our team can find the right supplier.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl border border-slate-200 p-6 text-center">
              <CheckCircle className="w-8 h-8 text-brand-600 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 mb-1">Custom Manufacturing</h3>
              <p className="text-sm text-slate-600">OEM and ODM manufacturing for custom-designed products</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6 text-center">
              <CheckCircle className="w-8 h-8 text-brand-600 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 mb-1">Private Label</h3>
              <p className="text-sm text-slate-600">White-label products with your branding and packaging</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6 text-center">
              <CheckCircle className="w-8 h-8 text-brand-600 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 mb-1">Prototype & Sampling</h3>
              <p className="text-sm text-slate-600">Rapid prototyping and sampling before mass production</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-brand-800 to-brand-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Tell Us What You Need</h2>
          <p className="text-lg text-brand-200 mb-8 max-w-xl mx-auto">
            Not sure which category fits your product? Contact us and we will help you find the right sourcing solution.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-500 text-white font-semibold px-8 py-3.5 rounded-lg text-lg transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}