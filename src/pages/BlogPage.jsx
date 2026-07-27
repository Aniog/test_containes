import PageHero from '@/components/shared/PageHero.jsx'
import SectionHeading from '@/components/shared/SectionHeading.jsx'
import { blogPosts } from '@/content/siteContent.js'

function BlogPage() {
  return (
    <div>
      <PageHero
        eyebrow="Blog"
        title="Practical content for buyers sourcing from China"
        titleId="blog-hero-title"
        description="Read practical guidance on supplier verification, quality control, production follow-up, and shipment preparation for overseas buyers."
        descriptionId="blog-hero-desc"
        primaryAction={{ label: 'Get a Free Sourcing Quote', to: '/contact#inquiry-form' }}
        secondaryAction={{ label: 'Contact Us', to: '/contact' }}
        imageId="blog-hero-bg-d4e2a1"
      />

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Latest Topics"
          title="Business-focused articles for clearer sourcing decisions"
          description="The blog is structured to support practical decision-making rather than generic sourcing advice."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-700">
                {post.category}
              </span>
              <h2 className="mt-4 text-xl font-semibold text-slate-950">{post.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-700">{post.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default BlogPage
