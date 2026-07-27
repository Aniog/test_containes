import PageHero from '../components/site/PageHero'
import { blogPosts } from '../content'

function Blog() {
  return (
    <main>
      <PageHero
        eyebrow="Blog"
        title="Practical sourcing guidance for overseas buyers"
        description="Short, clear articles about supplier screening, quality inspection, production follow-up, and preparing better sourcing briefs."
      />
      <section className="bg-brand-bg py-16 text-brand-ink lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {blogPosts.map((post) => (
            <article key={post.title} className="rounded-2xl border border-brand-line bg-white p-7 text-brand-ink shadow-sm">
              <span className="inline-flex rounded-full bg-brand-softBlue px-3 py-1 text-xs font-semibold text-brand-navy">
                {post.category}
              </span>
              <h2 className="mt-5 text-xl font-semibold text-brand-navy">{post.title}</h2>
              <p className="mt-3 text-sm leading-7 text-brand-ink/70">{post.summary}</p>
              <p className="mt-6 text-sm font-semibold text-brand-blue">Article preview</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Blog
