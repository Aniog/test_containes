import { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import ProductDetailView from '@/components/product/ProductDetailView'
import { findProductBySlug } from '@/data/products'

export default function ProductPage({ onAddToCart }) {
  const { slug } = useParams()
  const containerRef = useRef(null)
  const product = findProductBySlug(slug)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [slug])

  return (
    <main ref={containerRef}>
      <ProductDetailView product={product} onAddToCart={onAddToCart} />
    </main>
  )
}
