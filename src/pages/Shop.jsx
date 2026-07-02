import { SlidersHorizontal } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/storefront/ProductCard.jsx'
import { products } from '@/data/products.js'
import { useStrkImages } from '@/hooks/useStrkImages.js'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const materials = ['All', '18K Gold Plated', 'Gold Vermeil']
const prices = ['All', 'Under $50', '$50–$80', '$80+']

export default function Shop({ onAddToCart }) {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(categories.includes(initialCategory) ? initialCategory : 'All')
  const [material, setMaterial] = useState('All')
  const [price, setPrice] = useState('All')
  const [sort, setSort] = useState('Featured')
  const imageContainerRef = useStrkImages([category, material, price, sort])

  const filteredProducts = useMemo(() => {
    const result = products
      .filter((product) => category === 'All' || product.category === category)
      .filter((product) => material === 'All' || product.material === material)
      .filter((product) => {
        if (price === 'Under $50') return product.price < 50
        if (price === '$50–$80') return product.price >= 50 && product.price <= 80
        if (price === '$80+') return product.price > 80
        return true
      })

    if (sort === 'Price: Low to High') return [...result].sort((a, b) => a.price - b.price)
    if (sort === 'Price: High to Low') return [...result].sort((a, b) => b.price - a.price)
    if (sort === 'Top Rated') return [...result].sort((a, b) => b.rating - a.rating)
    return result
  }, [category, material, price, sort])

  const filterGroups = [
    { label: 'Category', value: category, setter: setCategory, options: categories },
    { label: 'Price', value: price, setter: setPrice, options: prices },
    { label: 'Material', value: material, setter: setMaterial, options: materials },
  ]

  return (
    <main ref={imageContainerRef} className="min-h-screen bg-velmora-cream pt-28 text-velmora-ink">
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-10 md:px-8 lg:pb-14">
        <div className="border-b border-velmora-mist pb-8">
          <p className="font-sans text-xs font-semibold uppercase tracking-jewel text-velmora-bronze">Velmora Shop</p>
          <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="font-serif text-6xl leading-none text-velmora-ink md:text-8xl">All Jewelry</h1>
              <p className="mt-4 max-w-2xl font-sans text-base leading-7 text-velmora-espresso">
                Demi-fine gold jewelry with editorial polish, everyday comfort, and gift-ready detail.
              </p>
            </div>
            <label className="flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-luxe text-velmora-bronze">
              Sort
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="border border-velmora-mist bg-velmora-parchment px-4 py-3 font-sans text-sm normal-case tracking-normal text-velmora-ink focus:border-velmora-gold focus:outline-none"
              >
                {['Featured', 'Top Rated', 'Price: Low to High', 'Price: High to Low'].map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-20 md:px-8 lg:grid-cols-shop lg:pb-28">
        <aside className="h-fit border border-velmora-mist bg-velmora-parchment p-5 text-velmora-ink shadow-jewel lg:sticky lg:top-24">
          <div className="mb-5 flex items-center gap-2 border-b border-velmora-mist pb-4">
            <SlidersHorizontal className="h-4 w-4 text-velmora-gold" />
            <h2 className="font-sans text-xs font-bold uppercase tracking-jewel text-velmora-ink">Filters</h2>
          </div>
          <div className="space-y-7">
            {filterGroups.map((group) => (
              <div key={group.label}>
                <h3 className="font-sans text-xs font-semibold uppercase tracking-luxe text-velmora-bronze">{group.label}</h3>
                <div className="mt-3 flex flex-wrap gap-2 lg:grid">
                  {group.options.map((option) => {
                    const active = group.value === option
                    return (
                      <button
                        key={option}
                        type="button"
                        className={`border px-3 py-2 text-left font-sans text-sm transition-colors ${active ? 'border-velmora-gold bg-velmora-gold text-velmora-ink' : 'border-velmora-mist bg-velmora-cream text-velmora-espresso hover:border-velmora-gold hover:text-velmora-bronze'}`}
                        onClick={() => group.setter(option)}
                      >
                        {option}
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </aside>

        <div>
          <div className="mb-5 flex items-center justify-between font-sans text-sm text-velmora-espresso">
            <p>{filteredProducts.length} pieces</p>
            <button
              type="button"
              className="font-sans text-xs font-bold uppercase tracking-luxe text-velmora-bronze underline-offset-4 hover:underline"
              onClick={() => {
                setCategory('All')
                setMaterial('All')
                setPrice('All')
              }}
            >
              Clear filters
            </button>
          </div>
          {filteredProducts.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
              ))}
            </div>
          ) : (
            <div className="border border-velmora-mist bg-velmora-parchment p-10 text-center text-velmora-ink">
              <h2 className="font-serif text-4xl">No pieces found</h2>
              <p className="mt-3 font-sans text-sm text-velmora-espresso">Try another category, material, or price range.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
