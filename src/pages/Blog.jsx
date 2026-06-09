import PageHero from '@/components/site/PageHero'
import BlogSection from '@/components/site/BlogSection'
import CtaBanner from '@/components/site/CtaBanner'
import { blogPosts } from '@/content/siteContent'
import { usePageMeta } from '@/lib/usePageMeta'

export default function BlogPage() {
  usePageMeta('Blog | SSourcing China')

  return (
    <main>
      <PageHero
        eyebrow="Blog"
        title="Practical sourcing guidance for overseas buyers working with China"
        description="Useful articles around supplier verification, inspection timing, production follow-up, and shipment preparation for B2B buyers."
      />
      <BlogSection posts={blogPosts} />
      <CtaBanner />
    </main>
  )
}
