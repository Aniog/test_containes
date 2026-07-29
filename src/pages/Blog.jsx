import PageHero from '../components/common/PageHero.jsx'
import { blogPosts } from '../data/siteContent.js'

const Blog = () => (
  <main className="bg-white text-slate-950">
    <PageHero
      eyebrow="Blog"
      title="Practical China sourcing guides for overseas buyers"
      description="Clear articles about supplier verification, quality inspection, production follow-up, and shipping coordination."
    />

    <section className="py-20">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        {blogPosts.map((post) => (
          <article key={post.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-slate-950 shadow-sm">
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">{post.category}</span>
            <h2 className="mt-5 text-xl font-bold leading-8 text-slate-950">{post.title}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">{post.excerpt}</p>
            <p className="mt-5 text-sm font-semibold text-blue-700">{post.readTime}</p>
          </article>
        ))}
      </div>
    </section>
  </main>
)

export default Blog
