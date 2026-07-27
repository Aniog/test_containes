import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

const posts = [
  {
    title: 'How to Verify a Chinese Factory: A Complete Checklist',
    excerpt: 'Before placing an order, you need to know who you are dealing with. This guide covers the essential steps to verify any Chinese manufacturer — from business licenses to on-site audits.',
    date: 'July 15, 2026',
    readTime: '8 min read',
    category: 'Factory Verification',
    imgId: 'blog-factory-checklist-1a2b3c',
    titleId: 'blog-factory-checklist-title',
  },
  {
    title: 'Understanding AQL Standards for Product Inspection',
    excerpt: 'Acceptable Quality Limit (AQL) is the global standard for product inspections. Learn how AQL sampling works and what inspection levels mean for your orders.',
    date: 'July 8, 2026',
    readTime: '6 min read',
    category: 'Quality Control',
    imgId: 'blog-aql-standards-4d5e6f',
    titleId: 'blog-aql-standards-title',
  },
  {
    title: 'FOB vs CIF vs DDP: Choosing the Right Shipping Terms',
    excerpt: 'Incoterms determine who pays for what in international shipping. We break down the most common terms and help you choose the right one for your business.',
    date: 'June 28, 2026',
    readTime: '7 min read',
    category: 'Shipping & Logistics',
    imgId: 'blog-incoterms-7g8h9i',
    titleId: 'blog-incoterms-title',
  },
  {
    title: '5 Red Flags When Sourcing from Alibaba',
    excerpt: 'Alibaba is a powerful platform, but not every supplier is trustworthy. Here are five warning signs to watch for when evaluating potential suppliers online.',
    date: 'June 20, 2026',
    readTime: '5 min read',
    category: 'Supplier Sourcing',
    imgId: 'blog-alibaba-redflags-0j1k2l',
    titleId: 'blog-alibaba-redflags-title',
  },
  {
    title: 'How to Handle Product Defects Found During Inspection',
    excerpt: 'Discovering defects before shipment is actually good news. Here is a step-by-step approach to resolving quality issues with your Chinese supplier.',
    date: 'June 12, 2026',
    readTime: '6 min read',
    category: 'Quality Control',
    imgId: 'blog-defects-handling-3m4n5o',
    titleId: 'blog-defects-handling-title',
  },
  {
    title: 'Building Long-Term Relationships with Chinese Suppliers',
    excerpt: 'The most successful sourcing relationships are built on trust and clear communication. Learn strategies for developing strong partnerships with your manufacturers.',
    date: 'June 5, 2026',
    readTime: '7 min read',
    category: 'Supplier Management',
    imgId: 'blog-supplier-relationships-6p7q8r',
    titleId: 'blog-supplier-relationships-title',
  },
]

export default function Blog() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sourcing Insights & Guides
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Practical advice, industry knowledge, and actionable tips for sourcing successfully from China.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.title}
                className="bg-[#f8f9fa] rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                  <h2 id={post.titleId} className="text-lg font-semibold text-navy mb-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            Need Personalized Sourcing Advice?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Our team is happy to discuss your specific sourcing challenges and recommend the best approach.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-600 text-white font-medium px-8 py-3.5 rounded-md transition-colors"
          >
            Talk to a Sourcing Expert
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
