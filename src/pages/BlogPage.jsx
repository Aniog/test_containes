import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react'

const blogPosts = [
  {
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'A step-by-step guide to checking business licenses, factory capabilities, and quality systems before committing to a supplier in China.',
    category: 'Supplier Verification',
    date: '2026-07-15',
    readTime: '8 min read',
    slug: 'verify-chinese-supplier',
  },
  {
    title: 'Understanding Quality Inspection Reports: What to Look For',
    excerpt: 'Learn how to read and interpret quality inspection reports so you can make informed decisions about your products before they ship.',
    category: 'Quality Control',
    date: '2026-07-08',
    readTime: '6 min read',
    slug: 'quality-inspection-reports',
  },
  {
    title: 'The True Cost of Sourcing from China: A Breakdown',
    excerpt: 'Beyond the unit price — understand all the costs involved in sourcing from China, including shipping, customs, and quality control.',
    category: 'Cost Analysis',
    date: '2026-06-28',
    readTime: '10 min read',
    slug: 'true-cost-sourcing-china',
  },
  {
    title: 'Common Mistakes First-Time Importers Make (And How to Avoid Them)',
    excerpt: 'Learn from the experiences of other buyers. We share the most common pitfalls and practical tips to avoid them.',
    category: 'Import Guide',
    date: '2026-06-15',
    readTime: '7 min read',
    slug: 'first-time-importer-mistakes',
  },
  {
    title: 'How to Request Samples from Chinese Suppliers',
    excerpt: 'Best practices for requesting, evaluating, and comparing samples from multiple suppliers before placing a production order.',
    category: 'Sampling',
    date: '2026-06-01',
    readTime: '5 min read',
    slug: 'request-samples-china',
  },
  {
    title: 'Shipping from China: Sea Freight vs Air Freight vs Express',
    excerpt: 'A comparison of shipping methods to help you choose the right option based on your budget, timeline, and product type.',
    category: 'Shipping',
    date: '2026-05-20',
    readTime: '8 min read',
    slug: 'shipping-from-china-comparison',
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
      <section className="bg-gradient-to-br from-primary to-primary/90 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-amber-400 uppercase tracking-wider">Blog</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Sourcing Insights & Guides</h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Practical advice, industry insights, and step-by-step guides to help you source from China
              with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow group"
              >
                {/* Image placeholder */}
                <img
                  data-strk-img-id={`blog-${post.slug}`}
                  data-strk-img={`[blog-title-${post.slug}] [blog-subtitle]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={post.title}
                  className="w-full aspect-[16/9] bg-secondary object-cover"
                />

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider bg-primary/5 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{post.excerpt}</p>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary text-sm font-medium hover:underline"
                  >
                    Read more
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Hidden text for image queries */}
        {blogPosts.map((post) => (
          <div key={post.slug} className="sr-only">
            <h3 id={`blog-title-${post.slug}`}>{post.title}</h3>
            <p id="blog-subtitle">China sourcing guide and tips</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Personalized Sourcing Advice?</h2>
            <p className="text-muted-foreground mb-8">
              Our team is ready to answer your questions and help you find the right suppliers in China.
            </p>
            <Link to="/contact" className="btn-primary">
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
