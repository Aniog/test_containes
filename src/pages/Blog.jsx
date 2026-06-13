import BlogPostGrid from '@/components/site/BlogPostGrid'
import CTASection from '@/components/site/CTASection'
import PageHero from '@/components/shared/PageHero'
import SectionHeader from '@/components/shared/SectionHeader'
import { blogPosts } from '@/data/siteContent'

const Blog = () => {
  return (
    <div>
      <PageHero
        eyebrow="Blog"
        title="Practical sourcing guidance for global buyers"
        description="Read concise articles focused on supplier verification, quality control, order follow-up, and shipment preparation when sourcing from China."
        points={['Supplier validation', 'Inspection planning', 'Order execution']}
        imageId="blog-hero-bf9241"
        titleId="blog-hero-title"
        descriptionId="blog-hero-description"
        imagePrompt="professional sourcing desk with supplier certificates product samples and export logistics documents"
        imagePromptId="blog-hero-image-prompt"
        imageQuery="[blog-hero-image-prompt]"
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Latest articles"
            title="Clear guidance without unnecessary jargon"
            description="The goal is to help buyers ask better questions, spot risk earlier, and manage sourcing conversations more effectively."
          />
          <div className="mt-12">
            <BlogPostGrid items={blogPosts} />
          </div>
        </div>
      </section>

      <CTASection
        title="Need advice on a live sourcing project?"
        description="If your current sourcing decision needs factory-side support rather than another generic article, send us the inquiry directly."
      />
    </div>
  )
}

export default Blog
