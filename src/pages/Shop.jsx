import { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Filter, ChevronDown } from 'lucide-react'
import { products } from '../data/products'

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const defaultCategory = searchParams.get('category') || 'All'
  const [activeCategory, setActiveCategory] = useState(defaultCategory)
  const [sortOption, setSortOption] = useState('featured')
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']

  const filteredProducts = useMemo(() => {
    let result = products

    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory)
    }

    switch (sortOption) {
      case 'price-low':
        return [...result].sort((a, b) => a.price - b.price)
      case 'price-high':
        return [...result].sort((a, b) => b.price - a.price)
      case 'newest':
      case 'featured':
      default:
        return result
    }
  }, [activeCategory, sortOption])

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat)
    if (cat === 'All') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', cat)
    }
    setSearchParams(searchParams)
  }

  return (
    <div className="pt-24 pb-16 min-h-screen container mx-auto px-4 md:px-8">
      {/* Header */}
      <div className="flex flex-col items-center justify-center py-12 mb-8 border-b border-border">
        <h1 className="font-serif text-4xl md:text-5xl mb-4">{activeCategory === 'All' ? 'All Jewelry' : activeCategory}</h1>
        <p className="text-muted-foreground text-center max-w-lg">
          Discover our collection of demi-fine jewelry. Ethically handcrafted to become your new everyday signatures.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Mobile Filter Toggle */}
        <div className="md:hidden flex justify-between items-center border-b border-border pb-4 mb-4">
          <button 
            className="flex items-center gap-2 text-sm tracking-widest uppercase"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter size={16} /> Filters
          </button>
          
          <div className="relative">
            <select 
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="appearance-none bg-transparent text-sm tracking-widest uppercase outline-none pr-8 cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Sidebar Filters */}
        <aside className={`md:w-64 flex-shrink-0 ${isFilterOpen ? 'block' : 'hidden md:block'}`}>
          <div className="sticky top-28 space-y-10">
            <div>
              <h3 className="text-sm tracking-widest uppercase font-medium mb-6">Category</h3>
              <ul className="space-y-4 text-muted-foreground">
                {categories.map(cat => (
                  <li key={cat}>
                    <button 
                      onClick={() => handleCategoryChange(cat)}
                      className={`hover:text-foreground transition-colors ${activeCategory === cat ? 'text-foreground underline underline-offset-4' : ''}`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="hidden md:block">
              <h3 className="text-sm tracking-widest uppercase font-medium mb-6">Sort By</h3>
              <div className="relative w-full border border-border">
                <select 
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="w-full appearance-none bg-transparent px-4 py-3 text-sm text-muted-foreground outline-none cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" />
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-8 text-sm text-muted-foreground">
            <span>{filteredProducts.length} Product{filteredProducts.length !== 1 ? 's' : ''}</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 md:gap-x-8">
            {filteredProducts.map((product) => (
              <Link key={product.id} to={`/products/${product.slug}`} className="group group/card block">
                <div className="relative aspect-[4/5] bg-muted mb-4 overflow-hidden">
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-opacity duration-500 group-hover/card:opacity-0"
                  />
                  <img 
                    src={product.images[1] || product.images[0]} 
                    alt={`${product.name} detail`}
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
                  />
                  {/* Subtle Add to Cart indication - we could use quick add, but direct to product page is cleaner */}
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover/card:translate-y-0 transition-transform duration-300 ease-out">
                    <button className="w-full bg-background/90 backdrop-blur text-foreground py-3 text-sm tracking-wider uppercase hover:bg-foreground hover:text-background transition-colors border border-foreground/10">
                      Quick View
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-lg tracking-wider mb-1">{product.name}</h3>
                  <p className="text-muted-foreground">${product.price}</p>
                </div>
              </Link>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-24 text-center">
              <p className="text-lg text-muted-foreground mb-4">No products found in this category.</p>
              <button 
                onClick={() => handleCategoryChange('All')}
                className="text-sm tracking-widest uppercase border-b border-foreground pb-1"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}