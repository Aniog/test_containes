import { useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import FilterSidebar from '@/components/shop/FilterSidebar'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'
import { useImageLoader } from '@/hooks/useImageLoader'

const Shop = ({ onAdd }) => {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(initialCategory)
  const [price, setPrice] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('Featured')
  const pageRef = useRef(null)

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category
      const matchesMaterial = material === 'All' || product.material === material || (material === 'Hypoallergenic' && product.id === 'golden-sphere-huggies')
      const matchesPrice = price === 'All' ||
        (price === 'Under $50' && product.price < 50) ||
        (price === '$50–$80' && product.price >= 50 && product.price <= 80) ||
        (price === '$80+' && product.price > 80)
      return matchesCategory && matchesMaterial && matchesPrice
    })

    return [...result].sort((a, b) => {
      if (sort === 'Price: low to high') return a.price - b.price
      if (sort === 'Price: high to low') return b.price - a.price
      if (sort === 'Top rated') return b.rating - a.rating
      return 0
    })
  }, [category, price, material, sort])

  useImageLoader(pageRef, [category, price, material, sort])

  return (
    <main ref={pageRef} className="bg-velmora-ivory px-5 pb-20 pt-28 text-velmora-ink md:px-8 lg:pb-28">
      <section className="mx-auto max-w-7xl">
        <div className="mb-10 border-b border-velmora-line pb-8">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-velmora-gold-deep">The full edit</p>
          <div className="mt-3 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h1 id="shop-title" className="font-serif text-6xl font-semibold text-velmora-ink md:text-7xl">Shop Velmora</h1>
              <p id="shop-subtitle" className="mt-4 max-w-2xl font-sans text-sm leading-7 text-velmora-taupe">
                Demi-fine gold jewelry for ear stacks, neckline light, gifting, and small everyday ceremonies.
              </p>
            </div>
            <label className="flex items-center gap-3 font-sans text-xs font-bold uppercase tracking-[0.18em] text-velmora-taupe">
              Sort
              <select
                className="rounded-full border border-velmora-line bg-velmora-mist px-4 py-3 font-sans text-sm normal-case tracking-normal text-velmora-ink focus:border-velmora-gold focus:outline-none"
                value={sort}
                onChange={(event) => setSort(event.target.value)}
              >
                <option>Featured</option>
                <option>Top rated</option>
                <option>Price: low to high</option>
                <option>Price: high to low</option>
              </select>
            </label>
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-[18rem_1fr]">
          <FilterSidebar category={category} setCategory={setCategory} price={price} setPrice={setPrice} material={material} setMaterial={setMaterial} />
          <div>
            <div className="mb-6 font-sans text-xs font-bold uppercase tracking-[0.22em] text-velmora-taupe">
              {filteredProducts.length} pieces
            </div>
            {filteredProducts.length > 0 ? (
              <div className="grid gap-x-7 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} onAdd={onAdd} contextId="shop" />
                ))}
              </div>
            ) : (
              <div className="rounded-[2rem] border border-velmora-line bg-velmora-mist p-12 text-center text-velmora-ink">
                <p className="font-serif text-4xl font-semibold">No pieces in this edit.</p>
                <p className="mt-3 font-sans text-sm text-velmora-taupe">Adjust the filters to discover more Velmora jewelry.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Shop
