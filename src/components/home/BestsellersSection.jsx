import ProductCard from "@/components/product/ProductCard.jsx"
import { ButtonLink } from "@/components/ui/Buttons.jsx"
import { products } from "@/data/products.js"

export default function BestsellersSection({ onAdd }) {
  return (
    <section id="bestsellers" className="bg-velmora-cream py-16 text-velmora-ink sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widerLuxe text-velmora-gold">Bestsellers</p>
            <h2 className="mt-3 font-serif text-5xl font-medium leading-none text-velmora-ink sm:text-6xl">
              Most Treasured Pieces
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-velmora-clay">
            Polished essentials and gift-ready signatures, selected for their glow, comfort, and everyday ease.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={onAdd} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <ButtonLink to="/shop" variant="outline">
            View All Jewelry
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
