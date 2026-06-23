import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'

const posts = [
  {
    slug: 'how-to-verify-chinese-suppliers',
    title: 'How to Verify Chinese Suppliers: A Complete Guide for Importers',
    excerpt: 'Learn the essential steps to verify Chinese suppliers before placing an order — from business license checks to on-site factory audits.',
    date: 'June 15, 2026',
    readTime: '8 min read',
    category: 'Sourcing Guide',
    imgId: 'blog-verify-d1e2f3',
    featured: true,
  },
  {
    slug: 'understanding-china-quality-control',
    title: 'Understanding AQL Quality Control: What Every Importer Should Know',
    excerpt: 'A practical guide to AQL (Acceptable Quality Limit) sampling standards used in China — how they work, what levels to choose, and how to read inspection reports.',
    date: 'May 28, 2026',
    readTime: '6 min read',
    category: 'Quality Control',
    imgId: 'blog-aql-g4h5i6',
  },
  {
    slug: 'incoterms-for-china-sourcing',
    title: 'Incoterms Explained: FOB vs EXW vs CIF When Sourcing from China',
    excerpt: 'Choosing the right Incoterm can save you thousands. We break down the most common shipping terms and when to use each one.',
    date: 'May 10, 2026',
    readTime: '7 min read',
    category: 'Logistics',
    imgId: 'blog-incoterms-j7k8l9',
  },
  {
    slug: 'negotiate-with-chinese-factories',
    title: '7 Tips for Negotiating with Chinese Factories (Without Burning Bridges)',
    excerpt: 'Learn how to negotiate pricing, payment terms, and lead times with Chinese manufacturers while maintaining strong, long-term relationships.',
    date: 'April 22, 2026',
    readTime: '5 min read',
    category: 'Sourcing Strategy',
    imgId: 'blog-negotiate-m1n2o3',
  },
  {
    slug: 'avoid-sourcing-scams',
    title: '5 Common China Sourcing Scams and How to Avoid Them',
    excerpt: 'Bait-and-switch, fake certifications, disappearing suppliers — learn the red flags and protect your business from common sourcing fraud.',
    date: 'April 5, 2026',
    readTime: '6 min read',
    category: 'Sourcing Guide',
    imgId: 'blog-scams-p4q5r6',
  },
  {
    slug: 'shipping-from-china-costs',
    title: 'Shipping from China in 2026: Costs, Timelines, and Best Practices',
    excerpt: 'A current overview of sea, air, and rail freight options from China — with real cost benchmarks and tips to optimize your logistics spend.',
    date: 'March 18, 2026',
    readTime: '7 min read',
    category: 'Logistics',
    imgId: 'blog-shipping-s7t8u9',
  },
  {
    slug: 'moq-negotiation',
    title: 'How to Negotiate Lower MOQs with Chinese Manufacturers',
    excerpt: 'Small business? You don\'t need to order 10,000 units. Here are proven strategies to reduce minimum order quantities without losing credibility.',
    date: 'March 2, 2026',
    readTime: '5 min read',
    category: 'Sourcing Strategy',
    imgId: 'blog-moq-v1w2x3',
  },
  {
    slug: 'product-development-china',
    title: 'From Idea to Production: A Guide to Product Development in China',
    excerpt: 'How to prepare your product design for Chinese manufacturing — from CAD files and material specs to prototyping and tooling decisions.',
    date: 'February 14, 2026',
    readTime: '9 min read',
    category: 'Product Development',
    imgId: 'blog-dev-y4z5a6',
  },
  {
    slug: 'china-sourcing-trends-2026',
    title: 'China Sourcing Trends 2026: What Importers Need to Know',
    excerpt: 'Key trends shaping China sourcing this year — supply chain diversification, sustainability requirements, digital factory audits, and shifting cost structures.',
    date: 'January 20, 2026',
    readTime: '6 min read',
    category: 'Industry Insights',
    imgId: 'blog-trends-b7c8d9',
    featured: true,
  },
]

export default function Blog() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-900 text-white">
        <div className="container-wide py-16 md:py-20">
          <div className="max-w-3xl">
            <span className="text-accent-400 font-semibold text-sm uppercase tracking-wide">Blog</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-4 leading-tight">
              Insights &amp; Guides for Sourcing from China
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Practical knowledge, industry insights, and step-by-step guides to help you source smarter and avoid costly mistakes.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-text mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.filter((p) => p.featured).map((post) => (
              <Link key={post.slug} to={`/blog#${post.slug}`} className="group bg-surface border border-surface-border rounded-xl overflow-hidden hover:shadow-lg transition-all">
                <div className="aspect-[16/9] bg-surface-alt">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[blog-title-${post.slug}] [blog-cat-${post.slug}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-text-muted mb-3">
                    <span id={`blog-cat-${post.slug}`} className="bg-brand-50 text-brand-800 rounded-full px-3 py-1 font-semibold">{post.category}</span>
                    <span className="flex items-center gap-1"><Calendar size={12} />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
                  </div>
                  <h3 id={`blog-title-${post.slug}`} className="text-lg font-bold text-text group-hover:text-brand-800 transition-colors mb-2">{post.title}</h3>
                  <p className="text-text-secondary text-sm line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="section-padding bg-surface-alt">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-text mb-8">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.filter((p) => !p.featured).map((post) => (
              <Link key={post.slug} to={`/blog#${post.slug}`} className="group bg-white rounded-xl overflow-hidden border border-surface-border hover:shadow-md transition-all">
                <div className="aspect-[16/9] bg-surface-alt">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[blog-title-${post.slug}] [blog-cat-${post.slug}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-text-muted mb-2">
                    <span id={`blog-cat-${post.slug}`} className="bg-brand-50 text-brand-800 rounded-full px-2.5 py-0.5 font-semibold">{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 id={`blog-title-${post.slug}`} className="font-bold text-text group-hover:text-brand-800 transition-colors mb-2 text-sm leading-snug">{post.title}</h3>
                  <p className="text-text-secondary text-xs line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-800 text-white">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Have Questions About Sourcing from China?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Our sourcing experts are ready to answer your questions and help you get started.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-10 py-4 rounded-lg text-lg transition-colors"
          >
            Contact Our Team
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}