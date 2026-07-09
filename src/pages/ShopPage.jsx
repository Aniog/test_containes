import { useMemo } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/product/ProductCard'
import SectionHeader from '@/components/common/SectionHeader'
import { products } from '@/data/products'
import { useImageLoader } from '@/hooks/useImageLoader'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const prices = [
  { label: 'All prices', value: 'all' },
  { label: 'Under $50', value: 'under-50' },
  { label: '$50–$80', value: '50-80' },
  { label: '$80+', value: '80-plus' },
]
const materials = ['All', '18K Gold Plated', 'Gold Vermeil']

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const category = searchParams.get('category') || 'All'
  const price = searchParams.get('price') || 'all'
  const material = searchParams.get('material') || 'All'
  const sort = searchParams.get('sort') || 'featured'
  const shopRef = useImageLoader([category, price, material, sort])

  const setParam = (key, value) => {
    const next = new URLSearchParams(searchParams)
    if (value === 'All' || value === 'all' || value === 'featured') next.delete(key)
    else next.set(key, value)
    setSearchParams(next)
  }

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material
      const priceMatch = price === 'all'
        || (price === 'under-50' && product.price < 50)
        || (price === '50-80' && product.price >= 50 && product.price <= 80)
        || (price === '80-plus' && product.price > 80)
      return categoryMatch && materialMatch && priceMatch
    })

    if (sort === 'price-low') result = [...result].sort((a, b) => a.price - b.price)
    if (sort === 'price-high') result = [...result].sort((a, b) => b.price - a.price)
    if (sort === 'rating') result = [...result].sort((a, b) => b.rating - a.rating)
    return result
  }, [category, material, price, sort])

  return (
    <main ref={shopRef} className="bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="px-4 pb-10 pt-10 sm:px-6 lg:px-8 lg:pb-14">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Shop Velmora" title="Demi-fine gold, edited with intention" copy="Browse warm gold earrings, necklaces, huggies, and gift sets designed for self-purchase and meaningful giving." />
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="h-fit rounded-[2rem] border border-velmora-sand bg-velmora-porcelain p-5 text-velmora-espresso shadow-sm lg:sticky lg:top-28">
            <div className="mb-6 flex items-center gap-2 border-b border-velmora-sand pb-4">
              <SlidersHorizontal className="h-4 w-4 text-velmora-champagne" />
              <h2 className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso">Filters</h2>
            </div>
            <FilterGroup title="Category" options={categories} selected={category} onChange={(value) => setParam('category', value)} />
            <FilterGroup title="Price" options={prices} selected={price} onChange={(value) => setParam('price', value)} valueKey="value" labelKey="label" />
            <FilterGroup title="Material" options={materials} selected={material} onChange={(value) => setParam('material', value)} />
          </aside>

          <div>
            <div className="mb-6 flex flex-col gap-4 rounded-[1.5rem] border border-velmora-sand bg-velmora-porcelain px-5 py-4 text-velmora-espresso sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-velmora-umber"><span className="font-bold text-velmora-espresso">{filteredProducts.length}</span> pieces in this edit</p>
              <label className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.16em] text-velmora-umber">
                Sort
                <select value={sort} onChange={(event) => setParam('sort', event.target.value)} className="rounded-full border border-velmora-sand bg-white px-4 py-2 text-sm normal-case tracking-normal text-velmora-espresso focus:border-velmora-champagne focus:outline-none focus:ring-2 focus:ring-velmora-champagne">
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: low to high</option>
                  <option value="price-high">Price: high to low</option>
                  <option value="rating">Top rated</option>
                </select>
              </label>
            </div>
            {filteredProducts.length > 0 ? (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
              </div>
            ) : (
              <div className="rounded-[2rem] border border-dashed border-velmora-sand bg-velmora-porcelain p-12 text-center text-velmora-espresso">
                <h3 className="font-serif text-4xl">No pieces match this edit</h3>
                <p className="mt-3 text-velmora-umber">Try another category, price, or material filter.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, selected, onChange, valueKey, labelKey }) {
  return (
    <div className="mb-7 last:mb-0">
      <h3 className="mb-3 font-serif text-2xl text-velmora-espresso">{title}</h3>
      <div className="grid gap-2">
        {options.map((option) => {
          const value = valueKey ? option[valueKey] : option
          const label = labelKey ? option[labelKey] : option
          const active = selected === value
          return (
            <button key={value} type="button" onClick={() => onChange(value)} className={`rounded-full border px-4 py-2 text-left text-sm font-semibold transition ${active ? 'border-velmora-champagne bg-velmora-champagne text-velmora-espresso' : 'border-velmora-sand bg-white text-velmora-umber hover:border-velmora-champagne hover:text-velmora-espresso'}`}>
              {label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
