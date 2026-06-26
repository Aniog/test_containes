import { Link } from 'react-router-dom'
import { blogPosts, Icons } from '@/lib/data'
import { format, parseISO } from 'date-fns'

export default function Blog() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent-light font-semibold text-sm uppercase tracking-wider">Blog</span>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Sourcing Insights & Guides
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            Expert advice on sourcing from China, quality control, logistics, and supply chain management.
          </p>
        </div>
      </section>

      {/* Blog posts grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-surface-alt rounded-xl overflow-hidden border border-border hover:shadow-md hover:border-accent/20 transition-all duration-300 group">
                <div className="aspect-[16/10] bg-primary/5 flex items-center justify-center">
                  <Icons.FileText className="w-16 h-16 text-primary/20 group-hover:text-accent/30 transition-colors" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-accent text-xs font-semibold bg-accent/10 px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-text-muted text-xs">
                      {format(parseISO(post.date), 'MMM d, yyyy')}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors mb-2 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-text-muted text-xs">By {post.author}</span>
                    <span className="text-primary group-hover:text-accent text-sm font-medium transition-colors flex items-center gap-1">
                      Read more <Icons.ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-md transition-colors shadow-sm"
            >
              Get a Free Sourcing Quote
              <Icons.ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}