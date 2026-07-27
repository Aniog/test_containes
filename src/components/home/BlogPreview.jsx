import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '@/components/shared/SectionHeader'
import { blogPosts } from '@/data/siteContent'

export default function BlogPreview() {
  return (
    <section className="bg-white py-16 text-brand-ink md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="Blog"
            title="Practical sourcing guides"
            description="Useful notes for buyers preparing a China sourcing project."
          />
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-navy">
            Read all guides <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title} className="rounded-2xl border border-brand-line bg-white p-6 text-brand-ink shadow-sm">
              <p className="text-sm font-semibold text-brand-amber">{post.date}</p>
              <h3 className="mt-3 text-lg font-semibold text-brand-navy">{post.title}</h3>
              <p className="mt-3 text-sm leading-6 text-brand-muted">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
