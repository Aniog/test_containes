import { blogPosts } from '@/lib/siteData'
import PageHero from '@/components/shared/PageHero'
import InquirySection from '@/components/home/InquirySection'

const Blog = () => (
  <main>
    <PageHero
      eyebrow="Blog"
      title="Practical China sourcing guidance"
      description="Short, clear articles for buyers who want to understand supplier verification, quality control, production follow-up, and shipping coordination."
    >
      <p className="text-lg font-semibold text-white">Built for decision-makers</p>
      <p className="mt-3 text-sm leading-6 text-slate-200">
        The blog content is written for importers, wholesalers, e-commerce teams, and brands who need practical sourcing decisions.
      </p>
    </PageHero>
    <section className="bg-white py-16 text-slate-950 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        {blogPosts.map((post) => (
          <article key={post.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">{post.category}</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">{post.title}</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">{post.summary}</p>
            <button className="mt-6 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-950">
              Read article
            </button>
          </article>
        ))}
      </div>
    </section>
    <InquirySection />
  </main>
)

export default Blog
