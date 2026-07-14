import { useEffect, useMemo, useRef, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import ProductCard from '@/components/product/ProductCard.jsx'
import { products } from '@/data/products.js'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const materialOptions = ['All', '18K Gold Plated', 'Gold Vermeil']
const priceOptions = [
  { label: 'All', min: 0, max: 999 },
  { label: '$30–$50', min: 30, max: 50 },
  { label: '$50–$80', min: 50, max: 80 },
  { label: '$80–$120', min: 80, max: 120 },
]

const FilterGroup = ({ title, children }) => (
  <div className="border-b border-velmora-linen py-6 first:pt-0">
    <h3 className="mb-4 text-xs font-bold uppercase tracking-velmora text-velmora-ink">{title}</h3>
    {children}
  </div>
)

const Shop = () => {
  const containerRef = useRef(null)
  const [category, setCategory] = useState('All')
  const [material, setMaterial] = useState('All')
  const [price, setPrice] = useState(priceOptions[0])
  const [sort, setSort] = useState('featured')

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material
      const priceMatch = product.price >= price.min && product.price <= price.max
      return categoryMatch && materialMatch && priceMatch
    })

    return [...filtered].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return products.findIndex((product) => product.id === a.id) - products.findIndex((product) => product.id === b.id)
    })
  }, [category, material, price, sort])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [category, material, price, sort])

  return (
    <main ref={containerRef} className="bg-velmora-cream pb-20 pt-28 text-velmora-ink">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-b border-velmora-linen pb-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-velmora text-velmora-gold">Shop Velmora</p>
            <h1 className="mt-4 font-serif text-6xl leading-none text-velmora-ink md:text-8xl">The Collection</h1>
          </div>
          <p className="max-w-xl text-sm leading-7 text-velmora-clay lg:justify-self-end">
            Premium demi-fine pieces priced for daily wear: earrings, necklaces, huggies, and gift-ready sets from $30 to $120.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[17rem_1fr] lg:px-8">
        <aside className="h-fit border border-velmora-linen bg-velmora-porcelain p-6 text-velmora-ink lg:sticky lg:top-28">
          <div className="mb-6 flex items-center gap-3">
            <SlidersHorizontal className="h-4 w-4 text-velmora-gold" />
            <h2 className="text-xs font-bold uppercase tracking-velmora text-velmora-ink">Filters</h2>
          </div>

          <FilterGroup title="Category">
            <div className="space-y-3">
              {categoryOptions.map((option) => (
                <label key={option} className="flex cursor-pointer items-center gap-3 text-sm text-velmora-clay">
                  <input type="radio" name="category" checked={category === option} onChange={() => setCategory(option)} className="accent-velmora-gold" />
                  <span className="text-velmora-ink/80">{option}</span>
                </label>
              ))}
            </div>
          </FilterGroup>

          <FilterGroup title="Price">
            <div className="space-y-3">
              {priceOptions.map((option) => (
                <label key={option.label} className="flex cursor-pointer items-center gap-3 text-sm text-velmora-clay">
                  <input type="radio" name="price" checked={price.label === option.label} onChange={() => setPrice(option)} className="accent-velmora-gold" />
                  <span className="text-velmora-ink/80">{option.label}</span>
                </label>
              ))}
            </div>
          </FilterGroup>

          <FilterGroup title="Material">
            <div className="space-y-3">
              {materialOptions.map((option) => (
                <label key={option} className="flex cursor-pointer items-center gap-3 text-sm text-velmora-clay">
                  <input type="radio" name="material" checked={material === option} onChange={() => setMaterial(option)} className="accent-velmora-gold" />
                  <span className="text-velmora-ink/80">{option}</span>
                </label>
              ))}
            </div>
          </FilterGroup>
        </aside>

        <div>
          <div className="mb-7 flex flex-col gap-4 border-b border-velmora-linen pb-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm uppercase tracking-product text-velmora-clay">{filteredProducts.length} pieces</p>
            <label className="flex items-center gap-3 text-xs font-bold uppercase tracking-velmora text-velmora-ink">
              Sort
              <select value={sort} onChange={(event) => setSort(event.target.value)} className="rounded-full border border-velmora-linen bg-velmora-porcelain px-4 py-2 text-sm normal-case tracking-normal text-velmora-ink focus:border-velmora-gold focus:outline-none">
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </label>
          </div>
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => <ProductCard key={product.id} product={product} prefix="shop" />)}
          </div>
          {filteredProducts.length === 0 && (
            <div className="border border-velmora-linen bg-velmora-porcelain p-10 text-center text-velmora-ink">
              <h3 className="font-serif text-3xl">No pieces match these filters</h3>
              <p className="mt-3 text-sm text-velmora-clay">Try a broader price range or category.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export default Shop
