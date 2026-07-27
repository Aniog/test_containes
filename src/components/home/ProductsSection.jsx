import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const products = [
  { name: 'Electronics & Components', imgId: 'product-electronics-8f2a9c', descId: 'product-electronics-desc' },
  { name: 'Machinery & Industrial Parts', imgId: 'product-machinery-7b3c1d', descId: 'product-machinery-desc' },
  { name: 'Home & Garden', imgId: 'product-home-4d5e6f', descId: 'product-home-desc' },
  { name: 'Apparel & Textiles', imgId: 'product-apparel-1a2b3c', descId: 'product-apparel-desc' },
  { name: 'Packaging & Printing', imgId: 'product-packaging-9g8h7i', descId: 'product-packaging-desc' },
  { name: 'Beauty & Personal Care', imgId: 'product-beauty-2j3k4l', descId: 'product-beauty-desc' },
]

export default function ProductsSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 id="products-title" className="text-3xl font-bold text-slate-900 md:text-4xl">
            Products We Source
          </h2>
          <p id="products-subtitle" className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            We support a wide range of categories across consumer, industrial, and commercial goods.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className="group overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [products-subtitle] [products-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
                <p id={product.descId} className="mt-1 text-sm text-slate-500">
                  Sourced from verified manufacturers with quality checks.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/5">
            <Link to="/products">
              Browse All Categories <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
