import { Link } from 'react-router-dom'
import { getPickedImageUrl } from '@/lib/img.js'
import { ArrowRight, Calendar, User, Clock } from 'lucide-react'

const articles = [
  {
    id: 'avoid-sourcing-pitfalls',
    title: '7 Common China Sourcing Pitfalls and How to Avoid Them',
    excerpt: 'Learn the most frequent mistakes international buyers make when sourcing from China and practical strategies to protect your business.',
    author: 'SSourcing Team',
    date: 'June 15, 2026',
    readTime: '8 min read',
    category: 'Sourcing Tips',
    imgId: 'blog-pitfalls-a1',
    titleId: 'blog-title-pitfalls',
    descId: 'blog-desc-pitfalls',
  },
  {
    id: 'factory-audit-checklist',
    title: 'Factory Audit Checklist: What to Look for When Visiting Chinese Suppliers',
    excerpt: 'A comprehensive guide to conducting effective factory audits, including key areas to inspect, questions to ask, and red flags to watch for.',
    author: 'SSourcing Team',
    date: 'May 28, 2026',
    readTime: '12 min read',
    category: 'Quality Control',
    imgId: 'blog-audit-checklist-b2',
    titleId: 'blog-title-audit',
    descId: 'blog-desc-audit',
  },
  {
    id: 'incoterms-guide',
    title: 'Incoterms Explained: FOB vs CIF vs EXW for China Sourcing',
    excerpt: 'Understand the key shipping terms used in international trade and choose the right Incoterm for your China sourcing transactions.',
    author: 'SSourcing Team',
    date: 'May 10, 2026',
    readTime: '10 min read',
    category: 'Shipping & Logistics',
    imgId: 'blog-incoterms-c3',
    titleId: 'blog-title-incoterms',
    descId: 'blog-desc-incoterms',
  },
  {
    id: 'negotiate-with-suppliers',
    title: 'How to Negotiate with Chinese Suppliers: A Practical Guide',
    excerpt: 'Learn effective negotiation strategies for pricing, payment terms, MOQs, and quality standards when working with Chinese manufacturers.',
    author: 'SSourcing Team',
    date: 'April 22, 2026',
    readTime: '9 min read',
    category: 'Sourcing Tips',
    imgId: 'blog-negotiate-d4',
    titleId: 'blog-title-negotiate',
    descId: 'blog-desc-negotiate',
  },
  {
    id: 'quality-control-standards',
    title: 'Understanding AQL Standards for Quality Control Inspections',
    excerpt: 'A practical explanation of Acceptable Quality Level (AQL) sampling, how to choose the right level, and how to interpret inspection results.',
    author: 'SSourcing Team',
    date: 'April 8, 2026',
    readTime: '7 min read',
    category: 'Quality Control',
    imgId: 'blog-aql-e5',
    titleId: 'blog-title-aql',
    descId: 'blog-desc-aql',
  },
  {
    id: 'shipping-from-china',
    title: 'Shipping from China: A Complete Guide for Importers',
    excerpt: 'Everything you need to know about shipping from China — freight options, customs documentation, duties, and how to avoid costly delays.',
    author: 'SSourcing Team',
    date: 'March 15, 2026',
    readTime: '11 min read',
    category: 'Shipping & Logistics',
    imgId: 'blog-shipping-guide-f6',
    titleId: 'blog-title-shipping',
    descId: 'blog-desc-shipping',
  },
  {
    id: 'sourcing-electronics',
    title: 'Sourcing Consumer Electronics from China: What You Need to Know',
    excerpt: 'Key considerations for sourcing electronics including certifications, quality testing, IP protection, and selecting the right manufacturing partners.',
    author: 'SSourcing Team',
    date: 'February 28, 2026',
    readTime: '10 min read',
    category: 'Industry Guides',
    imgId: 'blog-electronics-g7',
    titleId: 'blog-title-electronics',
    descId: 'blog-desc-electronics',
  },
  {
    id: 'china-trade-trends-2026',
    title: 'China Manufacturing Trends 2026: What Global Buyers Should Know',
    excerpt: 'An overview of key trends shaping China\'s manufacturing landscape including automation, sustainability, and shifting supply chain dynamics.',
    author: 'SSourcing Team',
    date: 'February 10, 2026',
    readTime: '8 min read',
    category: 'Industry Insights',
    imgId: 'blog-trends-h8',
    titleId: 'blog-title-trends',
    descId: 'blog-desc-trends',
  },
  {
    id: 'protect-ip',
    title: 'How to Protect Your Intellectual Property When Sourcing from China',
    excerpt: 'Practical steps to safeguard your designs, trademarks, and trade secrets when working with Chinese manufacturers.',
    author: 'SSourcing Team',
    date: 'January 20, 2026',
    readTime: '9 min read',
    category: 'Sourcing Tips',
    imgId: 'blog-ip-protection-i9',
    titleId: 'blog-title-ip',
    descId: 'blog-desc-ip',
  },
]

export default function Blog() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog</h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Insights, guides, and practical advice on China sourcing, quality control, shipping, and supplier management.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-background rounded-2xl overflow-hidden border border-border flex flex-col lg:flex-row">
            <div className="lg:w-1/2 aspect-[16/10] lg:aspect-auto bg-gray-100">
              {(() => { const fpImg = getPickedImageUrl(articles[0].imgId); return fpImg ? (
                <img
                  alt={articles[0].title}
                  src={fpImg}
                  className="w-full h-full object-cover"
                />
              ) : null })()}
            </div>
            <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <span className="text-primary font-semibold text-sm mb-3">{articles[0].category}</span>
              <h2 id={articles[0].titleId} className="text-2xl md:text-3xl font-bold text-text-primary mb-4">{articles[0].title}</h2>
              <p id={articles[0].descId} className="text-text-secondary leading-relaxed mb-6">{articles[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-text-muted mb-6">
                <span className="flex items-center gap-1.5"><User className="w-4 h-4" />{articles[0].author}</span>
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{articles[0].date}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{articles[0].readTime}</span>
              </div>
              <Link
                to={`/blog/${articles[0].id}`}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors"
              >
                Read Article <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-10">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article) => {
              const artImg = getPickedImageUrl(article.imgId)
              return (
              <div key={article.id} className="bg-white rounded-xl overflow-hidden border border-border hover:shadow-md transition-shadow">
                <div className="aspect-[16/10] bg-gray-100 overflow-hidden">
                  {artImg && (
                    <img
                      alt={article.title}
                      src={artImg}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  )}
                </div>
                <div className="p-6">
                  <span className="text-primary font-semibold text-xs">{article.category}</span>
                  <h3 id={article.titleId} className="font-semibold text-text-primary mt-2 mb-3 leading-snug">{article.title}</h3>
                  <p id={article.descId} className="text-text-secondary text-sm leading-relaxed mb-4">{article.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-text-muted">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{article.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{article.readTime}</span>
                  </div>
                </div>
              </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Stay Informed</h2>
          <p className="text-lg text-text-secondary mb-8">
            Get sourcing tips, industry updates, and practical guides delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
            <button
              type="submit"
              className="bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-light transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}