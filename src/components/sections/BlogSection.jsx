import { ArrowRight } from 'lucide-react'
import SectionHeader from '../SectionHeader'
import { blogPosts } from '../../data/siteContent'

export default function BlogSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Blog"
          title="Practical sourcing articles for overseas buyers"
          description="Guidance on supplier screening, RFQs, inspections, and shipment preparation."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title} className="rounded-3xl border border-sourcing-mist bg-sourcing-cloud p-6 text-sourcing-ink">
              <p className="text-sm font-semibold text-sourcing-blue">{post.category}</p>
              <h3 className="mt-3 text-xl font-bold text-sourcing-navy">{post.title}</h3>
              <p className="mt-3 text-sm leading-6 text-sourcing-muted">{post.excerpt}</p>
              <a href="/blog" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sourcing-blue hover:text-sourcing-navy">
                Read overview <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
