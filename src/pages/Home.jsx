import Hero from '@/components/home/Hero'
import ServicesPreview from '@/components/home/ServicesPreview'
import ProcessPreview from '@/components/home/ProcessPreview'
import ProductsPreview from '@/components/home/ProductsPreview'
import Problems from '@/components/home/Problems'
import Trust from '@/components/home/Trust'
import CaseStudiesPreview from '@/components/home/CaseStudiesPreview'
import FaqSection from '@/components/home/FaqSection'
import CtaBanner from '@/components/home/CtaBanner'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <ProcessPreview />
      <ProductsPreview />
      <Problems />
      <Trust />
      <CaseStudiesPreview />
      <FaqSection />
      <CtaBanner />
    </>
  )
}