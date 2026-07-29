import CTASection from '@/components/common/CTASection.jsx'
import ImageCard from '@/components/common/ImageCard.jsx'
import PageHero from '@/components/common/PageHero.jsx'
import SectionHeading from '@/components/common/SectionHeading.jsx'
import { usePageSEO } from '@/hooks/usePageSEO.js'
import { useStrkImages } from '@/hooks/useStrkImages.js'
import { blogPosts } from '@/data/site-content.js'

const Blog = () => {
  usePageSEO(
    'Blog | China Sourcing Advice for Overseas Buyers | SSourcing China',
    'Read practical sourcing articles about supplier verification, inspection planning, production follow-up, and shipping readiness for buyers sourcing from China.',
  )

  const containerRef = useStrkImages()

  return (
    <main ref={containerRef}>
      <PageHero
        eyebrow="Blog"
        title="Practical sourcing content for overseas buyers working with China"
        description="Short articles focused on supplier verification, quality control, production follow-up, and shipping handoff planning."
        titleId="blog-hero-title"
        descriptionId="blog-hero-desc"
        backgroundId="blog-hero-bg-11d1ed"
      />

      <section className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Latest articles"
            title="Clear, practical topics buyers can act on"
            description="The blog keeps the tone direct and operational so sourcing teams can use the ideas in real projects."
            titleId="blog-grid-title"
            descriptionId="blog-grid-desc"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {blogPosts.map((item) => (
              <ImageCard key={item.id} item={item} sectionTitleId="blog-grid-title" eyebrow={item.category} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}

export default Blog
