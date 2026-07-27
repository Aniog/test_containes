import Hero from '@/components/home/Hero'
import ServicesOverview from '@/components/home/ServicesOverview'
import ProcessSteps from '@/components/home/ProcessSteps'
import ProductsPreview from '@/components/home/ProductsPreview'
import ProblemsWeSolve from '@/components/home/ProblemsWeSolve'
import TrustPoints from '@/components/home/TrustPoints'
import FAQ from '@/components/shared/FAQ'
import CTABanner from '@/components/shared/CTABanner'

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <ProcessSteps />
      <ProblemsWeSolve />
      <TrustPoints />
      <ProductsPreview />
      <FAQ />
      <CTABanner />
    </>
  )
}

export default Home
