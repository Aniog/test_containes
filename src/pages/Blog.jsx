import SectionHeader from '../components/SectionHeader.jsx'
import { blogPosts } from '../data/siteContent.js'

export default function Blog() {
  return (
    <main className="bg-white text-slate-950">
      <section className="bg-slate-950 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">Blog</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">Practical China sourcing guides</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">Clear articles for overseas buyers who want to reduce supplier, quality, and production risks.</p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Insights" title="Useful reading before you source" description="These guides are written for practical sourcing decisions, not generic theory." centered />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-sm font-semibold text-blue-700">Sourcing guide</p>
                <h2 className="mt-3 text-2xl font-bold text-slate-950">{post.title}</h2>
                <p className="mt-4 text-sm leading-6 text-slate-600">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
