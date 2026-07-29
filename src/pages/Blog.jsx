import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { Calendar, ArrowRight } from 'lucide-react'

const posts = [
  {
    id: 'post-1',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'A step-by-step guide to conducting due diligence on potential Chinese manufacturers, including what documents to request and red flags to watch for.',
    date: '2026-07-15',
    category: 'Supplier Verification',
    imgId: 'blog-verify-img-a1b2c3',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
  },
  {
    id: 'post-2',
    title: '5 Common Quality Issues When Importing from China (And How to Prevent Them)',
    excerpt: 'Learn about the most frequent quality problems buyers face and the inspection strategies that prevent them from reaching your warehouse.',
    date: '2026-07-08',
    category: 'Quality Control',
    imgId: 'blog-quality-img-d4e5f6',
    titleId: 'blog-quality-title',
    descId: 'blog-quality-desc',
  },
  {
    id: 'post-3',
    title: 'Understanding Incoterms: FOB vs. CIF vs. DDP Explained',
    excerpt: 'A practical breakdown of the most common shipping terms used in China trade, and which one is right for your situation.',
    date: '2026-06-28',
    category: 'Shipping & Logistics',
    imgId: 'blog-incoterms-img-g7h8i9',
    titleId: 'blog-incoterms-title',
    descId: 'blog-incoterms-desc',
  },
  {
    id: 'post-4',
    title: 'How Much Does a China Sourcing Agent Cost? Fee Structures Explained',
    excerpt: "An honest breakdown of how sourcing agents charge, what's included, and how to evaluate whether the cost is worth it for your business.",
    date: '2026-06-20',
    category: 'Sourcing Tips',
    imgId: 'blog-cost-img-j1k2l3',
    titleId: 'blog-cost-title',
    descId: 'blog-cost-desc',
  },
  {
    id: 'post-5',
    title: 'Canton Fair vs. Online Sourcing: Which Approach Works Better?',
    excerpt: 'Comparing the pros and cons of attending trade fairs versus using online platforms and agents for finding Chinese suppliers.',
    date: '2026-06-12',
    category: 'Sourcing Tips',
    imgId: 'blog-canton-img-m4n5o6',
    titleId: 'blog-canton-title',
    descId: 'blog-canton-desc',
  },
  {
    id: 'post-6',
    title: "Negotiating with Chinese Factories: Do's and Don'ts",
    excerpt: 'Cultural insights and practical tactics for getting better prices, terms, and cooperation from Chinese manufacturers.',
    date: '2026-06-05',
    category: 'Negotiation',
    imgId: 'blog-negotiate-img-p7q8r9',
    titleId: 'blog-negotiate-title',
    descId: 'blog-negotiate-desc',
  },
]

const Blog = () => {
  const pageRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [])

  return (
    <div ref={pageRef}>
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="blog-page-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Sourcing Blog
          </h1>
          <p id="blog-page-subtitle" className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            Practical guides, tips, and insights for buyers sourcing products from China.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow">
                <img
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}] [blog-page-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-primary bg-surface px-2 py-0.5 rounded">{post.category}</span>
                    <span className="flex items-center gap-1 text-xs text-text-muted">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                  <h2 id={post.titleId} className="font-semibold text-text-primary leading-snug">{post.title}</h2>
                  <p id={post.descId} className="mt-2 text-text-body text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-primary text-sm font-medium">
                    Read more <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary">Need Help with Your Sourcing Project?</h2>
          <p className="mt-4 text-text-body">
            Our team is ready to help you find the right suppliers in China.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Blog
