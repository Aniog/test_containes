import { useEffect, useRef } from 'react'
import HomeHero from '../components/home/HomeHero'
import HomeProducts from '../components/home/HomeProducts'
import HomeFeatures from '../components/home/HomeFeatures'
import HomeProcess from '../components/home/HomeProcess'
import HomeAbout from '../components/home/HomeAbout'
import HomeCTA from '../components/home/HomeCTA'

const Home = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const sdk = await import('@strikingly/sdk')
        const config = await import('@/strk-img-config.json')
        if (cancelled || !containerRef.current) return
        sdk.ImageHelper?.loadImages?.(config.default || config, containerRef.current)
      } catch {
        // Image system not available — placeholders will remain.
      }
    })()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div ref={containerRef}>
      <HomeHero />
      <HomeProducts />
      <HomeFeatures />
      <HomeProcess />
      <HomeAbout />
      <HomeCTA />
    </div>
  )
}

export default Home
