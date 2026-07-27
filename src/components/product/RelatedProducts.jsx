import ProductCard from '@/components/shared/ProductCard'

function RelatedProducts({ items, onAddToCart }) {
  return (
    <section className="border-t border-stone-200 bg-stone-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-10">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Related pieces</p>
          <h2 className="font-serif text-4xl text-stone-900 sm:text-5xl">You may also like</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default RelatedProducts
