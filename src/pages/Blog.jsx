import { Link } from 'react-router-dom'
import { blogPosts } from '@/content/siteContent'
import PageHero from '@/components/shared/PageHero'
import SectionHeading from '@/components/shared/SectionHeading'

const Blog = () => {
  return (
    <div className="bg-slate-50 text-slate-900">
      <PageHero
        eyebrow="Blog"
        title="Clear sourcing articles for global buyers buying from China"
        description="Practical content about supplier verification, quotations, inspection checkpoints, and shipping preparation for B2B importers and procurement teams."
        titleId="blog-hero-title"
        descriptionId="blog-hero-description"
        visualId="blog-hero-bg-96ff72"
        visualBadge="Supplier evaluation, inspection checkpoints, and export preparation guidance"
        visualNote="Educational content should make sourcing decisions clearer, not more complicated."
        chips={blogPosts.map((item) => item.category)}
        primaryCta={{ label: 'Get a Free Sourcing Quote', to: '/contact' }}
        secondaryCta={{ label: 'View Services', to: '/services' }}
      />

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <SectionHeading
          eyebrow="Latest articles"
          title="Useful reading before you choose a supplier or release a shipment"
          description="These sample blog entries are positioned to attract qualified inquiries from serious buyers looking for practical sourcing help."
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                  {post.category}
                </span>
                <span className="text-sm text-slate-500">{post.date}</span>
              </div>
              <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-900">
                {post.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">{post.summary}</p>
              <Link
                to="/contact"
                className="mt-6 inline-flex text-sm font-semibold text-blue-700 transition hover:text-blue-800"
              >
                Ask about this sourcing topic
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Blog
