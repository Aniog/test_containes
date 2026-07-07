import { useEffect, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { client, getRows } from '@/lib/db'
import ProductCard from '@/components/ProductCard'

export default function Bestsellers() {
  const [products, setProducts] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data: response, error } = await client
          .from('Products')
          .select('*')
          .eq('bestseller', true)
          .limit(5)

        if (error) throw error
        setProducts(getRows(response))
        setStatus('ready')
      } catch (err) {
        console.error(err)
        setStatus('error')
      }
    }
    fetchProducts()
  }, [])

  useEffect(() => {
    if (products.length === 0) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, document.body)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [products])

  if (status === 'loading') {
    return (
      <section className="py-16 md:py-24 bg-base">
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
          <div className="h-8 w-48 bg-surface-warm animate-pulse mb-10" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="aspect-[3/4] bg-surface-warm animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 md:py-24 bg-base">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">Bestsellers</h2>
          <p className="mt-3 font-sans text-sm text-muted">Our most loved pieces this season</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
