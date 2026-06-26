import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User } from 'lucide-react'

const blogPosts = [
  {
    id: 'how-to-verify-chinese-supplier',
    category: 'Supplier Verification',
    title: 'How to Verify a Chinese Supplier: A Step-by-Step Guide',
    excerpt: 'Learn the essential steps to verify a Chinese supplier before placing an order, from checking business licenses to conducting on-site factory audits.',
    date: '2026-06-15',
    author: 'SSourcing Team',
    readTime: '8 min read',
  },
  {
    id: 'quality-inspection-checklist',
    category: 'Quality Control',
    title: 'Quality Inspection Checklist: What to Check Before Shipping',
    excerpt: 'A comprehensive checklist of what to inspect before your goods leave the factory, covering appearance, dimensions, functionality, and packaging.',
    date: '2026-06-01',
    author: 'SSourcing Team',
    readTime: '6 min read',
  },
  {
    id: 'shipping-from-china-options',
    category: 'Shipping & Logistics',
    title: 'Shipping from China: Sea, Air, or Rail — Which Is Right for You?',
    excerpt: 'Compare the pros and cons of different shipping methods from China, including cost, speed, and suitability for different product types.',
    date: '2026-05-20',
    author: 'SSourcing Team',
    readTime: '7 min read',
  },
  {
    id: 'common-sourcing-mistakes',
    category: 'Sourcing Tips',
    title: '7 Common Mistakes When Sourcing from China (And How to Avoid Them)',
    excerpt: 'From skipping factory audits to neglecting quality inspections, these are the most common mistakes buyers make and practical ways to prevent them.',
    date: '2026-05-10',
    author: 'SSourcing Team',
    readTime: '9 min read',
  },
  {
    id: 'negotiating-with-chinese-factories',
    category: 'Negotiation',
    title: 'Tips for Negotiating with Chinese Factories',
    excerpt: 'Practical negotiation strategies for getting better prices and terms from Chinese manufacturers while maintaining a strong supplier relationship.',
    date: '2026-04-28',
    author: 'SSourcing Team',
    readTime: '7 min read',
  },
  {
    id: 'product-certification-guide',
    category: 'Compliance',
    title: 'Understanding Product Certifications for Importing from China',
    excerpt: 'A guide to the most common product certifications required when importing from China, including CE, FCC, RoHS, and market-specific requirements.',
    date: '2026-04-15',
    author: 'SSourcing Team',
    readTime: '10 min read',
  },
]

export default function Blog() {
  return (
    <div>
      <section className="bg-primary-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Blog</h1>
          <p className="text-lg text-primary-200 max-w-2xl mx-auto">
            Practical insights and guides on sourcing from China, quality control, and supply chain management.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="aspect-[16/9] bg-neutral-100 flex items-center justify-center">
                  <span className="text-neutral-400 text-sm font-medium">{post.category}</span>
                </div>
                <div className="p-5">
                  <span className="inline-block bg-primary-50 text-primary-500 text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-primary-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-neutral-400">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">Need Expert Sourcing Help?</h2>
          <p className="text-neutral-500 mb-8">
            Our team is ready to help you navigate the complexities of sourcing from China.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-600 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
