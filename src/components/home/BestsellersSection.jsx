import React, { useEffect, useState } from 'react'
import { fetchProducts } from '@/api/products'
import ProductCard from '@/components/shop/ProductCard'

export default function BestsellersSection() {
  const [products, setProducts] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    let cancelled = false
    async function load() {
      try {
        setStatus('loading')
        const rows = await fetchProducts({ bestseller: true })
        if (!cancelled) {
          setProducts(rows.slice(0, 5))
          setStatus('ready')
        }
      } catch (e) {
        if (!cancelled) setStatus('error')
      }
    }
    load()
    return () => { cancelled = true }
  }, [])

  if (status === 'error') return null

  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-accent font-medium mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-wide">
            Bestsellers
          </h2>
        </div>

        {status === 'loading' ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-[3/4] bg-stone-200 mb-4" />
                <div className="h-4 bg-stone-200 w-3/4 mx-auto mb-2" />
                <div className="h-3 bg-stone-200 w-1/2 mx-auto" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product.data || product} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
