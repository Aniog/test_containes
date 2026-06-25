import { ArrowRight } from 'lucide-react'
import CTASection from '../components/shared/CTASection'
import ImageLoadPage from '../components/shared/ImageLoadPage'
import PageHero from '../components/shared/PageHero'
import SectionHeader from '../components/shared/SectionHeader'
import { blogPosts } from '../data/siteContent'

const Blog = () => (
  <ImageLoadPage>
    <PageHero
      alt="China sourcing blog with supplier verification and QC insights"
      description="Practical articles for importers and overseas buyers preparing China sourcing briefs, supplier checks, quality inspections, and shipment coordination."
      eyebrow="Blog"
      imageId="blog-hero-sourcing-documents-6e7bd1"
      title="China sourcing insights for overseas buyers"
    />
    <section className="bg-white py-16 text-slate-950 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Latest articles"
          title="Practical guidance before you contact suppliers"
          description="Use these topics to prepare clearer requirements and reduce misunderstandings during sourcing and production."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm" key={post.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">{post.category}</p>
              <h2 className="mt-4 text-xl font-semibold tracking-tight text-slate-950">{post.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>
              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5 text-sm">
                <span className="text-slate-500">{post.date}</span>
                <span className="inline-flex items-center gap-1 font-semibold text-blue-700">Read topic <ArrowRight className="h-4 w-4" /></span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
    <CTASection />
  </ImageLoadPage>
)

export default Blog
