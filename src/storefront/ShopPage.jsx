import { useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ChevronDown, SlidersHorizontal } from 'lucide-react'
import { categories, materials, products } from './products.js'
import { useImageLoader } from './use-image-loader.js'
import { ProductCard, SectionHeading } from './ui.jsx'

export default function ShopPage() {
  const [searchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All')
  const [selectedMaterial, setSelectedMaterial] = useState('All')
  const [selectedPrice, setSelectedPrice] = useState('All')
  const [sortBy, setSortBy] = useState('featured')
  const [showFilters, setShowFilters] = useState(false)
  const containerRef = useRef(null)

  useImageLoader(containerRef, [selectedCategory, selectedMaterial, selectedPrice, sortBy])

  const filteredProducts = useMemo(() => {
    let nextProducts = [...products]
    if (selectedCategory !== 'All') nextProducts = nextProducts.filter((product) => product.category === selectedCategory)
    if (selectedMaterial !== 'All') nextProducts = nextProducts.filter((product) => product.material === selectedMaterial)
    if (selectedPrice === 'under-50') nextProducts = nextProducts.filter((product) => product.price < 50)
    if (selectedPrice === '50-80') nextProducts = nextProducts.filter((product) => product.price >= 50 && product.price <= 80)
    if (selectedPrice === '80-plus') nextProducts = nextProducts.filter((product) => product.price > 80)
    if (sortBy === 'price-low') nextProducts.sort((a, b) => a.price - b.price)
    if (sortBy === 'price-high') nextProducts.sort((a, b) => b.price - a.price)
    if (sortBy === 'rating') nextProducts.sort((a, b) => b.rating - a.rating)
    return nextProducts
  }, [selectedCategory, selectedMaterial, selectedPrice, sortBy])

  return (
    <div ref={containerRef} className="bg-velmora-ivory text-velmora-espresso">
      <section className="section-shell pt-32 sm:pt-36 lg:pt-40">
        <div className="grid gap-10 rounded-[2.5rem] border border-velmora-sand bg-velmora-pearl px-6 py-10 shadow-velmora lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-12">
          <div className="space-y-5">
            <p className="eyebrow">Shop Velmora</p>
            <h1 className="font-display text-5xl leading-none text-velmora-espresso sm:text-6xl lg:text-7xl">A considered collection of demi-fine gold essentials.</h1>
            <p className="max-w-xl text-base leading-8 text-velmora-umber">Designed for daily wear, thoughtful gifting, and those polished finishing touches that feel quietly luxurious.</p>
          </div>
          <div className="rounded-[2rem] bg-velmora-mist p-6 text-velmora-espresso">
            <p className="eyebrow">Collection Notes</p>
            <p className="mt-4 text-sm leading-7 text-velmora-umber">Our jewelry is crafted to balance accessibility with elevated finish: warm gold plating, hypoallergenic details, and gift-ready packaging on every order.</p>
          </div>
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20 lg:py-24">
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow="Collection" title="Find your signature pieces" description="Use the filters to narrow by silhouette, price point, or material." />
          <div className="flex flex-wrap items-center gap-3">
            <button type="button" onClick={() => setShowFilters((current) => !current)} className="inline-flex items-center gap-2 rounded-full border border-velmora-sand bg-velmora-pearl px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-velmora-espresso shadow-velmora-soft transition hover:border-velmora-bronze hover:text-velmora-bronze lg:hidden">
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>
            <label className="relative inline-flex min-w-[220px] items-center rounded-full border border-velmora-sand bg-velmora-pearl shadow-velmora-soft">
              <span className="sr-only">Sort products</span>
              <select value={sortBy} onChange={(event) => setSortBy(event.target.value)} className="w-full appearance-none rounded-full bg-transparent px-5 py-3 pr-10 text-xs font-semibold uppercase tracking-[0.22em] text-velmora-espresso outline-none">
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 h-4 w-4 text-velmora-umber" />
            </label>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
          <div className={`lg:block ${showFilters ? 'block' : 'hidden'}`}>
            <div className="space-y-8 rounded-[2rem] border border-velmora-sand bg-velmora-pearl p-6 text-velmora-espresso shadow-velmora-soft">
              <div>
                <p className="eyebrow">Category</p>
                <div className="mt-4 flex flex-wrap gap-3 lg:flex-col">
                  {['All', ...categories].map((category) => (
                    <button key={category} type="button" onClick={() => setSelectedCategory(category)} className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] transition ${selectedCategory === category ? 'border-velmora-bronze bg-velmora-bronze text-velmora-pearl' : 'border-velmora-sand text-velmora-espresso hover:border-velmora-bronze hover:text-velmora-bronze'}`}>
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="eyebrow">Price</p>
                <div className="mt-4 flex flex-wrap gap-3 lg:flex-col">
                  {[
                    ['All', 'All'],
                    ['under-50', 'Under $50'],
                    ['50-80', '$50–$80'],
                    ['80-plus', '$80+'],
                  ].map(([value, label]) => (
                    <button key={value} type="button" onClick={() => setSelectedPrice(value)} className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] transition ${selectedPrice === value ? 'border-velmora-bronze bg-velmora-bronze text-velmora-pearl' : 'border-velmora-sand text-velmora-espresso hover:border-velmora-bronze hover:text-velmora-bronze'}`}>
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="eyebrow">Material</p>
                <div className="mt-4 flex flex-wrap gap-3 lg:flex-col">
                  {['All', ...materials].map((material) => (
                    <button key={material} type="button" onClick={() => setSelectedMaterial(material)} className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] transition ${selectedMaterial === material ? 'border-velmora-bronze bg-velmora-bronze text-velmora-pearl' : 'border-velmora-sand text-velmora-espresso hover:border-velmora-bronze hover:text-velmora-bronze'}`}>
                      {material}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between rounded-[1.75rem] border border-velmora-sand bg-velmora-pearl px-5 py-4 text-sm text-velmora-umber shadow-velmora-soft">
              <span>{filteredProducts.length} products</span>
              <span>Premium demi-fine pieces from $30–$120</span>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
