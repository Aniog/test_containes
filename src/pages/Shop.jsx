import React, { useState, useMemo, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ShoppingBag, ChevronDown } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/contexts/CartContext'
import { StarRating } from '@/components/ui/StarRating'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'

const categories = [
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
  { id: 'sets', label: 'Gift Sets' },
]

const priceRanges = [
  { id: 'under40', label: 'Under $40', min: 0, max: 40 },
  { id: '40to60', label: '$40 – $60', min: 40, max: 60 },
  { id: '60to80', label: '$60 – $80', min: 60, max: 80 },
  { id: '80plus', label: '$80+', min: 80, max: Infinity },
]

const materials = ['18K gold plated', 'gold + pearl']

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'priceAsc', label: 'Price: Low to High' },
  { id: 'priceDesc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sortOpen, setSortOpen] = useState(false)
  const [sortBy, setSortBy] = useState('featured')

  const initialCategory = searchParams.get('category') || ''
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  )
  const [selectedPrices, setSelectedPrices] = useState([])
  const [selectedMaterials, setSelectedMaterials] = useState([])

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setSelectedCategories([cat])
  }, [searchParams])

  const toggleCategory = (id) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    )
  }

  const togglePrice = (id) => {
    setSelectedPrices((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    )
  }

  const toggleMaterial = (m) => {
    setSelectedMaterials((prev) =>
      prev.includes(m) ? prev.filter((c) => c !== m) : [...prev, m]
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedPrices([])
    setSelectedMaterials([])
    setSearchParams({})
  }

  const activeFilterCount =
    selectedCategories.length + selectedPrices.length + selectedMaterials.length

  const filtered = useMemo(() => {
    let list = [...products]

    if (selectedCategories.length > 0) {
      list = list.filter((p) => selectedCategories.includes(p.category))
    }

    if (selectedPrices.length > 0) {
      list = list.filter((p) =>
        selectedPrices.some((id) => {
          const range = priceRanges.find((r) => r.id === id)
          return range && p.price >= range.min && p.price < range.max
        })
      )
    }

    if (selectedMaterials.length > 0) {
      list = list.filter((p) => selectedMaterials.includes(p.material))
    }

    switch (sortBy) {
      case 'priceAsc':
        list.sort((a, b) => a.price - b.price)
        break
      case 'priceDesc':
        list.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        list.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return list
  }, [selectedCategories, selectedPrices, selectedMaterials, sortBy])

  const { addToCart, openCart } = useCart()

  const handleQuickAdd = (product) => {
    const inStock = product.variants.find((v) => v.inStock)
    if (!inStock) {
      toast.error('Sorry, this item is out of stock.')
      return
    }
    addToCart(product, inStock.id)
    toast.success(`${product.name} added to cart`, {
      action: { label: 'View Cart', onClick: openCart },
    })
  }

  return (
    <main className="pt-20 md:pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl">
              Shop All
            </h1>
            <p className="text-sm text-velmora-muted mt-2">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </p>
          </div>
          <div className="flex items-center gap-3">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden inline-flex items-center gap-2 px-4 py-2.5 border border-velmora-border text-xs uppercase tracking-wider font-medium"
            >
              <SlidersHorizontal size={14} />
              Filters
              {activeFilterCount > 0 && (
                <span className="ml-1 inline-flex items-center justify-center w-4 h-4 text-[10px] bg-velmora-gold text-white rounded-full">
                  {activeFilterCount}
                </span>
              )}
            </button>

            {/* Sort dropdown */}
            <div className="relative">
              <button
                onClick={() => setSortOpen((s) => !s)}
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-velmora-border text-xs uppercase tracking-wider font-medium bg-white"
              >
                <span>Sort: {sortOptions.find((s) => s.id === sortBy)?.label}</span>
                <ChevronDown size={14} />
              </button>
              {sortOpen && (
                <>
                  <div
                    className="fixed inset-0 z-30"
                    onClick={() => setSortOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-52 bg-white border border-velmora-border shadow-lg z-40">
                    {sortOptions.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => {
                          setSortBy(opt.id)
                          setSortOpen(false)
                        }}
                        className={cn(
                          'w-full text-left px-4 py-3 text-sm hover:bg-velmora-cream transition-colors',
                          sortBy === opt.id && 'font-medium'
                        )}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-56 shrink-0 space-y-8">
            <FilterGroup
              title="Category"
              options={categories.map((c) => ({ id: c.id, label: c.label }))}
              selected={selectedCategories}
              onToggle={toggleCategory}
            />
            <FilterGroup
              title="Price"
              options={priceRanges.map((r) => ({ id: r.id, label: r.label }))}
              selected={selectedPrices}
              onToggle={togglePrice}
            />
            <FilterGroup
              title="Material"
              options={materials.map((m) => ({ id: m, label: m }))}
              selected={selectedMaterials}
              onToggle={toggleMaterial}
            />
            {activeFilterCount > 0 && (
              <button
                onClick={clearFilters}
                className="text-xs underline underline-offset-4 hover:text-velmora-gold transition-colors"
              >
                Clear all filters
              </button>
            )}
          </aside>

          {/* Mobile filter drawer */}
          {sidebarOpen && (
            <>
              <div
                className="fixed inset-0 z-50 bg-black/40 md:hidden"
                onClick={() => setSidebarOpen(false)}
              />
              <div className="fixed top-0 left-0 z-50 h-full w-80 max-w-[85vw] bg-white shadow-2xl md:hidden overflow-y-auto">
                <div className="flex items-center justify-between px-5 py-4 border-b border-velmora-border">
                  <h2 className="font-serif text-xl">Filters</h2>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="p-2 hover:bg-velmora-cream rounded-full"
                  >
                    <X size={18} />
                  </button>
                </div>
                <div className="px-5 py-6 space-y-8">
                  <FilterGroup
                    title="Category"
                    options={categories.map((c) => ({ id: c.id, label: c.label }))}
                    selected={selectedCategories}
                    onToggle={toggleCategory}
                  />
                  <FilterGroup
                    title="Price"
                    options={priceRanges.map((r) => ({
                      id: r.id,
                      label: r.label,
                    }))}
                    selected={selectedPrices}
                    onToggle={togglePrice}
                  />
                  <FilterGroup
                    title="Material"
                    options={materials.map((m) => ({ id: m, label: m }))}
                    selected={selectedMaterials}
                    onToggle={toggleMaterial}
                  />
                </div>
                <div className="px-5 py-4 border-t border-velmora-border">
                  <button
                    onClick={() => {
                      clearFilters()
                      setSidebarOpen(false)
                    }}
                    className="w-full py-3 text-xs uppercase tracking-wider font-medium border border-velmora-charcoal hover:bg-velmora-charcoal hover:text-white transition-colors"
                  >
                    Clear All
                  </button>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="w-full mt-3 py-3 text-xs uppercase tracking-wider font-medium bg-velmora-gold text-white hover:bg-velmora-gold-hover transition-colors"
                  >
                    Show {filtered.length} Results
                  </button>
                </div>
              </div>
            </>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl">No products match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-sm underline hover:text-velmora-gold"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickAdd={() => handleQuickAdd(product)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

function FilterGroup({ title, options, selected, onToggle }) {
  return (
    <div>
      <h4 className="text-xs uppercase tracking-widest font-semibold mb-3">
        {title}
      </h4>
      <div className="space-y-2">
        {options.map((opt) => (
          <label
            key={opt.id}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div
              className={cn(
                'w-4 h-4 border rounded-sm flex items-center justify-center transition-colors',
                selected.includes(opt.id)
                  ? 'bg-velmora-gold border-velmora-gold'
                  : 'border-velmora-border-dark group-hover:border-velmora-charcoal'
              )}
            >
              {selected.includes(opt.id) && (
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path
                    d="M1 4L3.5 6.5L9 1"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
            <input
              type="checkbox"
              className="sr-only"
              checked={selected.includes(opt.id)}
              onChange={() => onToggle(opt.id)}
            />
            <span className="text-sm text-velmora-charcoal">{opt.label}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

function ProductCard({ product, onQuickAdd }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-velmora-cream rounded-sm overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: hovered ? 0 : 1 }}
          />
          <img
            src={product.images[1] || product.images[0]}
            alt={`${product.name} alternate`}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: hovered ? 1 : 0 }}
          />
          <button
            onClick={(e) => {
              e.preventDefault()
              onQuickAdd()
            }}
            className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur text-velmora-charcoal text-xs uppercase tracking-wider font-medium py-3 flex items-center justify-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-velmora-charcoal hover:text-white"
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        </div>
      </Link>
      <div className="mt-3">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-sm md:text-base tracking-wider uppercase">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-velmora-muted mt-1 truncate">{product.tagline}</p>
        <div className="flex items-center gap-2 mt-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-[11px] text-velmora-muted">({product.reviewCount})</span>
        </div>
        <p className="text-sm font-medium mt-1.5">${product.price}</p>
      </div>
    </div>
  )
}
