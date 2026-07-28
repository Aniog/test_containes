import PageHero from '@/components/shared/PageHero'
import SectionHeading from '@/components/shared/SectionHeading'
import Seo from '@/components/shared/Seo'
import { blogPosts } from '@/data/siteContent'

function Blog() {
  return (
    <main>
      <Seo
        title="China Sourcing Blog | Supplier Checks, QC & Import Guidance | SSourcing China"
        description="Read practical sourcing articles from SSourcing China about supplier verification, quality inspections, production follow-up, and shipping coordination for overseas buyers."
      />
      <PageHero
        eyebrow="Blog"
        title="Helpful sourcing articles for overseas buyers working with China suppliers"
        description="Practical articles focused on supplier verification, inspections, production visibility, and shipment planning."
        primaryCta={{ label: 'Get a Free Sourcing Quote', to: '/contact' }}
        secondaryCta={{ label: 'Contact Us', to: '/contact' }}
        theme="light"
        idPrefix="blog-hero"
        visualCue="quality inspection report clipboard factory warehouse manufacturing export process"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeading
            eyebrow="Latest topics"
            title="Clear, practical content rather than generic sourcing advice"
            description="The blog layout is ready for future articles and supports SEO-oriented educational content."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-700">{post.category}</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">{post.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{post.excerpt}</p>
                <span className="mt-6 inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900">
                  Read article preview
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Blog
