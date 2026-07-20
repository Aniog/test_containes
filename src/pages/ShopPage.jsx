import { ImageHelper } from '@strikingly/sdk'
import { SlidersHorizontal } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import ProductCard from '@/components/product/ProductCard'
import { categories, products } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

const priceRanges = [
  { label: 'All prices', value: 'all' },
  { label: 'Under $50', value: 'under-50' },
  { label: '$50 – $80', value: '50-80' },
  { label: '$80+', value: '80-plus' },
]

const materialFilters = ['18K Gold Plated', 'Crystal Accent', 'Hypoallergenic']

export default function ShopPage({ onAddToCart }) {
  const pageRef = useRef(null)
  const [category, setCategory] = useState('All')
  const [price, setPrice] = useState('all')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')

  const filteredProducts = useMemo(() => {
    const nextProducts = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material || product.shortDescription.includes(material.replace('Hypoallergenic', 'hypoallergenic'))
      const priceMatch =
        price === 'all' ||
        (price === 'under-50' && product.price < 50) ||
        (price === '50-80' && product.price >= 50 && product.price <= 80) ||
        (price === '80-plus' && product.price > 80)

      return categoryMatch && materialMatch && priceMatch
    })

    return [...nextProducts].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return a.id - b.id
    })
  }, [category, material, price, sort])

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [category, material, price, sort, filteredProducts.length])

  return (
    <main ref={pageRef} className="bg-velmora-ivory pt-24 text-velmora-espresso">
      <section className="border-b border-velmora-mink/70 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-logo text-velmora-gold">The collection</p>
          <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="font-serif text-6xl font-semibold leading-none text-velmora-espresso lg:text-7xl">Shop Velmora</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-velmora-truffle">
                Demi-fine gold jewelry designed to be layered, gifted, and worn daily.
              </p>
            </div>
            <label className="flex w-full max-w-xs items-center gap-3 rounded-full border border-velmora-mink bg-velmora-porcelain px-5 py-3 text-sm font-semibold text-velmora-espresso">
              Sort
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="flex-1 bg-transparent text-sm text-velmora-espresso outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to high</option>
                <option value="price-high">Price: High to low</option>
                <option value="rating">Top rated</option>
              </select>
            </label>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-9 px-4 py-10 sm:px-6 lg:grid-cols-shop lg:px-8 lg:py-14">
        <aside className="h-fit border border-velmora-mink/70 bg-velmora-porcelain p-5 text-velmora-espresso lg:sticky lg:top-28">
          <div className="mb-6 flex items-center justify-between border-b border-velmora-mink/70 pb-4">
            <h2 className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-atelier text-velmora-espresso">
              <SlidersHorizontal className="h-4 w-4 text-velmora-gold" /> Filters
            </h2>
            <button
              type="button"
              onClick={() => {
                setCategory('All')
                setPrice('all')
                setMaterial('All')
              }}
              className="text-xs font-bold uppercase tracking-editorial text-velmora-truffle hover:text-velmora-gold"
            >
              Reset
            </button>
          </div>

          <FilterGroup title="Category">
            {['All', ...categories].map((item) => (
              <FilterButton key={item} active={category === item} onClick={() => setCategory(item)}>
                {item}
              </FilterButton>
            ))}
          </FilterGroup>

          <FilterGroup title="Price">
            {priceRanges.map((item) => (
              <FilterButton key={item.value} active={price === item.value} onClick={() => setPrice(item.value)}>
                {item.label}
              </FilterButton>
            ))}
          </FilterGroup>

          <FilterGroup title="Material">
            {['All', ...materialFilters].map((item) => (
              <FilterButton key={item} active={material === item} onClick={() => setMaterial(item)}>
                {item}
              </FilterButton>
            ))}
          </FilterGroup>
        </aside>

        <div>
          <div className="mb-6 flex items-center justify-between border-b border-velmora-mink/70 pb-4 text-sm text-velmora-truffle">
            <p>{filteredProducts.length} pieces</p>
            <p className="hidden sm:block">Free worldwide shipping on every order</p>
          </div>
          {filteredProducts.length > 0 ? (
            <div className="grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} imagePrefix="shop-grid" />
              ))}
            </div>
          ) : (
            <div className="grid min-h-empty place-items-center bg-velmora-porcelain p-8 text-center text-velmora-espresso">
              <div>
                <h3 className="font-serif text-4xl font-semibold">No pieces found.</h3>
                <p className="mt-3 text-sm leading-6 text-velmora-truffle">Try easing the filters to discover more Velmora favorites.</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, children }) {
  return (
    <div className="mb-7 last:mb-0">
      <h3 className="mb-3 text-xs font-extrabold uppercase tracking-luxury text-velmora-gold">{title}</h3>
      <div className="flex flex-wrap gap-2 lg:block lg:space-y-2">{children}</div>
    </div>
  )
}

function FilterButton({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm font-semibold transition lg:w-full lg:text-left ${
        active
          ? 'border-velmora-gold bg-velmora-gold text-velmora-espresso'
          : 'border-velmora-mink bg-velmora-ivory text-velmora-truffle hover:border-velmora-gold hover:text-velmora-espresso'
      }`}
    >
      {children}
    </button>
  )
}
