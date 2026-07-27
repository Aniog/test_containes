import { Link } from 'react-router-dom'
import { Calendar, ArrowRight, Tag } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import CtaBanner from '@/components/CtaBanner'
import { blogPosts } from '@/data/siteData'

function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

export default function Blog() {
  return (
    <>
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="section-container text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Sourcing Blog</h1>
          <p className="mt-4 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Practical guides and insights for sourcing products from China.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <SectionHeader
            title="Latest articles"
            subtitle="Tips on supplier selection, quality control, logistics, and China manufacturing."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition flex flex-col">
                <div className="h-48 bg-slate-200 relative">
                  <img
                    data-strk-img-id={`blog-thumb-${post.id}-2c5f8a`}
                    data-strk-img={`[blog-title-${post.id}] [blog-category-${post.id}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-xs font-medium text-slate-500 mb-3">
                    <span className="inline-flex items-center gap-1 text-brand">
                      <Tag className="w-3.5 h-3.5" />
                      <span id={`blog-category-${post.id}`}>{post.category}</span>
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(post.date)}
                    </span>
                  </div>
                  <h3 id={`blog-title-${post.id}`} className="text-lg font-bold text-slate-900 mb-2">{post.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed flex-1">{post.excerpt}</p>
                  <Link to="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-brand-dark transition-colors">
                    Read more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Need help applying these tips?"
        subtitle="Our team can handle the sourcing process for you from start to finish."
      />
    </>
  )
}
