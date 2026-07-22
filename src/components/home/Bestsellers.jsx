import SectionHeader from '@/components/common/SectionHeader.jsx'
import ProductCard from '@/components/product/ProductCard.jsx'

export default function Bestsellers({ products, onAdd }) {
  return (
    <section id="shop" className="px-5 py-16 sm:px-8 md:py-24 lg:px-12">
      <div className="mx-auto max-w-[1500px]">
        <SectionHeader eyebrow="Bestsellers" title="Most Treasured Pieces" copy="Our customer-loved edit of easy gold silhouettes, refined crystals, and giftable demi-fine essentials." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={onAdd} imageContext="bestseller" sectionLabelId="bestsellers-title" />
          ))}
        </div>
        <span id="bestsellers-title" className="sr-only">Velmora Fine Jewelry bestsellers</span>
      </div>
    </section>
  )
}
