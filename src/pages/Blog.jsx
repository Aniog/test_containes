import PageHero from '@/components/shared/PageHero'
import { blogPosts, primaryCta } from '@/content/siteContent'

const Blog = () => {
  return (
    <div>
      <PageHero
        eyebrow="Blog"
        title="Practical articles for overseas buyers sourcing from China"
        description="We focus on the sourcing questions buyers usually face in real projects: supplier verification, inspections, production follow-up, and shipping coordination."
        primaryAction={{ label: primaryCta, to: '/contact#inquiry-form' }}
        secondaryAction={{ label: 'Contact us', to: '/contact' }}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-6 lg:grid-cols-2 lg:px-8">
          {blogPosts.map((post, index) => (
            <article key={post.title} className="rounded-[2rem] border border-site-border bg-white p-6 shadow-sm md:p-8">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-dark">{post.category}</span>
                <span className="text-sm text-site-muted">Article {String(index + 1).padStart(2, '0')}</span>
              </div>
              <h2 className="mt-5 text-2xl font-semibold tracking-tight text-site-ink">{post.title}</h2>
              <p className="mt-4 text-base leading-7 text-site-muted">{post.excerpt}</p>
              <p className="mt-6 text-sm font-semibold text-brand">Content outline available. Full article can be developed next.</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Blog
