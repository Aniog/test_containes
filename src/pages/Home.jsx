import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import ServicesOverview from '@/components/sections/ServicesOverview'
import ProcessSection from '@/components/sections/ProcessSection'
import ProductsSection from '@/components/sections/ProductsSection'
import ProblemsSection from '@/components/sections/ProblemsSection'
import TrustSection from '@/components/sections/TrustSection'
import CaseStudiesSection from '@/components/sections/CaseStudiesSection'
import FaqSection from '@/components/sections/FaqSection'
import CtaBanner from '@/components/sections/CtaBanner'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesOverview limit={6} />
      <ProcessSection />
      <ProductsSection limit={8} />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection limit={3} />
      <FaqSection />
      <CtaBanner />
    </>
  )
}
