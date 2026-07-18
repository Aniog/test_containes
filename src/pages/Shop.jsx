import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/product/ProductCard'
import {
  categoryOptions,
  materialOptions,
  priceOptions,
  products,
  sortOptions,
} from '@/data/storefront'
import { useStorefront } from '@/context/StorefrontContext'

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get('category') || 'All',
  )
  const [selectedMaterial, setSelectedMaterial] = useState('All')
  const [selectedPrice, setSelectedPrice] = useState('all')
  const [selectedSort, setSelectedSort] = useState('featured')
  const { addToCart } = useStorefront()

  useEffect(() => {
    setSelectedCategory(searchParams.get('category') || 'All')
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    let nextProducts = [...products]

    if (selectedCategory !== 'All') {
      nextProducts = nextProducts.filter(
        (product) => product.category === selectedCategory,
      )
    }

    if (selectedMaterial !== 'All') {
      nextProducts = nextProducts.filter(
        (product) => product.material === selectedMaterial,
      )
    }

    if (selectedPrice !== 'all') {
      nextProducts = nextProducts.filter(
        (product) => product.priceRange === selectedPrice,
      )
    }

    if (selectedSort === 'price-asc') {
      nextProducts.sort((a, b) => a.price - b.price)
    }

    if (selectedSort === 'price-desc') {
      nextProducts.sort((a, b) => b.price - a.price)
    }

    if (selectedSort === 'rating-desc') {
      nextProducts.sort((a, b) => b.rating - a.rating)
    }

    return nextProducts
  }, [selectedCategory, selectedMaterial, selectedPrice, selectedSort])

  const updateCategory = (category) => {
    setSelectedCategory(category)

    if (category === 'All') {
      setSearchParams({})
      return
    }

    setSearchParams({ category })
  }

  return (
    <main className="bg-velmora-cream pt-28 text-velmora-ink">
      <section className="mx-auto max-w-7xl px-5 pb-8 md:px-8 lg:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-velmora-muted">Collection</p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl leading-none text-velmora-ink md:text-7xl">
          An edited collection of demi-fine gold jewelry.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-velmora-muted md:text-lg">
          Filter by silhouette, material, and price to find daily signatures and gift-ready sets.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 md:px-8 lg:grid-cols-[280px_1fr] lg:px-10">
        <aside className="h-fit rounded-[2rem] border border-velmora-mist/60 bg-velmora-panel p-6 shadow-soft lg:sticky lg:top-28">
          <div className="space-y-8">
            <div>
              <h2 className="text-xs uppercase tracking-[0.28em] text-velmora-muted">
                Category
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {categoryOptions.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => updateCategory(category)}
                    className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.24em] transition-colors duration-300 ${
                      selectedCategory === category
                        ? 'border-velmora-gold bg-velmora-gold text-velmora-ink'
                        : 'border-velmora-mist bg-transparent text-velmora-muted hover:border-velmora-gold hover:text-velmora-ink'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xs uppercase tracking-[0.28em] text-velmora-muted">
                Price
              </h2>
              <div className="mt-4 space-y-3">
                {priceOptions.map((price) => (
                  <label
                    key={price.value}
                    className="flex items-center justify-between gap-3 text-sm text-velmora-muted"
                  >
                    <span>{price.label}</span>
                    <input
                      type="radio"
                      name="price"
                      checked={selectedPrice === price.value}
                      onChange={() => setSelectedPrice(price.value)}
                      className="h-4 w-4 border-velmora-mist text-velmora-gold focus:ring-velmora-gold"
                    />
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xs uppercase tracking-[0.28em] text-velmora-muted">
                Material
              </h2>
              <div className="mt-4 space-y-3">
                {materialOptions.map((material) => (
                  <label
                    key={material}
                    className="flex items-center justify-between gap-3 text-sm text-velmora-muted"
                  >
                    <span>{material}</span>
                    <input
                      type="radio"
                      name="material"
                      checked={selectedMaterial === material}
                      onChange={() => setSelectedMaterial(material)}
                      className="h-4 w-4 border-velmora-mist text-velmora-gold focus:ring-velmora-gold"
                    />
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <div>
          <div className="mb-6 flex flex-col gap-4 rounded-[2rem] border border-velmora-mist/60 bg-velmora-panel p-5 shadow-soft md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-velmora-muted">
              Showing <span className="text-velmora-ink">{filteredProducts.length}</span> refined pieces
            </p>
            <div className="flex items-center gap-3">
              <label htmlFor="sort" className="text-xs uppercase tracking-[0.28em] text-velmora-muted">
                Sort
              </label>
              <select
                id="sort"
                value={selectedSort}
                onChange={(event) => setSelectedSort(event.target.value)}
                className="h-11 rounded-full border border-velmora-mist bg-velmora-cream px-4 text-sm text-velmora-ink focus:outline-none"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={(productId) => addToCart({ productId })}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Shop
