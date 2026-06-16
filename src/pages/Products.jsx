import { useState, useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { fetchProducts } from '@/api'
import { Link } from 'react-router-dom'
import { ChevronRight, Filter } from 'lucide-react'

export default function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const containerRef = useRef(null)

  useEffect(() => {
    async function getProducts() {
      try {
        const data = await fetchProducts()
        setProducts(data)
      } catch (err) {
        console.error("Failed to fetch products", err)
      } finally {
        setLoading(false)
      }
    }
    getProducts()
  }, [])

  useEffect(() => {
    if (!loading) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [loading])

  return (
    <div ref={containerRef} className="bg-white min-h-screen">
      <div className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="products-hero-title" className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Our Machinery Catalog
          </h1>
          <p id="products-hero-subtitle" className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Discover our comprehensive range of folding machines, from manual folders to sophisticated double-folding centers.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Filters Sidebar */}
          <aside className="w-full md:w-64 flex-shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center gap-2 mb-8 text-slate-900 font-bold uppercase tracking-widest text-xs">
                <Filter className="w-4 h-4" />
                Categories
              </div>
              <ul className="space-y-3">
                {["All Machine Types", "Double Folding", "Sheet Metal Folder", "CNC Folder", "Manual Folder"].map((cat) => (
                  <li key={cat}>
                    <button className="text-sm font-medium text-slate-500 hover:text-sky-600 transition-colors py-2 block">
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-grow">
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="h-[400px] bg-slate-50 animate-pulse rounded-2xl" />
                ))}
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-20 bg-slate-50 rounded-2xl">
                <p className="text-slate-500 font-light">No products found in our database.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {products.map((p) => (
                  <div key={p.id} className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500">
                    <div className="relative aspect-[3/2] overflow-hidden bg-slate-50">
                      <img
                        data-strk-img-id={`prod-img-${p.id}`}
                        data-strk-img={`[prod-desc-${p.id}] [prod-title-${p.id}] [products-hero-title]`}
                        data-strk-img-ratio="3x2"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={p.data.name}
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-sky-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                          {p.data.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 id={`prod-title-${p.id}`} className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-sky-600 transition-colors">
                        {p.data.name}
                      </h3>
                      <p id={`prod-desc-${p.id}`} className="text-slate-500 font-light text-sm mb-8 line-clamp-2 leading-relaxed">
                        {p.data.description}
                      </p>
                      
                      {p.data.specifications && (
                        <div className="grid grid-cols-3 gap-4 mb-8">
                          {p.data.specifications.maxThickness && (
                            <div>
                              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">Thickness</p>
                              <p className="text-sm font-semibold text-slate-700">{p.data.specifications.maxThickness}</p>
                            </div>
                          )}
                          {p.data.specifications.workingLength && (
                            <div>
                              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">Length</p>
                              <p className="text-sm font-semibold text-slate-700">{p.data.specifications.workingLength}</p>
                            </div>
                          )}
                          {p.data.specifications.weight && (
                            <div>
                              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">Weight</p>
                              <p className="text-sm font-semibold text-slate-700">{p.data.specifications.weight}</p>
                            </div>
                          )}
                        </div>
                      )}

                      <Link
                        to={`/contact?product=${p.id}`}
                        className="inline-flex items-center gap-2 text-slate-900 font-bold uppercase tracking-widest text-[11px] group-hover:text-sky-600 transition-colors"
                      >
                        Request Specification <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
