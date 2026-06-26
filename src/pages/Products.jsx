import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Filter, Search, ChevronRight } from 'lucide-react'
import { fetchProducts } from '../api/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState('All')
  const containerRef = useRef(null)

  const categories = ['All', 'Double Folder', 'Sheet Metal Folder', 'Folding Machine']

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts()
        setProducts(data)
      } catch (error) {
        console.error('Error loading products:', error)
      } finally {
        setLoading(false)
      }
    }
    loadProducts()
  }, [])

  useEffect(() => {
    if (!loading) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [loading, category])

  const filteredProducts = category === 'All' 
    ? products 
    : products.filter(p => p.data.category === category)

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Machinery</h1>
          <p className="text-slate-400 max-w-2xl text-lg font-light">
            Discover our range of professional-grade folding and sheet metal equipment.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-5 py-2.5 text-sm font-medium rounded-full whitespace-nowrap transition-all ${
                  category === cat 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search equipment..." 
              className="pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* Product Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="aspect-[4/3] bg-slate-50 animate-pulse rounded-2xl" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProducts.map((product) => {
              const details = product.data
              return (
                <Link 
                  key={product.id} 
                  to={`/products/${product.id}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-2xl bg-slate-100">
                    <img
                      data-strk-img-id={`prod-img-${product.id}`}
                      data-strk-img={`[prod-name-${product.id}] [prod-desc-${product.id}] metal machine folder`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={details.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-wider text-slate-900 rounded-full shadow-sm">
                        {details.category}
                      </span>
                    </div>
                  </div>
                  <h3 id={`prod-name-${product.id}`} className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {details.name}
                  </h3>
                  <p id={`prod-desc-${product.id}`} className="text-slate-500 text-sm line-clamp-2 leading-relaxed mb-4">
                    {details.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-bold text-sm">
                    View Specs
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              )
            })}
          </div>
        )}
        
        {!loading && filteredProducts.length === 0 && (
          <div className="text-center py-20 border-2 border-dashed border-slate-100 rounded-3xl">
            <Filter className="w-12 h-12 text-slate-200 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900">No products found</h3>
            <p className="text-slate-500">Try adjusting your filters or search query.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Products
