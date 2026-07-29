import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Calendar, User, Tag, Search, BookOpen } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'How to Verify a Chinese Supplier: A Complete Guide',
    excerpt: 'Learn the essential steps to verify a Chinese supplier before placing your first order. From business license checks to on-site factory audits, this guide covers everything you need to know.',
    category: 'Supplier Verification',
    author: 'SSourcing Team',
    date: '2026-07-15',
    readTime: '8 min read',
    imgId: 'blog-verify-supplier-a1b2c3',
    slug: 'how-to-verify-chinese-supplier',
  },
  {
    id: 2,
    title: 'Understanding AQL Inspection: What Importers Need to Know',
    excerpt: 'AQL (Acceptable Quality Level) inspection is the industry standard for pre-shipment quality checks. Understand how it works and how to set the right inspection levels for your products.',
    category: 'Quality Control',
    author: 'SSourcing Team',
    date: '2026-07-08',
    readTime: '6 min read',
    imgId: 'blog-aql-inspection-d4e5f6',
    slug: 'understanding-aql-inspection',
  },
  {
    id: 3,
    title: 'Sea Freight vs Air Freight: Choosing the Right Shipping Method',
    excerpt: 'Compare sea freight and air freight for your China imports. We break down costs, transit times, and best use cases to help you make the right logistics decision.',
    category: 'Shipping & Logistics',
    author: 'SSourcing Team',
    date: '2026-06-30',
    readTime: '7 min read',
    imgId: 'blog-shipping-compare-g7h8i9',
    slug: 'sea-freight-vs-air-freight',
  },
  {
    id: 4,
    title: 'Top 10 Mistakes to Avoid When Sourcing from China',
    excerpt: 'Avoid costly mistakes with this practical guide to common sourcing pitfalls. Learn from the experiences of hundreds of importers who have worked with Chinese suppliers.',
    category: 'Sourcing Tips',
    author: 'SSourcing Team',
    date: '2026-06-22',
    readTime: '10 min read',
    imgId: 'blog-sourcing-mistakes-j0k1l2',
    slug: 'top-10-sourcing-mistakes',
  },
  {
    id: 5,
    title: 'How to Negotiate with Chinese Suppliers: Practical Strategies',
    excerpt: 'Effective negotiation strategies that work with Chinese suppliers. Understand cultural nuances and build long-term relationships that benefit both parties.',
    category: 'Negotiation',
    author: 'SSourcing Team',
    date: '2026-06-15',
    readTime: '9 min read',
    imgId: 'blog-negotiation-m3n4o5',
    slug: 'negotiate-with-chinese-suppliers',
  },
  {
    id: 6,
    title: 'Importing from China: A Beginner\'s Complete Checklist',
    excerpt: 'Everything first-time importers need to know about sourcing products from China, from initial research to receiving your first shipment.',
    category: 'Getting Started',
    author: 'SSourcing Team',
    date: '2026-06-08',
    readTime: '12 min read',
    imgId: 'blog-beginners-guide-p6q7r8',
    slug: 'importing-from-china-beginners-guide',
  },
]

const categories = ['All', 'Supplier Verification', 'Quality Control', 'Shipping & Logistics', 'Sourcing Tips', 'Negotiation', 'Getting Started']

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-500 to-brand-900 py-20 md:py-28">
        <div className="container-wide text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Sourcing Insights & Guides
          </h1>
          <p className="text-lg md:text-xl text-brand-100 max-w-2xl mx-auto">
            Practical advice, industry insights, and step-by-step guides to help you source from China with confidence.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-wide">
          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 rounded-full text-sm font-medium border border-neutral-200 text-neutral-600 hover:border-brand-300 hover:text-brand-500 hover:bg-brand-50 transition-all"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <article className="mb-16 bg-neutral-50 rounded-2xl overflow-hidden border border-neutral-200 hover:shadow-lg transition-all duration-300">
            <div className="grid lg:grid-cols-2">
              <div className="h-64 lg:h-auto overflow-hidden">
                <img
                  data-strk-img-id={blogPosts[0].imgId}
                  data-strk-img="[blog-featured-title] china sourcing supplier verification"
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-brand-50 text-brand-600 rounded-full text-sm font-semibold">
                    {blogPosts[0].category}
                  </span>
                  <span className="px-3 py-1 bg-accent-50 text-accent-600 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3" id="blog-featured-title">
                  {blogPosts[0].title}
                </h2>
                <p className="text-neutral-600 mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-neutral-500 mb-6">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {blogPosts[0].author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(blogPosts[0].date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <Link
                  to={`/blog/${blogPosts[0].slug}`}
                  className="inline-flex items-center gap-2 text-brand-500 font-semibold hover:gap-3 transition-all"
                >
                  Read full article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </article>

          {/* Post Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="h-48 overflow-hidden">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[blog-${post.id}-title] china sourcing guide`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span id={`blog-${post.id}-title`} className="sr-only">{post.title}</span>
                </div>
                <div className="p-6">
                  <span className="px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold text-neutral-900 mt-3 mb-2 group-hover:text-brand-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-neutral-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container-wide max-w-2xl mx-auto text-center">
          <BookOpen className="w-12 h-12 text-brand-500 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-neutral-600 mb-8">
            Get the latest sourcing insights, market updates, and practical tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-neutral-900"
            />
            <button className="px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-lg transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-brand-500">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Have Sourcing Questions?
          </h2>
          <p className="text-lg text-brand-100 max-w-2xl mx-auto mb-8">
            Our team is ready to answer your questions and help you start sourcing from China.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-500 font-bold rounded-lg hover:bg-neutral-100 transition-all shadow-lg text-lg"
          >
            Contact Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
