import CTASection from '@/components/site/CTASection'
import PageIntro from '@/components/site/PageIntro'
import { blogPosts } from '@/data/siteContent'
import { usePageMeta } from '@/lib/usePageMeta'

const BlogPage = () => {
  usePageMeta(
    'Blog | SSourcing China',
    'Read practical sourcing articles from SSourcing China about supplier verification, RFQs, quality control, and China sourcing planning.'
  )

  return (
    <main>
      <PageIntro
        description="Practical articles for buyers who want to prepare better sourcing inquiries, verify suppliers more carefully, and improve execution planning before production and shipment."
        eyebrow="Blog"
        idPrefix="blog-page"
        points={[
          'Short practical sourcing articles',
          'Topics for overseas importers and brands',
          'Focused on verification, RFQs, and QC timing',
        ]}
        title="Sourcing insights for buyers working with China suppliers"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {blogPosts.map((post) => (
            <article
              className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 text-slate-900 shadow-sm"
              key={post.slug}>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                {post.category}
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
                {post.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">{post.summary}</p>
              <p className="mt-5 text-sm font-medium text-slate-500">{post.readTime}</p>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
  )
}

export default BlogPage
