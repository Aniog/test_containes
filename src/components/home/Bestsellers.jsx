import ProductCard from '@/components/product/ProductCard'

export default function Bestsellers({ products, onAddToCart }) {
  return (
    <section id="shop" className="bg-velmora-ivory px-5 py-20 text-velmora-onyx md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-antique">Bestsellers</p>
            <h2 className="mt-3 font-serif text-5xl font-medium leading-none text-velmora-onyx md:text-6xl">The pieces everyone keeps reaching for.</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-velmora-stone">High-polish gold tones, easy gifting, and silhouettes designed to layer beautifully.</p>
        </div>
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} compact />
          ))}
        </div>
      </div>
    </section>
  )
}
