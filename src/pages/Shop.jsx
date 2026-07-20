import React, { useState, useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { seedProducts } from '@/components/home/Bestsellers'
import { Filter, ChevronDown, LayoutGrid, Square } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Shop = () => {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'all'
  const [activeCategory, setActiveCategory] = useState(initialCategory)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
    window.scrollTo(0, 0)
  }, [activeCategory])

  const categories = ['all', 'Earrings', 'Necklaces', 'Huggies', 'Sets']

  const filteredProducts = activeCategory === 'all' 
    ? seedProducts 
    : seedProducts.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase())

  return (
    <div ref={containerRef} className="bg-background min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-base/5 py-12 lg:py-20 px-6 lg:px-12 text-center overflow-hidden">
         <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif uppercase tracking-tight mb-4">
            Curated Collection
         </h1>
         <p className="text-[10px] uppercase tracking-[0.4em] opacity-40">Essentials designed to be lived in</p>
      </div>

      {/* Toolbar */}
      <div className="sticky top-16 lg:top-20 z-40 bg-background/80 backdrop-blur-md border-b border-base/5 px-6 lg:px-12 py-5 flex items-center justify-between">
         <div className="flex items-center space-x-8">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-medium hover:text-accent transition-colors"
            >
               <Filter className="w-3 h-3" />
               <span>Filters</span>
            </button>
         </div>

         <div className="flex items-center space-x-8 text-[10px] uppercase tracking-widest font-medium opacity-40 overflow-x-auto no-scrollbar max-w-[50%]">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat.toLowerCase())}
                className={cn(
                  "hover:text-base whitespace-nowrap transition-colors",
                  activeCategory === cat.toLowerCase() && "text-base underline underline-offset-8 decoration-accent"
                )}
              >
                {cat}
              </button>
            ))}
         </div>

         <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-medium opacity-40 hover:opacity-100 transition-opacity">
               <span>Sort</span>
               <ChevronDown className="w-3 h-3" />
            </button>
         </div>
      </div>

      {/* Grid */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-16">
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16 gap-x-6 lg:gap-x-10">
            {filteredProducts.map((p) => (
              <Link to={`/product/${p.id}`} key={p.id} className="group space-y-6">
                <div className="aspect-[3/4] overflow-hidden bg-[#F5F5F3] relative">
                  <img 
                    data-strk-img-id={`shop-${p.id}`}
                    data-strk-img={`[shop-title-${p.id}] gold jewelry portrait elegant ecommerce`}
                    data-strk-img-ratio="2x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 3'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-base/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="text-center space-y-2">
                   <h3 id={`shop-title-${p.id}`} className="text-xs uppercase tracking-widest font-serif font-semibold transition-colors group-hover:text-accent">
                      {p.name}
                   </h3>
                   <p className="text-[10px] text-base/40 uppercase tracking-widest">${p.price}</p>
                </div>
              </Link>
            ))}
         </div>

         {filteredProducts.length === 0 && (
           <div className="py-32 text-center italic opacity-40 uppercase tracking-widest text-xs">
              No pieces found in this category.
           </div>
         )}
      </div>
    </div>
  )
}

const cn = (...classes) => classes.filter(Boolean).join(' ')

export default Shop
