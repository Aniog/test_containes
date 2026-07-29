import PageHero from '@/components/site/PageHero'
import SectionHeading from '@/components/site/SectionHeading'
import BlogGrid from '@/components/site/BlogGrid'
import { blogPosts } from '@/content/siteContent'

const Blog = () => {
  return (
    <div>
      <PageHero
        eyebrow="Blog"
        title="Insights for overseas buyers sourcing from China"
        description="Short practical articles on supplier evaluation, quality control, production planning, and shipment preparation for importers and sourcing teams."
      />

      <section className="py-16 md:py-20">
        <div className="container-shell space-y-10">
          <SectionHeading
            eyebrow="Latest topics"
            title="Guidance written for real sourcing decisions"
            description="These posts are designed to help buyers ask better questions, structure sourcing projects, and reduce avoidable issues."
          />
          <BlogGrid items={blogPosts} />
        </div>
      </section>
    </div>
  )
}

export default Blog
