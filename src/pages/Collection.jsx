import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Filter, ChevronDown, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { products } from '@/lib/data'
import { useCartStore } from '@/lib/store'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export function Collection() {
  const { category } = useParams()
  const { addToCart } = useCartStore()
  const containerRef = useRef(null)
  
  const [sortBy, setSortBy] = useState('featured')
  const [activeFilters, setActiveFilters] = useState([])
  
  const categoryTitle = category ? category.replace('-', ' ') : 'All Jewelry'
  
  let displayProducts = category && category !== 'all' && category !== 'bestsellers'
    ? products.filter(p => p.category.toLowerCase() === category.toLowerCase())
    : products

  if (category === 'bestsellers') {
    // Just sort differently or use a flag for actual app, here we show all or a subset
    displayProducts = [...products].sort((a, b) => b.rating - a.rating)
  }

  // Handle sorting
  if (sortBy === 'price-low') displayProducts.sort((a, b) => a.price - b.price)
  if (sortBy === 'price-high') displayProducts.sort((a, b) => b.price - a.price)
  if (sortBy === 'newest') displayProducts.sort((a, b) => b.id.localeCompare(a.id)) // arbitrary for demo

  // Effect to load images when products run
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [category, sortBy, activeFilters])

  const toggleFilter = (filter) => {
    setActiveFilters(prev => 
      prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
    )
  }

  const FilterSidebar = () => (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6 lg:hidden">
        <h3 className="font-serif text-xl">Filters</h3>
      </div>
      <Accordion type="multiple" defaultValue={["category", "material", "price"]} className="w-full">
        <AccordionItem value="category">
          <AccordionTrigger className="uppercase tracking-widest text-xs font-semibold hover:no-underline">Category</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              {['Earrings', 'Necklaces', 'Huggies'].map(cat => (
                <div key={cat} className="flex gap-3 items-center group cursor-pointer" onClick={() => toggleFilter(cat)}>
                  <div className={`w-4 h-4 border border-border flex items-center justify-center transition-colors ${activeFilters.includes(cat) ? 'bg-foreground border-foreground' : 'group-hover:border-foreground/50'}`}>
                    {activeFilters.includes(cat) && <Check className="w-3 h-3 text-background" />}
                  </div>
                  <span className="text-sm text-foreground/80 group-hover:text-foreground dropdown-menu-label">{cat}</span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="material">
          <AccordionTrigger className="uppercase tracking-widest text-xs font-semibold hover:no-underline">Material</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              {['18K Gold Plated', 'Crystals', 'Sterling Silver Base'].map(mat => (
                <div key={mat} className="flex gap-3 items-center group cursor-pointer" onClick={() => toggleFilter(mat)}>
                  <div className={`w-4 h-4 border border-border flex items-center justify-center transition-colors ${activeFilters.includes(mat) ? 'bg-foreground border-foreground' : 'group-hover:border-foreground/50'}`}>
                    {activeFilters.includes(mat) && <Check className="w-3 h-3 text-background" />}
                  </div>
                  <span className="text-sm text-foreground/80 group-hover:text-foreground">{mat}</span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )

  return (
    <div className="pt-24 pb-24 min-h-screen bg-background" ref={containerRef}>
      
      {/* Category Header */}
      <div className="bg-secondary/50 py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 id="shop-title" className="text-4xl md:text-5xl font-serif capitalize mb-4">{categoryTitle}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collection. Every piece is meticulously crafted to bring accessible luxury to your everyday rotation.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Controls Bar */}
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-border">
          {/* Mobile Filter Trigger */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="gap-2 rounded-none border-border">
                  <Filter className="w-4 h-4" />
                  <span className="uppercase tracking-widest text-xs">Filter</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <FilterSidebar />
              </SheetContent>
            </Sheet>
          </div>

          <div className="hidden lg:block text-sm text-muted-foreground">
            Showing {displayProducts.length} results
          </div>

          <div className="flex items-center gap-2">
            <span className="uppercase tracking-widest text-xs font-semibold mr-2 hidden sm:inline-block">Sort By</span>
            <div className="relative group">
              <select 
                className="appearance-none bg-transparent border border-border rounded-none px-4 py-2 pr-8 text-sm focus:outline-none focus:border-foreground cursor-pointer"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest Arrivals</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Desktop Filter Sidebar */}
          <div className="hidden lg:block w-1/4 max-w-xs shrink-0 sticky top-28 self-start max-h-[calc(100vh-120px)] overflow-y-auto pr-6 custom-scrollbar">
            <FilterSidebar />
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-12">
              {displayProducts.map((product) => (
                <div key={product.id} className="group flex flex-col">
                  <div className="relative aspect-[3/4] mb-4 bg-secondary overflow-hidden">
                    <Link to={`/products/${product.id}`} className="absolute inset-0 z-10">
                      <span className="sr-only">View {product.name}</span>
                    </Link>
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      data-strk-img-id={`shop-${product.id}-img`}
                      data-strk-img={`[shop-item-${product.id}-title] [shop-title]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="600"
                    />
                    {/* Hover actions */}
                    <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20 md:flex hidden justify-center">
                      <Button 
                        className="w-full bg-background/90 text-foreground hover:bg-accent hover:text-accent-foreground backdrop-blur-sm shadow-sm rounded-none border border-border"
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          addToCart(product, product.variants[0])
                        }}
                      >
                        Quick Add
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 text-center items-center">
                    <h3 id={`shop-item-${product.id}-title`} className="font-serif uppercase tracking-widest text-sm mb-1">{product.name}</h3>
                    <p className="mt-2 font-medium">${product.price}</p>
                    {/* Mobile quick add */}
                    <Button 
                      variant="outline"
                      size="sm"
                      className="w-full mt-4 rounded-none md:hidden uppercase tracking-widest text-xs"
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        addToCart(product, product.variants[0])
                      }}
                    >
                      Add
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            {displayProducts.length === 0 && (
              <div className="py-20 text-center text-muted-foreground">
                <p>No products found matching your criteria.</p>
                <Button 
                  variant="link" 
                  className="mt-4 text-foreground uppercase tracking-widest"
                  onClick={() => setActiveFilters([])}
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

