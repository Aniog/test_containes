import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ImageScope from '@/components/common/ImageScope'
import ProductCard from '@/components/product/ProductCard'
import FilterGroup from '@/components/shop/FilterGroup'
import { products } from '@/data/products'

const categoryOptions = [
  { label: 'All', value: 'All' },
  { label: 'Earrings', value: 'Earrings' },
  { label: 'Necklaces', value: 'Necklaces' },
  { label: 'Huggies', value: 'Huggies' },
  { label: 'Sets', value: 'Sets' },
]
const priceOptions = [
  { label: 'All', value: 'All' },
  { label: 'Under $50', value: 'under-50' },
  { label: '$50–$80', value: '50-80' },
  { label: '$80+', value: '80-plus' },
]
const materialOptions = [
  { label: 'All', value: 'All' },
  { label: '18K Gold Plated', value: '18K gold plated' },
]

export default function Shop() {
  const [searchParams] = useSearchParams()
  const [category, setCategory] = useState(searchParams.get('category') || 'All')
  const [price, setPrice] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')

  const filteredProducts = useMemo(() => {
    const nextProducts = products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category
      const matchesMaterial = material === 'All' || product.material === material
      const matchesPrice =
        price === 'All' ||
        (price === 'under-50' && product.price < 50) ||
        (price === '50-80' && product.price >= 50 && product.price <= 80) ||
        (price === '80-plus' && product.price > 80)

      return matchesCategory && matchesMaterial && matchesPrice
    })

    if (sort === 'price-low') return [...nextProducts].sort((a, b) => a.price - b.price)
    if (sort === 'price-high') return [...nextProducts].sort((a, b) => b.price - a.price)
    if (sort === 'rating') return [...nextProducts].sort((a, b) => b.rating - a.rating)
    return nextProducts
  }, [category, material, price, sort])

  return (
    <ImageScope refreshKey={`${category}-${price}-${material}-${sort}`}>
      <main className="bg-velmora-porcelain pb-20 pt-28 text-velmora-ink">
        <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="border-b border-velmora-sand pb-10">
            <p id="shop-eyebrow" className="text-xs font-bold uppercase tracking-label text-velmora-goldDark">The Collection</p>
            <div className="mt-4 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h1 id="shop-title" className="font-serif text-6xl font-medium leading-none text-velmora-ink lg:text-7xl">Shop demi-fine gold jewelry</h1>
                <p id="shop-subtitle" className="mt-5 max-w-2xl text-lg leading-8 text-velmora-cocoa/80">Premium-but-accessible pieces designed for gifting, self-purchase, and every golden in-between moment.</p>
              </div>
              <label className="flex items-center gap-3 text-sm font-semibold text-velmora-ink">
                Sort
                <select value={sort} onChange={(event) => setSort(event.target.value)} className="rounded-full border border-velmora-sand bg-velmora-pearl px-4 py-3 text-sm text-velmora-ink focus:border-velmora-goldDark focus:outline-none">
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </label>
            </div>
          </div>
          <div className="mt-8 grid gap-8 lg:grid-cols-[17rem_1fr]">
            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <FilterGroup title="Category" options={categoryOptions} selected={category} onSelect={setCategory} />
              <FilterGroup title="Price" options={priceOptions} selected={price} onSelect={setPrice} />
              <FilterGroup title="Material" options={materialOptions} selected={material} onSelect={setMaterial} />
            </aside>
            <section>
              <div className="mb-5 flex items-center justify-between text-sm text-velmora-cocoa/75">
                <p>{filteredProducts.length} pieces</p>
                <p className="hidden text-right sm:block">Free worldwide shipping over $75</p>
              </div>
              {filteredProducts.length > 0 ? (
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
                </div>
              ) : (
                <div className="border border-velmora-sand bg-velmora-pearl p-10 text-center text-velmora-ink">
                  <h2 className="font-serif text-4xl">No pieces found</h2>
                  <p className="mt-3 text-sm text-velmora-cocoa/75">Try a different filter combination.</p>
                </div>
              )}
            </section>
          </div>
        </section>
      </main>
    </ImageScope>
  )
}
