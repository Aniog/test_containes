import { ArrowRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import { blogPosts } from '../data/siteContent.js'

export default function Blog() {
  return (
    <main className="bg-brand-surface text-brand-ink">
      <section className="bg-white py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading eyebrow="Blog" title="Practical notes on China sourcing" desc="Clear, buyer-focused guidance on sourcing briefs, supplier verification, quality inspection, and shipment coordination." /></div></section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"><div className="grid gap-6 md:grid-cols-3">{blogPosts.map((post) => <article key={post.title} className="rounded-3xl border border-brand-border bg-white p-7 text-brand-ink shadow-sm"><p className="text-sm font-bold text-brand-blue">{post.category}</p><h2 className="mt-4 text-2xl font-bold text-brand-ink">{post.title}</h2><p className="mt-4 leading-7 text-brand-muted">{post.excerpt}</p><button className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-border bg-white px-5 py-3 text-sm font-bold text-brand-blue">Read article <ArrowRight className="h-4 w-4" /></button></article>)}</div></section>
    </main>
  )
}
