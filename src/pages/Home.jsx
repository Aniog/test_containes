import HomeHero from '@/components/home/HomeHero'
import HomeServices from '@/components/home/HomeServices'
import HomeProcess from '@/components/home/HomeProcess'
import HomeProducts from '@/components/home/HomeProducts'
import HomeProblems from '@/components/home/HomeProblems'
import HomeTrust from '@/components/home/HomeTrust'
import HomeCaseStudies from '@/components/home/HomeCaseStudies'
import Faq from '@/components/shared/Faq'
import CtaBanner from '@/components/shared/CtaBanner'
import InquiryForm from '@/components/shared/InquiryForm'
import { Section, SectionHeader } from '@/components/ui/Section'

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
      <Faq />

      <Section muted>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeader
            align="left"
            eyebrow="Get a Free Quote"
            title="Tell us what you want to source"
            description="Share your product details and requirements. We will review your request and reply within one business day with a free sourcing quote and the next steps."
          />
          <InquiryForm compact />
        </div>
      </Section>

      <CtaBanner />
    </>
  )
}
