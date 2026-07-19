import { useRef } from 'react'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'
import { useImageLoader } from '@/hooks/useImageLoader'

const BestsellersSection = ({ onAdd }) => {
  const sectionRef = useRef(null)
  useImageLoader(sectionRef, [])

  return (
    <section ref={sectionRef} className="bg-velmora-ivory px-5 py-20 text-velmora-ink md:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 border-b border-velmora-line pb-8 md:flex-row md:items-end">
          <div>
            <p className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-velmora-gold-deep">Most loved</p>
            <h2 id="bestsellers-title" className="mt-3 font-serif text-5xl font-semibold text-velmora-ink md:text-6xl">Bestsellers</h2>
          </div>
          <p id="bestsellers-subtitle" className="max-w-md font-sans text-sm leading-7 text-velmora-taupe">
            Five luminous signatures selected for everyday wear, meaningful gifting, and polished layering.
          </p>
        </div>
        <div className="grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={onAdd} contextId="bestsellers" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestsellersSection
