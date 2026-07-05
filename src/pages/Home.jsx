import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Bestsellers, BrandStory, CategoryTiles, Hero, Newsletter, Testimonials, TrustBar, UgcReels } from '@/components/sections/HomeSections'

const Home = ({ onAdd, onViewProduct, onNavigate }) => {
  const pageRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [])

  return (
    <main ref={pageRef} className="bg-velmora-ivory text-velmora-ink">
      <Hero onNavigate={onNavigate} />
      <TrustBar />
      <Bestsellers onAdd={onAdd} onView={onViewProduct} onNavigate={onNavigate} />
      <UgcReels />
      <CategoryTiles onNavigate={onNavigate} />
      <BrandStory onNavigate={onNavigate} />
      <Testimonials />
      <Newsletter />
    </main>
  )
}

export default Home
