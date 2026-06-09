import BlogPreview from '@/components/site/BlogPreview'
import CTASection from '@/components/site/CTASection'
import CaseStudiesPreview from '@/components/site/CaseStudiesPreview'
import FaqList from '@/components/site/FaqList'
import HeroSection from '@/components/site/HeroSection'
import ProblemsSection from '@/components/site/ProblemsSection'
import ProcessSection from '@/components/site/ProcessSection'
import ProductCategoriesSection from '@/components/site/ProductCategoriesSection'
import SectionHeading from '@/components/site/SectionHeading'
import ServicesGrid from '@/components/site/ServicesGrid'
import SourcingInquiryForm from '@/components/site/SourcingInquiryForm'
import { faqs, seo } from '@/data/siteContent'
import { usePageMeta } from '@/lib/usePageMeta'

const HomePage = () => {
  usePageMeta(seo.homeTitle, seo.homeDescription)

  return (
    <main>
      <HeroSection />
      <ServicesGrid />
      <ProcessSection />
      <ProductCategoriesSection />
      <ProblemsSection />
      <CaseStudiesPreview />
      <BlogPreview />
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="FAQ"
            title="Common questions from overseas buyers"
            description="A few practical questions buyers often ask before they start a sourcing project in China."
          />
          <div className="mt-12">
            <FaqList items={faqs} />
          </div>
        </div>
      </section>
      <CTASection />
      <SourcingInquiryForm />
    </main>
  )
}

export default HomePage
