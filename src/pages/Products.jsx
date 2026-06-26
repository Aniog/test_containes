import React from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config'
import ProductCard from '@/components/products/ProductCard'
import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const containerRef = useRef(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data: response } = await client
          .from('Products')
          .select('*')
        
        if (response?.data?.list) {
          setProducts(response.data.list)
        }
      } catch (error) {
        console.error('Error fetching products:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  useEffect(() => {
    if (products.length > 0) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [products])

  return (
    <div ref={containerRef} className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight">Our Product Range</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Precision-engineered folding machines for every industrial need.
        </p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-[400px] rounded-lg bg-muted animate-pulse" />
          ))}
        </div>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 border rounded-xl bg-muted/20">
          <p className="text-lg text-muted-foreground">No products found. Please check back later.</p>
        </div>
      )}
    </div>
  )
}

export default Products
