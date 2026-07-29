import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import SourcingInquiryForm from '@/components/SourcingInquiryForm'

const blogPosts = [
  {
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'A step-by-step guide to verifying supplier credentials, business licenses, and production capabilities before committing to a purchase.',
    category: 'Supplier Verification',
    date: '2026-07-15',
    readTime: '8 min read',
  },
  {
    title: 'Understanding Quality Inspection Reports: What to Look For',
    excerpt: 'Learn how to read and interpret quality inspection reports, understand defect classifications, and make informed decisions about your shipments.',
    category: 'Quality Control',
    date: '2026-07-08',
    readTime: '6 min read',
  },
  {
    title: 'China Sourcing Costs: A Transparent Breakdown',
    excerpt: 'An honest look at the real costs of sourcing from China, including product costs, inspection fees, shipping, customs, and hidden expenses to watch for.',
    category: 'Cost Analysis',
    date: '2026-06-28',
    readTime: '10 min read',
  },
  {
    title: 'Pre-Production vs. Pre-Shipment Inspections: When to Use Each',
    excerpt: 'Understanding the difference between inspection types and when each one is most valuable for protecting your investment.',
    category: 'Quality Control',
    date: '2026-06-15',
    readTime: '5 min read',
  },
  {
    title: 'How to Communicate Effectively with Chinese Manufacturers',
    excerpt: 'Practical tips for overcoming language barriers, setting clear expectations, and building productive relationships with your suppliers.',
    category: 'Communication',
    date: '2026-06-01',
    readTime: '7 min read',
  },
  {
    title: 'Shipping from China: Sea Freight vs. Air Freight Explained',
    excerpt: 'A comparison of shipping methods, costs, transit times, and when to choose each option for your imports from China.',
    category: 'Logistics',
    date: '2026-05-20',
    readTime: '6 min read',
  },
  {
    title: 'Common Mistakes First-Time Importers Make When Sourcing from China',
    excerpt: 'Learn from the experiences of others. We share the most common pitfalls and how to avoid them when sourcing from China for the first time.',
    category: 'Beginner Guide',
    date: '2026-05-05',
    readTime: '9 min read',
  },
  {
    title: 'Understanding MOQs: How to Negotiate Minimum Order Quantities',
    excerpt: 'What MOQs are, why factories set them, and practical strategies for negotiating lower minimums when you are starting out.',
    category: 'Negotiation',
    date: '2026-04-22',
    readTime: '5 min read',
  },
]

export default function Blog() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Practical guides and insights for buyers sourcing from China.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <article key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">{post.category}</span>
                  <h2 className="text-lg font-bold text-slate-900 mt-2 mb-3 leading-snug">{post.title}</h2>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
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
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Need Help with Your Sourcing?</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Our blog covers common questions, but every sourcing situation is unique. Tell us about your needs and we will provide personalized guidance.
              </p>
              <Link to="/services" className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800 transition-colors">
                View Our Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <SourcingInquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
