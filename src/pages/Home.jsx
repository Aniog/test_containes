import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import HomeHero from '@/components/home/HomeHero'
import HomeServices from '@/components/home/HomeServices'
import HomeProcess from '@/components/home/HomeProcess'
import HomeProducts from '@/components/home/HomeProducts'
import HomeProblems from '@/components/home/HomeProblems'
import HomeTrust from '@/components/home/HomeTrust'
import HomeCaseStudies from '@/components/home/HomeCaseStudies'
import HomeFaq from '@/components/home/HomeFaq'
import HomeInquiry from '@/components/home/HomeInquiry'
import CtaBanner from '@/components/common/CtaBanner'

export default function Home() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])
  return (
    <div ref={ref}>
      <HomeHero />
      <HomeServices />
      <HomeProcess />
      <HomeProducts />
      <HomeProblems />
      <HomeTrust />
      <HomeCaseStudies />
      <HomeInquiry />
      <HomeFaq />
      <CtaBanner />
    </div>
  )
}
