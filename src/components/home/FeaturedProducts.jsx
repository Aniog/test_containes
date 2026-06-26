import React from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const FeaturedProducts = () => {
  const [products, setProducts] = React.useState([])
  const containerRef = React.useRef(null)

  React.useEffect(() => {
    const fetchProducts = async () => {
      const { data: response } = await client
        .from('Products')
        .select('*')
        .limit(3)
      
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
  }, [products])

  return (
    <section ref={containerRef} className="py-24 bg-brand-ivory">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <h2 id="featured-title" className="text-4xl font-serif font-bold text-brand-charcoal">Featured Machinery</h2>
            <p className="text-brand-charcoal/60 max-w-xl">
              Discover our most popular sheet metal folding solutions, engineered for accuracy and longevity.
            </p>
          </div>
          <Link to="/products" className="group flex items-center text-brand-gold font-bold transition-all">
            View All Products
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white border border-brand-charcoal/5 p-8 transition-all hover:border-brand-gold/30 hover:shadow-xl overflow-hidden">
              <div className="aspect-[4/3] w-full bg-brand-charcoal/5 mb-6 overflow-hidden relative">
                <img
                  data-strk-img-id={`prod-img-${product.id}`}
                  data-strk-img={`[prod-desc-${product.id}] [prod-title-${product.id}] [featured-title] machine industrial`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.data.name}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                  {product.data.category}
                </span>
                <h3 id={`prod-title-${product.id}`} className="text-2xl font-serif font-bold text-brand-charcoal">
                  {product.data.name}
                </h3>
                <p id={`prod-desc-${product.id}`} className="text-sm text-brand-charcoal/60 line-clamp-2">
                  {product.data.description}
                </p>
                <Link 
                  to={`/products`}
                  className="inline-flex items-center text-sm font-bold text-brand-charcoal hover:text-brand-gold transition-colors"
                >
                  Technical Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
