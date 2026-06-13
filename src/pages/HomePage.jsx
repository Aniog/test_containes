import { useEffect, useRef } from 'react'
import HomeHero from '@/components/home/HomeHero'
import HomeFeatures from '@/components/home/HomeFeatures'
import HomeProductShowcase from '@/components/home/HomeProductShowcase'
import HomeCTA from '@/components/home/HomeCTA'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HomePage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <HomeHero />
      <HomeFeatures />
      <HomeProductShowcase />
      <HomeCTA />
    </div>
  )
}
