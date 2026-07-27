import { useEffect, useMemo, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { Navigate, useParams } from 'react-router-dom'
import ProductGallery from '@/components/product/ProductGallery'
import ProductDetails from '@/components/product/ProductDetails'
import RelatedProducts from '@/components/product/RelatedProducts'
import { products } from '@/data/store'
import strkImgConfig from '@/strk-img-config.json'

function ProductPage({ onAddToCart }) {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId)
  const [selectedTone, setSelectedTone] = useState(product?.tones?.[0] ?? 'Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const containerRef = useRef(null)

  const relatedProducts = useMemo(
    () => products.filter((item) => item.id !== productId).slice(0, 4),
    [productId],
  )

  useEffect(() => {
    setSelectedTone(product?.tones?.[0] ?? 'Gold Tone')
    setQuantity(1)
  }, [productId, product])

  useEffect(() => {
    let cleanup = () => {}

    const frameId = window.requestAnimationFrame(() => {
      if (!containerRef.current) {
        return
      }

      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [productId])

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  return (
    <div ref={containerRef} className="bg-white">
      <section className="bg-stone-50 py-10 sm:py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <ProductGallery product={product} />
          <ProductDetails
            product={product}
            selectedTone={selectedTone}
            setSelectedTone={setSelectedTone}
            quantity={quantity}
            setQuantity={setQuantity}
            onAddToCart={onAddToCart}
          />
        </div>
      </section>
      <RelatedProducts items={relatedProducts} onAddToCart={onAddToCart} />
    </div>
  )
}

export default ProductPage
