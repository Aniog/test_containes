import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Calendar } from 'lucide-react'

const posts = [
  {
    id: 'how-to-verify-chinese-supplier',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'A practical guide to conducting due diligence on Chinese manufacturers, including what documents to request, red flags to watch for, and how to conduct effective factory audits.',
    category: 'Supplier Verification',
    date: '2026-07-15',
    readTime: '8 min read',
  },
  {
    id: 'aql-inspection-guide',
    title: 'Understanding AQL Standards: A Buyer\'s Guide to Quality Inspection',
    excerpt: 'Learn how Acceptable Quality Level (AQL) sampling works, how to set appropriate inspection levels, and what to do when products fail inspection.',
    category: 'Quality Control',
    date: '2026-07-08',
    readTime: '6 min read',
  },
  {
    id: 'shipping-from-china-2026',
    title: 'Complete Guide to Shipping from China in 2026',
    excerpt: 'Everything you need to know about sea freight, air freight, and rail options from China, including current rates, transit times, and documentation requirements.',
    category: 'Logistics',
    date: '2026-06-28',
    readTime: '10 min read',
  },
  {
    id: 'negotiating-with-chinese-factories',
    title: '7 Proven Strategies for Negotiating with Chinese Factories',
    excerpt: 'Effective negotiation tactics that go beyond just asking for a lower price. Learn how to negotiate payment terms, MOQs, lead times, and quality guarantees.',
    category: 'Sourcing Tips',
    date: '2026-06-20',
    readTime: '7 min read',
  },
  {
    id: 'common-sourcing-mistakes',
    title: '10 Common Mistakes First-Time China Importers Make',
    excerpt: 'Avoid costly errors by learning from the most frequent mistakes we see new importers make, from skipping factory audits to ignoring intellectual property protection.',
    category: 'Getting Started',
    date: '2026-06-12',
    readTime: '9 min read',
  },
  {
    id: 'product-certification-guide',
    title: 'Product Certification Requirements: CE, FCC, FDA Explained',
    excerpt: 'A clear breakdown of major certification requirements for products entering the EU, US, and other markets, and how to ensure your Chinese supplier can meet them.',
    category: 'Compliance',
    date: '2026-06-05',
    readTime: '8 min read',
  },
]

export default function BlogPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-[#0f2a4a] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#e86a2e] font-semibold text-sm uppercase tracking-wider mb-3">Blog & Resources</p>
            <h1 id="blog-hero-title" className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              China Sourcing Insights
            </h1>
            <p id="blog-hero-subtitle" className="mt-5 text-lg text-neutral-200 leading-relaxed">
              Practical guides, industry updates, and expert advice to help you source from China more effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                <img
                  data-strk-img-id={`blog-${post.id}-img-7c3a`}
                  data-strk-img={`[blog-${post.id}-title] [blog-hero-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs bg-[#e86a2e]/10 text-[#e86a2e] font-medium px-2.5 py-1 rounded-full">{post.category}</span>
                    <span className="text-xs text-neutral-500">{post.readTime}</span>
                  </div>
                  <h2 id={`blog-${post.id}-title`} className="text-base font-semibold text-[#0f2a4a] mb-2 leading-snug">{post.title}</h2>
                  <p className="text-sm text-neutral-700 leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="flex items-center gap-2 mt-4 text-xs text-neutral-500">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2a4a] tracking-tight">
            Have a Sourcing Question?
          </h2>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            Our team is happy to answer your questions about sourcing from China. Reach out anytime.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center mt-8 bg-[#e86a2e] hover:bg-[#d05a20] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Contact Us <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
