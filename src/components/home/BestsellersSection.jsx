import { products } from '@/data/storefront'
import { ProductCard } from '@/components/shop/ProductCard'
import { ImageLoader } from '@/components/layout/ImageLoader'

export function BestsellersSection() {
  return (
    <section id="bestsellers" className="bg-velmora-porcelain py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 border-b border-velmora-line pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-velmora-truffle">Bestsellers</p>
            <h2 className="mt-3 font-display text-4xl text-velmora-espresso sm:text-5xl">
              Signature pieces for daily polish.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-velmora-truffle">
            A considered edit of customer favorites designed to move effortlessly from weekday simplicity to evening gifting moments.
          </p>
        </div>

        <ImageLoader dependencies={[]} className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} priority={index < 2} />
          ))}
        </ImageLoader>
      </div>
    </section>
  )
}
