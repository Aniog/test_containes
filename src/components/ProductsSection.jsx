import { Link } from 'react-router-dom'
import { SectionHeading } from './SectionHeading'
import { Card, CardContent } from '@/components/ui/Card'
import { products } from '@/data/siteData'

export function ProductsSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Products We Source"
          title="Categories We Know Well"
          description="Our team has hands-on experience sourcing a wide range of products for buyers in North America, Europe, and Australia."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                <img
                  alt={product.name}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 id={product.titleId} className="text-lg font-semibold text-slate-900">
                  {product.name}
                </h3>
                <p id={product.descId} className="mt-2 text-slate-600">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/products"
            className="inline-block font-medium text-primary hover:text-primary-dark"
          >
            See all product categories →
          </Link>
        </div>
      </div>
    </section>
  )
}
