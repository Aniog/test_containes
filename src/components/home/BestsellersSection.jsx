import ProductCard from '@/components/product/ProductCard'
import SectionHeader from '@/components/common/SectionHeader'
import { products } from '@/data/products'
import { useImageLoader } from '@/hooks/useImageLoader'

export default function BestsellersSection() {
  const gridRef = useImageLoader([])

  return (
    <section ref={gridRef} id="bestsellers" className="bg-velmora-ivory px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Bestsellers" title="The pieces everyone keeps reaching for" copy="Golden signatures with a collected feel, priced for everyday luxury and chosen for gifting beautifully." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => <ProductCard key={product.id} product={product} compact />)}
        </div>
      </div>
    </section>
  )
}
