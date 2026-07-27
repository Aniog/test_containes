import CTASection from '@/components/shared/CTASection'
import PageHero from '@/components/shared/PageHero'
import { blogPosts } from '@/data/siteContent'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function BlogPage() {
  usePageMeta(
    'Blog | SSourcing China',
    'Read practical sourcing insights from SSourcing China on supplier verification, quality inspection, production follow-up, and shipping.'
  )

  return (
    <div>
      <PageHero
        eyebrow="Blog"
        title="Practical articles for buyers sourcing from China"
        description="Simple, useful content focused on supplier screening, quality control, production follow-up, and shipment readiness."
      />
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {blogPosts.map((post) => (
              <article key={post.id} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
                  {post.category}
                </p>
                <h2 className="mt-4 text-2xl font-semibold text-slate-900">{post.title}</h2>
                <p className="mt-4 text-base leading-8 text-slate-600">{post.excerpt}</p>
                <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
                  <span>{post.readTime}</span>
                  <span>Coming soon</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  )
}
