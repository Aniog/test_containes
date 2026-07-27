import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { blogPosts } from '../data/siteContent.js'
import { useStrkImages } from '../hooks/useStrkImages.js'

const Blog = () => {
  const containerRef = useStrkImages()

  return (
    <main ref={containerRef} className="bg-slate-50 text-slate-950">
      <PageHero
        eyebrow="Blog"
        title="Practical China sourcing guidance for overseas buyers"
        description="Read clear, operational advice on supplier verification, sourcing briefs, production follow-up, QC, and shipping coordination."
        imageId="blog-hero-sourcing-checklist-2f84b1"
        imageAlt="Sourcing documents, product samples, and factory checklist"
        visualContext="professional sourcing documents product samples supplier checklist and quality control notes"
      />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Insights"
            title="Useful articles for sourcing decisions"
            description="These topics are written for buyers who want fewer surprises and clearer supplier communication."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.title} className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">{post.category}</span>
                <h2 className="mt-5 text-2xl font-bold text-slate-950">{post.title}</h2>
                <p className="mt-4 text-sm leading-6 text-slate-600">{post.excerpt}</p>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800">
                  Ask about this topic <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Blog
