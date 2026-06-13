import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'
import CTABanner from '../components/CTABanner'

const blogPosts = [
  {
    id: 1,
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Learn the essential steps for verifying Chinese suppliers, including business license checks, factory audits, and reference verification. Avoid common pitfalls that cost importers thousands.',
    category: 'Supplier Verification',
    date: 'May 15, 2024',
    readTime: '8 min read',
  },
  {
    id: 2,
    title: 'Understanding AQL Inspection Standards for China Manufacturing',
    excerpt: 'A practical guide to Acceptable Quality Level (AQL) inspection standards. Learn how to set appropriate inspection levels, interpret results, and work with your QC team effectively.',
    category: 'Quality Control',
    date: 'April 28, 2024',
    readTime: '10 min read',
  },
  {
    id: 3,
    title: 'Sea Freight vs. Air Freight: A Cost Comparison for Importers',
    excerpt: 'A detailed comparison of sea and air freight options for importing from China, including cost breakdowns, transit times, and when each option makes the most business sense.',
    category: 'Shipping & Logistics',
    date: 'April 10, 2024',
    readTime: '7 min read',
  },
  {
    id: 4,
    title: 'Top 10 Mistakes to Avoid When Sourcing from China',
    excerpt: 'From skipping factory visits to ignoring intellectual property protection, these common sourcing mistakes can be costly. Learn how to avoid them based on our decade of experience.',
    category: 'Sourcing Tips',
    date: 'March 22, 2024',
    readTime: '12 min read',
  },
  {
    id: 5,
    title: 'How to Negotiate Better Prices with Chinese Suppliers',
    excerpt: 'Effective negotiation strategies that work in the Chinese business context. Understand cultural nuances, volume pricing structures, and when to push for better terms.',
    category: 'Negotiation',
    date: 'March 8, 2024',
    readTime: '9 min read',
  },
  {
    id: 6,
    title: 'Customs and Import Regulations: What Every Buyer Needs to Know',
    excerpt: 'Navigate customs clearance with confidence. Understanding HS codes, duty rates, required documentation, and compliance standards for major import markets.',
    category: 'Shipping & Logistics',
    date: 'February 20, 2024',
    readTime: '11 min read',
  },
]

export default function Blog() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0F172A] to-[#1B4D8E] py-20 text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-sm text-blue-200 font-medium mb-4">Blog</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Sourcing Knowledge & Insights</h1>
          <p className="text-lg text-gray-300 max-w-[600px] mx-auto">
            Practical guides and expert insights to help you source products from China more effectively.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map(post => (
              <article key={post.id} className="bg-[#F8FAFC] rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all group cursor-pointer">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold bg-[#1B4D8E]/10 text-[#1B4D8E] px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Calendar className="w-3 h-3" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-3 group-hover:text-[#1B4D8E] transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#1B4D8E] group-hover:gap-2 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter */}
          <div className="mt-16 p-8 md:p-10 bg-[#0F172A] rounded-2xl text-center">
            <h3 className="text-2xl font-extrabold text-white mb-3">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
              Get monthly insights on China sourcing, market updates, and practical tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
              />
              <button className="px-6 py-3 bg-[#F59E0B] text-white font-bold rounded-lg hover:bg-[#D97706] transition-colors text-sm border-none cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Have a Sourcing Question?" subtitle="Our team is here to help. Get in touch for a free consultation about your sourcing needs." />
    </div>
  )
}
