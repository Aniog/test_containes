import CtaSection from '@/components/sections/CtaSection'
import PageHero from '@/components/sections/PageHero'
import { blogPosts } from '@/data/siteData'

export default function Blog() {
  return (
    <main>
      <PageHero
        eyebrow="Blog"
        title="Practical China sourcing insights"
        text="Clear guidance for overseas buyers on supplier comparison, quality control, production follow-up, and shipping coordination."
      />
      <section className="bg-slate-50 py-16 text-slate-900 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-slate-900">{post.category}</span>
                <h2 className="mt-5 text-xl font-bold text-slate-950">{post.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-700">{post.excerpt}</p>
                <p className="mt-5 text-sm font-bold text-blue-700">Read article</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </main>
  )
}
