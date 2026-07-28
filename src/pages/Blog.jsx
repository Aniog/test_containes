import PageHero from '@/components/layout/PageHero'
import SectionIntro from '@/components/layout/SectionIntro'
import BlogPreviewGrid from '@/components/sections/BlogPreviewGrid'
import InquiryForm from '@/components/sections/InquiryForm'

const Blog = () => {
  return (
    <div>
      <PageHero
        eyebrow="Blog"
        title="Practical sourcing articles for overseas buyers working with China suppliers"
        description="Use these article previews to position SSourcing China as a practical sourcing partner focused on verification, quality control, and production follow-up."
      />

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <SectionIntro
          eyebrow="Latest topics"
          title="Useful buying-side guidance for supplier review, QC, and production management"
          description="These previews are designed to support SEO and show the type of practical guidance international buyers look for before submitting an inquiry."
        />
        <div className="mt-10">
          <BlogPreviewGrid />
        </div>
      </section>

      <section className="border-y border-line bg-brand-sky/50">
        <div className="mx-auto max-w-4xl px-6 py-16 md:px-8 md:py-24">
          <InquiryForm />
        </div>
      </section>
    </div>
  )
}

export default Blog
