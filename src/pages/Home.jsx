import React from 'react'
import Hero from '@/components/home/Hero'
import TrustBar from '@/components/home/TrustBar'
import Bestsellers from '@/components/home/Bestsellers'
import UGCReel from '@/components/home/UGCReel'
import CategoryTiles from '@/components/home/CategoryTiles'
import BrandStory from '@/components/home/BrandStory'
import Testimonials from '@/components/home/Testimonials'
import Newsletter from '@/components/home/Newsletter'
import { Separator } from '@/components/ui/separator'

const Home = () => {
  return (
    <>
      <Hero />
      <TrustBar />
      <Separator className="bg-borderwarm" />
      <Bestsellers />
      <Separator className="bg-borderwarm" />
      <UGCReel />
      <Separator className="bg-borderwarm" />
      <CategoryTiles />
      <Separator className="bg-borderwarm" />
      <BrandStory />
      <Separator className="bg-borderwarm" />
      <Testimonials />
      <Separator className="bg-borderwarm" />
      <Newsletter />
    </>
  )
}

export default Home
