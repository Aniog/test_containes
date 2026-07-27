import { Link } from 'react-router-dom'
import { Cpu, Shirt, Wrench, Home, Car, Package, ArrowRight } from 'lucide-react'

const categories = [
  { icon: Cpu, name: 'Electronics & Components', count: '200+ suppliers' },
  { icon: Shirt, name: 'Textiles & Apparel', count: '150+ suppliers' },
  { icon: Wrench, name: 'Machinery & Tools', count: '100+ suppliers' },
  { icon: Home, name: 'Home & Garden Products', count: '180+ suppliers' },
  { icon: Car, name: 'Automotive Parts', count: '90+ suppliers' },
  { icon: Package, name: 'Packaging & Materials', count: '120+ suppliers' },
]

export default function ProductsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 id="products-title" className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Products We Source
          </h2>
          <p className="text-muted-foreground">
            We work with verified suppliers across all major manufacturing categories in China.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="flex items-center gap-4 rounded-lg border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <cat.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">{cat.name}</h3>
                <p className="text-xs text-muted-foreground">{cat.count}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/products" className="btn-outline">
            View All Product Categories
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
