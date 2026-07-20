import React, { useState, useMemo, useRef, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ChevronDown, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useCart } from '@/context/CartContext'
import { PRODUCTS } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const CATEGORIES = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const SORTS = ['Featured', 'Price: Low to High', 'Price: High to Low']

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  
  const [activeCategory, setActiveCategory] = useState(
    CATEGORIES.find(c => c.toLowerCase() === initialCategory.toLowerCase()) || 'All'
  )
  const [activeSort, setActiveSort] = useState('Featured')
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false)
  const { addItem, setIsCartOpen } = useCart()

  const containerRef = useRef(null)

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS]
    
    if (activeCategory !== 'All') {
      result = result.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase())
    }
    
    if (activeSort === 'Price: Low to High') {
      result.sort((a, b) => a.price - b.price)
    } else if (activeSort === 'Price: High to Low') {
      result.sort((a, b) => b.price - a.price)
    }
    
    return result
  }, [activeCategory, activeSort])

  // Need to re-trigger ImageHelper when filtered products change.
  useEffect(() => {
    // using requestAnimationFrame ensures that the DOM has been updated with the mapped images
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [filteredProducts])

  const handleAddToCart = (e, product) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product)
    setIsCartOpen(true)
  }

  const updateCategory = (cat) => {
    setActiveCategory(cat)
    if (cat === 'All') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', cat.toLowerCase())
    }
    setSearchParams(searchParams)
  }

  return (
    <div className="pt-24 pb-20 min-h-screen" ref={containerRef}>
      {/* Header */}
      <div className="bg-secondary/30 py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 id="shop-title" className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            {activeCategory === 'All' ? 'The Collection' : activeCategory}
          </h1>
          <p id="shop-subhead" className="text-muted-foreground max-w-2xl mx-auto">
            Explore our curated selection of demi-fine jewelry. Designed for everyday layering and elegance.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 pb-4 border-b border-border">
          <div className="flex items-center w-full justify-between sm:justify-start">
            <Button 
              variant="outline" 
              className="lg:hidden flex items-center rounded-none font-medium tracking-widest uppercase text-xs"
              onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
            <span className="text-sm text-muted-foreground ml-auto sm:ml-0 font-medium">
              {filteredProducts.length} Products
            </span>
          </div>

          <div className="hidden sm:flex items-center space-x-2 mt-4 sm:mt-0">
            <span className="text-sm text-muted-foreground uppercase tracking-widest font-medium text-xs">Sort by:</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="rounded-none border-none hover:bg-transparent font-serif text-base px-2 flex items-center">
                  {activeSort} <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 rounded-none">
                {SORTS.map(sort => (
                  <DropdownMenuItem 
                    key={sort} 
                    onClick={() => setActiveSort(sort)}
                    className="font-sans text-sm cursor-pointer rounded-none focus:bg-secondary"
                  >
                    {sort}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className={`lg:w-64 flex-shrink-0 ${isMobileFiltersOpen ? 'block' : 'hidden lg:block'}`}>
            <Accordion type="multiple" defaultValue={['category', 'material']} className="w-full">
              <AccordionItem value="category" className="border-b-0 mb-6">
                <AccordionTrigger className="font-serif text-lg hover:no-underline pt-0 pb-4">
                  Category
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-3 pt-2">
                    {CATEGORIES.map(cat => (
                      <li key={cat}>
                        <button
                          className={`text-sm hover:text-foreground transition-colors ${
                            activeCategory === cat ? 'text-foreground font-medium underline underline-offset-4' : 'text-muted-foreground'
                          }`}
                          onClick={() => updateCategory(cat)}
                        >
                          {cat}
                        </button>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="material" className="border-b-0">
                <AccordionTrigger className="font-serif text-lg hover:no-underline pt-0 pb-4">
                  Material
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-3 pt-2">
                    <li>
                      <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        18K Gold Plated
                      </button>
                    </li>
                    <li>
                      <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Sterling Silver
                      </button>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
              {filteredProducts.map((item) => (
                <Link key={item.id} to={`/product/${item.id}`} className="group block group/card">
                  <div className="relative aspect-[3/4] bg-secondary mb-4 overflow-hidden">
                    <img 
                      alt={item.name}
                      data-strk-img-id={`shop-${item.id}-img1`}
                      data-strk-img={`[shop-title-${item.id}] [shop-subhead] [shop-title]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover/card:opacity-0"
                    />
                    <img 
                      alt={`${item.name} alternate`}
                      data-strk-img-id={`shop-${item.id}-img2`}
                      data-strk-img={`[shop-title-${item.id}] model side style`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
                    />
                    
                    <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-300">
                      <Button 
                        onClick={(e) => handleAddToCart(e, item)}
                        className="w-full bg-white/90 hover:bg-white text-black rounded-none shadow-sm h-10 text-xs font-semibold uppercase tracking-widest"
                      >
                        Quick Add
                      </Button>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 id={`shop-title-${item.id}`} className="font-serif uppercase tracking-widest text-sm font-semibold mb-2">
                      {item.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">${item.price.toFixed(2)}</p>
                  </div>
                </Link>
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-24">
                <p className="text-muted-foreground text-lg">No products found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
