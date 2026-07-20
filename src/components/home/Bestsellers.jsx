import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard.jsx?velmora=2'
import SectionHeading from '@/components/home/SectionHeading'

export default function Bestsellers() {
  return (
    <section id="bestsellers" className="bg-velmora-ivory px-5 py-16 text-velmora-ink md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Bestsellers"
          title="The pieces they reach for daily"
          subtitle="Refined gold silhouettes, giftable crystal moments, and easy polish for every ritual."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} contextId="bestsellers" />
          ))}
        </div>
      </div>
    </section>
  )
}
