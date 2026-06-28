import { useState, useEffect, useRef } from 'react'
import { DataClient, ImageHelper } from '@strikingly/sdk'
import { ChevronRight, CheckCircle2 } from 'lucide-react'
import strkImgConfig from '../../strk-img-config.json'

import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../../config'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export default function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState(null)
  const [dataDump, setDataDump] = useState(null)
  const containerRef = useRef(null)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data, error } = await client.from('Product').select('*').order('created_at', { ascending: true })
        setDataDump(JSON.stringify(data))
        if (error) throw error
        setProducts(data?.list || [])
      } catch (err) {
        setErrorMsg(err.message)
        console.error("Failed to fetch products:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  useEffect(() => {
    if (!loading && products.length > 0) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      })
      return () => window.cancelAnimationFrame(frameId)
    }
  }, [loading, products])

  return (
    <section id="products" className="py-24 bg-slate-50 border-t border-slate-200" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="products-title" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Our Machine Lineup
          </h2>
          <p id="products-desc" className="mt-4 text-lg text-slate-600">
            From heavy-duty industrial folders to compact workshop solutions, find the perfect machine for your needs.
          </p>
          <div className="mt-4 p-4 bg-gray-100 text-left text-xs overflow-auto">
            <p>DEBUG DATA: {dataDump}</p>
            <p>DEBUG ERROR: {errorMsg}</p>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col group">
                <div className="bg-slate-100 aspect-[16/9] relative overflow-hidden">
                    <img 
                      data-strk-img-id={`product-img-${product.id}`}
                      data-strk-img={`[product-desc-${product.id}] [product-title-${product.id}] [products-desc] [products-title]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={product.data.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                        {product.data.category}
                    </div>
                </div>
                
                <div className="p-8 flex-grow flex flex-col">
                  <h3 id={`product-title-${product.id}`} className="text-xl font-bold text-slate-900 mb-3">
                    {product.data.name}
                  </h3>
                  <p id={`product-desc-${product.id}`} className="text-sm text-slate-600 mb-6 flex-grow">
                    {product.data.description}
                  </p>
                  
                  <div className="space-y-2 mb-8">
                     {(product.data.features || []).slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                           <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 mr-2 shrink-0" />
                           <span className="text-sm text-slate-700">{feature}</span>
                        </div>
                     ))}
                  </div>
                  
                  <a href="#contact" className="mt-auto w-full inline-flex items-center justify-center px-4 py-2 border border-slate-300 shadow-sm text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 transition-colors">
                    Request Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}