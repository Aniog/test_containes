import { useMemo, useRef, useState } from 'react'
import ShopFilters from '@/components/shop/ShopFilters'
import ShopHero from '@/components/shop/ShopHero'
import ShopToolbar from '@/components/shop/ShopToolbar'
import ProductCard from '@/components/shared/ProductCard'
import { filterGroups, productCatalog } from '@/data/products'
import { useStrkImages } from '@/hooks/useStrkImages'

function applyPriceFilter(products, selectedPrice) {
  if (selectedPrice === 'Under $50') {
    return products.filter((product) => product.price < 50)
  }

  if (selectedPrice === '$50 to $80') {
    return products.filter((product) => product.price >= 50 && product.price <= 80)
  }

  if (selectedPrice === '$80+') {
    return products.filter((product) => product.price > 80)
  }

  return products
}

function sortProducts(products, sortKey) {
  if (sortKey === 'price-ascending') {
    return [...products].sort((first, second) => first.price - second.price)
  }

  if (sortKey === 'price-descending') {
    return [...products].sort((first, second) => second.price - first.price)
  }

  if (sortKey === 'rating') {
    return [...products].sort((first, second) => second.rating - first.rating)
  }

  return products
}

function ShopPage() {
  const pageRef = useRef(null)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedPrice, setSelectedPrice] = useState('All')
  const [selectedMaterial, setSelectedMaterial] = useState('All')
  const [sortKey, setSortKey] = useState('featured')

  useStrkImages(pageRef, [selectedCategory, selectedPrice, selectedMaterial, sortKey])

  const filteredProducts = useMemo(() => {
    let results = productCatalog

    if (selectedCategory !== 'All') {
      results = results.filter((product) => product.category === selectedCategory)
    }

    if (selectedMaterial !== 'All') {
      results = results.filter((product) => product.material === selectedMaterial || product.metal === selectedMaterial)
    }

    results = applyPriceFilter(results, selectedPrice)

    return sortProducts(results, sortKey)
  }, [selectedCategory, selectedMaterial, selectedPrice, sortKey])

  return (
    <main className="px-4 pb-20 pt-28 sm:px-6 lg:px-10 lg:pt-32" ref={pageRef}>
      <div className="mx-auto max-w-7xl">
        <ShopHero />

        <section className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
          <ShopFilters
            filterGroups={filterGroups}
            selectedCategory={selectedCategory}
            selectedMaterial={selectedMaterial}
            selectedPrice={selectedPrice}
            setSelectedCategory={setSelectedCategory}
            setSelectedMaterial={setSelectedMaterial}
            setSelectedPrice={setSelectedPrice}
          />

          <div className="space-y-8">
            <ShopToolbar
              count={filteredProducts.length}
              sortKey={sortKey}
              setSortKey={setSortKey}
            />

            <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard contextId="shop-grid-title" key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 ? (
              <div className="surface-panel flex min-h-64 flex-col items-center justify-center gap-3 p-10 text-center">
                <p className="eyebrow text-amber-200">No pieces found</p>
                <h2 className="font-display text-4xl text-stone-100">
                  Try a different filter combination.
                </h2>
                <p className="max-w-md text-sm leading-7 text-stone-300">
                  Refine your selection to discover more demi-fine styles across earrings, necklaces, and huggies.
                </p>
              </div>
            ) : null}

            <span className="sr-only" id="shop-grid-title">
              Velmora fine jewelry collection grid
            </span>
          </div>
        </section>
      </div>
    </main>
  )
}

export default ShopPage
