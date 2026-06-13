import { Link } from 'react-router-dom'
import { ArrowRight, Cpu, Sofa, Shirt, Wrench, Zap, Home, Baby, Dumbbell, Car, ShoppingBag, Package } from 'lucide-react'

const categories = [
  { icon: Cpu, name: 'Electronics & Components', examples: 'PCBs, semiconductors, connectors, IoT modules, cables, chargers, LED lighting, sensors' },
  { icon: Sofa, name: 'Furniture & Home Decor', examples: 'Indoor/outdoor furniture, lighting fixtures, home textiles, kitchenware, decorative items' },
  { icon: Shirt, name: 'Apparel & Textiles', examples: 'Garments, sportswear, workwear, bags, shoes, fabric, accessories, promotional clothing' },
  { icon: Package, name: 'Packaging & Printing', examples: 'Custom boxes, labels, paper bags, flexible packaging, gift wrapping, display stands' },
  { icon: Wrench, name: 'Hardware & Tools', examples: 'Hand tools, power tools, fasteners, building hardware, garden tools, industrial equipment' },
  { icon: Zap, name: 'Machinery & Industrial Parts', examples: 'CNC parts, molds, bearings, pumps, valves, motors, automation equipment' },
  { icon: Home, name: 'Consumer Products', examples: 'Kitchen gadgets, home appliances, personal care, smart home devices, pet supplies' },
  { icon: Baby, name: 'Baby & Children Products', examples: 'Toys, strollers, baby gear, educational products, children clothing, nursery items' },
  { icon: Dumbbell, name: 'Sports & Outdoor', examples: 'Fitness equipment, camping gear, bicycles, sports accessories, outdoor furniture' },
  { icon: Car, name: 'Auto Parts & Accessories', examples: 'Aftermarket auto parts, car electronics, accessories, tools, motorcycle parts' },
  { icon: ShoppingBag, name: 'Promotional Products', examples: 'Custom gifts, corporate merchandise, trade show giveaways, branded items' },
  { icon: Zap, name: 'Medical & Healthcare', examples: 'Medical consumables, PPE, diagnostic devices, rehabilitation equipment, health gadgets' },
]

export default function ProductsWeSource() {
  return (
    <div>
      <section className="bg-slate-50 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-brand-navy tracking-tight">
              Products We Source
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              We have experience across a wide range of product categories. Whatever you need, we can find the right factory in China.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.name} className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md hover:border-brand-orange/30 transition-all">
                <div className="w-10 h-10 bg-brand-navy/5 rounded-lg flex items-center justify-center mb-4">
                  <cat.icon className="w-5 h-5 text-brand-orange" />
                </div>
                <h3 className="font-semibold text-brand-navy mb-2">{cat.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{cat.examples}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-slate-50 rounded-xl border border-gray-100 p-8 text-center">
            <h3 className="text-xl font-bold text-brand-navy mb-3">
              Don&apos;t see your product category?
            </h3>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              These are just the categories we commonly work with. If your product isn&apos;t listed, 
              reach out — our supplier network spans virtually every manufacturing sector in China.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange hover:bg-brand-orange-hover text-white font-medium rounded-lg transition-colors"
            >
              Tell Us What You Need <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Industries We Serve</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { value: 'E-commerce', label: 'Amazon, Shopify & brand sellers' },
              { value: 'Retail Chains', label: 'Department stores & specialty retail' },
              { value: 'Wholesale', label: 'Importers & distributors' },
              { value: 'Manufacturing', label: 'OEM & industrial buyers' },
            ].map((ind) => (
              <div key={ind.value} className="bg-white/10 rounded-lg p-6">
                <div className="text-xl font-bold text-brand-orange mb-1">{ind.value}</div>
                <div className="text-sm text-gray-300">{ind.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}