import { products } from '@/data/products.js'
import ProductCard from '@/components/product/ProductCard.jsx'
import SectionHeader from './SectionHeader.jsx'

export default function Bestsellers() {
  return (
    <section id="bestsellers" className="bg-velmora-ivory px-5 py-16 text-velmora-ink md:px-8 md:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Most loved"
          title="Bestsellers in soft gold light"
          copy="Signature pieces made to layer beautifully, arrive gift-ready, and keep their glow through daily wear."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
