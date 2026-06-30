import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/home/ProductCard'
import FilterSidebar from '@/components/shop/FilterSidebar'
import {
  categoryOptions,
  materialOptions,
  priceOptions,
  products,
} from '@/data/products'

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-low', label: 'Price: Low to High' },
  { id: 'price-high', label: 'Price: High to Low' },
  { id: 'name', label: 'Name: A to Z' },
]

const matchesPriceRange = (price, rangeId) => {
  if (!rangeId) return true
  if (rangeId === 'under-50') return price < 50
  if (rangeId === '50-80') return price >= 50 && price <= 80
  if (rangeId === 'above-80') return price > 80
  return true
}

export default function ShopPage() {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category')
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : [],
  )
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [selectedPrice, setSelectedPrice] = useState('')
  const [sortBy, setSortBy] = useState('featured')

  useEffect(() => {
    setSelectedCategories(initialCategory ? [initialCategory] : [])
  }, [initialCategory])

  const toggleValue = (value, currentValues, setter) => {
    setter(
      currentValues.includes(value)
        ? currentValues.filter((entry) => entry !== value)
        : [...currentValues, value],
    )
  }

  const visibleProducts = useMemo(() => {
    const filteredProducts = products.filter((product) => {
      const categoryMatch =
        selectedCategories.length === 0 || selectedCategories.includes(product.category)
      const materialMatch =
        selectedMaterials.length === 0 || selectedMaterials.includes(product.material)
      const priceMatch = matchesPriceRange(product.price, selectedPrice)

      return categoryMatch && materialMatch && priceMatch
    })

    const sortedProducts = [...filteredProducts]

    if (sortBy === 'price-low') {
      sortedProducts.sort((first, second) => first.price - second.price)
    }

    if (sortBy === 'price-high') {
      sortedProducts.sort((first, second) => second.price - first.price)
    }

    if (sortBy === 'name') {
      sortedProducts.sort((first, second) => first.name.localeCompare(second.name))
    }

    return sortedProducts
  }, [selectedCategories, selectedMaterials, selectedPrice, sortBy])

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedMaterials([])
    setSelectedPrice('')
    setSortBy('featured')
  }

  return (
    <div className="bg-velmora-mist pb-16 pt-28 md:pt-32">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 sm:px-6 lg:flex-row lg:px-8">
        <FilterSidebar
          categoryOptions={categoryOptions}
          materialOptions={materialOptions}
          priceOptions={priceOptions}
          selectedCategories={selectedCategories}
          selectedMaterials={selectedMaterials}
          selectedPrice={selectedPrice}
          onCategoryToggle={(value) =>
            toggleValue(value, selectedCategories, setSelectedCategories)
          }
          onMaterialToggle={(value) =>
            toggleValue(value, selectedMaterials, setSelectedMaterials)
          }
          onPriceChange={setSelectedPrice}
          onClearFilters={clearFilters}
        />

        <div className="flex-1">
          <div className="mb-8 flex flex-col gap-4 border-b border-velmora-line pb-6 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.35em] text-velmora-bronze">
                Velmora Collection
              </p>
              <h1 className="font-serif text-4xl leading-none text-velmora-espresso md:text-5xl">
                Modern demi-fine pieces for gifting and self-purchase.
              </h1>
              <p className="max-w-2xl text-sm text-velmora-ink/75 md:text-base">
                Discover refined earrings, necklaces, and polished huggies designed
                to feel premium, wearable, and gift-ready from the very first box.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <p className="text-sm text-velmora-ink/70">
                {visibleProducts.length} pieces available
              </p>
              <label className="flex items-center gap-3 rounded-full border border-velmora-line bg-velmora-ivory px-4 py-2 text-sm text-velmora-ink shadow-velmora-sm">
                <span className="whitespace-nowrap text-velmora-ink/70">Sort</span>
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="bg-transparent text-sm text-velmora-espresso outline-none"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {visibleProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                contextId="shop-grid"
                sectionId="shop-collection-title"
              />
            ))}
          </div>

          {visibleProducts.length === 0 ? (
            <div className="mt-8 rounded-[2rem] border border-velmora-line bg-velmora-ivory px-6 py-12 text-center text-velmora-ink shadow-velmora-sm">
              <p className="font-serif text-3xl text-velmora-espresso">
                No pieces match those filters.
              </p>
              <p className="mt-3 text-sm text-velmora-ink/70">
                Reset your selections to browse the full Velmora edit.
              </p>
            </div>
          ) : null}
        </div>
      </section>
      <span id="shop-collection-title" className="sr-only">
        Velmora shop collection
      </span>
    </div>
  )
}
