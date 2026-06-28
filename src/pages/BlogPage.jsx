import PageHero from '@/components/PageHero.jsx'
import SectionHeading from '@/components/SectionHeading.jsx'
import { blogPosts } from '@/data/siteContent.js'

function BlogPage() {
  return (
    <main>
      <PageHero
        eyebrow="Blog"
        title="Practical sourcing articles for overseas buying teams"
        description="Short, useful content focused on supplier verification, quality control, production follow-up, and buying decisions in China sourcing."
      >
        <div className="space-y-4 text-sm leading-7 text-ink">
          <p>
            These article previews position SSourcing China as a practical sourcing partner with operational understanding.
          </p>
          <p className="text-muted">
            The blog is intentionally clear and business-oriented rather than promotional.
          </p>
        </div>
      </PageHero>

      <section className="bg-canvas py-16 md:py-24">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Latest topics"
            title="Articles buyers would actually read before placing orders"
            description="Useful content for supplier screening, QC planning, and production risk awareness."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.id} className="rounded-3xl border border-border-soft bg-surface p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent-strong">{post.category}</p>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">{post.title}</h2>
                <p className="mt-4 text-sm leading-7 text-muted">{post.summary}</p>
                <p className="mt-6 text-sm font-medium text-ink">{post.readTime}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default BlogPage
