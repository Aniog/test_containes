import { Link } from 'react-router-dom'
import { blogPosts } from '@/data/siteContent'
import SectionHeading from '@/components/site/SectionHeading'

const BlogPreview = () => {
  const featuredPosts = blogPosts.slice(0, 3)

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Blog"
          title="Useful sourcing topics for overseas buyers"
          description="Short practical articles that help buyers prepare better inquiries, reduce supplier risk, and plan quality control earlier."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <article
              className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 text-slate-900 shadow-sm"
              key={post.slug}>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                {post.category}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
                {post.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{post.summary}</p>
              <p className="mt-4 text-sm font-medium text-slate-500">{post.readTime}</p>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <Link className="text-sm font-semibold text-sky-700 hover:text-sky-800" to="/blog">
            Read more sourcing articles
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BlogPreview
