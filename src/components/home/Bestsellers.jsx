import ImageScope from '@/components/common/ImageScope'
import SectionHeader from '@/components/common/SectionHeader'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'

export default function Bestsellers() {
  return (
    <ImageScope>
      <section className="bg-velmora-porcelain px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader idPrefix="bestsellers" eyebrow="Bestsellers" title="The pieces everyone returns to" subtitle="Polished gold, thoughtful scale, and just enough shine for every day." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {products.map((product, index) => <ProductCard key={product.id} product={product} priority={index < 2} />)}
          </div>
        </div>
      </section>
    </ImageScope>
  )
}
