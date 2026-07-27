import { useStrkImages } from '@/lib/useStrkImages'
import CaseStudiesSection from '@/components/sections/CaseStudiesSection'
import InquiryForm from '@/components/forms/InquiryForm'
import PageHero from '@/components/sections/PageHero'

export default function CaseStudies() {
  const containerRef = useStrkImages()

  return (
    <main ref={containerRef}>
      <PageHero
        eyebrow="Case studies"
        title="Representative sourcing situations and practical outcomes"
        description="These examples show how supplier comparison, factory verification, production follow-up, quality inspection, and shipping coordination can support clearer buying decisions."
      />
      <CaseStudiesSection />
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InquiryForm />
        </div>
      </section>
    </main>
  )
}
