import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FilterSidebar } from '@/components/shop/FilterSidebar'
import { ProductCard } from '@/components/shop/ProductCard'
import { ImageSlot } from '@/components/ui/ImageSlot'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { collectionEditorial, products } from '@/data/storefront'

const sortOptions = [
  'Featured',
  'Price: Low to High',
  'Price: High to Low',
  'Newest',
]

const applyPriceFilter = (product, filter) => {
  if (filter === 'Under $50') return product.price < 50
  if (filter === '$50–$80') return product.price >= 50 && product.price <= 80
  if (filter === '$80+') return product.price > 80
  return true
}

const Shop = () => {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [filters, setFilters] = useState({
    category: initialCategory,
    price: 'All',
    material: 'All',
  })
  const [sort, setSort] = useState('Featured')

  const filteredProducts = useMemo(() => {
    const nextProducts = products.filter((product) => {
      const categoryMatch =
        filters.category === 'All' || product.category === filters.category
      const materialMatch =
        filters.material === 'All' || product.material === filters.material
      const priceMatch = applyPriceFilter(product, filters.price)

      return categoryMatch && materialMatch && priceMatch
    })

    if (sort === 'Price: Low to High') {
      return [...nextProducts].sort((a, b) => a.price - b.price)
    }

    if (sort === 'Price: High to Low') {
      return [...nextProducts].sort((a, b) => b.price - a.price)
    }

    if (sort === 'Newest') {
      return [...nextProducts].reverse()
    }

    return nextProducts
  }, [filters, sort])

  return (
    <div className="bg-brand-parchment pt-28 md:pt-32">
      <section className="mx-auto max-w-7xl px-5 pb-12 md:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-ink px-6 py-12 text-brand-parchment shadow-panel md:px-10 lg:px-14 lg:py-16">
          <div className="absolute inset-0 opacity-35">
            <ImageSlot
              slotId="velmora-shop-hero-11a"
              query="[shop-hero-description] [shop-hero-title]"
              ratio="16x9"
              width="1600"
              alt="Shop Velmora"
            />
          </div>
          <div className="relative max-w-3xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-overline text-brand-gold">
              Collection
            </p>
            <h1 id="shop-hero-title" className="text-5xl leading-[0.92] text-white md:text-6xl">
              A curated collection of demi-fine essentials
            </h1>
            <p id="shop-hero-description" className="text-base leading-8 text-brand-sand md:text-lg">
              Shop polished earrings, necklaces, huggies, and gifting sets designed
              to flatter every day and special moments alike.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 md:px-8 md:pb-24 lg:grid-cols-[300px_1fr] lg:px-12">
        <FilterSidebar filters={filters} setFilters={setFilters} />

        <div className="space-y-8">
          <div className="flex flex-col gap-5 rounded-[2rem] border border-brand-line bg-white p-5 shadow-soft md:flex-row md:items-center md:justify-between md:p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-overline text-brand-gold">
                Shop all
              </p>
              <h2 className="mt-2 text-3xl leading-none text-brand-ink">
                {filteredProducts.length} pieces in view
              </h2>
            </div>
            <label className="flex items-center gap-3 text-xs font-semibold uppercase tracking-overline text-brand-ink">
              Sort by
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="rounded-full border border-brand-line bg-brand-mist px-4 py-3 text-xs uppercase tracking-overline text-brand-ink outline-none"
              >
                {sortOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section id="collections" className="mx-auto max-w-7xl space-y-8 px-5 pb-16 md:px-8 md:pb-24 lg:px-12">
        <SectionHeading
          eyebrow="Collections"
          title="Editorial edits for gifting, layering, and everyday polish"
          description="Three styling worlds to guide the way you browse and the way you give."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {collectionEditorial.map((collection) => (
            <article
              key={collection.id}
              className="overflow-hidden rounded-[2rem] border border-brand-line bg-white shadow-soft"
            >
              <div className="aspect-[4/5] bg-brand-sand">
                <ImageSlot
                  slotId={collection.slotId}
                  query={`[collection-${collection.id}-desc] [collection-${collection.id}-title]`}
                  ratio="4x3"
                  width="900"
                  alt={collection.title}
                />
              </div>
              <div className="space-y-4 p-6">
                <h3 id={`collection-${collection.id}-title`} className="text-3xl leading-none text-brand-ink">
                  {collection.title}
                </h3>
                <p id={`collection-${collection.id}-desc`} className="text-sm leading-7 text-brand-cocoa">
                  {collection.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Shop
