import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import HeroSection from '../components/home/HeroSection'
import TrustBar from '../components/home/TrustBar'
import Bestsellers from '../components/home/Bestsellers'
import UGCReel from '../components/home/UGCReel'
import CategoryTiles from '../components/home/CategoryTiles'
import BrandStory from '../components/home/BrandStory'
import Testimonials from '../components/home/Testimonials'
import Newsletter from '../components/home/Newsletter'

const Home = () => {
  const pageRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (pageRef.current) {
        ImageHelper.loadImages(strkImgConfig, pageRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={pageRef}>
      <HeroSection />
      <TrustBar />
      <Bestsellers />
      <UGCReel />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  )
}

export default Home
