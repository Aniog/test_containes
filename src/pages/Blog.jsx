import ImagePageShell from '../components/common/ImagePageShell.jsx'
import PageHero from '../components/common/PageHero.jsx'
import SectionIntro from '../components/common/SectionIntro.jsx'
import { blogPosts } from '../siteContent.js'

function Blog() {
  return (
    <ImagePageShell>
      <main>
        <PageHero
          eyebrow="Blog"
          title="Practical sourcing insights for overseas buyers"
          description="Useful topics for teams buying from China: supplier verification, quality control, production follow-up, and shipping coordination."
        />

        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="space-y-10">
            <SectionIntro
              eyebrow="Articles"
              title="Helpful content topics for sourcing teams"
              description="The blog is positioned as a practical resource, with clear explanations instead of exaggerated claims or generic marketplace advice."
            />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {blogPosts.map((post, index) => (
                <article key={post.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700 ring-1 ring-blue-100">
                    {post.category}
                  </span>
                  <h2 className="mt-5 text-xl font-semibold text-slate-900">{post.title}</h2>
                  <p className="mt-3 text-base leading-7 text-slate-600">{post.excerpt}</p>
                  <p className="mt-6 text-sm font-medium text-slate-500">Planned article {String(index + 1).padStart(2, '0')}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </ImagePageShell>
  )
}

export default Blog
