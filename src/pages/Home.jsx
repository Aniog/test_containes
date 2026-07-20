import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { categories, products, ugcStories } from '@/data/products.js'
import HomeHero from '@/components/home/HomeHero.jsx'
import TrustBar from '@/components/home/TrustBar.jsx'
import Bestsellers from '@/components/home/Bestsellers.jsx'
import UgcReels from '@/components/home/UgcReels.jsx'
import CategoryTiles from '@/components/home/CategoryTiles.jsx'
import BrandStory from '@/components/home/BrandStory.jsx'
import Testimonials from '@/components/home/Testimonials.jsx'
import Newsletter from '@/components/home/Newsletter.jsx'

const Home = ({ onAddToCart }) => {
  const pageRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [])

  return (
    <main ref={pageRef} className="bg-velmora-parchment text-velmora-espresso">
      <HomeHero />
      <TrustBar />
      <Bestsellers products={products} onAddToCart={onAddToCart} />
      <UgcReels stories={ugcStories} />
      <CategoryTiles categories={categories} />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  )
}

export default Home
