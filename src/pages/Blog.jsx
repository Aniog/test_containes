import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Calendar, Clock } from 'lucide-react'

const posts = [
  {
    id: 'blog-supplier-verification',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'A practical guide to conducting due diligence on Chinese manufacturers — from business license checks to on-site factory audits.',
    category: 'Supplier Verification',
    date: '2026-05-28',
    readTime: '8 min read',
    imgId: 'blog-verify-img-a1b2c3',
  },
  {
    id: 'blog-quality-inspection',
    title: '5 Common Quality Issues When Importing from China (And How to Prevent Them)',
    excerpt: 'Learn about the most frequent quality problems buyers face and the inspection strategies that prevent costly mistakes.',
    category: 'Quality Control',
    date: '2026-05-15',
    readTime: '6 min read',
    imgId: 'blog-quality-img-d4e5f6',
  },
  {
    id: 'blog-shipping-guide',
    title: 'Complete Guide to Shipping from China: FOB, CIF, and Incoterms Explained',
    excerpt: 'Understanding shipping terms, freight options, and logistics planning for importing goods from Chinese suppliers.',
    category: 'Logistics',
    date: '2026-04-30',
    readTime: '10 min read',
    imgId: 'blog-shipping-img-g7h8i9',
  },
  {
    id: 'blog-negotiate-price',
    title: 'How to Negotiate Better Prices with Chinese Suppliers',
    excerpt: 'Proven negotiation strategies that help you get competitive pricing without compromising on quality or reliability.',
    category: 'Negotiation',
    date: '2026-04-18',
    readTime: '7 min read',
    imgId: 'blog-negotiate-img-j1k2l3',
  },
  {
    id: 'blog-moq',
    title: 'Understanding MOQ: How to Work with Minimum Order Quantities',
    excerpt: 'Strategies for managing MOQ requirements, especially for startups and small businesses sourcing from China.',
    category: 'Sourcing Tips',
    date: '2026-04-05',
    readTime: '5 min read',
    imgId: 'blog-moq-img-m4n5o6',
  },
  {
    id: 'blog-trade-shows',
    title: 'Top China Trade Shows for International Buyers in 2026',
    excerpt: 'A curated list of the most important trade fairs and exhibitions for sourcing products from Chinese manufacturers.',
    category: 'Industry News',
    date: '2026-03-22',
    readTime: '6 min read',
    imgId: 'blog-trade-img-p7q8r9',
  },
]

const Blog = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-slate-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">Blog & Resources</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mt-3 tracking-tight">
              China Sourcing Insights
            </h1>
            <p className="text-slate-300 text-lg mt-4 leading-relaxed">
              Practical guides, industry updates, and expert tips to help you source from China more effectively.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-md transition-shadow group">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.id}-title] [${post.id}-category]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span id={`${post.id}-category`} className="text-xs font-medium text-blue-600 uppercase tracking-wide">{post.category}</span>
                  <h2 id={`${post.id}-title`} className="text-base font-semibold text-slate-900 mt-2 mb-2 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
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

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Have a Sourcing Question?
          </h2>
          <p className="text-slate-500 text-lg mb-8">
            Our team is happy to answer your questions about sourcing from China. Reach out anytime.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Contact Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Blog
