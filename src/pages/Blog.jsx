import CTASection from '../components/site/CTASection'
import PageHero from '../components/site/PageHero'
import { blogPosts } from '../data/siteContent'

const Blog = () => (
  <main className="bg-white text-slate-900">
    <PageHero
      eyebrow="Blog"
      title="Practical sourcing insights for overseas buyers"
      description="Guides on supplier sourcing, factory verification, quality control, production follow-up, and shipping coordination when buying from China."
    />
    <section className="py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        {blogPosts.map((post) => (
          <article className="rounded-3xl border border-slate-200 bg-white p-7 text-slate-900 shadow-sm" key={post.title}>
            <p className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">{post.category}</p>
            <h2 className="mt-5 text-2xl font-semibold leading-tight text-slate-950">{post.title}</h2>
            <p className="mt-4 leading-7 text-slate-700">{post.excerpt}</p>
            <p className="mt-6 text-sm font-semibold text-teal-700">Article preview</p>
          </article>
        ))}
      </div>
    </section>
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">Buyer checklist</p>
          <h2 className="mt-4 text-3xl font-bold text-slate-950 sm:text-4xl">Before contacting a supplier, prepare the details that affect price and quality</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">Clear specifications, target quantity, materials, packaging, certification needs, inspection criteria, and delivery terms make supplier comparison more reliable.</p>
        </div>
        <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl ring-1 ring-slate-200">
          <img
            alt="Sourcing checklist and factory documentation"
            className="h-[420px] w-full object-cover"
            data-strk-img-id="blog-sourcing-checklist-d21a5f"
            data-strk-img="[blog-visual-desc] [blog-visual-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <h3 id="blog-visual-title" className="sr-only">Sourcing checklist and factory documentation</h3>
          <p id="blog-visual-desc" className="sr-only">Professional sourcing documents, quality checklist, factory verification paperwork, and export buying planning</p>
        </div>
      </div>
    </section>
    <CTASection />
  </main>
)

export default Blog
