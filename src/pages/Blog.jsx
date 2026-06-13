import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react'
import { SectionHeader, CTAButton } from '@/components/common/SharedComponents'

const blogPosts = [
  {
    id: 'how-to-verify-chinese-suppliers',
    title: 'How to Verify Chinese Suppliers: A Complete Guide for Importers',
    excerpt: 'Learn the essential steps to verify Chinese suppliers before placing your first order, including license checks, factory audits, and reference verification.',
    category: 'Supplier Verification',
    date: 'May 15, 2026',
    readTime: '8 min read',
    imgId: 'blog-verify-suppliers',
  },
  {
    id: 'understanding-quality-control-aql',
    title: 'Understanding AQL: How Quality Control Inspections Work in China',
    excerpt: 'A practical explanation of Acceptable Quality Levels (AQL) and how pre-shipment inspections protect your business from receiving defective products.',
    category: 'Quality Control',
    date: 'April 28, 2026',
    readTime: '10 min read',
    imgId: 'blog-aql-inspection',
  },
  {
    id: 'shipping-from-china-complete-guide',
    title: 'Shipping from China: Sea, Air, and Rail Compared',
    excerpt: 'A detailed comparison of shipping methods from China including cost, transit time, best use cases, and how to choose the right option for your business.',
    category: 'Shipping & Logistics',
    date: 'April 10, 2026',
    readTime: '12 min read',
    imgId: 'blog-shipping-container',
  },
  {
    id: 'negotiating-with-chinese-suppliers',
    title: 'Negotiating with Chinese Suppliers: Cultural Tips and Strategies',
    excerpt: 'Understanding Chinese business culture and negotiation styles can significantly improve your sourcing outcomes. Here are practical tips from our team on the ground.',
    category: 'Sourcing Tips',
    date: 'March 22, 2026',
    readTime: '7 min read',
    imgId: 'blog-negotiation',
  },
  {
    id: 'common-sourcing-mistakes',
    title: '10 Common Mistakes When Sourcing from China (And How to Avoid Them)',
    excerpt: 'From skipping factory audits to ignoring cultural differences, these are the most common pitfalls new importers make — and how experienced buyers avoid them.',
    category: 'Sourcing Tips',
    date: 'March 5, 2026',
    readTime: '9 min read',
    imgId: 'blog-common-mistakes',
  },
  {
    id: 'ip-protection-when-sourcing',
    title: 'Protecting Your Intellectual Property When Sourcing from China',
    excerpt: 'NDAs, patents, trademarks, and practical steps to protect your product designs and brand when working with Chinese manufacturers.',
    category: 'Legal & Compliance',
    date: 'February 18, 2026',
    readTime: '11 min read',
    imgId: 'blog-ip-protection',
  },
]

export default function Blog() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-brand-orange/20 text-brand-orange text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-6">
            Insights & Guides
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            Sourcing Knowledge Center
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Practical guides, industry insights, and expert advice to help you source products from China more effectively.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-border-light hover:shadow-md transition-shadow group">
                <div className="h-48 bg-surface-muted overflow-hidden">
                  <img
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[blog-${post.id}-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <span id={`blog-${post.id}-title`} className="sr-only">{post.title}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1 text-brand-orange text-xs font-semibold bg-brand-orange/5 px-2 py-0.5 rounded-full">
                      <Tag className="w-3 h-3" /> {post.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-content-primary mb-2 leading-snug group-hover:text-brand-navy transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-content-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border-light">
                    <div className="flex items-center gap-3 text-content-muted text-xs">
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                    </div>
                    <span className="text-brand-navy text-xs font-semibold group-hover:text-brand-orange transition-colors flex items-center gap-1">
                      Read More <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-surface-light py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-content-primary mb-4">
            Get Sourcing Insights Delivered to Your Inbox
          </h2>
          <p className="text-content-secondary mb-6">
            Join 2,000+ importers who receive our monthly newsletter with sourcing tips, market updates, and industry analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="you@company.com"
              className="flex-1 px-4 py-3 rounded-lg border border-border-light text-sm text-content-primary focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy"
            />
            <button className="px-6 py-3 bg-brand-orange text-white font-semibold text-sm rounded-lg hover:bg-brand-orange-hover transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
