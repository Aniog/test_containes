import ProductTile from '@/components/shop/ProductTile'
import { products } from '@/data/products'

const Bestsellers = ({ onAdd }) => {
  return (
    <section id="bestsellers" className="bg-velmora-cream px-4 py-16 text-velmora-ink sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 border-b border-velmora-ink/10 pb-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-velmora-bronze">The five-piece edit</p>
            <h2 id="bestsellers-title" className="mt-3 font-serif text-5xl font-medium leading-none text-velmora-ink md:text-6xl">Bestsellers</h2>
          </div>
          <p id="bestsellers-subtitle" className="max-w-md text-sm leading-7 text-velmora-espresso/75">
            Sculptural gold pieces, crystalline accents, and giftable sets designed to feel considered from the first wear.
          </p>
        </div>
        <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductTile key={product.id} product={product} onAdd={onAdd} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Bestsellers
