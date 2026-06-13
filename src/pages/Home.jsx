import HomeHero from '@/components/home/HomeHero'
import HomeServices from '@/components/home/HomeServices'
import HomeProcess from '@/components/home/HomeProcess'
import HomeProducts from '@/components/home/HomeProducts'
import HomeProblems from '@/components/home/HomeProblems'
import HomeTrust from '@/components/home/HomeTrust'
import HomeCaseStudies from '@/components/home/HomeCaseStudies'
import HomeFAQ from '@/components/home/HomeFAQ'
import HomeCTA from '@/components/home/HomeCTA'

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeServices />
      <HomeProcess />
      <HomeProducts />
      <HomeProblems />
      <HomeTrust />
      <HomeCaseStudies />
      <HomeFAQ />
      <HomeCTA />
    </>
  )
}
