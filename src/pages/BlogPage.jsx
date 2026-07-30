import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock } from 'lucide-react'

const blogPosts = [
  {
    id: 'how-to-find-reliable-supplier',
    title: 'How to Find a Reliable Supplier in China: A Step-by-Step Guide',
    excerpt: 'Finding a trustworthy manufacturer in China requires more than a quick Alibaba search. Here are the proven steps our team uses to vet suppliers for our clients.',
    category: 'Sourcing Tips',
    date: '2026-07-15',
    readTime: '8 min read',
  },
  {
    id: 'quality-inspection-checklist',
    title: 'The Complete Quality Inspection Checklist for China Imports',
    excerpt: 'Don\'t ship products without proper QC. This comprehensive checklist covers what to inspect before, during, and after production.',
    category: 'Quality Control',
    date: '2026-07-08',
    readTime: '6 min read',
  },
  {
    id: 'shipping-from-china-2026',
    title: 'Shipping from China in 2026: Costs, Timelines & Best Practices',
    excerpt: 'An updated guide to freight options, current shipping rates, transit times, and tips to reduce logistics costs when importing from China.',
    category: 'Logistics',
    date: '2026-06-28',
    readTime: '10 min read',
  },
  {
    id: 'avoid-sourcing-scams',
    title: '7 Common China Sourcing Scams and How to Avoid Them',
    excerpt: 'From fake factories to bait-and-switch tactics, learn how to identify and avoid the most common scams when sourcing products from China.',
    category: 'Risk Management',
    date: '2026-06-20',
    readTime: '7 min read',
  },
  {
    id: 'oem-vs-odm',
    title: 'OEM vs ODM: Which Manufacturing Model is Right for Your Business?',
    excerpt: 'Understanding the difference between OEM and ODM manufacturing can save you time and money. Here\'s how to choose the right approach.',
    category: 'Manufacturing',
    date: '2026-06-12',
    readTime: '5 min read',
  },
  {
    id: 'negotiate-with-chinese-suppliers',
    title: 'How to Negotiate with Chinese Suppliers: Practical Tips That Work',
    excerpt: 'Effective negotiation with Chinese manufacturers requires understanding cultural nuances and business practices. Here are strategies that deliver results.',
    category: 'Sourcing Tips',
    date: '2026-06-05',
    readTime: '9 min read',
  },
]

const BlogPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Sourcing Blog
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Practical guides, industry insights, and tips to help you source products from China more effectively.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition group">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium bg-navy/10 text-navy px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-navy transition line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
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

      {/* Newsletter CTA */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
            Get Sourcing Tips in Your Inbox
          </h2>
          <p className="mt-3 text-slate-600">
            Join 2,000+ buyers who receive our weekly China sourcing insights.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange"
            />
            <button className="bg-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-dark transition whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPage
