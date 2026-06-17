import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import HomeHero from '@/components/home/HomeHero'
import HomeIntro from '@/components/home/HomeIntro'
import HomeProducts from '@/components/home/HomeProducts'
import HomeFeatures from '@/components/home/HomeFeatures'
import HomeProcess from '@/components/home/HomeProcess'
import HomeCTA from '@/components/home/HomeCTA'

const Home = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <HomeHero />
      <HomeIntro />
      <HomeProducts />
      <HomeFeatures />
      <HomeProcess />
      <HomeCTA />
    </div>
  )
}

export default Home
