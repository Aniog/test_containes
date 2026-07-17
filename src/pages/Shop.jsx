import React, { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { fetchProducts } from '@/api/products'
import { useCart } from '@/api/cart'
import { Filter, ChevronDown, ShoppingBag } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Shop() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const { addItem } = useCart()

  const categories = ["Earrings", "Necklaces", "Huggies"]
  const currentCategory = searchParams.get('category')

  useEffect(() => {
    fetchProducts().then(({ data }) => {
      setProducts(data)
    })
  }, [])

  useEffect(() => {
    if (currentCategory) {
      setFilteredProducts(products.filter(p => p.data.category === currentCategory))
    } else {
      setFilteredProducts(products)
    }
  }, [products, currentCategory])

  const toggleCategory = (cat) => {
    if (currentCategory === cat) {
      searchParams.delete('category')
    } else {
      searchParams.set('category', cat)
    }
    setSearchParams(searchParams)
  }

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 min-h-screen bg-background">
      <header className="mb-16 text-center">
        <span className="text-[11px] uppercase tracking-[0.4em] opacity-60 mb-4 block">Store</span>
        <h1 className="text-5xl md:text-6xl font-serif">{currentCategory || 'All Jewelry'}</h1>
      </header>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filter */}
        <aside className="w-full md:w-64 flex flex-col gap-12">
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-6 flex items-center gap-2">
              <Filter className="w-3.5 h-3.5" /> Category
            </h3>
            <div className="flex flex-col gap-4">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => toggleCategory(cat)}
                  className={`text-[11px] uppercase tracking-[0.2em] text-left hover:text-foreground transition-colors ${currentCategory === cat ? 'text-foreground underline underline-offset-4' : 'text-muted-foreground'}`}
                >
                  {cat}
                </button>
              ))}
              {currentCategory && (
                <button
                  onClick={() => { searchParams.delete('category'); setSearchParams(searchParams); }}
                  className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-4 underline underline-offset-4"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="group"
                >
                  <div className="relative aspect-[3/4] bg-muted overflow-hidden mb-4">
                    <Link to={`/product/${product.id}`}>
                      <img
                        data-strk-img-id={`shop-${product.id}`}
                        data-strk-img={`[product-${product.id}-title] ${product.data.category} jewelry`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        alt={product.data.name}
                      />
                    </Link>
                    <button 
                      onClick={() => addItem(product)}
                      className="absolute bottom-0 left-0 right-0 bg-background/90 text-[10px] uppercase tracking-[0.2em] font-semibold py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex items-center justify-center gap-2"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Add to Bag
                    </button>
                  </div>
                  <Link to={`/product/${product.id}`} className="block">
                    <h3 id={`product-${product.id}-title`} className="text-[11px] uppercase tracking-widest font-medium mb-1 truncate">
                      {product.data.name}
                    </h3>
                    <p className="font-serif text-lg opacity-80">${product.data.price}</p>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="py-24 text-center">
              <p className="font-serif text-2xl italic opacity-40">No pieces found in this collection.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
