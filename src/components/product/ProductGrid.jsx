import ProductCard from '@/components/product/ProductCard'

export default function ProductGrid({ products, title, subtitle, priority = false }) {
  return (
    <section className="space-y-5">
      {title ? (
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="velmora-kicker">{subtitle}</p>
            <h2 className="font-display text-4xl text-velmora-ink md:text-5xl">{title}</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-velmora-cocoa/75">
            Sculptural, giftable demi-fine pieces designed to feel editorial on the body and effortless in real life.
          </p>
        </div>
      ) : null}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} priority={priority && index < 2} />
        ))}
      </div>
    </section>
  )
}
