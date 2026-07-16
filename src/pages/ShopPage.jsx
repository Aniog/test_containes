import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal } from 'lucide-react'
import ProductCard from '../components/product/ProductCard.jsx'
import SectionHeader from '../components/common/SectionHeader.jsx'
import { products } from '../data/products.js'

const filterOptions = {
  category: ['All', 'Earrings', 'Necklaces', 'Huggies'],
  price: ['All', 'Under $50', '$50–$80', '$80+'],
  material: ['All', '18K Gold Plated', 'Crystal'],
}

const FilterGroup = ({ title, options, value, onChange }) => (
  <fieldset className="border-b border-velmora-stone pb-7">
    <legend className="mb-4 text-xs font-bold uppercase tracking-nav text-velmora-bronze">{title}</legend>
    <div className="grid gap-3">
      {options.map((option) => (
        <label key={option} className="flex cursor-pointer items-center justify-between gap-3 text-sm text-velmora-espresso">
          <span>{option}</span>
          <input
            type="radio"
            name={title}
            value={option}
            checked={value === option}
            onChange={() => onChange(option)}
            className="h-4 w-4 accent-velmora-champagne"
          />
        </label>
      ))}
    </div>
  </fieldset>
)

const priceMatches = (product, price) => {
  if (price === 'Under $50') return product.price < 50
  if (price === '$50–$80') return product.price >= 50 && product.price <= 80
  if (price === '$80+') return product.price > 80
  return true
}

const getInitialCategory = (searchParams) => {
  const categoryParam = searchParams.get('category')
  if (!categoryParam) return 'All'
  const match = filterOptions.category.find((option) => option.toLowerCase().replace(/\s+/g, '-') === categoryParam)
  return match || 'All'
}

const ShopPage = ({ onAddToCart }) => {
  const [searchParams] = useSearchParams()
  const [category, setCategory] = useState(() => getInitialCategory(searchParams))
  const [price, setPrice] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('Featured')
  const [filtersOpen, setFiltersOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const categoryOk = category === 'All' || product.category === category
      const priceOk = priceMatches(product, price)
      const materialOk = material === 'All' || product.material === material
      return categoryOk && priceOk && materialOk
    })

    return [...result].sort((a, b) => {
      if (sort === 'Price: low to high') return a.price - b.price
      if (sort === 'Price: high to low') return b.price - a.price
      if (sort === 'Top rated') return b.rating - a.rating
      return products.findIndex((product) => product.id === a.id) - products.findIndex((product) => product.id === b.id)
    })
  }, [category, material, price, sort])

  const sidebar = (
    <aside className="space-y-7 rounded-[2rem] border border-velmora-stone bg-velmora-porcelain p-6 text-velmora-espresso shadow-sm lg:sticky lg:top-28">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-3xl font-semibold">Filter</h2>
        <button
          type="button"
          onClick={() => {
            setCategory('All')
            setPrice('All')
            setMaterial('All')
          }}
          className="text-xs font-bold uppercase tracking-nav text-velmora-bronze transition hover:text-velmora-espresso"
        >
          Reset
        </button>
      </div>
      <FilterGroup title="Category" options={filterOptions.category} value={category} onChange={setCategory} />
      <FilterGroup title="Price" options={filterOptions.price} value={price} onChange={setPrice} />
      <FilterGroup title="Material" options={filterOptions.material} value={material} onChange={setMaterial} />
    </aside>
  )

  return (
    <main className="bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <SectionHeader
          eyebrow="Shop Velmora"
          title="Demi-fine pieces with a warm gold point of view"
          description="Explore earrings, necklaces, and huggies designed to feel premium, personal, and easy to wear every day."
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-4 border-y border-velmora-stone py-4 md:flex-row md:items-center md:justify-between">
          <button
            type="button"
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-velmora-stone bg-velmora-porcelain px-5 py-3 text-sm font-bold uppercase tracking-nav text-velmora-espresso transition hover:bg-velmora-blush lg:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" /> Filters
          </button>
          <p className="text-sm text-velmora-muted">
            Showing <span className="font-semibold text-velmora-espresso">{filteredProducts.length}</span> pieces
          </p>
          <label className="flex items-center gap-3 text-sm text-velmora-espresso">
            <span className="font-bold uppercase tracking-nav text-velmora-bronze">Sort</span>
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              className="rounded-full border border-velmora-stone bg-velmora-porcelain px-4 py-3 text-velmora-espresso focus:border-velmora-champagne focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
            >
              {['Featured', 'Top rated', 'Price: low to high', 'Price: high to low'].map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
        </div>

        {filtersOpen && <div className="mb-6 lg:hidden">{sidebar}</div>}

        <div className="grid gap-8 lg:grid-cols-[18rem_1fr]">
          <div className="hidden lg:block">{sidebar}</div>
          <div>
            {filteredProducts.length === 0 ? (
              <div className="rounded-[2rem] border border-dashed border-velmora-stone bg-velmora-porcelain p-10 text-center text-velmora-espresso">
                <h3 className="font-serif text-4xl font-semibold">No pieces match those filters</h3>
                <p className="mt-3 text-velmora-muted">Try broadening the edit to see more Velmora jewelry.</p>
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export default ShopPage
