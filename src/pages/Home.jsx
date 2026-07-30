import SEO from '@/components/layout/SEO'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Process from '@/components/sections/Process'
import Products from '@/components/sections/Products'
import Problems from '@/components/sections/Problems'
import Trust from '@/components/sections/Trust'
import CaseStudies from '@/components/sections/CaseStudies'
import FAQ from '@/components/sections/FAQ'
import InquiryCTA from '@/components/sections/InquiryCTA'

export default function Home() {
  return (
    <>
      <SEO
        title="China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China"
        description="SSourcing China helps global buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China."
      />
      <Hero />
      <Services />
      <Process />
      <Products />
      <Problems />
      <Trust />
      <CaseStudies />
      <FAQ />
      <InquiryCTA />
    </>
  )
}
