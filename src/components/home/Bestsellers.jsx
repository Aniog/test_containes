import ProductCard from '@/components/product/ProductCard.jsx'
import SectionHeading from '@/components/home/SectionHeading.jsx'
import { products } from '@/data/products.js'

export default function Bestsellers() {
  return (
    <section id="shop" className="bg-velmora-ivory px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Bestsellers"
          title="Pieces with a waiting-list feel"
          text="Our most-loved earrings, necklaces, huggies, and gift sets, designed to layer easily and glow softly."
          id="bestsellers-title"
        />
        <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} context="bestseller" />
          ))}
        </div>
      </div>
    </section>
  )
}
