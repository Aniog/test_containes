import { SlidersHorizontal } from 'lucide-react'
import { useMemo, useState } from 'react'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const prices = ['All', 'Under $50', '$50–$80', '$80–$120']
const materials = ['All', '18K Gold Plated', 'Crystal + Gold Plated', 'Gold Filigree']

const Shop = ({ onAddToCart }) => {
  const [category, setCategory] = useState('All')
  const [price, setPrice] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('Featured')

  const filteredProducts = useMemo(() => {
    let next = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material
      const priceMatch =
        price === 'All' ||
        (price === 'Under $50' && product.price < 50) ||
        (price === '$50–$80' && product.price >= 50 && product.price <= 80) ||
        (price === '$80–$120' && product.price > 80 && product.price <= 120)
      return categoryMatch && materialMatch && priceMatch
    })

    if (sort === 'Price: Low to High') next = [...next].sort((a, b) => a.price - b.price)
    if (sort === 'Price: High to Low') next = [...next].sort((a, b) => b.price - a.price)
    if (sort === 'Top Rated') next = [...next].sort((a, b) => b.rating - a.rating)
    return next
  }, [category, material, price, sort])

  return (
    <main className="bg-velmora-parchment pb-24 pt-28 text-velmora-ink">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-velmora-line pb-8">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-velmora-gold">Shop Velmora</p>
          <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <h1 className="font-serif text-6xl leading-none text-velmora-ink sm:text-7xl">The Collection</h1>
            <p className="max-w-xl text-sm leading-7 text-velmora-taupe">Filter by category, material, and price to find demi-fine pieces for gifting, stacking, and everyday light.</p>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[260px_1fr]">
          <aside className="h-fit rounded-2xl border border-velmora-line bg-velmora-ivory p-5 text-velmora-ink lg:sticky lg:top-28">
            <div className="mb-5 flex items-center gap-2 border-b border-velmora-line pb-4">
              <SlidersHorizontal className="h-4 w-4 text-velmora-gold" />
              <h2 className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-ink">Filters</h2>
            </div>
            <FilterGroup title="Category" value={category} options={categories} onChange={setCategory} />
            <FilterGroup title="Price" value={price} options={prices} onChange={setPrice} />
            <FilterGroup title="Material" value={material} options={materials} onChange={setMaterial} />
          </aside>

          <div>
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-velmora-taupe">{filteredProducts.length} pieces</p>
              <label className="flex items-center gap-3 text-sm text-velmora-ink">
                <span className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-taupe">Sort</span>
                <select value={sort} onChange={(event) => setSort(event.target.value)} className="rounded-full border border-velmora-line bg-velmora-ivory px-4 py-3 text-sm text-velmora-ink focus:border-velmora-gold focus:outline-none">
                  {['Featured', 'Top Rated', 'Price: Low to High', 'Price: High to Low'].map((option) => <option key={option}>{option}</option>)}
                </select>
              </label>
            </div>
            <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

const FilterGroup = ({ title, value, options, onChange }) => (
  <fieldset className="border-b border-velmora-line py-5 last:border-0">
    <legend className="mb-3 font-serif text-xl text-velmora-ink">{title}</legend>
    <div className="space-y-2">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={`block w-full rounded-full px-4 py-2 text-left text-sm transition ${value === option ? 'bg-velmora-ink text-velmora-ivory' : 'text-velmora-taupe hover:bg-velmora-parchment hover:text-velmora-ink'}`}
        >
          {option}
        </button>
      ))}
    </div>
  </fieldset>
)

export default Shop
