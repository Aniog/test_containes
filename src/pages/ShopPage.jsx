import { useEffect, useMemo, useRef, useState } from 'react'
import { useLocation, useOutletContext } from 'react-router-dom'
import ProductCard from '@/components/storefront/ProductCard'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { useStrkImages } from '@/hooks/useStrkImages'

const priceRanges = [
  { label: 'Under $50', value: 'under-50' },
  { label: '$50 to $80', value: '50-80' },
  { label: '$80+', value: '80-plus' },
]

const materialOptions = ['18K Gold Plated', 'Gold Vermeil']
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating' },
]

function matchesPrice(product, selectedPrice) {
  if (!selectedPrice) {
    return true
  }

  if (selectedPrice === 'under-50') {
    return product.price < 50
  }

  if (selectedPrice === '50-80') {
    return product.price >= 50 && product.price <= 80
  }

  return product.price > 80
}

export default function ShopPage() {
  const { search } = useLocation()
  const params = new URLSearchParams(search)
  const initialCategory = params.get('category') || ''
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedPrice, setSelectedPrice] = useState('')
  const [selectedMaterial, setSelectedMaterial] = useState('')
  const [sortBy, setSortBy] = useState('featured')
  const { addItem } = useCart()
  const { openCart } = useOutletContext()
  const containerRef = useRef(null)

  useEffect(() => {
    setSelectedCategory(initialCategory)
  }, [initialCategory])


  useStrkImages(containerRef, [selectedCategory, selectedPrice, selectedMaterial, sortBy])

  const filteredProducts = useMemo(() => {
    const nextProducts = products.filter((product) => {
      const categoryMatch = selectedCategory ? product.category === selectedCategory : true
      const materialMatch = selectedMaterial ? product.material === selectedMaterial : true

      return categoryMatch && materialMatch && matchesPrice(product, selectedPrice)
    })

    const sortedProducts = [...nextProducts]

    if (sortBy === 'price-asc') {
      sortedProducts.sort((a, b) => a.price - b.price)
    }

    if (sortBy === 'price-desc') {
      sortedProducts.sort((a, b) => b.price - a.price)
    }

    if (sortBy === 'rating') {
      sortedProducts.sort((a, b) => b.rating - a.rating)
    }

    return sortedProducts
  }, [selectedCategory, selectedMaterial, selectedPrice, sortBy])

  const handleAddToCart = (product) => {
    addItem(product)
    openCart()
  }

  return (
    <main ref={containerRef} className="mx-auto max-w-7xl px-4 pb-16 pt-32 md:px-8 md:pb-24 lg:px-10 lg:pb-28">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.32em] text-brand-mist">Collections</p>
        <h1 className="mt-4 font-display text-5xl text-brand-ink md:text-6xl">
          Shop the Velmora edit
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-8 text-brand-mist md:text-base">
          Sculptural earrings, softly glowing necklaces, and polished huggies designed for the modern daily uniform.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[18rem_minmax(0,1fr)] lg:items-start">
        <aside className="rounded-[2rem] border border-brand-line bg-brand-surface p-6 shadow-soft lg:sticky lg:top-28">
          <div className="space-y-8 text-sm text-brand-ink">
            <section>
              <h2 className="text-xs uppercase tracking-[0.28em] text-brand-mist">Category</h2>
              <div className="mt-4 flex flex-wrap gap-2 lg:flex-col">
                <button
                  type="button"
                  onClick={() => setSelectedCategory('')}
                  className={`rounded-full border px-4 py-2 text-left text-xs uppercase tracking-[0.22em] transition ${
                    !selectedCategory
                      ? 'border-brand-gold bg-brand-gold text-brand-noir'
                      : 'border-brand-line text-brand-ink hover:bg-brand-champagne'
                  }`}
                >
                  All
                </button>
                {['Earrings', 'Necklaces', 'Huggies'].map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full border px-4 py-2 text-left text-xs uppercase tracking-[0.22em] transition ${
                      selectedCategory === category
                        ? 'border-brand-gold bg-brand-gold text-brand-noir'
                        : 'border-brand-line text-brand-ink hover:bg-brand-champagne'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xs uppercase tracking-[0.28em] text-brand-mist">Price</h2>
              <div className="mt-4 flex flex-col gap-3">
                {priceRanges.map((range) => (
                  <button
                    key={range.value}
                    type="button"
                    onClick={() =>
                      setSelectedPrice((current) =>
                        current === range.value ? '' : range.value,
                      )
                    }
                    className={`rounded-full border px-4 py-3 text-left text-xs uppercase tracking-[0.22em] transition ${
                      selectedPrice === range.value
                        ? 'border-brand-gold bg-brand-gold text-brand-noir'
                        : 'border-brand-line text-brand-ink hover:bg-brand-champagne'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xs uppercase tracking-[0.28em] text-brand-mist">Material</h2>
              <div className="mt-4 flex flex-col gap-3">
                {materialOptions.map((material) => (
                  <button
                    key={material}
                    type="button"
                    onClick={() =>
                      setSelectedMaterial((current) =>
                        current === material ? '' : material,
                      )
                    }
                    className={`rounded-full border px-4 py-3 text-left text-xs uppercase tracking-[0.22em] transition ${
                      selectedMaterial === material
                        ? 'border-brand-gold bg-brand-gold text-brand-noir'
                        : 'border-brand-line text-brand-ink hover:bg-brand-champagne'
                    }`}
                  >
                    {material}
                  </button>
                ))}
              </div>
            </section>
          </div>
        </aside>

        <section>
          <div className="mb-6 flex flex-col gap-4 rounded-[2rem] border border-brand-line bg-brand-surface p-5 shadow-soft md:flex-row md:items-center md:justify-between">
            <p className="text-xs uppercase tracking-[0.26em] text-brand-mist">
              {filteredProducts.length} products
            </p>
            <label className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-brand-mist">
              Sort By
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="h-11 rounded-full border border-brand-line bg-brand-ivory px-4 text-xs uppercase tracking-[0.18em] text-brand-ink focus:outline-none"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
