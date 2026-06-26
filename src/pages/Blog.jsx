import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'

const posts = [
  {
    title: 'How to Verify a Chinese Supplier: A Step-by-Step Guide',
    excerpt: 'Learn the essential steps for verifying potential suppliers in China, from documentation checks to on-site factory audits.',
    category: 'Supplier Verification',
    author: 'SSourcing China Team',
    date: 'June 15, 2026',
    readTime: '8 min read',
  },
  {
    title: 'Quality Control in China: What Every Buyer Should Know',
    excerpt: 'Understanding the QC process is critical for successful sourcing. This guide covers inspection types, AQL standards, and best practices.',
    category: 'Quality Control',
    author: 'SSourcing China Team',
    date: 'June 1, 2026',
    readTime: '10 min read',
  },
  {
    title: 'Shipping from China: Options, Costs, and Timeline',
    excerpt: 'A practical overview of air freight, sea freight, and express shipping options including cost comparisons and typical transit times.',
    category: 'Logistics',
    author: 'SSourcing China Team',
    date: 'May 20, 2026',
    readTime: '7 min read',
  },
  {
    title: 'The Cost of Poor Supplier Selection: Real Case Analysis',
    excerpt: 'We analyze real examples of what happens when buyers choose the wrong supplier and how proper vetting could have prevented the issues.',
    category: 'Sourcing Strategy',
    author: 'SSourcing China Team',
    date: 'May 5, 2026',
    readTime: '9 min read',
  },
  {
    title: 'Negotiating with Chinese Manufacturers: Tips and Cultural Insights',
    excerpt: 'Effective negotiation in China requires understanding business culture, pricing structures, and what manufacturers actually value.',
    category: 'Negotiation',
    author: 'SSourcing China Team',
    date: 'April 18, 2026',
    readTime: '6 min read',
  },
  {
    title: 'Understanding Chinese Factory Certifications: ISO, CE, FCC, and More',
    excerpt: 'A guide to the most common certifications required for importing from China and how to verify their authenticity.',
    category: 'Compliance',
    author: 'SSourcing China Team',
    date: 'April 2, 2026',
    readTime: '8 min read',
  },
]

export default function Blog() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Blog</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Practical insights and guides on sourcing from China. Written by our team with years of on-the-ground experience.
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {posts.map((post, i) => (
              <article key={i} className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg hover:border-primary-200 transition-all flex flex-col">
                <div className="h-40 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <span className="text-primary-400 text-sm font-medium">{post.category}</span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                  </div>
                  <h2 className="text-base font-semibold text-primary-900 mb-2 line-clamp-2">{post.title}</h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <span className="text-xs text-gray-500 flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                    <span className="text-accent-600 text-sm font-medium hover:text-accent-700 cursor-pointer">Read More</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="bg-primary-50 py-16">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-primary-900 mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-6">Get the latest sourcing insights and tips delivered to your inbox monthly.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent-400"
              required
            />
            <button type="submit" className="bg-accent-500 text-white px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-accent-600 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}