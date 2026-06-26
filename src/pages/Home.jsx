import HomeHero from '@/components/home/HomeHero'
import HomeTrust from '@/components/home/HomeTrust'
import HomeServices from '@/components/home/HomeServices'
import HomeProblems from '@/components/home/HomeProblems'
import HomeProcess from '@/components/home/HomeProcess'
import HomeProducts from '@/components/home/HomeProducts'
import HomeCaseStudies from '@/components/home/HomeCaseStudies'
import HomeFaq from '@/components/home/HomeFaq'
import CtaBanner from '@/components/shared/CtaBanner'

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeTrust />
      <HomeServices />
      <HomeProblems />
      <HomeProcess />
      <HomeProducts />
      <HomeCaseStudies />
      <HomeFaq />
      <CtaBanner />
    </>
  )
}
