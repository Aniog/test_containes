import SectionHeading from '@/components/common/SectionHeading'
import ProductCard from '@/components/products/ProductCard'
import { products } from '@/data/products'

export default function Bestsellers({ onAddToCart }) {
  return (
    <section id="bestsellers" className="bg-velmora-porcelain py-16 text-velmora-ink md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Most loved"
          title="Bestsellers in Warm Gold"
          copy="Signature pieces with soft shine, made to layer, gift, and wear daily."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  )
}
