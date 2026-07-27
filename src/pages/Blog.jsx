import PageIntro from '../components/common/PageIntro'
import CTASection from '../components/sections/CTASection'
import { blogPosts } from '../data'

export default function Blog() {
  return (
    <>
      <PageIntro eyebrow="Blog" title="Practical China sourcing guides for overseas buyers" text="Clear advice on sourcing briefs, supplier checks, quality inspection, production tracking, and shipping coordination." />
      <section className="bg-white py-16 text-slate-900 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {blogPosts.map((post) => (
            <article key={post.title} className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-900 shadow-xl md:p-8">
              <p className="text-sm font-bold uppercase tracking-wide text-sky-700">{post.category}</p>
              <h2 className="mt-4 text-2xl font-bold text-slate-900">{post.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{post.excerpt}</p>
              <p className="mt-6 text-sm font-bold text-sky-700">Article coming soon</p>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  )
}
