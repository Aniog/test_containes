import PageHero from '@/components/common/PageHero'
import BlogSection from '@/components/blog/BlogSection'
import FinalCTASection from '@/components/home/FinalCTASection'

export default function Blog() {
  return (
    <main>
      <PageHero
        eyebrow="Blog"
        title="China sourcing insights for practical import decisions"
        description="Useful guidance on supplier verification, factory communication, quality control, production follow-up, and preparing shipments from China."
      />
      <BlogSection />
      <FinalCTASection />
    </main>
  )
}
