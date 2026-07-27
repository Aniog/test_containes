import HeroSection from '@/components/home/HeroSection'
import ServicesSection from '@/components/home/ServicesSection'
import ProcessSection from '@/components/home/ProcessSection'
import ProductsSection from '@/components/home/ProductsSection'
import ProblemsSection from '@/components/home/ProblemsSection'
import TrustSection from '@/components/home/TrustSection'
import CaseStudiesSection from '@/components/home/CaseStudiesSection'
import FaqSection from '@/components/home/FaqSection'
import InquirySection from '@/components/home/InquirySection'
import CtaBanner from '@/components/CtaBanner'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TrustSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <CaseStudiesSection />
      <FaqSection />
      <InquirySection />
      <CtaBanner
        title="Ready to source from China with confidence?"
        subtitle="Get your free quote today and start working with a local sourcing partner you can trust."
      />
    </>
  )
}
