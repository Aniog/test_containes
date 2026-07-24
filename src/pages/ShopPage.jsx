import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/storefront/ProductCard'
import SectionHeading from '@/components/storefront/SectionHeading'
import { categories, products } from '@/data/storeData'

const priceRanges = [
  { id: 'all', label: 'All prices' },
  { id: 'under50', label: 'Under $50' },
  { id: '50to80', label: '$50–$80' },
  { id: 'over80', label: '$80+' },
]

const materials = ['All', '18K Gold Plated', 'Gold Vermeil']
const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-low', label: 'Price: Low to High' },
  { id: 'price-high', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

const matchesPrice = (price, range) => {
  if (range === 'under50') return price < 50
  if (range === '50to80') return price >= 50 && price <= 80
  if (range === 'over80') return price > 80
  return true
}

const ShopPage = ({ onAddToCart }) => {
  const [searchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedPrice, setSelectedPrice] = useState('all')
  const [selectedMaterial, setSelectedMaterial] = useState('All')
  const [selectedSort, setSelectedSort] = useState('featured')

  useEffect(() => {
    const categoryFromUrl = searchParams.get('category')
    const matchingCategory = categories.find(
      (category) => category.name.toLowerCase() === categoryFromUrl?.toLowerCase(),
    )

    setSelectedCategory(matchingCategory?.name || 'All')
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    const nextProducts = products.filter((product) => {
      const categoryMatch =
        selectedCategory === 'All' || product.category === selectedCategory
      const priceMatch = matchesPrice(product.price, selectedPrice)
      const materialMatch =
        selectedMaterial === 'All' || product.material === selectedMaterial

      return categoryMatch && priceMatch && materialMatch
    })

    if (selectedSort === 'price-low') {
      return [...nextProducts].sort((a, b) => a.price - b.price)
    }
    if (selectedSort === 'price-high') {
      return [...nextProducts].sort((a, b) => b.price - a.price)
    }
    if (selectedSort === 'rating') {
      return [...nextProducts].sort((a, b) => b.rating - a.rating)
    }

    return nextProducts
  }, [selectedCategory, selectedMaterial, selectedPrice, selectedSort])

  return (
    <div className="bg-[#f7f2ea]">
      <section className="border-b border-[rgba(215,195,171,0.7)] bg-white/40">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-6 lg:px-10 lg:pb-20">
          <SectionHeading
            eyebrow="Shop the collection"
            title="An elevated edit of demi-fine gold jewelry for gifting and everyday wear."
            description="Filter by silhouette, material, and price to find your next quiet-luxury staple."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-10 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12">
          <aside className="h-fit rounded-[2rem] border border-[rgba(215,195,171,0.7)] bg-white/80 p-6 shadow-[0_18px_45px_rgba(36,26,19,0.08)]">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-[#c19a6b]">Category</p>
              <div className="mt-4 space-y-3">
                {['All', ...categories.map((category) => category.name)].map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`flex w-full items-center justify-between rounded-full border px-4 py-3 text-left text-xs uppercase tracking-[0.24em] transition ${
                      selectedCategory === category
                        ? 'border-[#c19a6b] bg-[#c19a6b] text-[#f7f2ea]'
                        : 'border-[#d7c3ab] text-[#241a13] hover:border-[#c19a6b] hover:text-[#c19a6b]'
                    }`}
                  >
                    <span>{category}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-[rgba(215,195,171,0.7)] pt-8">
              <p className="text-xs uppercase tracking-[0.32em] text-[#c19a6b]">Price</p>
              <div className="mt-4 space-y-3">
                {priceRanges.map((range) => (
                  <button
                    key={range.id}
                    type="button"
                    onClick={() => setSelectedPrice(range.id)}
                    className={`w-full rounded-full border px-4 py-3 text-left text-xs uppercase tracking-[0.24em] transition ${
                      selectedPrice === range.id
                        ? 'border-[#c19a6b] bg-[#c19a6b] text-[#f7f2ea]'
                        : 'border-[#d7c3ab] text-[#241a13] hover:border-[#c19a6b] hover:text-[#c19a6b]'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-[rgba(215,195,171,0.7)] pt-8">
              <p className="text-xs uppercase tracking-[0.32em] text-[#c19a6b]">Material</p>
              <div className="mt-4 space-y-3">
                {materials.map((material) => (
                  <button
                    key={material}
                    type="button"
                    onClick={() => setSelectedMaterial(material)}
                    className={`w-full rounded-full border px-4 py-3 text-left text-xs uppercase tracking-[0.24em] transition ${
                      selectedMaterial === material
                        ? 'border-[#c19a6b] bg-[#c19a6b] text-[#f7f2ea]'
                        : 'border-[#d7c3ab] text-[#241a13] hover:border-[#c19a6b] hover:text-[#c19a6b]'
                    }`}
                  >
                    {material}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <div>
            <div className="flex flex-col gap-4 border-b border-[rgba(215,195,171,0.7)] pb-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs uppercase tracking-[0.28em] text-[#6f5946]">
                {filteredProducts.length} pieces found
              </p>
              <label className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#6f5946]">
                Sort by
                <select
                  value={selectedSort}
                  onChange={(event) => setSelectedSort(event.target.value)}
                  className="rounded-full border border-[#d7c3ab] bg-white px-4 py-3 text-xs uppercase tracking-[0.22em] text-[#241a13] focus:border-[#c19a6b] focus:outline-none"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.slug} product={product} onAddToCart={onAddToCart} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ShopPage
