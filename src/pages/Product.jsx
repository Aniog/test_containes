import { useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import ProductDetail from '@/components/product/ProductDetail'

const ProductPage = () => {
  const containerRef = useRef(null)
  const { id } = useParams()

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [id])

  return (
    <div ref={containerRef}>
      <ProductDetail />
    </div>
  )
}

export default ProductPage
