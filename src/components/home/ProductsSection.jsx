import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Cpu, Shirt, Home, Wrench, ShoppingBag, Watch } from 'lucide-react'

const categories = [
  { icon: Cpu, name: 'Electronics & Components', desc: 'Consumer electronics, PCBs, sensors, and hardware components' },
  { icon: Shirt, name: 'Apparel & Textiles', desc: 'Clothing, fabrics, accessories, and custom garments' },
  { icon: Home, name: 'Home & Garden', desc: 'Furniture, decor, kitchenware, and outdoor products' },
  { icon: Wrench, name: 'Industrial & Machinery', desc: 'Tools, equipment, auto parts, and industrial supplies' },
  { icon: ShoppingBag, name: 'Consumer Goods', desc: 'Toys, sports equipment, beauty products, and gifts' },
  { icon: Watch, name: 'Custom & OEM Products', desc: 'Private label, custom manufacturing, and OEM/ODM services' },
]

export function ProductsSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Products We Source
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From electronics to industrial equipment, we source virtually any product manufactured in China.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <Card key={index} className="border-slate-200 hover:shadow-md transition-shadow group">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                  <cat.icon className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{cat.name}</h3>
                <p className="text-sm text-slate-600">{cat.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
            <Link to="/products">
              View All Product Categories
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
