import PageHero from '@/components/shared/PageHero'
import CtaSection from '@/components/sections/CtaSection'
import { blogPosts } from '@/data/siteData'

const Blog = () => (
  <main>
    <PageHero
      eyebrow="Blog"
      title="China sourcing insights for overseas buyers"
      description="Practical articles about supplier verification, sourcing briefs, quality inspection, production follow-up, and shipping coordination for B2B buyers."
      imageId="blog-page-sourcing-notes-19a2c8"
      titleId="blog-page-title"
      descId="blog-page-desc"
    />
    <section className="bg-brand-white py-16 text-brand-navy md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <article key={post.title} className="overflow-hidden rounded-3xl border border-brand-line bg-white text-brand-navy shadow-soft">
              <img
                alt={post.title}
                className="h-52 w-full object-cover"
                data-strk-img-id={`blog-post-${index + 1}-image-a8${index + 1}c3`}
                data-strk-img={`[blog-post-${index + 1}-excerpt] [blog-post-${index + 1}-title] [blog-page-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="p-6">
                <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-blue">
                  {post.category}
                </span>
                <h2 id={`blog-post-${index + 1}-title`} className="mt-5 text-xl font-bold text-brand-navy">{post.title}</h2>
                <p id={`blog-post-${index + 1}-excerpt`} className="mt-3 text-sm leading-6 text-brand-slate">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
    <CtaSection />
  </main>
)

export default Blog
