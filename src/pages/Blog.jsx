import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { Clock, ArrowRight } from 'lucide-react'

const posts = [
  {
    id: 'post-1',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    titleId: 'blog-post-1-title',
    descId: 'blog-post-1-desc',
    imgId: 'blog-post-1-img-a1b2c3',
    excerpt: 'A practical guide to checking business licenses, visiting factories, and using third-party verification services before committing to a new supplier.',
    category: 'Supplier Management',
    date: 'July 15, 2026',
    readTime: '7 min read',
  },
  {
    id: 'post-2',
    title: '5 Common Quality Issues When Sourcing from China (And How to Prevent Them)',
    titleId: 'blog-post-2-title',
    descId: 'blog-post-2-desc',
    imgId: 'blog-post-2-img-d4e5f6',
    excerpt: 'From material substitution to inconsistent finishing, learn the most frequent quality problems and the inspection protocols that catch them early.',
    category: 'Quality Control',
    date: 'July 8, 2026',
    readTime: '6 min read',
  },
  {
    id: 'post-3',
    title: 'Understanding Incoterms: FOB vs CIF vs DDP for China Imports',
    titleId: 'blog-post-3-title',
    descId: 'blog-post-3-desc',
    imgId: 'blog-post-3-img-g7h8i9',
    excerpt: 'A clear breakdown of shipping terms, who bears the risk at each stage, and which Incoterm works best for different order sizes and destinations.',
    category: 'Shipping & Logistics',
    date: 'June 28, 2026',
    readTime: '5 min read',
  },
  {
    id: 'post-4',
    title: 'How to Negotiate with Chinese Factories: A Buyer\'s Guide',
    titleId: 'blog-post-4-title',
    descId: 'blog-post-4-desc',
    imgId: 'blog-post-4-img-j1k2l3',
    excerpt: 'Effective negotiation strategies that go beyond price — including payment terms, lead times, tooling costs, and quality guarantees.',
    category: 'Negotiation',
    date: 'June 20, 2026',
    readTime: '8 min read',
  },
  {
    id: 'post-5',
    title: 'Pre-Shipment Inspection Checklist: What to Check Before Goods Leave China',
    titleId: 'blog-post-5-title',
    descId: 'blog-post-5-desc',
    imgId: 'blog-post-5-img-m4n5o6',
    excerpt: 'A comprehensive checklist covering visual inspection, functional testing, packaging verification, and documentation review for pre-shipment QC.',
    category: 'Quality Control',
    date: 'June 12, 2026',
    readTime: '6 min read',
  },
  {
    id: 'post-6',
    title: 'Canton Fair 2026: What Buyers Need to Know',
    titleId: 'blog-post-6-title',
    descId: 'blog-post-6-desc',
    imgId: 'blog-post-6-img-p7q8r9',
    excerpt: 'Dates, preparation tips, what to bring, how to evaluate suppliers at the fair, and follow-up strategies for serious buyers.',
    category: 'Industry News',
    date: 'June 5, 2026',
    readTime: '5 min read',
  },
]

const Blog = () => {
  const pageRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [])

  return (
    <div ref={pageRef}>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="blog-page-title" className="text-3xl md:text-5xl font-bold text-white mb-4">Sourcing Blog</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Practical guides, industry insights, and sourcing tips to help you buy smarter from China.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.id} className="bg-brand-light rounded-xl border border-brand-border overflow-hidden hover:shadow-md transition-shadow group">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}] [blog-page-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-brand-blue bg-blue-50 px-2.5 py-0.5 rounded-full">{post.category}</span>
                    <span className="flex items-center gap-1 text-xs text-brand-muted">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 id={post.titleId} className="text-base font-semibold text-brand-dark mb-2 line-clamp-2">{post.title}</h3>
                  <p id={post.descId} className="text-sm text-brand-muted line-clamp-2 mb-3">{post.excerpt}</p>
                  <span className="text-xs text-brand-muted">{post.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
