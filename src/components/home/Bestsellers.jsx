import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'

export default function Bestsellers() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-28">
      <div className="text-center mb-14">
        <p className="font-sans text-[10px] tracking-[0.35em] text-velvet-500 uppercase mb-3">
          Curated for You
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-velvet-950 font-medium tracking-tight">
          Bestsellers
        </h2>
        <div className="hairline-divider w-16 mx-auto mt-6" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
