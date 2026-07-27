import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User, Tag } from 'lucide-react'

const posts = [
  {
    id: 'sourcing-guide-2025',
    title: 'The Complete Guide to Sourcing from China in 2025',
    excerpt: 'Everything you need to know about finding reliable suppliers, negotiating prices, managing quality, and navigating logistics in the current market.',
    author: 'SSourcing Team',
    date: '2025-07-15',
    category: 'Sourcing Guide',
    imgId: 'blog-sourcing-guide-h1i2j3',
  },
  {
    id: 'factory-audit',
    title: 'How to Conduct a Factory Audit in China: A Step-by-Step Guide',
    excerpt: 'Learn what to look for when visiting a Chinese factory, from production capacity and quality systems to financial health and certifications.',
    author: 'SSourcing Team',
    date: '2025-06-28',
    category: 'Quality Control',
    imgId: 'blog-factory-audit-k4l5m6',
  },
  {
    id: 'qc-best-practices',
    title: 'Quality Control Best Practices When Importing from China',
    excerpt: 'A practical guide to implementing effective QC processes, including inspection types, AQL sampling, and how to handle quality issues.',
    author: 'SSourcing Team',
    date: '2025-06-10',
    category: 'Quality Control',
    imgId: 'blog-qc-practices-n7o8p9',
  },
  {
    id: 'negotiation-tips',
    title: '10 Tips for Negotiating with Chinese Suppliers',
    excerpt: 'Practical negotiation strategies to help you get competitive pricing while maintaining good supplier relationships and quality standards.',
    author: 'SSourcing Team',
    date: '2025-05-22',
    category: 'Sourcing Tips',
    imgId: 'blog-negotiation-q0r1s2',
  },
  {
    id: 'shipping-guide',
    title: 'China Shipping Guide: Sea Freight vs Air Freight vs Express',
    excerpt: 'Compare shipping methods from China, including costs, transit times, and best use cases for each option. Plus customs documentation tips.',
    author: 'SSourcing Team',
    date: '2025-05-05',
    category: 'Logistics',
    imgId: 'blog-shipping-guide-t3u4v5',
  },
  {
    id: 'incoterms',
    title: 'Understanding Incoterms: FOB, CIF, EXW and What They Mean for Your Business',
    excerpt: 'A clear explanation of common shipping terms used in international trade and how to choose the right one for your sourcing needs.',
    author: 'SSourcing Team',
    date: '2025-04-18',
    category: 'Logistics',
    imgId: 'blog-incoterms-w6x7y8',
  },
  {
    id: 'product-categories',
    title: 'Top 10 Product Categories to Source from China in 2025',
    excerpt: 'An overview of the most popular and profitable product categories for importers, with market trends and supplier insights.',
    author: 'SSourcing Team',
    date: '2025-04-02',
    category: 'Market Trends',
    imgId: 'blog-categories-z9a0b1',
  },
  {
    id: 'supplier-relationships',
    title: 'Building Long-Term Supplier Relationships in China',
    excerpt: 'Why relationship-building matters in Chinese business culture and how to develop partnerships that benefit both sides.',
    author: 'SSourcing Team',
    date: '2025-03-15',
    category: 'Sourcing Tips',
    imgId: 'blog-relationships-c2d3e4',
  },
  {
    id: 'trade-fairs',
    title: 'Canton Fair and Beyond: A Guide to China Trade Shows',
    excerpt: 'How to make the most of trade fairs in China, including preparation tips, what to look for, and how to follow up effectively.',
    author: 'SSourcing Team',
    date: '2025-03-01',
    category: 'Sourcing Guide',
    imgId: 'blog-trade-fairs-f5g6h7',
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
      <section className="bg-brand-900 py-16 md:py-20">
        <div className="section-container text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Sourcing Blog</h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Practical guides, tips, and insights on sourcing from China. Written by industry professionals.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow group">
                <Link to={`/blog/${post.id}`} className="block aspect-[16/10] bg-neutral-100 overflow-hidden">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[blog-${post.id}-category] [blog-${post.id}-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-brand-500 bg-brand-50 px-2.5 py-1 rounded-full" id={`blog-${post.id}-category`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-neutral-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <h3 className="text-base font-bold text-neutral-900 mb-2 group-hover:text-brand-500 transition-colors" id={`blog-${post.id}-title`}>
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-neutral-500 mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-xs text-neutral-400">
                    <User className="w-3 h-3" />
                    {post.author}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-neutral-50">
        <div className="section-container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">Need Help with Your Sourcing?</h2>
          <p className="text-neutral-500 mb-8 max-w-xl mx-auto">
            Our team is ready to help you find reliable suppliers and manage your supply chain.
          </p>
          <Link to="/contact" className="btn-primary text-lg px-8 py-3.5 inline-flex items-center gap-2">
            Get a Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}