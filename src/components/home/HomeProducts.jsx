import { Link } from 'react-router-dom'
import { productCategories, Icons } from '@/lib/data'

export default function HomeProducts() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Products We Source</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-text-primary">
            We Source Across Industries
          </h2>
          <p className="mt-4 text-text-secondary text-lg">
            50+ product categories — from electronics to industrial machinery. If it's made in China, we can source it.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {productCategories.map((cat) => {
            const IconComponent = Icons[cat.icon]
            return (
              <Link
                to="/products"
                key={cat.id}
                className="group p-5 rounded-xl border border-border hover:border-accent/30 hover:shadow-md bg-surface-alt hover:bg-white transition-all duration-300"
              >
                <div className="w-10 h-10 bg-primary/5 group-hover:bg-accent/10 rounded-lg flex items-center justify-center mb-4 transition-colors">
                  <IconComponent className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-semibold text-text-primary mb-1.5 group-hover:text-primary transition-colors">
                  {cat.title}
                </h3>
                <p className="text-text-muted text-xs leading-relaxed line-clamp-2">
                  {cat.description}
                </p>
              </Link>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-primary hover:text-accent font-semibold text-sm transition-colors"
          >
            View all product categories
            <Icons.ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}