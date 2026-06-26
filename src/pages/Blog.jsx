import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User } from 'lucide-react'

const blogPosts = [
  {
    id: 'how-to-verify-chinese-supplier',
    title: 'How to Verify a Chinese Supplier: A Step-by-Step Guide',
    excerpt: 'Learn the essential steps to verify a Chinese supplier before placing an order, from business license checks to on-site factory audits.',
    category: 'Supplier Verification',
    date: '2026-06-15',
    author: 'SSourcing Team',
    readTime: '8 min read',
  },
  {
    id: 'aql-inspection-guide',
    title: 'Understanding AQL Inspections: What Importers Need to Know',
    excerpt: 'AQL (Acceptable Quality Level) is the international standard for quality inspection. Here is what it means for your imports.',
    category: 'Quality Control',
    date: '2026-06-01',
    author: 'SSourcing Team',
    readTime: '6 min read',
  },
  {
    id: 'shipping-from-china-2026',
    title: 'Shipping from China in 2026: Costs, Timelines, and Options',
    excerpt: 'An overview of current shipping options from China, including sea freight rates, air freight costs, and tips for reducing logistics expenses.',
    category: 'Shipping',
    date: '2026-05-20',
    author: 'SSourcing Team',
    readTime: '7 min read',
  },
  {
    id: 'common-sourcing-mistakes',
    title: '7 Common Mistakes When Sourcing from China (And How to Avoid Them)',
    excerpt: 'From skipping factory audits to ignoring cultural differences, these mistakes can cost you time and money. Learn how to avoid them.',
    category: 'Sourcing Tips',
    date: '2026-05-10',
    author: 'SSourcing Team',
    readTime: '9 min read',
  },
  {
    id: 'product-certification-guide',
    title: 'Product Certification Requirements for US and EU Markets',
    excerpt: 'A practical guide to understanding CE, FCC, UL, and other certifications required when importing products into the US and EU.',
    category: 'Compliance',
    date: '2026-04-28',
    author: 'SSourcing Team',
    readTime: '10 min read',
  },
  {
    id: 'negotiating-with-chinese-factories',
    title: 'Tips for Negotiating with Chinese Factories',
    excerpt: 'Effective negotiation with Chinese suppliers requires understanding cultural norms and business practices. Here are practical tips for better outcomes.',
    category: 'Sourcing Tips',
    date: '2026-04-15',
    author: 'SSourcing Team',
    readTime: '7 min read',
  },
]

export default function Blog() {
  return (
    <>
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Blog</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Practical insights on China sourcing, quality control, shipping, and import compliance.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group rounded-xl border border-border-gray bg-white hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="h-48 bg-section-bg flex items-center justify-center">
                  <div className="text-center px-6">
                    <span className="bg-sky-blue/10 text-sky-blue text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-text mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-bold text-navy mb-3 group-hover:text-sky-blue transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-text text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="text-sky-blue text-sm font-semibold flex items-center gap-1 cursor-pointer hover:text-sky-blue-dark transition-colors">
                    Read More <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-section-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">Need Expert Sourcing Advice?</h2>
          <p className="text-muted-text text-lg mb-8">
            Our team is ready to help you navigate the complexities of sourcing from China.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-sky-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-sky-blue-dark transition-colors"
          >
            Contact Our Team
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
