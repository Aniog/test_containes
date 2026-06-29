import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import HomeHero from '../components/home/HomeHero'
import ProductShowcase from '../components/home/ProductShowcase'
import TrustBadges from '../components/home/TrustBadges'

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <HomeHero />
      <TrustBadges />
      <ProductShowcase />
    </div>
  )
}