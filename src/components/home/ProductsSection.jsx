import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { productCategories } from '@/data/site-data'

export default function ProductsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-primary-light font-semibold text-sm uppercase tracking-wider">Categories</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-2 mb-4">
            Products We Source
          </h2>
          <p className="text-secondary-text text-lg max-w-2xl mx-auto">
            Our network covers major manufacturing hubs across China with expertise in thousands of product categories.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white rounded-xl border border-border p-6 hover:shadow-md transition-shadow group"
            >
              <div
                className="w-full h-40 rounded-lg mb-4 bg-cover bg-center"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop)`,
                  backgroundColor: '#f1f5f9',
                }}
              />
              <h3 className="text-lg font-semibold text-text-primary mb-2">{cat.title}</h3>
              <p className="text-sm text-secondary-text leading-relaxed">{cat.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-primary-light font-semibold hover:text-primary transition-colors"
          >
            View All Categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}