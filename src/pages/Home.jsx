import HomeHero from '@/components/home/HomeHero'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import CtaSection from '@/components/home/CtaSection'

export default function Home() {
  return (
    <>
      <HomeHero />
      <FeaturedProducts />
      <WhyChooseUs />
      <CtaSection />
    </>
  )
}
