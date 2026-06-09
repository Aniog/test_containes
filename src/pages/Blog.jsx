import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User } from 'lucide-react'
import CTASection from '@/components/shared/CTASection'

const blogPosts = [
  {
    slug: 'how-to-verify-chinese-supplier',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'Learn the essential steps to verify a supplier\'s legitimacy, from business license checks to on-site factory audits, before committing your money.',
    category: 'Supplier Verification',
    date: '2026-05-28',
    author: 'SSourcing Team',
    readTime: '6 min read',
    imgId: 'blog-verify-g1h2i3',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
  },
  {
    slug: 'common-quality-issues-importing',
    title: '5 Common Quality Issues When Importing from China (And How to Prevent Them)',
    excerpt: 'From material substitution to inconsistent dimensions, these are the most frequent quality problems buyers face and practical ways to avoid them.',
    category: 'Quality Control',
    date: '2026-05-15',
    author: 'SSourcing Team',
    readTime: '8 min read',
    imgId: 'blog-quality-j4k5l6',
    titleId: 'blog-quality-title',
    descId: 'blog-quality-desc',
  },
  {
    slug: 'shipping-from-china-guide',
    title: 'Shipping from China: Sea vs Air vs Rail — Which Is Right for You?',
    excerpt: 'A practical comparison of shipping methods from China, including cost, transit time, and when each option makes the most sense for your business.',
    category: 'Shipping',
    date: '2026-05-02',
    author: 'SSourcing Team',
    readTime: '7 min read',
    imgId: 'blog-shipping-m7n8o9',
    titleId: 'blog-shipping-title',
    descId: 'blog-shipping-desc',
  },
  {
    slug: 'negotiating-with-chinese-factories',
    title: 'Negotiating with Chinese Factories: 7 Practical Tips',
    excerpt: 'Effective negotiation with Chinese suppliers requires understanding cultural norms and business practices. Here are 7 tips to get better terms.',
    category: 'Sourcing Tips',
    date: '2026-04-20',
    author: 'SSourcing Team',
    readTime: '5 min read',
    imgId: 'blog-negotiate-p1q2r3',
    titleId: 'blog-negotiate-title',
    descId: 'blog-negotiate-desc',
  },
  {
    slug: 'pre-shipment-inspection-guide',
    title: 'What Happens During a Pre-Shipment Inspection?',
    excerpt: 'A detailed walkthrough of the pre-shipment inspection process, including AQL sampling, common check points, and how to interpret inspection reports.',
    category: 'Quality Control',
    date: '2026-04-08',
    author: 'SSourcing Team',
    readTime: '6 min read',
    imgId: 'blog-inspection-s4t5u6',
    titleId: 'blog-inspection-title',
    descId: 'blog-inspection-desc',
  },
  {
    slug: 'protecting-ip-when-sourcing',
    title: 'Protecting Your Intellectual Property When Sourcing from China',
    excerpt: 'Practical steps to safeguard your designs, trademarks, and proprietary information when working with Chinese manufacturers.',
    category: 'Legal & Compliance',
    date: '2026-03-25',
    author: 'SSourcing Team',
    readTime: '7 min read',
    imgId: 'blog-ip-v7w8x9',
    titleId: 'blog-ip-title',
    descId: 'blog-ip-desc',
  },
]

export default function BlogPage() {
  const containerRef = useRef(null)

  return (
    <>
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-3">Blog</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            China Sourcing Insights
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Practical guides, tips, and industry knowledge to help you source smarter from China.
          </p>
        </div>
      </section>

      <section ref={containerRef} className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-primary/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-5 md:p-6">
                  <div className="flex items-center gap-4 text-slate-custom text-xs mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 id={post.titleId} className="text-lg font-bold text-primary-dark mb-2 group-hover:text-primary-light transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p id={post.descId} className="text-steel text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold group-hover:gap-2.5 transition-all">
                    Read more <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need Expert Sourcing Advice?"
        subtitle="Our team is ready to help you navigate the complexities of sourcing from China."
      />
    </>
  )
}
