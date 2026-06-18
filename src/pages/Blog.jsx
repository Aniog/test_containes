import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User, Clock } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const blogPosts = [
  {
    id: 1,
    title: 'How to Verify a Chinese Factory Before Placing an Order',
    excerpt: 'Learn the essential steps to verify a factory\'s legitimacy, including business license checks, facility visits, and red flags to watch for.',
    category: 'Supplier Verification',
    date: 'June 15, 2026',
    readTime: '8 min read',
    author: 'Michael Chen',
    image: 'factory inspection',
  },
  {
    id: 2,
    title: 'Understanding Quality Inspection Standards: AQL Explained',
    excerpt: 'What is AQL and how does it determine product quality? Learn how to set appropriate inspection levels for your orders.',
    category: 'Quality Control',
    date: 'June 10, 2026',
    readTime: '6 min read',
    author: 'Sarah Zhang',
    image: 'quality inspection',
  },
  {
    id: 3,
    title: 'Navigating Chinese New Year: Planning Your Production Timeline',
    excerpt: 'Chinese New Year affects manufacturing timelines significantly. Here\'s how to plan your orders around this important holiday.',
    category: 'Production',
    date: 'June 5, 2026',
    readTime: '5 min read',
    author: 'David Liu',
    image: 'factory workers',
  },
  {
    id: 4,
    title: 'Incoterms 101: A Guide for International Buyers',
    excerpt: 'Understanding Incoterms is crucial for international trade. Learn about FOB, CIF, EXW, and other terms used in China sourcing.',
    category: 'Logistics',
    date: 'May 28, 2026',
    readTime: '7 min read',
    author: 'Michael Chen',
    image: 'shipping containers',
  },
  {
    id: 5,
    title: 'Common Mistakes First-Time Importers Make',
    excerpt: 'Avoid these common pitfalls when sourcing from China. Learn from real examples of sourcing failures and how to prevent them.',
    category: 'Sourcing Tips',
    date: 'May 20, 2026',
    readTime: '10 min read',
    author: 'Sarah Zhang',
    image: 'business meeting',
  },
  {
    id: 6,
    title: 'How to Negotiate with Chinese Suppliers',
    excerpt: 'Effective negotiation strategies for working with Chinese factories. Learn about pricing, payment terms, and building long-term relationships.',
    category: 'Negotiation',
    date: 'May 15, 2026',
    readTime: '8 min read',
    author: 'David Liu',
    image: 'negotiation meeting',
  },
  {
    id: 7,
    title: 'Understanding Product Certifications for Export',
    excerpt: 'A comprehensive guide to certifications needed for different markets - CE, FCC, RoHS, and more. Know what your products need.',
    category: 'Compliance',
    date: 'May 8, 2026',
    readTime: '9 min read',
    author: 'Michael Chen',
    image: 'certification documents',
  },
  {
    id: 8,
    title: 'Sample Ordering: How to Get What You Need',
    excerpt: 'The sample process is critical for product quality. Learn how to request samples, evaluate them, and use them for production approval.',
    category: 'Product Development',
    date: 'May 1, 2026',
    readTime: '6 min read',
    author: 'Sarah Zhang',
    image: 'product samples',
  },
  {
    id: 9,
    title: 'Managing Quality Issues: A Practical Guide',
    excerpt: 'What to do when quality problems arise. Learn about inspection reports, defect categories, and how to work with factories on corrections.',
    category: 'Quality Control',
    date: 'April 25, 2026',
    readTime: '7 min read',
    author: 'David Liu',
    image: 'quality control',
  },
]

const categories = [
  'All Posts',
  'Supplier Verification',
  'Quality Control',
  'Production',
  'Logistics',
  'Sourcing Tips',
  'Negotiation',
  'Compliance',
  'Product Development',
]

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-[#1E3A5F] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Blog
            </h1>
            <p className="text-lg text-[#A0AEC0] max-w-2xl mx-auto">
              Expert insights on China sourcing, supplier verification, quality control, and international trade.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? 'bg-[#1E3A5F] text-white'
                    : 'bg-[#F8FAFC] text-[#4A5568] hover:bg-[#E2E8F0]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-[#E2E8F0]"
              >
                <div className="aspect-video bg-[#E2E8F0]">
                  <img
                    data-strk-img-id={`blog-img-${post.id}`}
                    data-strk-img={post.image}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-[#C9A227] bg-[#C9A227]/10 px-2 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-[#1E3A5F] mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[#4A5568] mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-[#718096]">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-6">
            Stay Updated
          </h2>
          <p className="text-lg text-[#4A5568] mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights on China sourcing and international trade.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:border-[#1E3A5F] focus:ring-1 focus:ring-[#1E3A5F]"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#1E3A5F] text-white font-semibold rounded-lg hover:bg-[#2C5282] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#1E3A5F] to-[#2C5282]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Help With Your Sourcing?
          </h2>
          <p className="text-lg text-[#A0AEC0] mb-8 max-w-2xl mx-auto">
            Get expert assistance with your China sourcing. Contact us for a free consultation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A227] text-[#1E3A5F] font-semibold rounded-lg hover:bg-[#B8911F] transition-colors"
          >
            Get in Touch
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}