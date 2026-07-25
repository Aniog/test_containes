import { SlidersHorizontal } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function ShopPage({ onAddToCart, onOpenProduct }) {
  return (
    <main className="bg-velmora-ivory pt-24 text-velmora-ink">
      <section className="border-b border-velmora-sand bg-velmora-pearl">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-bronze">Collection</p>
          <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h1 id="shop-page-title" className="font-serif text-5xl text-velmora-ink sm:text-6xl">Shop Velmora</h1>
              <p id="shop-page-subtitle" className="mt-4 max-w-2xl text-base leading-8 text-velmora-espresso/80">
                Demi-fine gold jewelry designed for personal rituals, gifting, and softly polished everyday wear.
              </p>
            </div>
            <label className="flex w-full max-w-xs items-center justify-between rounded-full border border-velmora-sand bg-velmora-ivory px-5 py-3 text-sm text-velmora-ink">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-velmora-bronze">Sort</span>
              <select className="bg-transparent text-sm font-semibold text-velmora-ink outline-none" defaultValue="featured">
                <option value="featured">Featured</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
              </select>
            </label>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[17rem_1fr] lg:px-8 lg:py-16">
        <aside className="h-fit border border-velmora-sand bg-velmora-pearl p-6 text-velmora-ink lg:sticky lg:top-28">
          <div className="mb-6 flex items-center justify-between border-b border-velmora-sand pb-4">
            <h2 className="font-serif text-2xl text-velmora-ink">Filter</h2>
            <SlidersHorizontal className="h-5 w-5 text-velmora-bronze" />
          </div>
          <div className="space-y-7">
            <fieldset>
              <legend className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-velmora-bronze">Category</legend>
              {['Earrings', 'Necklaces', 'Huggies', 'Sets'].map((item) => (
                <label key={item} className="mb-3 flex items-center gap-3 text-sm text-velmora-espresso">
                  <input type="checkbox" className="h-4 w-4 accent-velmora-champagne" />
                  {item}
                </label>
              ))}
            </fieldset>
            <fieldset>
              <legend className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-velmora-bronze">Price</legend>
              {['Under $50', '$50–$80', '$80–$120'].map((item) => (
                <label key={item} className="mb-3 flex items-center gap-3 text-sm text-velmora-espresso">
                  <input type="checkbox" className="h-4 w-4 accent-velmora-champagne" />
                  {item}
                </label>
              ))}
            </fieldset>
            <fieldset>
              <legend className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-velmora-bronze">Material</legend>
              {['18K Gold Plated', 'Crystal', 'Hypoallergenic'].map((item) => (
                <label key={item} className="mb-3 flex items-center gap-3 text-sm text-velmora-espresso">
                  <input type="checkbox" className="h-4 w-4 accent-velmora-champagne" />
                  {item}
                </label>
              ))}
            </fieldset>
          </div>
        </aside>

        <div>
          <div className="mb-6 flex items-center justify-between text-sm text-velmora-espresso/75">
            <p>{products.length} pieces</p>
            <p className="hidden sm:block">Free shipping on every order</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onAdd={onAddToCart} onOpen={onOpenProduct} contextRefs="[shop-page-subtitle] [shop-page-title]" />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
