import PageHero from '@/components/shared/PageHero.jsx'
import CtaBand from '@/components/home/CtaBand.jsx'
import { blogPosts } from '@/data/siteData.js'

export default function Blog() {
  return (
    <main>
      <PageHero
        eyebrow="Blog"
        title="Practical notes on sourcing from China"
        description="Clear guides for overseas buyers planning supplier verification, quality inspections, production follow-up, and shipping coordination."
      />
      <section className="bg-sourcing-soft py-16 text-sourcing-ink md:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {blogPosts.map((post) => (
            <article key={post.title} className="rounded-2xl border border-sourcing-line bg-white p-6 shadow-sm">
              <p className="inline-flex rounded-full bg-sourcing-sky px-3 py-1 text-xs font-bold uppercase tracking-wide text-sourcing-blue">{post.category}</p>
              <h2 className="mt-5 text-2xl font-bold text-sourcing-navy">{post.title}</h2>
              <p className="mt-4 text-sm leading-7 text-sourcing-muted">{post.excerpt}</p>
              <p className="mt-6 text-sm font-bold text-sourcing-blue">Article preview</p>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </main>
  )
}
