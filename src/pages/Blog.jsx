import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const posts = [
  {
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'A practical guide to conducting supplier due diligence — from business license checks to on-site factory audits — to avoid costly mistakes.',
    date: 'July 15, 2026',
    author: 'SSourcing China Team',
    category: 'Supplier Verification',
    imgId: 'blog-post-1-a1b2',
    titleId: 'blog-1-title',
    descId: 'blog-1-desc',
  },
  {
    title: 'Understanding AQL Quality Inspections: A Buyer\'s Guide',
    excerpt: 'Learn how Acceptable Quality Level (AQL) sampling works, which standard to apply for your product category, and how to read inspection reports.',
    date: 'June 28, 2026',
    author: 'SSourcing China Team',
    category: 'Quality Control',
    imgId: 'blog-post-2-c3d4',
    titleId: 'blog-2-title',
    descId: 'blog-2-desc',
  },
  {
    title: 'FOB vs CIF vs DDP: Which Shipping Term Is Right for You?',
    excerpt: 'A clear comparison of the three most common Incoterms for China sourcing, with practical scenarios to help you choose the best option.',
    date: 'June 10, 2026',
    author: 'SSourcing China Team',
    category: 'Logistics',
    imgId: 'blog-post-3-e5f6',
    titleId: 'blog-3-title',
    descId: 'blog-3-desc',
  },
  {
    title: 'China Manufacturing Clusters: Where to Source Different Products',
    excerpt: 'An overview of China\'s key manufacturing regions — from electronics in Shenzhen to textiles in Shaoxing — and why location matters for quality and cost.',
    date: 'May 22, 2026',
    author: 'SSourcing China Team',
    category: 'Sourcing Strategy',
    imgId: 'blog-post-4-g7h8',
    titleId: 'blog-4-title',
    descId: 'blog-4-desc',
  },
  {
    title: '5 Red Flags When Negotiating with Chinese Factories',
    excerpt: 'Learn to spot warning signs during supplier negotiations that could signal quality issues, hidden costs, or reliability problems down the line.',
    date: 'May 5, 2026',
    author: 'SSourcing China Team',
    category: 'Sourcing Strategy',
    imgId: 'blog-post-5-i9j0',
    titleId: 'blog-5-title',
    descId: 'blog-5-desc',
  },
  {
    title: 'How to Protect Your Product Design When Manufacturing in China',
    excerpt: 'Practical steps for IP protection — NDAs, design patents, trademark registration, and working with factories that respect intellectual property.',
    date: 'April 18, 2026',
    author: 'SSourcing China Team',
    category: 'IP Protection',
    imgId: 'blog-post-6-k1l2',
    titleId: 'blog-6-title',
    descId: 'blog-6-desc',
  },
]

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 id="blog-title" className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Blog
            </h1>
            <p className="text-lg text-blue-200 leading-relaxed">
              Practical insights on China sourcing, supplier management, quality control, and logistics.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.imgId} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}] [blog-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <span className="inline-block px-2.5 py-1 bg-brand-50 text-brand-600 text-xs font-semibold rounded-full mb-3">
                    {post.category}
                  </span>
                  <h2 id={post.titleId} className="font-semibold text-brand-900 mb-2 leading-snug line-clamp-2">
                    {post.title}
                  </h2>
                  <p id={post.descId} className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-900 mb-4">
            Have a Sourcing Question?
          </h2>
          <p className="text-slate-600 mb-8">
            Our team is happy to provide practical, no-obligation advice based on years of experience on the ground in China.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-3.5 rounded-lg text-base transition-colors"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
