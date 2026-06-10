import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Clock, ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    id: 'how-to-verify-chinese-supplier',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'A step-by-step guide to checking business licenses, visiting factories, and confirming production capabilities before committing to a new supplier.',
    category: 'Supplier Verification',
    date: '2024-11-15',
    readTime: '8 min read',
  },
  {
    id: 'aql-inspection-guide',
    title: 'Understanding AQL Inspection Standards for Importers',
    excerpt: 'Learn how Acceptable Quality Level (AQL) sampling works, which levels to choose, and how to interpret inspection results for your China orders.',
    category: 'Quality Control',
    date: '2024-11-08',
    readTime: '6 min read',
  },
  {
    id: 'shipping-from-china-2024',
    title: 'Complete Guide to Shipping from China in 2024',
    excerpt: 'Sea freight vs air freight, Incoterms explained, customs documentation, and how to avoid common shipping mistakes when importing from China.',
    category: 'Logistics',
    date: '2024-10-28',
    readTime: '10 min read',
  },
  {
    id: 'negotiate-with-chinese-factories',
    title: '7 Tips for Negotiating with Chinese Factories',
    excerpt: 'Practical negotiation strategies that work in Chinese business culture — from pricing discussions to payment terms and relationship building.',
    category: 'Negotiation',
    date: '2024-10-15',
    readTime: '7 min read',
  },
  {
    id: 'avoid-sourcing-scams',
    title: 'How to Avoid Common China Sourcing Scams',
    excerpt: 'Red flags to watch for when dealing with Chinese suppliers online, and practical steps to protect your money and your order.',
    category: 'Risk Management',
    date: '2024-10-01',
    readTime: '5 min read',
  },
  {
    id: 'product-certification-guide',
    title: 'Product Certifications for Importing from China: CE, FDA, UL',
    excerpt: 'Which certifications you need for your target market, how to verify them, and what to ask your Chinese supplier about compliance.',
    category: 'Compliance',
    date: '2024-09-20',
    readTime: '9 min read',
  },
]

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 id="blog-page-title" className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
              China Sourcing Blog
            </h1>
            <p id="blog-page-subtitle" className="text-white/70 text-lg leading-relaxed">
              Practical guides, tips, and insights to help you source from China more effectively and avoid common pitfalls.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article key={post.id} className="rounded-xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow group">
                <div className="aspect-[16/9] relative">
                  <img
                    data-strk-img-id={`blog-${post.id}-img-r1s2`}
                    data-strk-img={`[blog-${post.id}-title] [blog-page-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">{post.category}</span>
                    <span className="flex items-center gap-1 text-xs text-neutral-500">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 id={`blog-${post.id}-title`} className="font-semibold text-neutral-800 text-base mb-2 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-neutral-600 text-sm leading-relaxed mb-3">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
                    Read more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">Need Help With Your Sourcing Project?</h2>
          <p className="text-neutral-600 text-lg mb-8">Our team is ready to help you find reliable suppliers and manage quality from China.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
