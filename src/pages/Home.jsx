import HomeHero from '@/components/home/HomeHero.jsx'
import HomeServices from '@/components/home/HomeServices.jsx'
import HomeProcess from '@/components/home/HomeProcess.jsx'
import HomeProducts from '@/components/home/HomeProducts.jsx'
import HomeProblems from '@/components/home/HomeProblems.jsx'
import HomeTrust from '@/components/home/HomeTrust.jsx'
import HomeCaseStudies from '@/components/home/HomeCaseStudies.jsx'
import HomeFaq from '@/components/home/HomeFaq.jsx'
import HomeInquiry from '@/components/home/HomeInquiry.jsx'
import { CtaBanner } from '@/components/PageHero.jsx'

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
      <CtaBanner />
      <HomeFaq />
      <HomeInquiry />
    </>
  )
}
