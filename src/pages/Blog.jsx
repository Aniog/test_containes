import { ArrowRight } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'
import CTASection from '../components/CTASection.jsx'
import { blogPosts } from '../content.js'

export default function Blog() {
  return (
    <main>
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Blog" title="China sourcing insights for practical buyers">
            Short guides focused on supplier verification, quality control, production follow-up, and shipping coordination.
          </SectionHeader>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.title} className="rounded-3xl border border-brand-border bg-brand-page p-7 text-brand-ink shadow-sm">
                <p className="text-sm font-semibold text-brand-blue">{post.date}</p>
                <h2 className="mt-4 text-2xl font-semibold text-brand-navy">{post.title}</h2>
                <p className="mt-4 text-sm leading-7 text-brand-muted">{post.desc}</p>
                <button type="button" className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-blue">
                  Read guide
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  )
}
