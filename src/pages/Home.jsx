import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import HomeHero from '@/components/home/HomeHero'
import HomeFeatures from '@/components/home/HomeFeatures'
import HomeProducts from '@/components/home/HomeProducts'
import HomeProcess from '@/components/home/HomeProcess'
import HomeCTA from '@/components/home/HomeCTA'

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <HomeHero />
      <HomeFeatures />
      <HomeProducts />
      <HomeProcess />
      <HomeCTA />
    </div>
  )
}
