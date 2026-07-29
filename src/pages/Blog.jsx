import PageHero from '../components/PageHero'
import BlogSection from '../components/sections/BlogSection'
import FaqSection from '../components/sections/FaqSection'
import InquirySection from '../components/sections/InquirySection'

export default function Blog() {
  return (
    <main>
      <PageHero
        eyebrow="Blog"
        title="Practical China sourcing guidance for overseas buyers"
        description="Clear articles and checklists about RFQs, supplier verification, factory audits, inspections, production follow-up, and shipment preparation."
        imageQueryId="blog-page-title"
      />
      <BlogSection />
      <FaqSection />
      <InquirySection />
    </main>
  )
}
