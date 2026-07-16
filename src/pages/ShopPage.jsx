import { useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ProductCard from '@/components/product/ProductCard.jsx'
import FilterSidebar from '@/components/shop/FilterSidebar.jsx'
import { useCart } from '@/context/CartContext.jsx'
import { products, sortOptions } from '@/data/store.js'

function getInitialCategories(search) {
  const params = new URLSearchParams(search)
  const category = params.get('category')
  return category ? [category] : []
}

function matchesPrice(product, selectedPrice) {
  if (selectedPrice === 'under-50') return product.price < 50
  if (selectedPrice === '50-80') return product.price >= 50 && product.price <= 80
  if (selectedPrice === '80-plus') return product.price > 80
  return true
}

function ShopPage() {
  const location = useLocation()
  const { addItem } = useCart()
  const [selectedCategories, setSelectedCategories] = useState(() => getInitialCategories(location.search))
  const [selectedPrice, setSelectedPrice] = useState('all')
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [sortValue, setSortValue] = useState('featured')

  const categories = [...new Set(products.map((product) => product.category))]

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const categoryMatch =
        selectedCategories.length === 0 || selectedCategories.includes(product.category)
      const materialMatch =
        selectedMaterials.length === 0 ||
        selectedMaterials.every((material) => product.materials.includes(material))

      return categoryMatch && materialMatch && matchesPrice(product, selectedPrice)
    })

    if (sortValue === 'price-asc') {
      return [...filtered].sort((a, b) => a.price - b.price)
    }
    if (sortValue === 'price-desc') {
      return [...filtered].sort((a, b) => b.price - a.price)
    }
    if (sortValue === 'rating') {
      return [...filtered].sort((a, b) => b.rating - a.rating)
    }
    return filtered
  }, [selectedCategories, selectedMaterials, selectedPrice, sortValue])

  const toggleCategory = (category) => {
    setSelectedCategories((current) =>
      current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category],
    )
  }

  const toggleMaterial = (material) => {
    setSelectedMaterials((current) =>
      current.includes(material)
        ? current.filter((item) => item !== material)
        : [...current, material],
    )
  }

  return (
    <div className="bg-velmora-pearl pt-28">
      <section className="velmora-container pb-12 pt-10 md:pb-16">
        <p className="velmora-eyebrow">Collection</p>
        <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="font-display text-6xl text-velmora-ink sm:text-7xl">
              Shop Velmora
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-velmora-truffle">
              Explore premium-but-accessible demi-fine jewelry designed for self-purchase, gifting, and daily wear.
            </p>
          </div>
          <div className="w-full max-w-xs">
            <label className="text-sm uppercase tracking-[0.2em] text-velmora-truffle" htmlFor="sort-products">
              Sort by
            </label>
            <select
              id="sort-products"
              className="mt-3 h-12 w-full rounded-full border border-velmora-ink/10 bg-velmora-pearl px-5 text-sm text-velmora-ink focus:border-velmora-gold focus:outline-none"
              value={sortValue}
              onChange={(event) => setSortValue(event.target.value)}
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section className="velmora-container grid gap-8 pb-16 md:pb-24 lg:grid-cols-[320px_1fr] lg:items-start">
        <FilterSidebar
          categories={categories}
          selectedCategories={selectedCategories}
          onCategoryToggle={toggleCategory}
          selectedPrice={selectedPrice}
          onPriceChange={setSelectedPrice}
          selectedMaterials={selectedMaterials}
          onMaterialToggle={toggleMaterial}
        />

        <div>
          <div className="mb-6 flex items-center justify-between gap-4">
            <p className="text-sm uppercase tracking-[0.22em] text-velmora-truffle">
              {filteredProducts.length} pieces
            </p>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="rounded-[2rem] border border-velmora-ink/10 bg-velmora-pearl p-10 text-center shadow-card">
              <p className="font-display text-4xl text-velmora-ink">No pieces match yet</p>
              <p className="mt-4 text-sm leading-7 text-velmora-truffle">
                Adjust your filters to reveal more styles from the collection.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.slug}
                  product={product}
                  imagePrefix="shop-grid"
                  onAddToCart={(selectedProduct) => addItem(selectedProduct, 'Gold', 1)}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default ShopPage
