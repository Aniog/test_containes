import { useEffect, useMemo, useRef, useState } from 'react'
import ProductCard from '@/components/ProductCard'
import SectionHeading from '@/components/SectionHeading'
import { products, sortOptions } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const priceOptions = ['All', '$30–$60', '$61–$90', '$91–$120']
const materialOptions = ['All', '18K Gold Plated']

const getSortedProducts = (items, sort) => {
  const result = [...items]

  if (sort === 'price-low') {
    return result.sort((a, b) => a.price - b.price)
  }

  if (sort === 'price-high') {
    return result.sort((a, b) => b.price - a.price)
  }

  if (sort === 'rating') {
    return result.sort((a, b) => b.rating - a.rating)
  }

  return result
}

const Shop = () => {
  const containerRef = useRef(null)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedPrice, setSelectedPrice] = useState('All')
  const [selectedMaterial, setSelectedMaterial] = useState('All')
  const [sort, setSort] = useState('featured')

  const filteredProducts = useMemo(() => {
    const nextProducts = products.filter((product) => {
      const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory
      const materialMatch = selectedMaterial === 'All' || product.material === selectedMaterial

      const priceMatch =
        selectedPrice === 'All' ||
        (selectedPrice === '$30–$60' && product.price <= 60) ||
        (selectedPrice === '$61–$90' && product.price > 60 && product.price <= 90) ||
        (selectedPrice === '$91–$120' && product.price > 90)

      return categoryMatch && materialMatch && priceMatch
    })

    return getSortedProducts(nextProducts, sort)
  }, [selectedCategory, selectedMaterial, selectedPrice, sort])

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') {
        cleanup()
      }
    }
  }, [filteredProducts])

  useEffect(() => {
    document.title = 'Shop Velmora Fine Jewelry'
  }, [])

  const filters = [
    {
      title: 'Category',
      value: selectedCategory,
      setter: setSelectedCategory,
      options: categoryOptions,
    },
    {
      title: 'Price',
      value: selectedPrice,
      setter: setSelectedPrice,
      options: priceOptions,
    },
    {
      title: 'Material',
      value: selectedMaterial,
      setter: setSelectedMaterial,
      options: materialOptions,
    },
  ]

  return (
    <div ref={containerRef} className="section-frame py-12 sm:py-16">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Collection"
          title="Shop the Velmora edit"
          description="A premium-but-accessible assortment of demi-fine earrings, necklaces, huggies, and giftable sets."
        />
        <div className="w-full max-w-xs">
          <label htmlFor="sort-products" className="mb-3 block text-xs uppercase tracking-button text-taupe">
            Sort by
          </label>
          <select
            id="sort-products"
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            className="w-full rounded-full border border-line bg-parchment px-5 py-3 text-sm text-ink outline-none"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="h-fit rounded-3xl border border-line bg-parchment p-6 shadow-card">
          <div className="flex items-center justify-between border-b border-line pb-4">
            <p className="text-sm uppercase tracking-button text-ink">Filter</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All')
                setSelectedPrice('All')
                setSelectedMaterial('All')
              }}
              className="text-xs uppercase tracking-button text-taupe"
            >
              Clear
            </button>
          </div>

          <div className="mt-6 space-y-7">
            {filters.map((filter) => (
              <div key={filter.title}>
                <p className="text-xs uppercase tracking-button text-taupe">{filter.title}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {filter.options.map((option) => {
                    const active = filter.value === option
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => filter.setter(option)}
                        className={`rounded-full border px-4 py-2 text-xs uppercase tracking-button transition duration-300 ${
                          active
                            ? 'border-gold bg-gold text-parchment'
                            : 'border-line bg-mist text-ink hover:border-gold hover:text-gold'
                        }`}
                      >
                        {option}
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </aside>

        <div>
          <div className="mb-6 flex items-center justify-between gap-4">
            <p className="text-sm text-taupe">
              Showing <span className="text-ink">{filteredProducts.length}</span> refined pieces
            </p>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="surface-card p-10 text-center">
              <p className="font-display text-4xl text-obsidian">No pieces match your filters</p>
              <p className="mt-4 text-sm leading-7 text-taupe">
                Try broadening the category or price range to reveal the full Velmora edit.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Shop
