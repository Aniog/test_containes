import { SlidersHorizontal } from 'lucide-react'
import { useMemo, useState } from 'react'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const materials = ['All', '18K Gold Plated', 'Gold Vermeil']

export default function ShopPage({ onAdd, onViewProduct }) {
  const [category, setCategory] = useState('All')
  const [material, setMaterial] = useState('All')
  const [price, setPrice] = useState('All')
  const [sort, setSort] = useState('featured')

  const filteredProducts = useMemo(() => {
    const next = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material
      const priceMatch =
        price === 'All' ||
        (price === 'under50' && product.price < 50) ||
        (price === '50to80' && product.price >= 50 && product.price <= 80) ||
        (price === '80plus' && product.price > 80)
      return categoryMatch && materialMatch && priceMatch
    })

    return [...next].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return products.findIndex((product) => product.id === a.id) - products.findIndex((product) => product.id === b.id)
    })
  }, [category, material, price, sort])

  return (
    <main className="bg-ivory pt-28 text-noir">
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 lg:px-8">
        <div className="border-b border-sand pb-10">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-champagne">The collection</p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_26rem] lg:items-end">
            <h1 className="font-serif text-6xl font-semibold leading-none text-noir md:text-7xl">Shop Velmora</h1>
            <p className="font-sans text-base leading-7 text-taupe">
              Demi-fine gold pieces for gifting, layering, and the everyday rituals that deserve a little glow.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-20 sm:px-6 lg:grid-cols-[18rem_1fr] lg:px-8 lg:pb-28">
        <aside className="h-fit border border-sand bg-porcelain p-5 text-noir lg:sticky lg:top-28">
          <div className="mb-5 flex items-center gap-2 border-b border-sand pb-4">
            <SlidersHorizontal className="h-4 w-4 text-champagne" />
            <h2 className="font-sans text-xs font-bold uppercase tracking-[0.24em] text-noir">Filters</h2>
          </div>

          <FilterGroup label="Category" value={category} options={categories} onChange={setCategory} />
          <FilterGroup label="Material" value={material} options={materials} onChange={setMaterial} />
          <FilterGroup
            label="Price"
            value={price}
            options={[
              { label: 'All', value: 'All' },
              { label: 'Under $50', value: 'under50' },
              { label: '$50–$80', value: '50to80' },
              { label: '$80+', value: '80plus' },
            ]}
            onChange={setPrice}
          />
        </aside>

        <div>
          <div className="mb-6 flex flex-col gap-4 border-b border-sand pb-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-sans text-sm font-medium text-taupe">
              Showing <span className="text-noir">{filteredProducts.length}</span> pieces
            </p>
            <label className="flex items-center gap-3 font-sans text-xs font-bold uppercase tracking-[0.2em] text-noir">
              Sort
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="rounded-full border border-sand bg-porcelain px-4 py-3 font-sans text-sm font-semibold normal-case tracking-normal text-noir focus:border-champagne focus:outline-none focus:ring-2 focus:ring-champagne/30"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price, low to high</option>
                <option value="price-high">Price, high to low</option>
                <option value="rating">Best rated</option>
              </select>
            </label>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAdd={onAdd} onView={onViewProduct} />
              ))}
            </div>
          ) : (
            <div className="border border-sand bg-porcelain px-6 py-16 text-center text-noir">
              <h3 className="font-serif text-4xl font-semibold">No pieces found</h3>
              <p className="mt-3 font-sans text-sm text-taupe">Try adjusting your filters to reveal more of the collection.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ label, value, options, onChange }) {
  return (
    <fieldset className="border-b border-sand py-5 last:border-b-0">
      <legend className="mb-4 font-serif text-2xl font-semibold text-noir">{label}</legend>
      <div className="space-y-3">
        {options.map((option) => {
          const optionValue = typeof option === 'string' ? option : option.value
          const optionLabel = typeof option === 'string' ? option : option.label
          return (
            <label key={optionValue} className="flex cursor-pointer items-center justify-between gap-3 font-sans text-sm text-taupe transition hover:text-noir">
              <span>{optionLabel}</span>
              <input
                type="radio"
                name={label}
                value={optionValue}
                checked={value === optionValue}
                onChange={() => onChange(optionValue)}
                className="h-4 w-4 accent-champagne"
              />
            </label>
          )
        })}
      </div>
    </fieldset>
  )
}
