import CTASection from '../components/common/CTASection.jsx'
import PageHero from '../components/common/PageHero.jsx'
import SectionIntro from '../components/common/SectionIntro.jsx'
import { blogPosts } from '../siteContent.js'
import { usePageMeta } from '../lib/usePageMeta.js'

const Blog = () => {
  usePageMeta(
    'Blog | SSourcing China',
    'Read sourcing insights from SSourcing China about supplier verification, quality control, production follow-up, and buying from China.',
  )

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Practical sourcing articles for overseas buyers"
        description="Clear, useful content about supplier verification, inspection, production follow-up, and buying process decisions when working with suppliers in China."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Insights"
            title="Useful topics buyers often ask about"
            description="This content is written in a professional and practical tone to support trust, clarity, and SEO relevance for B2B sourcing inquiries."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.title} className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                  {post.category}
                </span>
                <h2 className="mt-5 text-2xl font-semibold text-slate-900">{post.title}</h2>
                <p className="mt-4 text-base leading-8 text-slate-600">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

export default Blog
