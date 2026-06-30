import ProductCard from '@/components/home/ProductCard'
import products from '@/data/products'

export default function BestsellersGrid() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container-narrow">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-warm-dark tracking-wider">
            Bestsellers
          </h2>
          <p className="mt-3 text-muted text-sm font-sans">
            The pieces our customers love most
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}