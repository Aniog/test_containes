import PageHeader from '@/components/common/PageHeader'
import SectionHeading from '@/components/common/SectionHeading'
import { blogPosts } from '@/data/siteContent'

const Blog = () => {
  return (
    <>
      <PageHeader
        baseId="blog-page"
        eyebrow="Blog"
        title="Practical sourcing articles for buyers working with China suppliers"
        description="Short, useful content focused on supplier verification, quality control, quotation review, and production follow-up."
      />

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Latest insights"
            title="Useful reading for procurement teams and growing brands"
            description="These article previews support the site's credibility and SEO structure while keeping the tone practical and business-oriented."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="rounded-full bg-amber-50 px-3 py-1 font-medium text-amber-700">
                    {post.category}
                  </span>
                  <span className="text-slate-500">{post.date}</span>
                </div>
                <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-900">
                  {post.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
