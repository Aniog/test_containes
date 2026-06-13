import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User, Tag, Clock } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'How to Verify a Chinese Supplier: A Step-by-Step Guide',
    excerpt: 'Supplier verification is the most critical step in sourcing from China. Learn the key checks every buyer should perform before placing an order, including license verification, factory audits, and trade reference checks.',
    category: 'Supplier Verification',
    author: 'SSourcing China Team',
    date: 'May 15, 2026',
    readTime: '8 min read',
    imgId: 'blog-verify-supplier-1a2b3c',
    altId: 'blog-verify-alt',
  },
  {
    id: 2,
    title: 'Understanding AQL Inspections: What Every Importer Should Know',
    excerpt: 'AQL (Acceptable Quality Level) is the international standard for product inspection sampling. This guide explains how AQL works, how to choose the right inspection level, and how to read inspection reports.',
    category: 'Quality Control',
    author: 'SSourcing China Team',
    date: 'April 28, 2026',
    readTime: '10 min read',
    imgId: 'blog-aql-inspection-4d5e6f',
    altId: 'blog-aql-alt',
  },
  {
    id: 3,
    title: 'Sea Freight vs Air Freight: Which is Right for Your China Import?',
    excerpt: 'Choosing between sea and air freight depends on your budget, timeline, and product type. We compare costs, transit times, and best use cases for each shipping method to help you make the right decision.',
    category: 'Shipping & Logistics',
    author: 'SSourcing China Team',
    date: 'April 10, 2026',
    readTime: '7 min read',
    imgId: 'blog-freight-compare-7g8h9i',
    altId: 'blog-freight-alt',
  },
  {
    id: 4,
    title: 'Top 10 Mistakes to Avoid When Sourcing from China',
    excerpt: 'From skipping factory visits to ignoring compliance requirements, new importers often make costly mistakes. Here are the top pitfalls to avoid and how to protect your sourcing investment.',
    category: 'Sourcing Tips',
    author: 'SSourcing China Team',
    date: 'March 22, 2026',
    readTime: '9 min read',
    imgId: 'blog-sourcing-mistakes-0j1k2l',
    altId: 'blog-mistakes-alt',
  },
  {
    id: 5,
    title: 'How to Negotiate with Chinese Suppliers: Practical Strategies',
    excerpt: 'Negotiation in China involves more than just price. Learn about cultural considerations, volume-based leverage, and practical tactics that help you secure better terms without damaging the relationship.',
    category: 'Negotiation',
    author: 'SSourcing China Team',
    date: 'March 5, 2026',
    readTime: '8 min read',
    imgId: 'blog-negotiate-3m4n5o',
    altId: 'blog-negotiate-alt',
  },
  {
    id: 6,
    title: 'China Import Regulations: A Guide for US and EU Buyers',
    excerpt: 'Understanding import regulations is essential before sourcing from China. This guide covers key compliance requirements, certification standards, and documentation needed for the US and EU markets.',
    category: 'Compliance',
    author: 'SSourcing China Team',
    date: 'February 18, 2026',
    readTime: '11 min read',
    imgId: 'blog-import-regulations-6p7q8r',
    altId: 'blog-regulations-alt',
  },
]

export default function Blog() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-primary-dark py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Blog</span>
            <h1 className="text-3xl lg:text-5xl font-extrabold text-white mt-3 mb-4">
              China Sourcing Insights
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Practical guides, tips, and industry insights to help you source products from China more effectively and with less risk.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center bg-surface-light rounded-2xl overflow-hidden border border-border">
            <div className="h-72 lg:h-full bg-surface-gray overflow-hidden">
              <img
                data-strk-img-id={blogPosts[0].imgId}
                data-strk-img={`[${blogPosts[0].altId}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={blogPosts[0].title}
                id={blogPosts[0].altId}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-medium text-accent bg-accent-light px-2.5 py-1 rounded-full">
                  Featured
                </span>
                <span className="text-xs text-text-muted flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {blogPosts[0].date}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-text-primary mb-3">{blogPosts[0].title}</h2>
              <p className="text-text-secondary leading-relaxed mb-6">{blogPosts[0].excerpt}</p>
              <div className="flex items-center gap-4 text-text-muted text-xs">
                <span className="flex items-center gap-1"><User className="w-3 h-3" /> {blogPosts[0].author}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {blogPosts[0].readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-surface-light">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-text-primary mb-8">All Articles</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow group">
                <div className="h-48 overflow-hidden bg-surface-gray">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.altId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    id={post.altId}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-accent bg-accent-light px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-text-muted flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-text-muted flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {post.date}
                    </span>
                    <span className="text-accent text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated on China Sourcing</h2>
          <p className="text-white/90 text-lg mb-8">
            Get practical sourcing tips and market updates delivered to your inbox.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-accent hover:bg-gray-100 font-semibold rounded-lg transition-colors"
          >
            Subscribe to Our Newsletter <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </>
  )
}
