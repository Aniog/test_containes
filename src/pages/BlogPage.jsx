import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

const posts = [
  {
    id: 'china-sourcing-guide-2026',
    title: 'The Complete Guide to Sourcing from China in 2026',
    excerpt: 'Everything you need to know about finding reliable suppliers, negotiating contracts, and managing quality control in today\'s China sourcing landscape.',
    date: 'June 15, 2026',
    readTime: '8 min read',
    category: 'Sourcing Guide',
  },
  {
    id: 'factory-audit-checklist',
    title: 'Factory Audit Checklist: What to Look for in a Chinese Supplier',
    excerpt: 'A comprehensive checklist for evaluating Chinese factories, covering compliance, production capacity, quality systems, and worker conditions.',
    date: 'May 28, 2026',
    readTime: '6 min read',
    category: 'Quality Control',
  },
  {
    id: 'aql-inspection-guide',
    title: 'Understanding AQL: Quality Inspection Standards for Importers',
    excerpt: 'Learn how Acceptable Quality Limit (AQL) standards work and how to use them to protect your product quality when importing from China.',
    date: 'May 10, 2026',
    readTime: '5 min read',
    category: 'Quality Control',
  },
  {
    id: 'china-shipping-options',
    title: 'Shipping from China: Sea vs. Air vs. Rail',
    excerpt: 'Compare shipping methods from China including costs, transit times, and best use cases for each option to optimize your supply chain.',
    date: 'April 22, 2026',
    readTime: '7 min read',
    category: 'Logistics',
  },
  {
    id: 'finding-reliable-suppliers',
    title: 'How to Find Reliable Suppliers in China',
    excerpt: 'Proven strategies for identifying trustworthy Chinese manufacturers, from online platforms to trade shows and agent networks.',
    date: 'April 5, 2026',
    readTime: '6 min read',
    category: 'Sourcing Guide',
  },
  {
    id: 'protecting-intellectual-property',
    title: 'Protecting Your IP When Manufacturing in China',
    excerpt: 'Essential steps to safeguard your intellectual property when working with Chinese manufacturers, including NDAs, patents, and production controls.',
    date: 'March 18, 2026',
    readTime: '5 min read',
    category: 'Legal',
  },
]

export default function BlogPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary/95 to-primary/80 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Practical insights and advice for sourcing products from China.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl border border-border p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-primary-light uppercase tracking-wider bg-primary-light/5 px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-text-primary mb-3">
                  <Link to={`/blog/${post.id}`} className="hover:text-primary-light transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-secondary-text text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-secondary-text">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}