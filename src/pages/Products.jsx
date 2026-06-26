import React from 'react'
import Layout from '@/Layout'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { Search, Filter, CheckCircle2 } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const Products = () => {
  const [products, setProducts] = React.useState([])
  const [filter, setFilter] = React.useState('All')
  const [search, setSearch] = React.useState('')
  const containerRef = React.useRef(null)

  const categories = ['All', 'Double Folding Machine', 'Sheet Metal Folder', 'Manual Folder']

  React.useEffect(() => {
    const fetchProducts = async () => {
      let query = client.from('Products').select('*')
      
      const { data: response } = await query
      
      if (response?.data?.list) {
        setProducts(response.data.list)
      }
    }
    fetchProducts()
  }, [])

  React.useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [products, filter, search])

  const filteredProducts = products.filter(p => {
    const matchesCategory = filter === 'All' || p.data.category === filter
    const matchesSearch = p.data.name.toLowerCase().includes(search.toLowerCase()) || 
                          p.data.description.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <Layout>
      <section className="bg-brand-charcoal py-20 text-brand-ivory">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Industrial Solutions</h1>
          <p className="text-brand-ivory/60 max-w-2xl mx-auto">
            High-performance machinery for precision folding and sheet metal fabrication.
          </p>
        </div>
      </section>

      <section ref={containerRef} className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Controls */}
          <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 text-sm font-medium transition-all ${
                    filter === cat 
                    ? 'bg-brand-gold text-brand-charcoal' 
                    : 'bg-white text-brand-charcoal border border-brand-charcoal/10 hover:border-brand-gold/50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-charcoal/40" />
              <input
                type="text"
                placeholder="Search machinery..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white border border-brand-charcoal/10 py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-brand-gold"
              />
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid gap-12">
            {filteredProducts.map((product) => (
              <div key={product.id} className="grid md:grid-cols-2 gap-12 items-start border-b border-brand-charcoal/5 pb-16 last:border-0">
                <div className="bg-white border border-brand-charcoal/5 p-4 overflow-hidden">
                  <div className="aspect-video relative overflow-hidden bg-brand-charcoal/5">
                    <img
                      data-strk-img-id={`cat-img-${product.id}`}
                      data-strk-img={`[cat-desc-${product.id}] [cat-title-${product.id}] metal folding machine industrial sheet metal`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="1200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={product.data.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                      {product.data.category}
                    </span>
                    <h2 id={`cat-title-${product.id}`} className="text-3xl font-serif font-bold mt-2">{product.data.name}</h2>
                  </div>
                  
                  <p id={`cat-desc-${product.id}`} className="text-brand-charcoal/70 leading-relaxed">
                    {product.data.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <h4 className="text-sm font-bold uppercase tracking-widest text-brand-charcoal/40">Technical Specs</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between border-b pb-1">
                          <span className="text-brand-charcoal/50">Capacity</span>
                          <span className="font-medium text-brand-charcoal">{product.data.specifications?.max_thickness}</span>
                        </li>
                        <li className="flex justify-between border-b pb-1">
                          <span className="text-brand-charcoal/50">Length</span>
                          <span className="font-medium text-brand-charcoal">{product.data.specifications?.working_length}</span>
                        </li>
                        <li className="flex justify-between border-b pb-1">
                          <span className="text-brand-charcoal/50">Weight</span>
                          <span className="font-medium text-brand-charcoal">{product.data.specifications?.weight}</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="text-sm font-bold uppercase tracking-widest text-brand-charcoal/40">Key Features</h4>
                      <ul className="space-y-2 text-sm">
                        {product.data.features?.map((feat, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <CheckCircle2 className="h-4 w-4 text-brand-gold shrink-0" />
                            <span className="text-brand-charcoal/70">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <button className="bg-brand-charcoal text-brand-ivory px-8 py-3 text-sm font-bold transition-all hover:bg-brand-charcoal/90">
                    Request Technical Datasheet
                  </button>
                </div>
              </div>
            ))}
            
            {filteredProducts.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-brand-charcoal/40">No machinery matched your search criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Products
