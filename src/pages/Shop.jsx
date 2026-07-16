import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import SectionHeading from '@/components/common/SectionHeading'
import FilterSidebar from '@/components/shop/FilterSidebar'
import ProductCard from '@/components/shop/ProductCard'
import SortDropdown from '@/components/shop/SortDropdown'
import { filters, products } from '@/data/storefront'
import { useStrkImages } from '@/hooks/useStrkImages'

const matchesPrice = (product, selectedPrice) => {
  if (selectedPrice === 'Under $50') {
    return product.price < 50
  }

  if (selectedPrice === '$50–$80') {
    return product.price >= 50 && product.price <= 80
  }

  if (selectedPrice === '$80+') {
    return product.price > 80
  }

  return true
}

const matchesMaterial = (product, selectedMaterial) => {
  if (selectedMaterial === 'Sterling Silver Tone') {
    return product.tones.includes('Silver')
  }

  if (selectedMaterial === 'All') {
    return true
  }

  return product.material === selectedMaterial
}

const sortProducts = (items, sortValue) => {
  if (sortValue === 'price-asc') {
    return [...items].sort((left, right) => left.price - right.price)
  }

  if (sortValue === 'price-desc') {
    return [...items].sort((left, right) => right.price - left.price)
  }

  if (sortValue === 'rating') {
    return [...items].sort((left, right) => right.rating - left.rating)
  }

  return [...items].sort((left, right) => Number(right.featured) - Number(left.featured))
}

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedCategory = searchParams.get('category') ?? 'All'
  const selectedPrice = searchParams.get('price') ?? 'All'
  const selectedMaterial = searchParams.get('material') ?? 'All'
  const sortValue = searchParams.get('sort') ?? 'featured'
  const containerRef = useStrkImages([selectedCategory, selectedPrice, selectedMaterial, sortValue])

  const updateParam = (key, value, defaultValue = 'All') => {
    const nextParams = new URLSearchParams(searchParams)

    if (value === defaultValue) {
      nextParams.delete(key)
    } else {
      nextParams.set(key, value)
    }

    setSearchParams(nextParams)
  }

  const filteredProducts = useMemo(() => {
    const scopedProducts = products.filter((product) => {
      const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory
      const priceMatch = matchesPrice(product, selectedPrice)
      const materialMatch = matchesMaterial(product, selectedMaterial)

      return categoryMatch && priceMatch && materialMatch
    })

    return sortProducts(scopedProducts, sortValue)
  }, [selectedCategory, selectedMaterial, selectedPrice, sortValue])

  return (
    <div ref={containerRef} className="bg-velmora-ivory pt-28 lg:pt-32">
      <section className="mx-auto max-w-7xl px-4 pb-10 md:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-velmora-line/80 bg-white/70 px-6 py-10 shadow-velmora-soft lg:px-10 lg:py-12">
          <SectionHeading
            eyebrow="Velmora collection"
            title="A polished jewelry wardrobe"
            titleId="shop-title"
            description="Filter by silhouette, material, and price to find the pieces that fit your everyday ritual."
            descriptionId="shop-desc"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-16 md:px-6 lg:grid-cols-[18rem,1fr] lg:px-8 lg:pb-24">
        <FilterSidebar
          selectedCategory={filters.category.includes(selectedCategory) ? selectedCategory : 'All'}
          selectedMaterial={filters.material.includes(selectedMaterial) ? selectedMaterial : 'All'}
          selectedPrice={filters.price.includes(selectedPrice) ? selectedPrice : 'All'}
          onCategoryChange={(value) => updateParam('category', value)}
          onMaterialChange={(value) => updateParam('material', value)}
          onPriceChange={(value) => updateParam('price', value)}
        />

        <div>
          <div className="mb-6 flex flex-col gap-4 rounded-[1.75rem] border border-velmora-line/80 bg-white/70 px-5 py-4 shadow-velmora-soft sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-velmora-stone">
              Showing <span className="font-semibold text-velmora-ink">{filteredProducts.length}</span> pieces
            </p>
            <SortDropdown
              value={sortValue}
              onChange={(value) => updateParam('sort', value, 'featured')}
            />
          </div>

          {filteredProducts.length ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.slug}
                  product={product}
                  sectionTitleId="shop-title"
                  sectionDescId="shop-desc"
                />
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-velmora-line/80 bg-white/70 px-6 py-16 text-center shadow-velmora-soft">
              <h3 className="font-serif text-4xl text-velmora-ink">No pieces match this filter set</h3>
              <p className="mt-3 text-sm leading-7 text-velmora-stone">
                Try widening your category or material selection to see the full edit again.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Shop
