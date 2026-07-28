import PageHero from '@/components/common/PageHero'
import { blogPosts } from '@/content/siteContent'

export default function Blog() {
  return (
    <main>
      <PageHero
        eyebrow="Blog"
        title="Practical content for buyers sourcing from China"
        description="Use the blog as an SEO and trust-building section focused on supplier verification, inspections, production control, and shipping preparation."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.title} className="rounded-3xl border border-slate-950/10 bg-slate-50 p-6 shadow-sm md:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">{post.category}</p>
                <h2 className="mt-4 text-xl font-semibold text-slate-950">{post.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-700/75">{post.excerpt}</p>
                <p className="mt-6 text-sm font-medium text-slate-950">Article preview layout only</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
