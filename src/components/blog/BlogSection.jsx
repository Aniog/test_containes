import { CalendarDays, Clock } from 'lucide-react'
import SectionHeader from '@/components/common/SectionHeader'
import { blogPosts } from '@/data/siteContent'

export default function BlogSection({ showHeader = true }) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <SectionHeader
            eyebrow="Blog"
            title="Practical China sourcing guidance"
            description="Clear articles for importers who want to understand supplier verification, quality control, and production follow-up before placing orders."
            align="center"
            id="blog-section-title"
          />
        )}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.id} className="rounded-3xl border border-brand-line bg-white p-6 text-slate-900 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <p className="inline-flex rounded-full bg-brand-sky px-3 py-1 text-xs font-semibold text-brand-blue">{post.category}</p>
              <h3 className="mt-5 text-xl font-semibold leading-7 text-brand-navy">{post.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>
              <div className="mt-6 flex items-center gap-5 text-xs font-medium text-slate-500">
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" />{post.readTime}</span>
                <span className="flex items-center gap-2"><CalendarDays className="h-4 w-4" />2026</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
