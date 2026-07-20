import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal } from 'lucide-react'
import ProductCard from '../components/product/ProductCard'
import { products } from '../data/products'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const priceRanges = [
  { label: 'All', value: 'all' },
  { label: '$30–$50', value: '30-50' },
  { label: '$51–$80', value: '51-80' },
  { label: '$81–$120', value: '81-120' },
]
const materials = ['18K Gold Plated', 'Hypoallergenic']

export default function Shop({ onAddToCart }) {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(categories.includes(initialCategory) ? initialCategory : 'All')
  const [priceRange, setPriceRange] = useState('all')
  const [material, setMaterial] = useState('18K Gold Plated')
  const [sort, setSort] = useState('featured')

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category
      const matchesMaterial = !material || product.material === material || material === 'Hypoallergenic'
      const matchesPrice = priceRange === 'all' || (() => {
        const [min, max] = priceRange.split('-').map(Number)
        return product.price >= min && product.price <= max
      })()
      return matchesCategory && matchesMaterial && matchesPrice
    })

    return [...result].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return products.indexOf(a) - products.indexOf(b)
    })
  }, [category, material, priceRange, sort])

  return (
    <main className="bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-8 sm:px-8 md:pb-14 md:pt-14">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-gold">Velmora shop</p>
        <div className="mt-4 flex flex-col gap-5 border-b border-velmora-sand pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 id="shop-title" className="font-serif text-6xl leading-none text-velmora-espresso md:text-7xl">Demi-fine essentials</h1>
            <p id="shop-subtitle" className="mt-4 max-w-2xl text-base leading-8 text-velmora-espresso/72">
              Premium gold-plated earrings, necklaces, huggies, and gift sets crafted for a luminous everyday wardrobe.
            </p>
          </div>
          <label className="flex min-w-56 items-center gap-3 border border-velmora-sand bg-velmora-pearl px-4 py-3 text-sm text-velmora-espresso">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-velmora-espresso/60">Sort</span>
            <select value={sort} onChange={(event) => setSort(event.target.value)} className="w-full bg-transparent text-velmora-espresso focus:outline-none">
              <option value="featured">Featured</option>
              <option value="price-low">Price: low to high</option>
              <option value="price-high">Price: high to low</option>
              <option value="rating">Top rated</option>
            </select>
          </label>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-20 sm:px-8 lg:grid-cols-[260px_1fr]">
        <aside className="h-fit border border-velmora-sand bg-velmora-pearl p-5 text-velmora-espresso lg:sticky lg:top-28">
          <div className="mb-5 flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-velmora-gold" aria-hidden="true" />
            <h2 className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso">Filters</h2>
          </div>

          <FilterGroup title="Category">
            {categories.map((item) => (
              <FilterButton key={item} active={category === item} onClick={() => setCategory(item)}>{item}</FilterButton>
            ))}
          </FilterGroup>

          <FilterGroup title="Price">
            {priceRanges.map((item) => (
              <FilterButton key={item.value} active={priceRange === item.value} onClick={() => setPriceRange(item.value)}>{item.label}</FilterButton>
            ))}
          </FilterGroup>

          <FilterGroup title="Material">
            {materials.map((item) => (
              <FilterButton key={item} active={material === item} onClick={() => setMaterial(item)}>{item}</FilterButton>
            ))}
          </FilterGroup>
        </aside>

        <div>
          <div className="mb-5 flex items-center justify-between text-sm text-velmora-espresso/70">
            <p>{filteredProducts.length} piece{filteredProducts.length === 1 ? '' : 's'} found</p>
            <p className="hidden md:block">Free worldwide shipping on every order</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, children }) {
  return (
    <div className="border-t border-velmora-sand py-5 first:border-t-0 first:pt-0">
      <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-gold">{title}</h3>
      <div className="grid gap-2">{children}</div>
    </div>
  )
}

function FilterButton({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full border px-3 py-2 text-left text-sm transition-colors ${active ? 'border-velmora-espresso bg-velmora-espresso text-velmora-ivory' : 'border-velmora-sand bg-velmora-ivory text-velmora-espresso hover:border-velmora-gold'}`}
    >
      {children}
    </button>
  )
}
