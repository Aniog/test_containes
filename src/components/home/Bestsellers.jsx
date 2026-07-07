import ProductCard from '@/components/products/ProductCard'
import SectionHeading from './SectionHeading'

export default function Bestsellers({ products, onAddToCart }) {
  return (
    <section id="bestsellers" className="bg-velmora-ivory px-4 py-20 text-velmora-ink sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading align="left" eyebrow="Most loved" title="Bestsellers" text="Five luminous signatures designed for daily wear, gifting, and quiet moments of polish." />
          <a href="/shop" className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-ink underline decoration-velmora-champagne underline-offset-8 transition hover:text-velmora-champagne">Shop all pieces</a>
        </div>
        <div className="mt-12 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />)}
        </div>
      </div>
    </section>
  )
}
