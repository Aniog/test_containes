import PageHero from '@/components/common/PageHero'
import SectionHeader from '@/components/common/SectionHeader'
import { blogPosts } from '@/data/siteContent'
import { usePageMeta } from '@/hooks/usePageMeta'

const Blog = () => {
  usePageMeta({
    title: 'Blog | SSourcing China',
    description:
      'Read practical sourcing articles on supplier verification, quality control, production follow-up, and buying from China.',
  })

  return (
    <div>
      <PageHero
        eyebrow="Blog"
        title="Practical sourcing knowledge for overseas buyers"
        description="Clear, useful content on supplier verification, quality control, production follow-up, and shipping coordination when sourcing from China."
        titleId="blog-page-title"
        descriptionId="blog-page-description"
        visual={
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 p-4 shadow-sm">
            <div
              className="absolute inset-0 opacity-0"
              data-strk-bg-id="blog-page-bg-a74f6e"
              data-strk-bg="[blog-page-description] [blog-page-title]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="1200"
            />
            <div className="relative min-h-[360px] rounded-[1.5rem] bg-slate-900/35 p-8">
              <div className="flex h-full items-end">
                <p className="max-w-md text-sm leading-7 text-white/90">
                  Practical articles for procurement teams, importers, and brand owners managing supplier and production risk.
                </p>
              </div>
            </div>
          </div>
        }
      />

      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Latest articles"
            title="Helpful topics buyers often ask about"
            description="Short practical reads designed to help procurement teams, importers, and brand owners make better sourcing decisions."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <article key={post.slug} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <img
                  alt={post.title}
                  className="h-56 w-full object-cover"
                  data-strk-img-id={`blog-page-post-${index}-m6${index}`}
                  data-strk-img={`[blog-page-post-${index}-excerpt] [blog-page-post-${index}-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-blue-700">
                    <span>{post.category}</span>
                    <span className="text-slate-500">{post.readTime}</span>
                  </div>
                  <h2 className="mt-4 text-xl font-semibold text-slate-950" id={`blog-page-post-${index}-title`}>
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600" id={`blog-page-post-${index}-excerpt`}>
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
