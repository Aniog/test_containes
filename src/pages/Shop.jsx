import { useMemo, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { products } from '@/data/store.js'
import { SectionHeading } from '@/components/layout/Shell.jsx'
import { ProductCard } from '@/components/products/ProductCard.jsx'
import { useCart } from '@/context/CartContext.jsx'

const materials = ['18K Gold Plated', 'Gold Vermeil']
const categoryFilters = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const priceFilters = ['All', 'Under $50', '$50 to $80', '$80+']
const sorts = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

const FilterGroup = ({ label, options, selected, onSelect }) => (
  <div className="border-b border-line/80 py-5 last:border-b-0 last:pb-0 first:pt-0">
    <h3 className="text-xs uppercase tracking-[0.3em] text-ink/60">{label}</h3>
    <div className="mt-4 flex flex-wrap gap-3 lg:flex-col lg:items-start">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onSelect(option)}
          className={[
            'rounded-full border px-4 py-2 text-xs uppercase tracking-[0.24em] transition duration-300',
            selected === option
              ? 'border-champagne bg-champagne text-ink'
              : 'border-line bg-porcelain text-ink/70 hover:border-ink/20 hover:text-ink',
          ].join(' ')}
        >
          {option}
        </button>
      ))}
    </div>
  </div>
)

export default function Shop() {
  const { addToCart } = useCart()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedPrice, setSelectedPrice] = useState('All')
  const [selectedMaterial, setSelectedMaterial] = useState('All')
  const [sortBy, setSortBy] = useState('featured')

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      if (selectedCategory !== 'All' && product.category !== selectedCategory) return false
      if (selectedMaterial !== 'All' && product.material !== selectedMaterial) return false
      if (selectedPrice === 'Under $50' && product.price >= 50) return false
      if (selectedPrice === '$50 to $80' && (product.price < 50 || product.price > 80)) return false
      if (selectedPrice === '$80+' && product.price <= 80) return false
      return true
    })

    if (sortBy === 'price-asc') filtered.sort((a, b) => a.price - b.price)
    if (sortBy === 'price-desc') filtered.sort((a, b) => b.price - a.price)
    if (sortBy === 'rating') filtered.sort((a, b) => b.rating - a.rating)

    return filtered
  }, [selectedCategory, selectedMaterial, selectedPrice, sortBy])

  return (
    <div className="px-5 pb-16 pt-28 md:px-8 md:pt-32 lg:px-12 lg:pb-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Collection"
          title="Quietly striking pieces for gifting and self-purchase"
          description="Filter by silhouette, finish, and price to find the styles that fit your daily uniform or next meaningful gift."
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="h-fit rounded-[1.75rem] border border-line/80 bg-card p-6 shadow-card">
            <FilterGroup label="Category" options={categoryFilters} selected={selectedCategory} onSelect={setSelectedCategory} />
            <FilterGroup label="Price" options={priceFilters} selected={selectedPrice} onSelect={setSelectedPrice} />
            <FilterGroup label="Material" options={['All', ...materials]} selected={selectedMaterial} onSelect={setSelectedMaterial} />
          </aside>

          <div>
            <div className="mb-6 flex flex-col gap-4 rounded-[1.5rem] border border-line/80 bg-card px-5 py-4 shadow-card sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm uppercase tracking-[0.28em] text-ink/62">{filteredProducts.length} pieces</p>
              <label className="flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-ink/60">
                Sort
                <span className="relative">
                  <select
                    value={sortBy}
                    onChange={(event) => setSortBy(event.target.value)}
                    className="appearance-none rounded-full border border-line bg-porcelain px-4 py-3 pr-10 text-xs uppercase tracking-[0.24em] text-ink focus:border-champagne focus:outline-none"
                  >
                    {sorts.map((sort) => <option key={sort.value} value={sort.value}>{sort.label}</option>)}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/60" />
                </span>
              </label>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onQuickAdd={(item) => addToCart(item, 'Gold Tone', 1)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
