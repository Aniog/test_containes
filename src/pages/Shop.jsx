import React, { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { PRODUCTS } from '@/lib/data'
import { useCartStore } from '@/lib/store'
import { toast } from 'sonner'
import { ChevronDown, SlidersHorizontal } from 'lucide-react'

export function Shop() {
  const { addItem } = useCartStore()
  const [searchParams, setSearchParams] = useSearchParams()
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)
  
  const categoryFilter = searchParams.get('category')
  const sortFilter = searchParams.get('sort')

  const handleAddToCart = (e, product) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product)
    toast.success(`Added ${product.name} to cart`)
  }

  const setFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams)
    if (value) {
      newParams.set(key, value)
    } else {
      newParams.delete(key)
    }
    setSearchParams(newParams)
  }

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS]
    
    if (categoryFilter && categoryFilter !== 'all') {
      result = result.filter(p => p.category === categoryFilter)
    }
    
    if (sortFilter === 'price-low') {
      result.sort((a, b) => a.price - b.price)
    } else if (sortFilter === 'price-high') {
      result.sort((a, b) => b.price - a.price)
    } else if (sortFilter === 'bestsellers') {
      // Mock bestsellers sort
      result = result.slice().reverse()
    }
    
    return result
  }, [categoryFilter, sortFilter])

  return (
    <div className="pt-24 min-h-screen">
      <div className="text-center py-16 bg-muted/30 border-b border-border">
        <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
          {categoryFilter ? categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1) : 'All Jewelry'}
        </h1>
        <p className="text-muted-foreground font-light max-w-lg mx-auto">
          Discover our full collection of ethically crafted demi-fine gold jewelry. Designed to be layered, loved, and lived in.
        </p>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="md:hidden mb-4">
              <Button 
                variant="outline" 
                className="w-full justify-between rounded-none border-foreground text-foreground"
                onClick={() => setIsFiltersOpen(!isFiltersOpen)}
              >
                <span className="flex items-center gap-2"><SlidersHorizontal className="w-4 h-4"/> Filters</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isFiltersOpen ? 'rotate-180' : ''}`} />
              </Button>
            </div>

            <div className={`${isFiltersOpen ? 'block' : 'hidden'} md:block sticky top-32 space-y-8`}>
              <div>
                <h3 className="font-serif uppercase tracking-widest text-sm mb-4 border-b border-border pb-2">Category</h3>
                <ul className="space-y-3">
                  {['all', 'earrings', 'necklaces', 'huggies'].map(cat => (
                    <li key={cat}>
                      <button 
                        onClick={() => setFilter('category', cat === 'all' ? null : cat)}
                        className={`text-sm tracking-wide uppercase hover:text-primary transition-colors ${
                          (categoryFilter === cat || (!categoryFilter && cat === 'all')) 
                            ? 'text-primary font-medium' 
                            : 'text-muted-foreground'
                        }`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-serif uppercase tracking-widest text-sm mb-4 border-b border-border pb-2">Sort By</h3>
                <ul className="space-y-3">
                  {[
                    { val: null, label: 'Featured' },
                    { val: 'bestsellers', label: 'Bestsellers' },
                    { val: 'price-low', label: 'Price: Low to High' },
                    { val: 'price-high', label: 'Price: High to Low' }
                  ].map(sort => (
                    <li key={sort.label}>
                      <button 
                        onClick={() => setFilter('sort', sort.val)}
                        className={`text-sm tracking-wide uppercase hover:text-primary transition-colors ${
                          sortFilter === sort.val 
                            ? 'text-primary font-medium' 
                            : 'text-muted-foreground'
                        }`}
                      >
                        {sort.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-serif uppercase tracking-widest text-sm mb-4 border-b border-border pb-2">Material</h3>
                <ul className="space-y-3">
                  <li>
                    <button className="text-sm tracking-wide uppercase text-primary font-medium">
                      18k Gold Plated
                    </button>
                  </li>
                  <li>
                     <button className="text-sm tracking-wide uppercase text-muted-foreground cursor-not-allowed" disabled>
                      Sterling Silver (Coming Soon)
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="mb-6 text-sm text-muted-foreground uppercase tracking-widest border-b border-border pb-4 flex justify-between">
              <span>{filteredProducts.length} Products</span>
            </div>
            
            {filteredProducts.length > 0 ? (
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                {filteredProducts.map(product => (
                  <Link key={product.id} to={`/product/${product.id}`} className="group block group/card text-foreground">
                    <div className="relative aspect-[3/4] mb-4 bg-secondary/30 overflow-hidden border border-border">
                      <img 
                        alt={product.imageAlt}
                        className="object-cover w-full h-full transition-opacity duration-500 ease-in-out group-hover/card:opacity-0 absolute inset-0 z-10"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        dangerouslySetInnerHTML={{ __html: '' }}
                        {...{[product.image.split('="')[0]]: product.image.split('="')[1].replace('"', '')}}
                        data-strk-img-id={`shop-${product.id}-1`}
                        data-strk-img-ratio="3x4"
                      />
                      <img 
                        alt={`${product.name} worn`}
                        className="object-cover w-full h-full absolute inset-0 z-0"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        {...{[product.altImage.split('="')[0]]: product.altImage.split('="')[1].replace('"', '')}}
                        data-strk-img-id={`shop-${product.id}-2`}
                        data-strk-img-ratio="3x4"
                      />
                      
                      <div className="absolute bottom-4 inset-x-4 opacity-0 group-hover/card:opacity-100 transition-opacity z-20 translate-y-2 group-hover/card:translate-y-0 duration-300">
                        <Button 
                          className="w-full bg-background/90 text-foreground hover:bg-background backdrop-blur-sm shadow-sm" 
                          variant="outline"
                          onClick={(e) => handleAddToCart(e, product)}
                        >
                          Quick Add
                        </Button>
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="font-serif uppercase tracking-wider text-sm mb-1">{product.name}</h3>
                      <p className="text-muted-foreground text-sm font-light">${product.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-24">
                <p className="font-serif text-2xl text-foreground">No products found.</p>
                <Button variant="outline" className="mt-6 uppercase tracking-widest text-xs rounded-none border-foreground text-foreground" onClick={() => setFilter('category', null)}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </div>
  )
}