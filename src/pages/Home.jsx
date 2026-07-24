import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import BestsellersGrid from '@/components/home/BestsellersGrid'
import UGCReel from '@/components/home/UGCReel'
import CategoryTiles from '@/components/home/CategoryTiles'
import BrandStory from '@/components/home/BrandStory'
import Testimonials from '@/components/home/Testimonials'

export default function Home() {
  const pageRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [])

  return (
    <div ref={pageRef}>
      <HeroSection />
      <TrustBar />
      <BestsellersGrid />
      <UGCReel />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
    </div>
  )
}
