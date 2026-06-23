import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { products } from '@/data/products'
import ProductCard from '@/components/storefront/ProductCard'
import SectionHeading from '@/components/storefront/SectionHeading'
import ShopFilters from '@/components/shop/ShopFilters'

const matchesPrice = (price, filter) => {
  if (filter === 'under-50') return price < 50
  if (filter === '50-80') return price >= 50 && price < 80
  if (filter === '80-plus') return price >= 80
  return true
}

const sortProducts = (items, sortValue) => {
  const sorted = [...items]

  if (sortValue === 'price-asc') return sorted.sort((a, b) => a.price - b.price)
  if (sortValue === 'price-desc') return sorted.sort((a, b) => b.price - a.price)
  if (sortValue === 'rating') return sorted.sort((a, b) => b.rating - a.rating)

  return sorted
}

const ShopPage = () => {
  const [searchParams] = useSearchParams()
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'All')
  const [activeMaterial, setActiveMaterial] = useState('All')
  const [activePrice, setActivePrice] = useState('all')
  const [sortValue, setSortValue] = useState('featured')
  const searchText = searchParams.get('q')?.trim().toLowerCase() || ''

  const filteredProducts = useMemo(() => {
    const nextItems = products.filter((product) => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory
      const matchesMaterial = activeMaterial === 'All' || product.materialTag === activeMaterial
      const matchesSearch = !searchText || `${product.name} ${product.type} ${product.shortDescription}`.toLowerCase().includes(searchText)

      return matchesCategory && matchesMaterial && matchesPrice(product.price, activePrice) && matchesSearch
    })

    return sortProducts(nextItems, sortValue)
  }, [activeCategory, activeMaterial, activePrice, sortValue, searchText])

  return (
    <div className="section-shell py-12 sm:py-16">
      <div className="max-w-3xl">
        <SectionHeading
          eyebrow="Shop Velmora"
          title="A considered collection of demi-fine essentials"
          copy="Browse refined earrings, necklaces, and huggies designed to feel premium, warm, and easy to gift."
        />
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[18rem,1fr] lg:items-start">
        <ShopFilters
          activeCategory={activeCategory}
          activeMaterial={activeMaterial}
          activePrice={activePrice}
          onCategoryChange={setActiveCategory}
          onMaterialChange={setActiveMaterial}
          onPriceChange={setActivePrice}
        />

        <div>
          <div className="mb-5 flex flex-col gap-4 rounded-[1.75rem] border border-line bg-pearl p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
            <p className="text-sm text-muted">
              Showing <span className="font-medium text-ink">{filteredProducts.length}</span> refined pieces
            </p>
            <label className="flex items-center gap-3 text-sm text-muted">
              <span className="uppercase tracking-caps">Sort</span>
              <select
                value={sortValue}
                onChange={(event) => setSortValue(event.target.value)}
                className="rounded-full border border-line bg-pearl px-4 py-2 text-sm text-ink focus:border-gold focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to high</option>
                <option value="price-desc">Price: High to low</option>
                <option value="rating">Top rated</option>
              </select>
            </label>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="rounded-[2rem] border border-line bg-pearl px-6 py-16 text-center shadow-float">
              <h3 className="font-serif text-4xl text-ink">No pieces match your filters</h3>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted">
                Reset a category, material, or price selection to explore the full Velmora edit.
              </p>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} scope="shop" />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ShopPage
