import HomeHero from '@/components/home/HomeHero'
import HomeServices from '@/components/home/HomeServices'
import HomeProcess from '@/components/home/HomeProcess'
import HomeProblems from '@/components/home/HomeProblems'
import HomeTrust from '@/components/home/HomeTrust'
import HomeCaseStudies from '@/components/home/HomeCaseStudies'
import HomeFAQ from '@/components/home/HomeFAQ'
import HomeInquiry from '@/components/home/HomeInquiry'

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeTrust />
      <HomeServices />
      <HomeProcess />
      <HomeProblems />
      <HomeCaseStudies />
      <HomeFAQ />
      <HomeInquiry />
    </>
  )
}