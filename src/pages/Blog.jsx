import CTAButton from '../components/CTAButton.jsx'
import PageHero from '../components/PageHero.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { blogPosts } from '../data/siteData.js'

const Blog = () => {
  return (
    <main>
      <PageHero
        heroId="blog-hero"
        eyebrow="Blog"
        title="Practical sourcing notes for overseas buyers"
        description="Guides and checklists on supplier verification, RFQs, quality inspections, production tracking, and shipping coordination from China."
        imageId="blog-sourcing-checklist-factory-5a93bc"
        visualHint="business sourcing checklist laptop factory documents supplier verification quality control"
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Articles"
            title="Useful topics before you source"
            description="Content is written in a practical B2B tone to help buyers prepare better requirements and avoid common sourcing mistakes."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.title} className="rounded-2xl border border-slate-200 bg-white p-7 text-slate-800 shadow-sm">
                <p className="text-sm font-semibold text-amber-600">{post.tag}</p>
                <h2 className="mt-4 text-xl font-bold text-slate-900">{post.title}</h2>
                <p className="mt-4 text-sm leading-6 text-slate-600">{post.excerpt}</p>
                <p className="mt-6 text-sm font-semibold text-blue-700">Article outline available on request</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white px-6 py-10 text-center shadow-soft sm:px-10">
          <h2 className="text-3xl font-bold text-slate-900">Need help with a current supplier issue?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600">
            Send product details, supplier information, and the issue you are trying to solve. We will review whether sourcing, verification, QC, or shipping support is most relevant.
          </p>
          <div className="mt-7">
            <CTAButton />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Blog
