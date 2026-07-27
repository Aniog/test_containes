import { Link } from 'react-router-dom'
import { Cpu, Factory, ShoppingBag, Shirt, Hammer, ArrowRight } from 'lucide-react'

const categories = [
  {
    icon: Cpu,
    title: 'Electronics & Components',
    items: 'PCBs, cables, sensors, consumer electronics, LED products',
  },
  {
    icon: Factory,
    title: 'Machinery & Industrial',
    items: 'CNC parts, molds, packaging machines, industrial equipment',
  },
  {
    icon: ShoppingBag,
    title: 'Consumer Goods',
    items: 'Home products, kitchenware, toys, sports equipment, gifts',
  },
  {
    icon: Shirt,
    title: 'Textiles & Apparel',
    items: 'Garments, fabrics, accessories, footwear, bags',
  },
  {
    icon: Hammer,
    title: 'Building Materials',
    items: 'Hardware, tiles, lighting, furniture, construction supplies',
  },
]

export default function ProductsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Product Categories</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Products We Source</h2>
          <p className="text-muted-foreground text-lg">
            We source a wide range of products from verified Chinese manufacturers across multiple industries.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group bg-white rounded-xl border border-border p-6 hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <cat.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{cat.title}</h3>
              <p className="text-muted-foreground text-sm">{cat.items}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/products" className="inline-flex items-center text-primary font-medium hover:underline">
            See all product categories
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
