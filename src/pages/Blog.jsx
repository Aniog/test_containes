import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Clock } from 'lucide-react'

const posts = [
  {
    id: 'post-1',
    category: 'Supplier Sourcing',
    date: 'July 15, 2026',
    readTime: '6 min read',
    title: 'How to Find a Reliable Supplier in China: A Step-by-Step Guide',
    excerpt: 'Finding a trustworthy Chinese supplier requires more than a quick search on Alibaba. This guide walks you through the key steps to identify, vet, and select a manufacturer that fits your needs.',
    titleId: 'blog-1-title',
    descId: 'blog-1-desc',
    imgId: 'blog-1-img-a1b2c3',
  },
  {
    id: 'post-2',
    category: 'Quality Control',
    date: 'July 8, 2026',
    readTime: '5 min read',
    title: 'Understanding AQL Sampling: What Every Importer Should Know',
    excerpt: 'AQL (Acceptable Quality Limit) is the standard used in pre-shipment inspections worldwide. Learn how it works, what the numbers mean, and how to set the right inspection criteria for your products.',
    titleId: 'blog-2-title',
    descId: 'blog-2-desc',
    imgId: 'blog-2-img-d4e5f6',
  },
  {
    id: 'post-3',
    category: 'Factory Audits',
    date: 'June 28, 2026',
    readTime: '7 min read',
    title: 'What to Look for in a China Factory Audit Report',
    excerpt: 'A factory audit report contains a lot of information. This article explains the key sections, what red flags to watch for, and how to use the report to make an informed sourcing decision.',
    titleId: 'blog-3-title',
    descId: 'blog-3-desc',
    imgId: 'blog-3-img-g7h8i9',
  },
  {
    id: 'post-4',
    category: 'Shipping',
    date: 'June 18, 2026',
    readTime: '8 min read',
    title: 'Sea Freight vs Air Freight: Choosing the Right Shipping Method',
    excerpt: 'The choice between sea and air freight affects your cost, lead time, and cash flow. This guide compares both options and helps you decide which is right for your shipment.',
    titleId: 'blog-4-title',
    descId: 'blog-4-desc',
    imgId: 'blog-4-img-j1k2l3',
  },
  {
    id: 'post-5',
    category: 'OEM & Private Label',
    date: 'June 5, 2026',
    readTime: '6 min read',
    title: 'OEM vs ODM: Which Manufacturing Model Is Right for Your Brand?',
    excerpt: 'OEM and ODM are two common manufacturing models in China. Understanding the difference helps you choose the right approach for your product development and brand strategy.',
    titleId: 'blog-5-title',
    descId: 'blog-5-desc',
    imgId: 'blog-5-img-m4n5o6',
  },
  {
    id: 'post-6',
    category: 'Compliance',
    date: 'May 22, 2026',
    readTime: '5 min read',
    title: 'CE Marking for Products Imported from China: What You Need to Know',
    excerpt: 'If you\'re importing products into the EU, CE marking may be required. This article explains what CE marking means, which products need it, and how to ensure your Chinese supplier can comply.',
    titleId: 'blog-6-title',
    descId: 'blog-6-desc',
    imgId: 'blog-6-img-p7q8r9',
  },
]

const categoryColors = {
  'Supplier Sourcing': 'bg-blue-50 text-blue-700',
  'Quality Control': 'bg-green-50 text-green-700',
  'Factory Audits': 'bg-orange-50 text-orange-700',
  'Shipping': 'bg-purple-50 text-purple-700',
  'OEM & Private Label': 'bg-pink-50 text-pink-700',
  'Compliance': 'bg-yellow-50 text-yellow-700',
}

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (containerRef.current) ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [])

  const [featured, ...rest] = posts

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-red-300 font-semibold text-sm uppercase tracking-wider mb-3">Insights & Guides</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sourcing Blog</h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Practical guides, industry insights, and expert advice to help you source from China more effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <img
              alt={featured.title}
              data-strk-img-id={featured.imgId}
              data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
              data-strk-img-ratio="16x9"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full rounded-xl shadow-md object-cover h-64 md:h-80 bg-gray-100"
            />
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-xs font-semibold px-2 py-0.5 rounded ${categoryColors[featured.category] || 'bg-gray-100 text-gray-600'}`}>
                  {featured.category}
                </span>
                <span className="text-gray-400 text-sm">Featured</span>
              </div>
              <h2 id={featured.titleId} className="text-2xl md:text-3xl font-bold text-primary mb-3">{featured.title}</h2>
              <p id={featured.descId} className="text-gray-600 leading-relaxed mb-4">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-5">
                <span>{featured.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
              </div>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
              >
                Read Article <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Post Grid */}
      <section className="py-12 md:py-16 bg-lightblue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary mb-8">More Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <img
                  alt={post.title}
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-44 object-cover bg-gray-100"
                />
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded ${categoryColors[post.category] || 'bg-gray-100 text-gray-600'}`}>
                      {post.category}
                    </span>
                  </div>
                  <h3 id={post.titleId} className="font-bold text-primary text-base mb-2 leading-snug">{post.title}</h3>
                  <p id={post.descId} className="text-gray-500 text-sm leading-relaxed mb-3 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Stay Updated</h2>
          <p className="text-blue-200 mb-6">Get practical sourcing tips and industry insights delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your business email"
              className="flex-1 px-4 py-3 rounded-md text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button className="bg-accent text-white px-6 py-3 rounded-md font-semibold text-sm hover:bg-red-700 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-blue-300 text-xs mt-3">No spam. Unsubscribe at any time.</p>
        </div>
      </section>
    </div>
  )
}
