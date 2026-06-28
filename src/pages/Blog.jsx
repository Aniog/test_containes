import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'
import { blogPosts } from '@/data/siteContent'

const Blog = () => {
  return (
    <main>
      <PageHero
        slug="blog"
        eyebrow="Blog"
        title="Practical sourcing guidance for overseas buyers working with China"
        description="Short, useful articles covering supplier verification, quality inspection timing, sampling, and how to prepare more effective sourcing requests."
        secondaryTo="/contact"
        secondaryLabel="Ask about your project"
        imageAlt="Blog articles about China sourcing and quality control"
        imageCaption="Guidance for buyers who want more clarity before sourcing or placing production orders."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Articles"
            title="Topics buyers regularly ask about"
            description="This content is written for sourcing teams, brands, importers, and procurement managers who need practical guidance instead of generic advice."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {blogPosts.map((post, index) => {
              const titleId = `blog-post-${index}-title`
              const excerptId = `blog-post-${index}-excerpt`

              return (
                <article key={post.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                  <img
                    alt={post.title}
                    className="h-56 w-full object-cover"
                    data-strk-img-id={`blog-post-image-${index}-q2m8rl`}
                    data-strk-img={`[${excerptId}] [${titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="900"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                      {post.category}
                    </p>
                    <h2 id={titleId} className="mt-3 text-xl font-semibold text-slate-900">
                      {post.title}
                    </h2>
                    <p id={excerptId} className="mt-3 text-sm leading-7 text-slate-600">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Blog
