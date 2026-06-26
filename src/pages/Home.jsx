import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { HomeHero } from '@/components/home/HomeHero'
import { HomeFeatured } from '@/components/home/HomeFeatured'
import { HomeFeatures } from '@/components/home/HomeFeatures'
import { HomeAbout } from '@/components/home/HomeAbout'
import { HomeProcess } from '@/components/home/HomeProcess'
import { HomeCTA } from '@/components/home/HomeCTA'

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <HomeHero />
      <HomeFeatured />
      <HomeFeatures />
      <HomeAbout />
      <HomeProcess />
      <HomeCTA />
    </div>
  )
}
