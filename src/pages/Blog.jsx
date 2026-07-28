import { CalendarDays } from 'lucide-react'
import PageHero from '@/components/site/PageHero'
import { blogPosts } from '@/siteData'

function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Practical sourcing guidance for overseas buyers"
        description="A content hub for supplier verification, quality control, production follow-up, and shipping preparation topics relevant to China sourcing."
        titleId="blog-hero-title"
        descriptionId="blog-hero-desc"
        imageId="blog-hero-buyer-research-81dc52"
        imageContext="Buyer research desk with sourcing notes, supplier verification checklist, factory review documents, and China sourcing insights."
        imageAlt="Buyer research desk with sourcing notes"
      />

      <section className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-6 lg:grid-cols-3 lg:px-8">
          {blogPosts.map((post, index) => (
            <article key={post.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">
                {post.category}
              </p>
              <p className="mt-5 text-2xl font-semibold tracking-tight text-slate-900">{post.title}</p>
              <p className="mt-4 text-base leading-7 text-slate-600">{post.excerpt}</p>
              <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
                <CalendarDays className="h-4 w-4" />
                <span>Article {index + 1}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default Blog
