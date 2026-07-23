import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductGrid from '../components/store/ProductGrid.jsx'
import SectionHeading from '../components/shared/SectionHeading.jsx'
import { products } from '../data/store.js'
import useLoadStrkImages from '../lib/useLoadStrkImages.js'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const materials = ['All', '18K Gold Plated', 'Gold Vermeil']
const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Top Rated']

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [price, setPrice] = useState(searchParams.get('price') || 'All')
  const [material, setMaterial] = useState(searchParams.get('material') || 'All')
  const [sort, setSort] = useState('Featured')
  const category = searchParams.get('category') || 'All'
  const containerRef = useLoadStrkImages([category, price, material, sort])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (category !== 'All') {
      result = result.filter((product) => product.category === category)
    }

    if (material !== 'All') {
      result = result.filter((product) => product.material === material)
    }

    if (price === 'Under $50') {
      result = result.filter((product) => product.price < 50)
    }

    if (price === '$50 to $80') {
      result = result.filter((product) => product.price >= 50 && product.price <= 80)
    }

    if (price === '$80+') {
      result = result.filter((product) => product.price > 80)
    }

    if (sort === 'Price: Low to High') {
      result.sort((a, b) => a.price - b.price)
    }

    if (sort === 'Price: High to Low') {
      result.sort((a, b) => b.price - a.price)
    }

    if (sort === 'Top Rated') {
      result.sort((a, b) => b.rating - a.rating)
    }

    return result
  }, [category, material, price, sort])

  const updateCategory = (nextCategory) => {
    const nextParams = new URLSearchParams(searchParams)

    if (nextCategory === 'All') {
      nextParams.delete('category')
    } else {
      nextParams.set('category', nextCategory)
    }

    setSearchParams(nextParams)
  }

  return (
    <div ref={containerRef} className="px-6 pb-16 pt-10 md:px-8 md:pb-24 md:pt-16">
      <div className="mx-auto max-w-7xl">
        <div id="collections" className="rounded-[2rem] border border-sand/50 bg-pearl p-8 shadow-card md:p-12">
          <SectionHeading
            eyebrow="Collection"
            title="Premium essentials, styled with warmth"
            description="Filter refined earrings, necklaces, and huggies made for gifting and self-purchase alike."
          />
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="h-fit rounded-[2rem] border border-sand/50 bg-pearl p-6 shadow-card lg:sticky lg:top-28">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-taupe">Category</p>
              <div className="mt-4 flex flex-wrap gap-3 lg:flex-col">
                {categories.map((item) => {
                  const active = category === item
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => updateCategory(item)}
                      className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.18em] transition duration-300 ${
                        active
                          ? 'border-obsidian bg-obsidian text-pearl'
                          : 'border-sand bg-porcelain text-truffle hover:border-champagne hover:text-obsidian'
                      }`}
                    >
                      {item}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="mt-8 border-t border-sand/60 pt-8">
              <label className="text-xs uppercase tracking-[0.22em] text-taupe" htmlFor="price-filter">
                Price
              </label>
              <select
                id="price-filter"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
                className="mt-4 w-full rounded-full border border-sand bg-porcelain px-4 py-3 text-sm text-obsidian focus:border-champagne focus:outline-none"
              >
                {['All', 'Under $50', '$50 to $80', '$80+'].map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>

            <div className="mt-8 border-t border-sand/60 pt-8">
              <label className="text-xs uppercase tracking-[0.22em] text-taupe" htmlFor="material-filter">
                Material
              </label>
              <select
                id="material-filter"
                value={material}
                onChange={(event) => setMaterial(event.target.value)}
                className="mt-4 w-full rounded-full border border-sand bg-porcelain px-4 py-3 text-sm text-obsidian focus:border-champagne focus:outline-none"
              >
                {materials.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
          </aside>

          <section>
            <div className="mb-6 flex flex-col gap-4 rounded-[1.75rem] border border-sand/50 bg-pearl p-5 shadow-card sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-truffle">
                Showing <span className="font-medium text-obsidian">{filteredProducts.length}</span> pieces
              </p>
              <div className="flex items-center gap-3">
                <label className="text-xs uppercase tracking-[0.22em] text-taupe" htmlFor="sort-filter">
                  Sort
                </label>
                <select
                  id="sort-filter"
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                  className="rounded-full border border-sand bg-porcelain px-4 py-3 text-sm text-obsidian focus:border-champagne focus:outline-none"
                >
                  {sortOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            <ProductGrid products={filteredProducts} />
          </section>
        </div>
      </div>
    </div>
  )
}

export default Shop
