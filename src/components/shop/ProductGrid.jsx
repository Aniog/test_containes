import ProductCard from '@/components/shop/ProductCard.jsx'

export default function ProductGrid({ products }) {
  if (products.length === 0) {
    return (
      <div className="rounded-luxe border border-velmora-mist bg-velmora-porcelain px-6 py-16 text-center shadow-velmora">
        <p className="font-serif text-4xl text-velmora-ink">No pieces match your filters</p>
        <p className="mt-4 text-sm leading-7 text-velmora-taupe">
          Try widening the material or price range to reveal more of the current edit.
        </p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
