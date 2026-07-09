import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard.jsx'
import { getProducts } from '../api/products.js'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

export default function Bestsellers() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const gridRef = useRef(null)

  useEffect(() => {
    let mounted = true
    getProducts()
      .then((data) => {
        if (mounted) {
          const bestsellers = data.filter((p) => {
            const d = p.data || p
            return d.is_bestseller
          })
          setProducts(bestsellers)
          setLoading(false)
        }
      })
      .catch(() => {
        if (mounted) setLoading(false)
      })
    return () => { mounted = false }
  }, [])

  useEffect(() => {
    if (!loading && gridRef.current) {
      return ImageHelper.loadImages(strkImgConfig, gridRef.current)
    }
  }, [loading])

  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-velmora-gold mb-3">Curated for You</p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal">Bestsellers</h2>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-[3/4] bg-velmora-sand" />
                <div className="h-3 bg-velmora-sand mt-4 w-3/4" />
                <div className="h-3 bg-velmora-sand mt-2 w-1/3" />
              </div>
            ))}
          </div>
        ) : (
          <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-velmora-charcoal text-velmora-charcoal px-10 py-3.5 text-xs uppercase tracking-widest hover:bg-velmora-charcoal hover:text-white transition-colors"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}