import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { products } from '@/data/products.js'
import ProductCard from '@/components/common/ProductCard.jsx'
import SectionHeading from '@/components/common/SectionHeading.jsx'
import FilterSidebar from '@/components/shop/FilterSidebar.jsx'

const filters = [
  { key: 'category', label: 'Category', options: ['Earrings', 'Necklaces', 'Huggies'] },
  { key: 'price', label: 'Price', options: ['$30–$50', '$51–$80', '$81–$120'] },
  { key: 'material', label: 'Material', options: ['18K Gold Plated', 'Crystal Accent', 'Gift Set', 'Textured Finish'] },
]

const Shop = () => {
  const [params] = useSearchParams()
  const defaultCategory = params.get('category')
  const [activeFilters, setActiveFilters] = useState({
    category: defaultCategory ? [defaultCategory] : [],
    price: [],
    material: [],
  })
  const [sort, setSort] = useState('featured')

  const filteredProducts = useMemo(() => {
    let nextProducts = [...products]

    if (activeFilters.category.length) {
      nextProducts = nextProducts.filter((product) => activeFilters.category.includes(product.category))
    }

    if (activeFilters.price.length) {
      nextProducts = nextProducts.filter((product) =>
        activeFilters.price.some((range) => {
          if (range === '$30–$50') return product.price >= 30 && product.price <= 50
          if (range === '$51–$80') return product.price >= 51 && product.price <= 80
          if (range === '$81–$120') return product.price >= 81 && product.price <= 120
          return true
        }),
      )
    }

    if (activeFilters.material.length) {
      nextProducts = nextProducts.filter((product) =>
        activeFilters.material.every((material) => product.materialLabels.includes(material)),
      )
    }

    if (sort === 'price-asc') nextProducts.sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') nextProducts.sort((a, b) => b.price - a.price)
    if (sort === 'rating-desc') nextProducts.sort((a, b) => b.rating - a.rating)

    return nextProducts
  }, [activeFilters, sort])

  return (
    <div className="bg-ivory px-5 pb-20 pt-32 sm:px-8 lg:px-12 xl:px-16">
      <section className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] border border-mist bg-white px-6 py-10 shadow-soft sm:px-10">
          <SectionHeading
            eyebrow="Velmora shop"
            title="A refined collection of everyday demi-fine pieces"
            description="Explore earrings, necklaces, and huggies designed to feel premium, giftable, and easy to wear on repeat."
          />
        </div>
      </section>

      <section className="mx-auto mt-10 grid max-w-7xl gap-8 lg:grid-cols-[18rem_minmax(0,1fr)]">
        <FilterSidebar
          filters={filters}
          activeFilters={activeFilters}
          setActiveFilters={setActiveFilters}
          sort={sort}
          setSort={setSort}
        />

        <div>
          <div className="mb-6 flex items-center justify-between border-b border-mist pb-5">
            <p className="text-xs uppercase tracking-brand text-bronze">Collection edit</p>
            <p className="text-sm text-ink/70">{filteredProducts.length} pieces</p>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="rounded-[2rem] border border-dashed border-mist bg-white px-8 py-16 text-center shadow-soft">
              <h3 className="font-serif text-4xl text-ink">No pieces match these filters</h3>
              <p className="mt-4 text-sm leading-7 text-ink/72">Adjust your selections to see more of the collection.</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Shop
