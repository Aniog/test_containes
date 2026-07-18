import { relatedProducts } from '@/data/storefront'
import { ProductCard } from '@/components/shop/ProductCard'
import { ImageLoader } from '@/components/layout/ImageLoader'

export function RelatedProducts({ currentId }) {
  const items = relatedProducts(currentId)

  return (
    <section className="bg-velmora-porcelain py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.32em] text-velmora-truffle">You may also like</p>
          <h2 className="mt-3 font-display text-4xl text-velmora-espresso sm:text-5xl">
            More pieces to layer into your collection.
          </h2>
        </div>
        <ImageLoader dependencies={[currentId]} className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ImageLoader>
      </div>
    </section>
  )
}
