import { useRef, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import ShopPage from '@/components/shop/ShopPage'

const CollectionPage = () => {
  const containerRef = useRef(null)
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [searchParams])

  return (
    <div ref={containerRef}>
      <ShopPage />
    </div>
  )
}

export default CollectionPage
