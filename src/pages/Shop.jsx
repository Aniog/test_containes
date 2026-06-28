import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/ProductCard'
import { products } from '@/data/products'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const priceOptions = ['All', '$30–$50', '$50–$80', '$80–$120']
const materialOptions = ['All', '18K Gold Plated', 'Crystal Accents', 'Gift Ready']

const inPriceRange = (price, range) => {
  if (range === '$30–$50') return price >= 30 && price <= 50
  if (range === '$50–$80') return price > 50 && price <= 80
  if (range === '$80–$120') return price > 80 && price <= 120
  return true
}

export default function Shop({ onAddToCart }) {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category')
  const [category, setCategory] = useState(initialCategory ? initialCategory[0].toUpperCase() + initialCategory.slice(1) : 'All')
  const [price, setPrice] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')

  const visibleProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const priceMatch = inPriceRange(product.price, price)
      const materialMatch = material === 'All' || product.material === material || product.tags.includes(material)
      return categoryMatch && priceMatch && materialMatch
    })

    return [...filtered].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return products.findIndex((product) => product.id === a.id) - products.findIndex((product) => product.id === b.id)
    })
  }, [category, price, material, sort])


  const FilterGroup = ({ title, options, value, onChange }) => (
    <fieldset className="border-b border-[color:var(--color-hairline)] pb-6">
      <legend className="mb-4 font-[var(--font-heading)] text-2xl text-[var(--color-espresso)]">{title}</legend>
      <div className="grid gap-2">
        {options.map((option) => (
          <button key={option} type="button" onClick={() => onChange(option)} className={`rounded-full border px-4 py-3 text-left text-xs font-bold uppercase tracking-[0.18em] transition duration-300 ${value === option ? 'border-[var(--color-gold)] bg-[var(--color-gold)] text-[var(--color-espresso)]' : 'border-[color:var(--color-hairline)] bg-transparent text-[var(--color-muted)] hover:border-[var(--color-gold)] hover:text-[var(--color-espresso)]'}`}>{option}</button>
        ))}
      </div>
    </fieldset>
  )

  return (
    <main className="bg-[var(--color-ivory)] pb-20 pt-28 text-[var(--color-espresso)] lg:pt-32">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-[color:var(--color-hairline)] pb-10">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--color-gold-dark)]">Velmora Shop</p>
          <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div><h1 id="shop-page-title" className="font-[var(--font-heading)] text-5xl leading-tight tracking-[-0.04em] sm:text-6xl">Demi-fine pieces for every ritual.</h1><p id="shop-page-desc" className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-muted)]">Explore warm gold earrings, necklaces, huggies, and giftable sets from $30–$120.</p></div>
            <label className="flex max-w-xs flex-col gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-muted)]">Sort by<select value={sort} onChange={(event) => setSort(event.target.value)} className="rounded-full border border-[color:var(--color-hairline)] bg-[var(--color-alabaster)] px-4 py-3 text-sm normal-case tracking-normal text-[var(--color-espresso)] outline-none focus:border-[var(--color-gold)]"><option value="featured">Featured</option><option value="price-low">Price: Low to High</option><option value="price-high">Price: High to Low</option><option value="rating">Top Rated</option></select></label>
          </div>
        </div>
      </section>
      <section className="mx-auto mt-10 grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[280px_1fr] lg:px-8">
        <aside className="rounded-[1.75rem] border border-[color:var(--color-hairline)] bg-[var(--color-alabaster)] p-5 text-[var(--color-espresso)] lg:sticky lg:top-28 lg:self-start">
          <div className="mb-6 flex items-center justify-between"><h2 className="font-[var(--font-heading)] text-3xl">Filter</h2><span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-muted)]">{visibleProducts.length} styles</span></div>
          <div className="grid gap-6"><FilterGroup title="Category" options={categoryOptions} value={category} onChange={setCategory} /><FilterGroup title="Price" options={priceOptions} value={price} onChange={setPrice} /><FilterGroup title="Material" options={materialOptions} value={material} onChange={setMaterial} /></div>
        </aside>
        <div>
          {visibleProducts.length === 0 ? <div className="rounded-[2rem] border border-[color:var(--color-hairline)] bg-[var(--color-alabaster)] p-10 text-center"><p className="font-[var(--font-heading)] text-4xl">No pieces found.</p><p className="mt-3 text-sm text-[var(--color-muted)]">Try easing your filters to see more Velmora styles.</p></div> : <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">{visibleProducts.map((product) => <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />)}</div>}
        </div>
      </section>
    </main>
  )
}
